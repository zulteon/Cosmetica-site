import CookieConsent from "@/components/CookieConsent";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";

const trustPoints = [
  {
    title: "Diszkrét és nyugodt környezet",
    text: "A kezelés alatt végig figyelek arra, hogy biztonságban, kellemetlen feszengés nélkül érezd magad.",
  },
  {
    title: "Higiénikus munkafolyamat",
    text: "Tiszta eszközök, rendezett kezelőtér és átgondolt előkészítés segítik, hogy a gyantázás megbízható és kényelmes legyen.",
  },
  {
    title: "Kíméletes, alapos technika",
    text: "Nem siettetem a kezelést: a cél a szép, sima eredmény, minél kevesebb irritációval és felesleges kellemetlenséggel.",
  },
];

const steps = [
  "Röviden átbeszéljük, mely területeket szeretnéd kezelni, és mire érzékeny a bőröd.",
  "A bőrt előkészítem, majd precízen, nyugodt tempóban végzem el a gyantázást.",
  "A kezelés végén bőrnyugtató lezárást kapsz, és elmondom, mire figyelj otthon az irritáció elkerüléséhez.",
];

export default function WaxingPage() {
  return (
    <>
      <SiteHeader />

      <main className="service-page">
        <section className="service-hero waxing-hero" aria-labelledby="waxing-title">
          <div>
            <p className="section-kicker">Gyantázás</p>
            <h1 id="waxing-title">Sima bőr, diszkrét figyelem, biztos kezek</h1>
            <p>
              A gyantázás akkor jó élmény, ha nem csak gyors, hanem alapos, higiénikus
              és megnyugtató is. Nálam a kezelés tempója hozzád igazodik, a végeredmény
              pedig tiszta, ápolt és természetes érzetű.
            </p>
            <div className="service-actions">
              <Link className="primary-button" href="/#kapcsolat">
                Időpontkérés
              </Link>
              <Link className="text-link" href="/arlista">
                Árlista megtekintése
              </Link>
            </div>
          </div>
        </section>

        <section className="trust-section" aria-labelledby="trust-title">
          <div className="section-heading">
            <p className="section-kicker">Miért bízhatsz bennem?</p>
            <h2 id="trust-title">Apró részletek, amelyekből jó szolgáltatás lesz</h2>
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

        <section className="process-section" aria-labelledby="process-title">
          <div>
            <p className="section-kicker">Kezelés menete</p>
            <h2 id="process-title">Pontosan tudni fogod, mire számíthatsz</h2>
          </div>
          <ol className="process-list">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="service-cta" aria-labelledby="waxing-cta-title">
          <p className="section-kicker">Időpont</p>
          <h2 id="waxing-cta-title">Ha fontos a diszkréció és az alapos munka, várlak szeretettel.</h2>
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
