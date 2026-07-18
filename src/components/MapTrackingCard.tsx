"use client";

import { useRef } from "react";
import { pushDataLayerEvent } from "@/lib/dataLayer";

type MapTrackingCardProps = {
  address: string;
  location: string;
  mapsUrl: string;
  src: string;
  title: string;
};

export default function MapTrackingCard({ address, location, mapsUrl, src, title }: MapTrackingCardProps) {
  const hasTrackedCurrentClick = useRef(false);

  function trackMapClick() {
    if (hasTrackedCurrentClick.current) {
      return;
    }

    hasTrackedCurrentClick.current = true;

    pushDataLayerEvent({
      event: "map_click",
      location,
      page_type: "contact",
    });

    window.setTimeout(() => {
      hasTrackedCurrentClick.current = false;
    }, 500);
  }

  return (
    <article className="map-card">
      <h3>{location}</h3>
      <p>{address}</p>
      <div className="map-frame">
        <iframe title={title} src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <a
          className="map-click-target"
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${location} megnyitása Google Térképen`}
          onMouseDown={trackMapClick}
          onPointerDown={trackMapClick}
          onTouchStart={trackMapClick}
          onClick={trackMapClick}
        >
          <span>Megnyitás térképen</span>
        </a>
      </div>
    </article>
  );
}
