type DataLayerWindow = Window & {
  dataLayer?: unknown[];
};

export function pushDataLayerEvent(eventData: Record<string, unknown>) {
  if (typeof window === "undefined") {
    return;
  }

  const trackingWindow = window as DataLayerWindow;

  trackingWindow.dataLayer = trackingWindow.dataLayer || [];
  trackingWindow.dataLayer.push(eventData);
}
