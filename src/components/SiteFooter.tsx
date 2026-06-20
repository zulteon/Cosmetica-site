import Link from "next/link";
import ContactFormModal from "@/components/ContactFormModal";
import CookieSettingsButton from "@/components/CookieSettingsButton";
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
        <p>Anita Kozmetika</p>
        <address className="footer-nap">
          <span>{siteContact.primaryAddress}</span>
          <span>{siteContact.secondaryAddress}</span>
          <a className="phone-link" href={siteContact.phoneHref}>{siteContact.phone}</a>
          <span>{siteContact.email}</span>
          <span>{siteContact.openingHours}</span>
        </address>
        <div className="social-links" aria-label="Közösségi oldalak">
          <a className="social-icon-button" href={siteContact.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook oldal">
            <Image src="/facebook.webp" alt="" width={58} height={58} aria-hidden="true" />
          </a>
          <a className="social-icon-button" href={siteContact.messengerUrl} target="_blank" rel="noreferrer" aria-label="Messenger üzenet küldése">
            <Image src="/messenger.webp" alt="" width={58} height={58} aria-hidden="true" />
          </a>
          <ContactFormModal className="contact-form-trigger" />
        </div>
      </div>
      <nav aria-label="Lábléc navigáció">
        <Link href="/szolgaltatasaink/arckezeles">Arckezelés</Link>
        <Link href="/szolgaltatasaink/gyantazas">Gyantázás</Link>
        <Link href="/szolgaltatasaink/motivacios-mentorprogram">
          Motivációs Mentorprogram
        </Link>
        <Link href="/arlista">Árak</Link>
        <Link href="/adatvedelmi-tajekoztato">Adatvédelmi tájékoztató</Link>
        <Link href="/cookie-tajekoztato">Cookie tájékoztató</Link>
        {contactLink}
        <CookieSettingsButton className="footer-cookie-button" />
      </nav>
    </footer>
  );
}
