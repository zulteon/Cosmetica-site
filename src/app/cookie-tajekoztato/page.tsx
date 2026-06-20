import type { Metadata } from "next";
import CookieConsent from "@/components/CookieConsent";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Cookie tájékoztató | Anita Kozmetika Szolnok",
  description:
    "Az Anita Kozmetika Szolnok cookie tájékoztató sablonja, cookie kategóriákkal és hozzájárulás módosítási lehetőséggel.",
};

const cookieCategories = [
  {
    name: "Szükséges cookie-k",
    purpose: "A weboldal alapvető működése, cookie-hozzájárulás megjegyzése.",
    legalBasis: "Jogos érdek / szolgáltatás nyújtásához szükséges technikai működés.",
    provider: "Anita Kozmetika weboldal / TODO: használt CMP/cookie megoldás neve",
    retention: "TODO: adatmegőrzési idők",
    defaultState: "Mindig aktív",
  },
  {
    name: "Analitikai cookie-k",
    purpose: "Látogatottsági mérés, oldalhasználat elemzése, weboldal fejlesztése.",
    legalBasis: "Hozzájárulás.",
    provider: "Google Analytics / Google Tag Manager, ha bevezetésre kerül.",
    retention: "TODO: adatmegőrzési idők",
    defaultState: "Alapértelmezetten kikapcsolva",
  },
  {
    name: "Marketing / hirdetési cookie-k",
    purpose: "Hirdetések mérése, remarketing, kampányhatékonyság mérése.",
    legalBasis: "Hozzájárulás.",
    provider: "Google Ads / Meta vagy más szolgáltató, ha bevezetésre kerül.",
    retention: "TODO: adatmegőrzési idők",
    defaultState: "Alapértelmezetten kikapcsolva",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <SiteHeader />

      <main className="legal-page">
        <section className="legal-hero" aria-labelledby="cookie-title">
          <p className="section-kicker">Cookie-k</p>
          <h1 id="cookie-title">Cookie tájékoztató</h1>
          <p>
            Ez az oldal bemutatja, milyen cookie-kat használhat az Anita Kozmetika
            Szolnok weboldala. A dokumentum sablon, élesítés előtt adatvédelmi
            szakemberrel ellenőriztetni kell.
          </p>
        </section>

        <section className="legal-content">
          <article className="legal-card">
            <h2>Mik azok a cookie-k?</h2>
            <p>
              A cookie-k olyan kis adatfájlok, amelyeket a böngésző tárolhat a
              látogató eszközén. Segíthetnek a weboldal működtetésében, a beállítások
              megjegyzésében, a látogatottság mérésében vagy hirdetési célú
              funkciókban.
            </p>
          </article>

          <article className="legal-card">
            <h2>Szükséges cookie-k</h2>
            <p>
              A szükséges cookie-k a weboldal működéséhez szükségesek. Ilyen lehet
              például a cookie-hozzájárulás megjegyzése. Ezek nélkül a weboldal
              bizonyos alapfunkciói nem működnének megfelelően.
            </p>
          </article>

          <article className="legal-card">
            <h2>Analitikai cookie-k</h2>
            <p>
              Az analitikai cookie-k a látogatottság mérésére és a weboldal
              fejlesztésére szolgálhatnak. Ezek csak hozzájárulás alapján működhetnek.
              Személyes kapcsolati adat nem kerülhet analitikai event paraméterbe.
            </p>
          </article>

          <article className="legal-card">
            <h2>Marketing / hirdetési cookie-k</h2>
            <p>
              A marketing cookie-k hirdetési mérésekhez, remarketinghez vagy
              kampányhatékonyság méréséhez kapcsolódhatnak. Ezek csak a látogató
              előzetes hozzájárulása alapján működhetnek.
            </p>
          </article>

          <article className="legal-card">
            <h2>Google Consent Mode rövid magyarázata</h2>
            <p>
              A Google Consent Mode olyan technikai megoldás, amely a Google mérési
              és hirdetési címkéinek működését a látogató hozzájárulási állapotához
              igazíthatja. Bevezetése esetén a konkrét beállításokat és Google
              hivatkozásokat dokumentálni kell.
            </p>
            <p className="todo-note">TODO: Google Analytics / Google Ads adatkezelési hivatkozások</p>
          </article>

          <article className="legal-card">
            <h2>Hozzájárulás módosításának módja</h2>
            <p>
              A látogató bármikor módosíthatja a hozzájárulását. A szükséges cookie-k
              mindig aktívak, az analitikai és marketing célú cookie-k csak
              hozzájárulás alapján működhetnek.
            </p>
            <CookieSettingsButton className="inline-settings-button" />
          </article>

          <article className="legal-card legal-table-card">
            <h2>Cookie kategóriák táblázata</h2>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Kategória neve</th>
                    <th>Cél</th>
                    <th>Jogalap</th>
                    <th>Szolgáltató</th>
                    <th>Megőrzési idő</th>
                    <th>Alapértelmezett állapot</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieCategories.map((category) => (
                    <tr key={category.name}>
                      <th scope="row">{category.name}</th>
                      <td>{category.purpose}</td>
                      <td>{category.legalBasis}</td>
                      <td>{category.provider}</td>
                      <td>{category.retention}</td>
                      <td>{category.defaultState}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="legal-card">
            <h2>TODO-k véglegesítés előtt</h2>
            <ul className="todo-list">
              <li>TODO: használt CMP/cookie megoldás neve</li>
              <li>TODO: Google Analytics / Google Ads adatkezelési hivatkozások</li>
              <li>TODO: adatmegőrzési idők</li>
            </ul>
          </article>
        </section>
      </main>

      <SiteFooter />
      <CookieConsent />
    </>
  );
}
