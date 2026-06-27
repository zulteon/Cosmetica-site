"use client";

import Link from "next/link";
import { FormEvent, useId, useState } from "react";
import { siteContact } from "@/lib/site";

type ContactFormModalProps = {
  className?: string;
};

export default function ContactFormModal({ className }: ContactFormModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(true);
  const formId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const body = [
      `Név: ${name || "-"}`,
      `Email: ${email}`,
      `Telefonszám: ${phone || "-"}`,
      "",
      "Üzenet:",
      message || "-",
      "",
      `Hírlevél és ajánlatok hozzájárulás: ${subscribed ? "igen" : "nem"}`,
    ].join("\n");

    // Személyes adatokat tilos trackingbe küldeni: név, e-mail, telefonszám és üzenetszöveg nem kerülhet GA4/GTM event paraméterbe.
    window.location.href = `mailto:${siteContact.email}?subject=${encodeURIComponent(
      "Kapcsolatfelvétel - Cherry Kozmetika",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <button className={className ?? "contact-form-trigger"} type="button" onClick={() => setIsOpen(true)}>
        Üzenj nekünk!
      </button>

      {isOpen ? (
        <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby={`${formId}-title`}>
          <div className="contact-modal-panel">
            <div className="contact-modal-heading">
              <div>
                <p className="section-kicker">Kapcsolat</p>
                <h2 id={`${formId}-title`}>Üzenj nekünk!</h2>
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
                  Feliratkozom a hírlevélre, és hozzájárulok ahhoz, hogy részemre
                  szépségápolási tippeket, akciókat és egyedi ajánlatokat küldjenek.
                  Hozzájárulok ahhoz is, hogy ajánlatokkal megkeressenek.
                </span>
              </label>
              <p className="form-privacy-note">
                Az űrlap elküldésével Ön tudomásul veszi, hogy a megadott adatokat
                kapcsolatfelvétel és időpont-egyeztetés céljából kezeljük. Részletek:{" "}
                <Link href="/adatvedelmi-tajekoztato">Adatkezelési tájékoztató</Link>.
              </p>
              <div className="contact-form-actions">
                <button type="submit">Küldés</button>
                <button type="button" onClick={() => setIsOpen(false)}>
                  Mégsem
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

