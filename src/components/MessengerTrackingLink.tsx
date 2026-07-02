"use client";

import Image from "next/image";
import { siteContact } from "@/lib/site";

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

export default function MessengerTrackingLink() {
  function trackMessengerClick() {
    const trackingWindow = window as DataLayerWindow;

    trackingWindow.dataLayer = trackingWindow.dataLayer || [];
    trackingWindow.dataLayer.push({
      event: "messenger_click",
    });
  }

  return (
    <a
      className="social-icon-button"
      href={siteContact.messengerUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Messenger üzenet küldése"
      onClick={trackMessengerClick}
    >
      <Image src="/messenger.webp" alt="" width={52} height={52} aria-hidden="true" />
    </a>
  );
}
