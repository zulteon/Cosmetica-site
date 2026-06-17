import CookieConsent from "@/components/CookieConsent";

const treatments = [
  {
    title: "Arckezelések",
    text: "Személyre szabott hidratáló, nyugtató és ragyogást adó kezelések.",
  },
  {
    title: "Bőrápolási tanácsadás",
    text: "Otthoni rutin finomhangolása letisztult, bőrbarát termékekkel.",
  },
  {
    title: "Relax szépségápolás",
    text: "Csendes, nyugodt kezelések, ahol a bőröd és te is fellélegezhetsz.",
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
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#fooldal" aria-label="Cherry Kozmetika főoldal">
          <span className="brand-mark">CK</span>
          <span>
            <strong>Cherry Kozmetika</strong>
            <small>beauty studio</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Fő navigáció">
          <a href="#fooldal">Főoldal</a>
          <a href="#kapcsolat">Kapcsolat</a>
        </nav>
      </header>

      <main id="fooldal">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">A bőröd megérdemli a csendes törődést</p>
            <h1 id="hero-title">Természetes szépség, nyugodt ragyogás</h1>
            <p className="hero-lead">
              Finom, bőrkímélő kozmetikai kezelések azoknak, akik a letisztult
              ápolást és a csendes feltöltődést keresik.
            </p>
            <div className="hero-actions" aria-label="Fő műveletek">
              <a className="primary-button" href="#kapcsolat">
                Időpontkérés
              </a>
              <a className="text-link" href="tel:+36301234567">
                +36 30 123 4567
              </a>
            </div>
          </div>
        </section>

        <section className="intro-section" aria-labelledby="intro-title">
          <p className="section-kicker intro-label">Kozmetika</p>
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
          <p className="section-kicker about-label">Bemutatkozás</p>
          <div className="about-copy">
            <h2 id="about-title">Szeretettel üdvözöllek!</h2>
            <div className="about-text">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="about-signature">Várlak szeretettel: Anita</p>
            </div>
          </div>
        </section>

        <section className="services-section" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-kicker">Szolgáltatások</p>
            <h2 id="services-title">A mindennapi bőrápolás elegáns oldala</h2>
          </div>
          <div className="treatment-grid">
            {treatments.map((item) => (
              <article className="treatment-card" key={item.title}>
                <span className="blossom-dot" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
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
              <a href="tel:+36301234567">+36 30 123 4567</a>
              <a href="mailto:hello@cherrykozmetika.hu">hello@cherrykozmetika.hu</a>
              <span>Budapest, Cseresznyevirág utca 12.</span>
              <span>Hétfő - Péntek: 09:00 - 18:00</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Cherry Kozmetika</p>
        <nav aria-label="Lábléc navigáció">
          <a href="#fooldal">Főoldal</a>
          <a href="#kapcsolat">Kapcsolat</a>
        </nav>
      </footer>
      <CookieConsent />
    </>
  );
}
