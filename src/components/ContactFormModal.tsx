"use client";

import Link from "next/link";
import { FormEvent, useId, useState } from "react";
import { pushDataLayerEvent } from "@/lib/dataLayer";

type ContactFormModalProps = {
  className?: string;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function ContactFormModal({ className }: ContactFormModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(true);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const formId = useId();

  function openModal() {
    setIsOpen(true);
    setSubmitStatus("idle");
    setStatusMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const selectedService = String(formData.get("service") ?? "").trim();

    setSubmitStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          newsletter: subscribed,
          service: selectedService || "egyeb",
        }),
      });

      if (!response.ok) {
        const errorResponse = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(errorResponse?.message ?? "Az üzenet küldése most nem sikerült.");
      }

      // Személyes adatokat tilos trackingbe küldeni: név, e-mail, telefonszám és üzenetszöveg nem kerülhet GA4/GTM event paraméterbe.
      pushDataLayerEvent({
        event: "generate_lead",
        lead_method: "form",
        service_category: selectedService || "egyeb",
        page_type: "contact",
      });

      form.reset();
      setSubscribed(true);
      setSubmitStatus("success");
      setStatusMessage("Köszönjük, az üzenetet elküldtük. Hamarosan jelentkezünk.");
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Az üzenet küldése most nem sikerült.");
    }
  }

  return (
    <>
      <button className={className ?? "contact-form-trigger"} type="button" onClick={openModal}>
        Üzenj nekünk bátran
      </button>

      {isOpen ? (
        <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby={`${formId}-title`}>
          <div className="contact-modal-panel">
            <div className="contact-modal-heading">
              <div>
                <p className="section-kicker">Kapcsolat</p>
                <h2 id={`${formId}-title`}>Üzenj nekünk bátran</h2>
              </div>
              <button className="modal-close-button" type="button" aria-label="Bezárás" onClick={() => setIsOpen(false)}>
                X
              </button>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Név</span>
                <input autoComplete="name" name="name" type="text" />
              </label>
              <label>
                <span>Email *</span>
                <input autoComplete="email" name="email" required type="email" />
              </label>
              <label>
                <span>Telefonszám</span>
                <input autoComplete="tel" name="phone" type="tel" />
              </label>
              <label>
                <span>Üzenet</span>
                <textarea name="message" rows={5} />
              </label>
              <label className="newsletter-checkbox">
                <input
                  checked={subscribed}
                  name="newsletter"
                  type="checkbox"
                  onChange={(event) => setSubscribed(event.target.checked)}
                />
                <span>
                  Feliratkozom a hírlevélre, és hozzájárulok ahhoz, hogy részemre szépségápolási tippeket,
                  akciókat és egyedi ajánlatokat küldjenek. Hozzájárulok ahhoz is, hogy ajánlatokkal
                  megkeressenek.
                </span>
              </label>
              <div className="contact-form-actions">
                <button type="submit" disabled={submitStatus === "submitting"}>
                  {submitStatus === "submitting" ? "Küldés..." : "Küldés"}
                </button>
                <button type="button" onClick={() => setIsOpen(false)}>
                  Mégsem
                </button>
              </div>
              {statusMessage ? (
                <p className={`form-status-message ${submitStatus === "error" ? "error" : ""}`} role="status">
                  {statusMessage}
                </p>
              ) : null}
              <p className="form-privacy-note">
                Az űrlap elküldésével Ön tudomásul veszi, hogy a megadott adatokat kapcsolatfelvétel és
                időpont-egyeztetés céljából kezeljük. Részletek:{" "}
                <Link href="/adatvedelmi-tajekoztato">Adatkezelési tájékoztató</Link>.
              </p>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
