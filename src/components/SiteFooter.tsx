import Link from "next/link";
import ContactFormModal from "@/components/ContactFormModal";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import MessengerTrackingLink from "@/components/MessengerTrackingLink";
import PhoneTrackingLink from "@/components/PhoneTrackingLink";
import { siteContact } from "@/lib/site";
import Image from "next/image";

type SiteFooterProps = {
  contactHref?: string;
};

export default function SiteFooter({ contactHref = "/#kapcsolat" }: SiteFooterProps) {
  const contactLink =
    contactHref.startsWith("/") ? (
      <Link href={contactHref}>Kapcsolat</Link>
    ) : (
      <a href={contactHref}>Kapcsolat</a>
    );

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <p>Cherry Kozmetika</p>
        <address className="footer-nap">
          <span>{siteContact.primaryAddress}</span>
          <PhoneTrackingLink className="phone-link" href={siteContact.phoneHref}>
            {siteContact.phone}
          </PhoneTrackingLink>
          <span>{siteContact.email}</span>
          <span>{siteContact.openingHours}</span>
        </address>
        <div className="social-links" aria-label="Közösségi oldalak">
          <a className="social-icon-button" href={siteContact.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook oldal">
            <Image src="/facebook.webp" alt="" width={52} height={52} aria-hidden="true" />
          </a>
          <MessengerTrackingLink />
          <ContactFormModal className="contact-form-trigger" />
        </div>
      </div>
      <nav aria-label="Lábléc navigáció">
        {contactLink}
        <Link href="/arlista">Árak</Link>
        <Link href="/szolgaltatasaink/arckezeles">Arckezelés</Link>
        <Link href="/szolgaltatasaink/gyantazas">Gyantázás</Link>
        <Link href="/szolgaltatasaink/motivacios-mentorprogram">
          Motivációs Mentorprogram
        </Link>
        <Link href="/adatvedelmi-tajekoztato">Adatvédelmi tájékoztató</Link>
        <Link href="/cookie-tajekoztato">Cookie tájékoztató</Link>
        <CookieSettingsButton className="footer-settings-button" />
      </nav>
    </footer>
  );
}

