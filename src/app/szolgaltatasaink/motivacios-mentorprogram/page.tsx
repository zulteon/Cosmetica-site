import CookieConsent from "@/components/CookieConsent";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

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
          <p className="section-kicker">Motivációs Mentorprogram</p>
          <h1 id="mentor-title">Életmód és Motivációs Mentorprogram</h1>
          <p>
            Személyes támogatás, reális célok és gyakorlatias útmutatás azoknak,
            akik szeretnének könnyebben elindulni vagy új lendületet kapni.
          </p>
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
