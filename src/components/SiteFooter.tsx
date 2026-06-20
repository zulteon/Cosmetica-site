import Link from "next/link";
import CookieSettingsButton from "@/components/CookieSettingsButton";

const facebookUrl = "https://www.facebook.com/profile.php?id=61556739532689&locale=hu_HU";
const messengerUrl = "https://m.me/61556739532689";

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
        <div className="social-links" aria-label="Közösségi oldalak">
          <a href={facebookUrl} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={messengerUrl} target="_blank" rel="noreferrer">
            Messenger üzenet
          </a>
        </div>
      </div>
      <nav aria-label="Lábléc navigáció">
        <Link href="/szolgaltatasaink/arckezeles">Arckezelés</Link>
        <Link href="/szolgaltatasaink/gyantazas">Gyantázás</Link>
        <Link href="/szolgaltatasaink/motivacios-mentorprogram">
          Motivációs Mentorprogram
        </Link>
        <Link href="/arlista">Árlista</Link>
        <Link href="/adatvedelmi-tajekoztato">Adatvédelmi tájékoztató</Link>
        <Link href="/cookie-tajekoztato">Cookie tájékoztató</Link>
        {contactLink}
        <CookieSettingsButton className="footer-cookie-button" />
      </nav>
    </footer>
  );
}
