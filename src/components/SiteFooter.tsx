import Link from "next/link";

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
      <p>Cherry Kozmetika</p>
      <nav aria-label="Lábléc navigáció">
        <Link href="/szolgaltatasaink/arckezeles">Arckezelés</Link>
        <Link href="/szolgaltatasaink/gyantazas">Gyantázás</Link>
        <Link href="/szolgaltatasaink/motivacios-mentorprogram">
          Motivációs Mentorprogram
        </Link>
        <Link href="/arlista">Árlista</Link>
        {contactLink}
      </nav>
    </footer>
  );
}
