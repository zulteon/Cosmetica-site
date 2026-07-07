"use client";

import Image from "next/image";
import { siteContact } from "@/lib/site";
import { pushDataLayerEvent } from "@/lib/dataLayer";

export default function MessengerTrackingLink() {
  function trackMessengerClick() {
    pushDataLayerEvent({
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
