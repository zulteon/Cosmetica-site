import CookieConsent from "@/components/CookieConsent";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Motivációs Mentorprogram",
  description:
    "Életmód és motivációs mentorprogram a Cherry Kozmetikában: konzultációk, SOS motiváció és kombinált szépségápolási csomag.",
};

const mentorPackages = [
  {
    name: '"Első Lépés" Konzultáció',
    time: "60 perc",
    price: "9 900 Ft",
    description:
      "Személyes vagy online beszélgetés, ahol átvilágítjuk a jelenlegi szokásaidat, kitűzzük a reális célokat, és átbeszéljük a kalóriaszámolás, valamint az okos bevásárlás gyakorlati alapjait.",
  },
  {
    name: '"SOS Motiváció" Mentorálás',
    time: "30 perc",
    price: "5 500 Ft",
    description:
      "Rövidebb, pörgős alkalom a már elindult vendégeknek. Ideális heti ellenőrzésre, elakadások kezelésére, vagy lelki elsősegélyre, ha épp feladnád a diétát.",
  },
  {
    name: "Kombinált „Könnyű Test & Ragyogó Bőr” Prémium Csomag",
    time: "90 perc",
    price: "16 900 Ft",
    description:
      "A legnépszerűbb és legkomplexebb szolgáltatásom. Egy 60 perces kényeztető, bőrfeszesítő Belnatur arckezelés, amely alatt/után 30 percben átbeszéljük a heti életmód-céljaidat. Szépülj és könnyülj egyszerre!",
  },
  {
    name: "4 Alkalmas Egyéni Mentor Bérlet",
    time: "4 x 60 perc",
    price: "36 000 Ft",
    note: "39 600 Ft helyett",
    description:
      "Egy havi intenzív, heti rendszerességű támogatás. Végigfogom a kezed az úton, számonkérhetőség és folyamatos mentális háttérország a tartós sikerért.",
  },
];

export default function MotivationalMentorPage() {
  return (
    <>
      <SiteHeader />

      <main className="mentor-page">
        <section className="mentor-hero" aria-labelledby="mentor-title">
          <div className="mentor-hero-copy">
            <p className="section-kicker">Motivációs Mentorprogram</p>
            <h1 id="mentor-title">Életmód és Motivációs Mentorprogram</h1>
            <p>
              Személyes támogatás, reális célok és gyakorlatias útmutatás azoknak,
              akik szeretnének könnyebben elindulni vagy új lendületet kapni.
            </p>
          </div>
          <figure className="mentor-side-image mentor-side-image-top">
            <Image
              src="/mentor_program_kepek/1000013408.webp"
              alt="Motivációs mentorprogram előrehaladást bemutató összeállítás"
              width={1200}
              height={900}
              className="mentor-inline-image"
              priority
            />
          </figure>
        </section>

        <section className="mentor-gallery-section" aria-labelledby="mentor-gallery-title">
          <div className="mentor-gallery-heading">
            <p className="section-kicker">Folyamat</p>
            <h2 id="mentor-gallery-title">Látható változás, emberi tempóban</h2>
            <p>
              A mentorprogram nem gyors ígéret, hanem követhető, személyes támogatás.
              A képek valódi folyamatokat mutatnak; az eredmények egyénenként eltérhetnek.
            </p>
          </div>
          <figure className="mentor-side-image">
            <Image
              src="/mentor_program_kepek/1000013410.webp"
              alt="Életmód mentorprogram több alkalmas folyamat képes összefoglalója"
              width={1200}
              height={900}
              className="mentor-inline-image"
            />
          </figure>
        </section>

        <section className="mentor-pricing-section" aria-labelledby="mentor-pricing-title">
          <div className="mentor-pricing-heading">
            <p className="section-kicker">Árak</p>
            <h2 id="mentor-pricing-title">Választható mentor alkalmak</h2>
          </div>

          <div className="mentor-card-grid">
            {mentorPackages.map((item) => (
              <article className="mentor-card" key={item.name}>
                <div>
                  <span className="blossom-dot small" aria-hidden="true" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="mentor-card-meta">
                  <span>{item.time}</span>
                  <strong>{item.price}</strong>
                  {item.note ? <small>{item.note}</small> : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
      <CookieConsent />
    </>
  );
}
