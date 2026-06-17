"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "cherry-kozmetika-cookie-consent";
const CHANGE_EVENT = "cherry-kozmetika-cookie-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY) === "accepted";
}

function getServerSnapshot() {
  return true;
}

export default function CookieConsent() {
  const hasAccepted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  function acceptCookies() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  if (hasAccepted) {
    return null;
  }

  return (
    <aside className="cookie-consent" aria-label="Cookie tájékoztató">
      <p>
        Az oldal sütiket használ az alapvető működéshez és a felhasználói élmény
        javításához.
      </p>
      <button type="button" onClick={acceptCookies}>
        Elfogadom
      </button>
    </aside>
  );
}
