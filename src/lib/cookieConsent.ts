export const COOKIE_STORAGE_KEY = "cherry-kozmetika-cookie-consent";
export const COOKIE_CHANGE_EVENT = "cherry-kozmetika-cookie-change";
export const COOKIE_SETTINGS_EVENT = "cherry-kozmetika-cookie-settings";

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
