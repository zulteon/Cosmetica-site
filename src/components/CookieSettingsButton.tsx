"use client";

import { COOKIE_SETTINGS_EVENT } from "@/lib/cookieConsent";

type CookieSettingsButtonProps = {
  className?: string;
};

export default function CookieSettingsButton({ className }: CookieSettingsButtonProps) {
  function openCookieSettings() {
    window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
  }

  return (
    <button className={className} type="button" onClick={openCookieSettings}>
      Cookie beállítások
    </button>
  );
}
