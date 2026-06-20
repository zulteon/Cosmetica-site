import CookieConsent from "@/components/CookieConsent";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { siteContact } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gyantázás Szolnokon | Diszkrét, higiénikus női gyantázás",
  description:
    "Diszkrét és higiénikus gyantázás Szolnokon az Anita Kozmetikában. Női gyantázás, arcgyanta, lábgyanta, kar-, hónalj- és bikinivonal kezelések. Kérj időpontot.",
};

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

const waxingServices = [
  "arcgyanta, szemöldök, bajusz és áll terület",
  "kar-, hónalj-, láb- és hátgyanta",
  "bikini, fazon és intim gyantázás diszkréten",
  "testgyantázás hölgyeknek, előzetes egyeztetéssel",
];

const beforeTips = [
  "A szőr legyen elég hosszú ahhoz, hogy a gyanta meg tudja fogni, általában néhány milliméter már elegendő.",
  "Kezelés előtt ne használj olajos testápolót az érintett területen.",
  "Ha sérült, napégett vagy irritált a bőröd, inkább egyeztessünk új időpontot.",
];

const afterTips = [
  "A gyantázás után 24 óráig kerüld a szoláriumot, szaunát és az erős izzadással járó edzést.",
  "Ne dörzsöld az érintett bőrfelületet, és válassz kényelmes, nem szoros ruhát.",
  "A bőrnyugtatás és a rendszeres, kíméletes ápolás segít az irritáció csökkentésében.",
];

const faqItems = [
  {
    question: "Fájdalmas a gyantázás?",
    answer:
      "A gyantázás járhat kellemetlenséggel, de nyugodt tempóval, megfelelő előkészítéssel és figyelmes technikával sokkal kezelhetőbb élmény.",
  },
  {
    question: "Milyen gyakran érdemes gyantáztatni?",
    answer:
      "Ez egyéni szőrnövekedéstől függ, de sok vendégnél 3-5 hetente ideális az ismétlés.",
  },
  {
    question: "Intim gyantázásnál mire számíthatok?",
    answer:
      "Diszkrét, higiénikus és nyugodt környezetre. Mindent előre átbeszélünk, és csak olyan kezelés történik, amiben komfortosan érzed magad.",
  },
];

export default function WaxingPage() {
  return (
    <>
      <SiteHeader />

      <main className="service-page">
        <section className="service-hero waxing-hero" aria-labelledby="waxing-title">
          <div className="service-hero-copy">
            <p className="section-kicker">Gyantázás Szolnok</p>
            <h1 id="waxing-title">Gyantázás Szolnokon – diszkrét, higiénikus női gyantázás</h1>
            <p>
              A gyantázás akkor jó élmény, ha nem csak gyors, hanem alapos, higiénikus
              és megnyugtató is. Nálam a kezelés tempója hozzád igazodik, a végeredmény
              pedig tiszta, ápolt és természetes érzetű.
            </p>
            <div className="service-actions">
              <Link className="primary-button" href="/#kapcsolat">
                Időpontkérés
              </Link>
              <Link className="text-link" href="/arlista#gyantazas">
                Gyantázás árak
              </Link>
            </div>
          </div>
          <div className="service-hero-image-wrap">
            <Image
              src="/szolgaltasok/gyantazas.webp"
              alt="Gyantázás Anita Kozmetika szalonban"
              width={900}
              height={700}
              className="service-hero-image"
              priority
            />
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

        <section className="service-detail-section" aria-labelledby="waxing-services-title">
          <div>
            <p className="section-kicker">Szolgáltatások</p>
            <h2 id="waxing-services-title">Női gyantázás több testtájra, előzetes egyeztetéssel</h2>
            <p>
              A gyantázás Szolnokon az Anita Kozmetikában diszkrét környezetben,
              higiénikusan és alaposan történik. Ha bizonytalan vagy, telefonon vagy
              üzenetben is át tudjuk beszélni, melyik kezelésre van szükséged.
            </p>
          </div>
          <ul className="detail-list">
            {waxingServices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="process-section" aria-labelledby="process-title">
          <div>
            <p className="section-kicker">Kezelés menete</p>
            <h2 id="process-title">Pontosan tudni fogod, mire számíthatsz</h2>
          </div>
          <ol className="process-list">
            <li>Röviden átbeszéljük, mely területeket szeretnéd kezelni, és mire érzékeny a bőröd.</li>
            <li>A bőrt előkészítem, majd precízen, nyugodt tempóban végzem el a gyantázást.</li>
            <li>A kezelés végén bőrnyugtató lezárást kapsz, és elmondom, mire figyelj otthon az irritáció elkerüléséhez.</li>
          </ol>
        </section>

        <section className="service-info-grid" aria-label="Gyantázás előtti és utáni tanácsok">
          <article>
            <p className="section-kicker">Gyantázás előtt</p>
            <h2>Így készülj a kezelésre</h2>
            <ul className="detail-list">
              {beforeTips.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <p className="section-kicker">Gyantázás után</p>
            <h2>Így ápold a bőröd</h2>
            <ul className="detail-list">
              {afterTips.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="service-detail-section price-snippet" aria-labelledby="waxing-price-title">
          <div>
            <p className="section-kicker">Árlista részlet</p>
            <h2 id="waxing-price-title">Gyantázás árak</h2>
            <p>
              Az árak testtájanként eltérnek. A teljes gyantázás árlista külön
              hash-címmel elérhető az árak oldalon.
            </p>
          </div>
          <Link className="primary-button" href="/arlista#gyantazas">
            Gyantázás árak megtekintése
          </Link>
        </section>

        <section className="service-faq-section" aria-labelledby="waxing-faq-title">
          <div className="section-heading">
            <p className="section-kicker">GYIK</p>
            <h2 id="waxing-faq-title">Gyakori kérdések gyantázás előtt</h2>
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

        <section className="service-cta" aria-labelledby="waxing-cta-title">
          <p className="section-kicker">Időpont</p>
          <h2 id="waxing-cta-title">Ha fontos a diszkréció és az alapos munka, várlak szeretettel.</h2>
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
