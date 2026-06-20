import CookieConsent from "@/components/CookieConsent";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { siteContact } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arckezelés Szolnokon | Tisztító, hidratáló és anti-aging kezelések",
  description:
    "Személyre szabott arckezelések Szolnokon: tisztító, hidratáló, nyugtató és anti-aging kezelések bőrtípushoz igazítva. Kérj időpontot Anita Kozmetikába.",
};

const trustPoints = [
  {
    title: "Személyre szabott bőrápolás",
    text: "Minden kezelés előtt figyelembe veszem a bőröd aktuális állapotát, érzékenységét és azt, milyen eredményt szeretnél elérni.",
  },
  {
    title: "Prémium Belnatur termékek",
    text: "A kezelések során professzionális Belnatur hatóanyagokkal dolgozom, hogy a bőröd ne csak szebbnek, hanem nyugodtabbnak és ápoltabbnak is érződjön.",
  },
  {
    title: "Tiszta, biztonságos környezet",
    text: "A higiénia, a nyugodt tempó és az odafigyelés alap. Nálam nem futószalag-kezelést kapsz, hanem valódi törődést.",
  },
];

const facialTypes = [
  "tisztító és tini kezelés problémás, mitesszeres bőrre",
  "hidratáló és nyugtató arckezelések vízhiányos, érzékeny bőrre",
  "anti-aging kezelés érettebb, tónusát vesztett arcbőrre",
  "ultrahangos és gépi kiegészítő kezelések hatóanyag-bevitellel",
];

const beforeTips = [
  "A kezelés előtti napon lehetőleg ne használj erős hámlasztót vagy irritáló aktív hatóanyagot.",
  "Ha új gyógyszert, bőrgyógyászati kezelést vagy friss irritációt tapasztalsz, jelezd időpontkéréskor.",
  "Smink nélkül is érkezhetsz, de a kezelés letisztítással indul, így ez nem feltétel.",
];

const afterTips = [
  "A kezelés után figyelj a fényvédelemre, különösen tisztító vagy aktívabb kezelések esetén.",
  "Aznap érdemes kerülni a szaunát, szoláriumot és az erős edzést.",
  "Otthon a megbeszélt, bőrtípushoz illő rutinnal tudod meghosszabbítani az eredményt.",
];

const faqItems = [
  {
    question: "Milyen arckezelést válasszak első alkalommal?",
    answer:
      "Nem kell előre pontosan tudnod. Az első alkalom elején átbeszéljük a bőröd állapotát és a célodat, majd ehhez igazítjuk a kezelést.",
  },
  {
    question: "Mennyi ideig tart egy arckezelés?",
    answer:
      "A rövidebb kezelések körülbelül 30-40 percesek, a komplexebb hidratáló, tisztító vagy anti-aging kezelések általában 70-90 percet vesznek igénybe.",
  },
  {
    question: "Érzékeny bőrrel is kérhetek kezelést?",
    answer:
      "Igen, de fontos, hogy jelezd az érzékenységet, allergiát vagy aktuális irritációt. Így kíméletesebb, nyugtatóbb irányban tudunk haladni.",
  },
];

export default function FacialTreatmentPage() {
  return (
    <>
      <SiteHeader />

      <main className="service-page">
        <section className="service-hero facial-hero" aria-labelledby="facial-title">
          <div className="service-hero-copy">
            <p className="section-kicker">Arckezelés Szolnok</p>
            <h1 id="facial-title">Arckezelés Szolnokon – személyre szabott kozmetikai kezelések</h1>
            <p>
              Egy jó arckezelés nem csak szépít, hanem megnyugtatja, feltölti és
              újra egyensúlyba hozza a bőrt. Nálam minden kezelés személyre szabott:
              a cél az, hogy a bőröd tisztább, puhább és ragyogóbb legyen.
            </p>
            <div className="service-actions">
              <Link className="primary-button" href="/#kapcsolat">
                Időpontkérés
              </Link>
              <Link className="text-link" href="/arlista#arckezeles">
                Arckezelés árak
              </Link>
            </div>
          </div>
          <div className="service-hero-image-wrap">
            <Image
              src="/szolgaltasok/arckezeles.webp"
              alt="Arckezelés Anita Kozmetika szalonban"
              width={900}
              height={700}
              className="service-hero-image"
              priority
            />
          </div>
        </section>

        <section className="trust-section" aria-labelledby="facial-trust-title">
          <div className="section-heading">
            <p className="section-kicker">Miért érdemes nálam kezdened?</p>
            <h2 id="facial-trust-title">A bőröd állapotához igazított, figyelmes kezelés</h2>
          </div>
          <div className="trust-grid">
            {trustPoints.map((item) => (
              <article className="trust-card" key={item.title}>
                <span className="blossom-dot small" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-detail-section" aria-labelledby="facial-types-title">
          <div>
            <p className="section-kicker">Kinek ajánlott?</p>
            <h2 id="facial-types-title">Arckezelés, amikor a bőrödnek több kell egy otthoni rutinnál</h2>
            <p>
              Az arckezelés Szolnokon akkor jó választás, ha szeretnél tisztább,
              hidratáltabb, frissebb vagy nyugodtabb arcbőrt, és fontos számodra,
              hogy a kezelés bőrtípushoz igazodjon.
            </p>
          </div>
          <ul className="detail-list">
            {facialTypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="process-section" aria-labelledby="facial-process-title">
          <div>
            <p className="section-kicker">Kezelés menete</p>
            <h2 id="facial-process-title">Nyugodt folyamat, érthető lépésekkel</h2>
          </div>
          <ol className="process-list">
            <li>Átbeszéljük, mire van most szüksége a bőrödnek: hidratálásra, tisztításra, nyugtatásra vagy látványosabb anti-aging támogatásra.</li>
            <li>Letisztítással és előkészítéssel indulunk, majd a választott kezeléshez illő hatóanyagokat, masszázst, pakolást vagy gépi kiegészítést alkalmazok.</li>
            <li>A kezelés végén bőrtípusodnak megfelelő záróápolást kapsz, és megbeszéljük, hogyan támogasd otthon a tartósabb eredményt.</li>
          </ol>
        </section>

        <section className="service-info-grid" aria-label="Arckezelés előtti és utáni tanácsok">
          <article>
            <p className="section-kicker">Kezelés előtt</p>
            <h2>Mire figyelj érkezés előtt?</h2>
            <ul className="detail-list">
              {beforeTips.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <p className="section-kicker">Kezelés után</p>
            <h2>Így óvd az eredményt</h2>
            <ul className="detail-list">
              {afterTips.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="service-detail-section price-snippet" aria-labelledby="facial-price-title">
          <div>
            <p className="section-kicker">Árlista részlet</p>
            <h2 id="facial-price-title">Arckezelés árak</h2>
            <p>
              Az arckezelések ára a kezelés hosszától és tartalmától függ. A teljes
              lista az árak oldalon található, közvetlenül az arckezelések kategóriánál.
            </p>
          </div>
          <Link className="primary-button" href="/arlista#arckezeles">
            Arckezelés árak megtekintése
          </Link>
        </section>

        <section className="service-faq-section" aria-labelledby="facial-faq-title">
          <div className="section-heading">
            <p className="section-kicker">GYIK</p>
            <h2 id="facial-faq-title">Gyakori kérdések arckezelés előtt</h2>
          </div>
          <div className="service-faq-grid">
            {faqItems.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-cta" aria-labelledby="facial-cta-title">
          <p className="section-kicker">Ragyogás</p>
          <h2 id="facial-cta-title">Ha szeretnéd, hogy a bőröd újra fellélegezzen, várlak szeretettel.</h2>
          <div className="service-actions centered">
            <Link className="primary-button" href="/#kapcsolat">
              Időpontot kérek
            </Link>
            <a className="text-link phone-link" href={siteContact.phoneHref}>
              {siteContact.phone}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
      <CookieConsent />
    </>
  );
}
