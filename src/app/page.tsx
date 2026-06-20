import CookieConsent from "@/components/CookieConsent";
import ContactFormModal from "@/components/ContactFormModal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { serviceLinks, siteContact } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anita Kozmetika Szolnok | Arckezelés, gyantázás, szempilla",
  description:
    "Anita Kozmetika Szolnokon: arckezelés, gyantázás, szempilla- és szemöldökszolgáltatások barátságos, igényes környezetben. Kérj időpontot online vagy telefonon.",
};

const treatments = [
  {
    title: "Arckezelések",
    text: "Személyre szabott hidratáló, tisztító és anti-aging arckezelés Szolnokon.",
    icon: "/pictograms/arckezeles.webp",
    href: serviceLinks.facial,
  },
  {
    title: "Gyantázás",
    text: "Diszkrét, higiénikus női gyantázás nyugodt, figyelmes környezetben.",
    icon: "/pictograms/bortanacsadas.webp",
    href: serviceLinks.waxing,
  },
  {
    title: "Szempilla / szemöldök",
    text: "Festés, henna styling, lifting és laminálás a ragyogó tekintetért.",
    icon: "/pictograms/relaxArc.webp",
    href: "/arlista#szempilla-szemoldok",
  },
  {
    title: "Árlista",
    text: "Átlátható árak arckezeléshez, gyantázáshoz és kozmetikai szolgáltatásokhoz.",
    href: serviceLinks.pricing,
  },
  {
    title: "Kapcsolat / időpontkérés",
    text: "Kérj időpontot telefonon, Messengeren vagy az online kontakt űrlapon.",
    href: "#kapcsolat",
  },
];

const aboutParagraphs = [
  "Anita vagyok, 2018-ban végzett szakvizsgázott kozmetikus.",
  "A hivatásom a szenvedélyem: imádom a látványos átalakulásokat, a problémás bőrök szakszerű, alapos tisztítását, valamint a tinédzserkori bőrproblémák hatékony kezelését.",
  "Vendégeimet prémium kategóriás Belnatur termékekkel kényeztetem, amelyek az anti-aging kezelések során garantálják a látványos és tartós eredményeket.",
  "A bőrápolás mellett a tekintet szépítésére is nagy hangsúlyt fektetek: szempilla- és szemöldökfestéssel, henna stylinggal, valamint modern szempilla liftinggel és szemöldök laminálással varázsolom ragyogóvá a megjelenésedet.",
  "Emellett hölgyek számára teljes testgyantázást (beleértve a teljes intim gyantát is) végzek, maximális diszkrécióval és odafigyeléssel.",
  "Szakmámban rendkívül fontosnak tartom a fejlődést, ezért folyamatosan képzem magam, hogy mindig a legfrissebb trendeket és a legbiztonságosabb technikákat hozhassam el neked.",
  "Szakadj ki a mindennapokból egy patyolattiszta, biztonságos környezetben, és szépülj nálam teljes nyugalomban!",
];

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteContact.name,
    url: "TODO: saját domain URL",
    telephone: siteContact.phone,
    email: siteContact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Boldog Sándor István krt. 40.",
      postalCode: "5000",
      addressLocality: "Szolnok",
      addressCountry: "HU",
    },
    openingHoursSpecification: "TODO: pontos nyitvatartás napi bontásban",
    priceRange: "TODO: priceRange",
    areaServed: "Szolnok",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kozmetikai szolgáltatások",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Arckezelés Szolnok" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gyantázás Szolnok" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Szempilla és szemöldök szolgáltatások" } },
      ],
    },
  };

  return (
    <>
      <SiteHeader contactHref="#kapcsolat" />

      <main id="fooldal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">Kozmetikus Szolnok szívéhez közel</p>
            <h1 id="hero-title">Anita Kozmetika Szolnokon</h1>
            <p className="hero-lead">
              Finom, bőrkímélő kozmetikai kezelések, arckezelés Szolnokon,
              gyantázás és szempilla-szemöldök szolgáltatások azoknak, akik a
              letisztult ápolást és a csendes feltöltődést keresik.
            </p>
            <div className="hero-actions" aria-label="Fő műveletek">
              <a className="primary-button" href="#kapcsolat">
                Időpontkérés
              </a>
              <a className="text-link phone-link" href={siteContact.phoneHref}>
                {siteContact.phone}
              </a>
            </div>
          </div>
        </section>

        <section className="intro-section" aria-labelledby="intro-title">
          <p className="section-kicker intro-label">Kozmetika Szolnok</p>
          <div className="section-copy">
            <h2 id="intro-title">Puha fények, tiszta felületek, figyelmes kezelés</h2>
            <p className="intro-motto">
              A cél egy olyan szépségszalon hangulat, ahol a vendég már belépéskor
              érzi a nyugalmat: fehér alapok, halvány rózsaszín részletek,
              természetes textúrák és személyes törődés.
            </p>
          </div>
        </section>

        <section className="about-section" aria-labelledby="about-title">
          <div className="about-copy">
            <p className="section-kicker about-label">Bemutatkozás</p>
            <h2 id="about-title">Szeretettel üdvözöllek!</h2>
            <div className="about-text">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="about-signature">Várlak szeretettel: Anita</p>
            </div>
          </div>
          <div className="about-image-wrap">
            <Image
              src="/bemutatkozo.webp"
              alt="Anita kozmetikus bemutatkozó portréja"
              width={900}
              height={1100}
              className="about-image"
            />
          </div>
        </section>

        <section className="services-section" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-kicker">Szolgáltatások</p>
            <h2 id="services-title">A mindennapi bőrápolás elegáns oldala</h2>
          </div>
          <div className="treatment-grid">
            {treatments.map((item) => (
              <Link className="treatment-card" href={item.href} key={item.title}>
                {item.icon ? (
                  <Image
                    src={item.icon}
                    alt=""
                    width={76}
                    height={76}
                    className="treatment-icon"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="blossom-dot" aria-hidden="true" />
                )}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="contact-section" id="kapcsolat" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div>
              <p className="section-kicker">Kapcsolat</p>
              <h2 id="contact-title">Kérj időpontot egy nyugodt kezelésre</h2>
            </div>
            <div className="contact-list" aria-label="Kapcsolati adatok">
              {/* Tracking/form szabály: név, e-mail, telefonszám és üzenetszöveg nem kerülhet GA4/GTM event paraméterbe. */}
              <a className="phone-link" href={siteContact.phoneHref}>{siteContact.phone}</a>
              <span>{siteContact.email}</span>
              <span>{siteContact.primaryAddress}</span>
              <span>{siteContact.secondaryAddress}</span>
              <span>{siteContact.openingHours}</span>
              <span>Google Maps beágyazás: TODO</span>
              <div className="contact-social-links" aria-label="Online kapcsolat">
                <a href={siteContact.facebookUrl} target="_blank" rel="noreferrer">
                  Facebook oldal
                </a>
                <a href={siteContact.messengerUrl} target="_blank" rel="noreferrer">
                  Messenger üzenet küldése
                </a>
                <ContactFormModal className="contact-form-trigger" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter contactHref="#kapcsolat" />
      <CookieConsent />
    </>
  );
}
