"use client";

import { pushDataLayerEvent } from "@/lib/dataLayer";

type MapTrackingCardProps = {
  address: string;
  location: string;
  src: string;
  title: string;
};

export default function MapTrackingCard({ address, location, src, title }: MapTrackingCardProps) {
  function trackMapClick() {
    pushDataLayerEvent({
      event: "map_click",
      location,
      page_type: "contact",
    });
  }

  return (
    <article className="map-card" onPointerDownCapture={trackMapClick}>
      <h3>{location}</h3>
      <p>{address}</p>
      <iframe title={title} src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </article>
  );
}
