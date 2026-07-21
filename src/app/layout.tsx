import type { Metadata } from "next";
import Script from "next/script";
import GoogleTagManagerLoader from "@/components/GoogleTagManagerLoader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Cherry Kozmetika Szolnok",
  description:
    "Cherry Kozmetika Szolnok: arckezelés, gyantázás, szempilla- és szemöldökszolgáltatások.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body>
        {children}
        <GoogleTagManagerLoader />
        <Script
          id="google-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              function mapConsent(consent){
                return {
                  analytics_storage: consent && consent.analytics ? 'granted' : 'denied',
                  ad_storage: consent && consent.marketing ? 'granted' : 'denied',
                  ad_user_data: consent && consent.marketing ? 'granted' : 'denied',
                  ad_personalization: consent && consent.marketing ? 'granted' : 'denied'
                };
              }
              function readStoredConsent(){
                try {
                  var rawConsent =
                    localStorage.getItem('cherry-kozmetika-cookie-consent') ||
                    localStorage.getItem('anita-kozmetika-cookie-consent');

                  if (!rawConsent) return null;
                  if (rawConsent === 'accepted') return { analytics: true, marketing: true };

                  var parsedConsent = JSON.parse(rawConsent);
                  return {
                    analytics: Boolean(parsedConsent.analytics),
                    marketing: Boolean(parsedConsent.marketing)
                  };
                } catch (error) {
                  return null;
                }
              }
              var storedConsent = readStoredConsent();
              gtag('consent', 'default', {
                ad_storage: 'denied',
                analytics_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500
              });
              if (storedConsent) {
                gtag('consent', 'update', mapConsent(storedConsent));
                window.dataLayer.push({
                  event: 'cookie_consent_update',
                  cookieConsent: {
                    analytics: storedConsent.analytics,
                    marketing: storedConsent.marketing
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}

