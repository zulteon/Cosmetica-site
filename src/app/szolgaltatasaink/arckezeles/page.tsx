import CookieConsent from "@/components/CookieConsent";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";

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

const steps = [
  "Átbeszéljük, mire van most szüksége a bőrödnek: hidratálásra, tisztításra, nyugtatásra vagy látványosabb anti-aging támogatásra.",
  "Letisztítással és előkészítéssel indulunk, majd a választott kezeléshez illő hatóanyagokat, masszázst, pakolást vagy gépi kiegészítést alkalmazok.",
  "A kezelés végén bőrtípusodnak megfelelő záróápolást kapsz, és megbeszéljük, hogyan támogasd otthon a tartósabb eredményt.",
];

export default function FacialTreatmentPage() {
  return (
    <>
      <SiteHeader />

      <main className="service-page">
        <section className="service-hero facial-hero" aria-labelledby="facial-title">
          <div>
            <p className="section-kicker">Arckezelés</p>
            <h1 id="facial-title">Tudatos bőrápolás, láthatóan frissebb arcbőr</h1>
            <p>
              Egy jó arckezelés nem csak szépít, hanem megnyugtatja, feltölti és
              újra egyensúlyba hozza a bőrt. Nálam minden kezelés személyre szabott:
              a cél az, hogy a bőröd tisztább, puhább és ragyogóbb legyen.
            </p>
            <div className="service-actions">
              <Link className="primary-button" href="/#kapcsolat">
                Időpontkérés
              </Link>
              <Link className="text-link" href="/arlista">
                Árak megtekintése
              </Link>
            </div>
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

        <section className="process-section" aria-labelledby="facial-process-title">
          <div>
            <p className="section-kicker">Kezelés menete</p>
            <h2 id="facial-process-title">Nyugodt folyamat, érthető lépésekkel</h2>
          </div>
          <ol className="process-list">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="service-cta" aria-labelledby="facial-cta-title">
          <p className="section-kicker">Ragyogás</p>
          <h2 id="facial-cta-title">Ha szeretnéd, hogy a bőröd újra fellélegezzen, várlak szeretettel.</h2>
          <Link className="primary-button" href="/#kapcsolat">
            Kapcsolatfelvétel
          </Link>
        </section>
      </main>

      <SiteFooter />
      <CookieConsent />
    </>
  );
}
