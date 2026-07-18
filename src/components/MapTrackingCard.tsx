"use client";

import { pushDataLayerEvent } from "@/lib/dataLayer";

type MapTrackingCardProps = {
  address: string;
  location: string;
  mapsUrl: string;
  src: string;
  title: string;
};

export default function MapTrackingCard({ address, location, mapsUrl, src, title }: MapTrackingCardProps) {
  function trackMapClick() {
    pushDataLayerEvent({
      event: "map_click",
      location,
      page_type: "contact",
    });
  }

  return (
    <article className="map-card">
      <h3>{location}</h3>
      <p>{address}</p>
      <a
        className="map-click-target"
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${location} megnyitása Google Térképen`}
        onClick={trackMapClick}
      >
        <iframe title={title} src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </a>
    </article>
  );
}
