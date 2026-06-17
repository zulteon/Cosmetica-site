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
      <Link className="brand" href="/" aria-label="Cherry Kozmetika főoldal">
        <span className="brand-mark">CK</span>
        <span>
          <strong>Cherry Kozmetika</strong>
          <small>beauty studio</small>
        </span>
      </Link>
      <nav className="main-nav" aria-label="Fő navigáció">
        <Link href="/">Főoldal</Link>
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
        <Link href="/arlista">Árlista</Link>
        {contactLink}
      </nav>
    </header>
  );
}
