"use client";

import type { ReactNode } from "react";
import { pushDataLayerEvent } from "@/lib/dataLayer";

type PhoneTrackingLinkProps = {
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  href: string;
};

export default function PhoneTrackingLink({
  ariaLabel,
  children,
  className,
  href,
}: PhoneTrackingLinkProps) {
  function trackPhoneClick() {
    pushDataLayerEvent({
      event: "phone_click",
      lead_method: "phone",
      page_type: "contact",
    });
  }

  return (
    <a aria-label={ariaLabel} className={className} href={href} onClick={trackPhoneClick}>
      {children}
    </a>
  );
}
