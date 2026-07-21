"use client";

import { useEffect } from "react";
import { COOKIE_CHANGE_EVENT, COOKIE_STORAGE_KEY, LEGACY_COOKIE_STORAGE_KEY } from "@/lib/cookieConsent";
import { GTM_ID } from "@/lib/tracking";

type StoredConsent = {
  analytics: boolean;
  marketing: boolean;
};

type GtmWindow = Window & {
  dataLayer?: unknown[];
  __cherryGtmLoaded?: boolean;
};

function readStoredConsent(): StoredConsent | null {
  const rawConsent =
    localStorage.getItem(COOKIE_STORAGE_KEY) ?? localStorage.getItem(LEGACY_COOKIE_STORAGE_KEY);

  if (!rawConsent) {
    return null;
  }

  if (rawConsent === "accepted") {
    return {
      analytics: true,
      marketing: true,
    };
  }

  try {
    const parsedConsent = JSON.parse(rawConsent) as Partial<StoredConsent>;

    return {
      analytics: Boolean(parsedConsent.analytics),
      marketing: Boolean(parsedConsent.marketing),
    };
  } catch {
    return null;
  }
}

function loadGoogleTagManager() {
  const gtmWindow = window as GtmWindow;

  if (gtmWindow.__cherryGtmLoaded || document.getElementById("google-tag-manager")) {
    return;
  }

  gtmWindow.__cherryGtmLoaded = true;
  gtmWindow.dataLayer = gtmWindow.dataLayer || [];
  gtmWindow.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const firstScript = document.getElementsByTagName("script")[0];
  const gtmScript = document.createElement("script");
  gtmScript.async = true;
  gtmScript.id = "google-tag-manager";
  gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  firstScript.parentNode?.insertBefore(gtmScript, firstScript);
}

export default function GoogleTagManagerLoader() {
  useEffect(() => {
    function loadGtmWithConsent() {
      const storedConsent = readStoredConsent();

      if (storedConsent?.analytics || storedConsent?.marketing) {
        loadGoogleTagManager();
      }
    }

    loadGtmWithConsent();
    window.addEventListener(COOKIE_CHANGE_EVENT, loadGtmWithConsent);
    window.addEventListener("storage", loadGtmWithConsent);

    return () => {
      window.removeEventListener(COOKIE_CHANGE_EVENT, loadGtmWithConsent);
      window.removeEventListener("storage", loadGtmWithConsent);
    };
  }, []);

  return null;
}
