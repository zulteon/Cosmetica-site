export const COOKIE_STORAGE_KEY = "anita-kozmetika-cookie-consent";
export const COOKIE_CHANGE_EVENT = "anita-kozmetika-cookie-change";
export const COOKIE_SETTINGS_EVENT = "anita-kozmetika-cookie-settings";

export type CookieConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export const defaultCookieConsent: CookieConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  updatedAt: "",
};
