import Link from "next/link";

type SiteHeaderProps = {
  contactHref?: string;
};

export default function SiteHeader({ contactHref = "/#kapcsolat" }: SiteHeaderProps) {
  const contactLink =
    contactHref.startsWith("/") ? (
      <Link href={contactHref}>Kapcsolat</Link>
    ) : (
      <a href={contactHref}>Kapcsolat</a>
    );

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Anita Kozmetika főoldal">
        <span className="brand-mark">AK</span>
        <span>
          <strong>Anita Kozmetika</strong>
          <small>Szolnok</small>
        </span>
      </Link>
      <nav className="main-nav" aria-label="Fő navigáció">
        <details className="nav-dropdown">
          <summary>Szolgáltatásaink</summary>
          <div className="dropdown-menu">
            <Link href="/szolgaltatasaink/arckezeles">Arckezelés</Link>
            <Link href="/szolgaltatasaink/gyantazas">Gyantázás</Link>
            <Link href="/szolgaltatasaink/motivacios-mentorprogram">
              Motivációs Mentorprogram
            </Link>
          </div>
        </details>
        <Link href="/arlista">Árak</Link>
        {contactLink}
      </nav>
    </header>
  );
}
