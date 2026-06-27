"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_CHANGE_EVENT,
  COOKIE_SETTINGS_EVENT,
  COOKIE_STORAGE_KEY,
  type CookieConsentState,
  defaultCookieConsent,
} from "@/lib/cookieConsent";

function parseConsent(value: string | null): CookieConsentState | null {
  if (!value) {
    return null;
  }

  if (value === "accepted") {
    return {
      necessary: true,
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
    };
  }

  try {
    const parsed = JSON.parse(value) as Partial<CookieConsentState>;

    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return null;
  }
}

type GoogleConsentWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

function updateGoogleConsent(consent: Pick<CookieConsentState, "analytics" | "marketing">) {
  const googleWindow = window as GoogleConsentWindow;

  googleWindow.dataLayer = googleWindow.dataLayer || [];
  googleWindow.gtag =
    googleWindow.gtag ||
    function gtag(...args: unknown[]) {
      googleWindow.dataLayer?.push(args);
    };

  googleWindow.gtag("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
  });
}

function saveConsent(consent: Omit<CookieConsentState, "updatedAt">) {
  const nextConsent: CookieConsentState = {
    ...consent,
    necessary: true,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(nextConsent));
  updateGoogleConsent(nextConsent);
  window.dispatchEvent(new Event(COOKIE_CHANGE_EVENT));
}

export default function CookieConsent() {
  const [hasChoice, setHasChoice] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(defaultCookieConsent.analytics);
  const [marketing, setMarketing] = useState(defaultCookieConsent.marketing);

  useEffect(() => {
    function syncConsentState() {
      const storedConsent = parseConsent(localStorage.getItem(COOKIE_STORAGE_KEY));

      setHasChoice(Boolean(storedConsent));
      setAnalytics(Boolean(storedConsent?.analytics));
      setMarketing(Boolean(storedConsent?.marketing));

      if (storedConsent) {
        updateGoogleConsent(storedConsent);
      }
    }

    function openStoredSettings() {
      syncConsentState();
      setIsSettingsOpen(true);
    }

    syncConsentState();
    window.addEventListener("storage", syncConsentState);
    window.addEventListener(COOKIE_CHANGE_EVENT, syncConsentState);
    window.addEventListener(COOKIE_SETTINGS_EVENT, openStoredSettings);

    return () => {
      window.removeEventListener("storage", syncConsentState);
      window.removeEventListener(COOKIE_CHANGE_EVENT, syncConsentState);
      window.removeEventListener(COOKIE_SETTINGS_EVENT, openStoredSettings);
    };
  }, []);

  if (hasChoice && !isSettingsOpen) {
    return null;
  }

  function acceptAll() {
    saveConsent({ necessary: true, analytics: true, marketing: true });
    setHasChoice(true);
    setIsSettingsOpen(false);
  }

  function rejectOptional() {
    saveConsent({ necessary: true, analytics: false, marketing: false });
    setAnalytics(false);
    setMarketing(false);
    setHasChoice(true);
    setIsSettingsOpen(false);
  }

  function saveCustomSettings() {
    saveConsent({ necessary: true, analytics, marketing });
    setHasChoice(true);
    setIsSettingsOpen(false);
  }

  function openSettings() {
    setIsSettingsOpen(true);
  }

  return (
    <aside className="cookie-consent" aria-label="Cookie tájékoztató">
      <div className="cookie-copy">
        <p>
          A weboldal cookie-kat (sütiket) használ a weboldal működése, a
          felhasználói élmény növelése és statisztikai célokból. A weboldal által
          használt cookie-k személyes adatkezeléséhez hozzájárulok. További
          információt az Adatkezelési Tájékoztatóban talál.
        </p>
        <div className="cookie-links">
          <Link href="/adatvedelmi-tajekoztato">Adatvédelmi tájékoztató</Link>
          <Link href="/cookie-tajekoztato">Cookie tájékoztató</Link>
        </div>
        {isSettingsOpen ? (
          <div className="cookie-settings" aria-label="Cookie kategóriák">
            <label>
              <input checked disabled type="checkbox" />
              <span>Szükséges cookie-k: mindig aktívak</span>
            </label>
            <label>
              <input
                checked={analytics}
                type="checkbox"
                onChange={(event) => setAnalytics(event.target.checked)}
              />
              <span>Analitikai cookie-k</span>
            </label>
            <label>
              <input
                checked={marketing}
                type="checkbox"
                onChange={(event) => setMarketing(event.target.checked)}
              />
              <span>Marketing cookie-k</span>
            </label>
          </div>
        ) : null}
      </div>
      <div className="cookie-actions">
        <button type="button" onClick={acceptAll}>
          Elfogadom
        </button>
        <button type="button" onClick={rejectOptional}>
          Elutasítom
        </button>
        {isSettingsOpen ? (
          <button type="button" onClick={saveCustomSettings}>
            Mentés
          </button>
        ) : (
          <button type="button" onClick={openSettings}>
            Beállítások
          </button>
        )}
      </div>
      {/* Trackingnél tilos személyes adatot küldeni: név, e-mail, telefonszám és üzenetszöveg nem kerülhet GA4/GTM event paraméterbe. */}
    </aside>
  );
}
