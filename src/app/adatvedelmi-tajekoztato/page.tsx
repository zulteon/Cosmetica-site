import type { Metadata } from "next";
import CookieConsent from "@/components/CookieConsent";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató | Anita Kozmetika Szolnok",
  description:
    "Az Anita Kozmetika Szolnok adatvédelmi tájékoztató sablonja, TODO adatokkal és élesítés előtti jogi ellenőrzési jelzéssel.",
};

const controllerTodos = [
  "TODO: adatkezelő pontos neve",
  "TODO: székhely / telephely",
  "TODO: e-mail",
  "TODO: telefonszám",
];

const processedData = [
  "kapcsolatfelvételhez megadott név",
  "e-mail cím",
  "telefonszám",
  "üzenet tartalma",
  "időponttal, szolgáltatással kapcsolatos egyeztetési adatok",
  "weboldal használatával összefüggő technikai adatok és cookie-hozzájárulási beállítások",
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />

      <main className="legal-page">
        <section className="legal-hero" aria-labelledby="privacy-title">
          <p className="section-kicker">Adatvédelem</p>
          <h1 id="privacy-title">Adatvédelmi tájékoztató</h1>
          <p>
            Ez a tájékoztató sablon az Anita Kozmetika Szolnok weboldalához készült.
            A dokumentum nem minősül jogi tanácsadásnak, véglegesítés előtt
            adatvédelmi szakemberrel vagy jogásszal ellenőriztetni kell.
          </p>
        </section>

        <section className="legal-content">
          <article className="legal-card">
            <h2>Bevezetés</h2>
            <p>
              A tájékoztató célja, hogy közérthetően bemutassa, milyen személyes
              adatokat kezelhet a weboldal és a kozmetikai szolgáltatás igénybevétele
              során az adatkezelő, milyen célból, milyen jogalapon, meddig, és milyen
              jogok illetik meg az érintetteket.
            </p>
            <p>
              A weboldal használata, kapcsolatfelvétel vagy időpontkérés során a
              látogató személyes adatokat adhat meg. Az adatkezelés alapelvei:
              jogszerűség, tisztességesség, átláthatóság, célhoz kötöttség,
              adattakarékosság, pontosság, korlátozott tárolhatóság és biztonság.
            </p>
          </article>

          <article className="legal-card">
            <h2>Az adatkezelő adatai</h2>
            <ul className="todo-list">
              {controllerTodos.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="legal-card">
            <h2>A kezelt adatok köre</h2>
            <p>A weboldal és a szolgáltatás használata során különösen az alábbi adatok kezelése merülhet fel:</p>
            <ul>
              {processedData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="legal-card">
            <h2>Kapcsolatfelvétel / időpontkérés adatkezelése</h2>
            <p>
              Kapcsolatfelvétel vagy időpontkérés esetén az adatkezelés célja a
              megkeresés megválaszolása, az időpont egyeztetése, a szolgáltatás
              előkészítése, valamint az esetleges későbbi egyeztetés biztosítása.
            </p>
            <p>
              A kezelt adatok jellemzően: név, e-mail cím, telefonszám, választott
              szolgáltatás, időponttal kapcsolatos információk és az üzenetben
              önkéntesen megadott egyéb adatok.
            </p>
            <p>
              Jogalap: szerződés előkészítése vagy teljesítése, illetve bizonyos
              esetekben az érintett hozzájárulása vagy az adatkezelő jogos érdeke.
              A pontos jogalapot élesítés előtt szakemberrel ellenőrizni kell.
            </p>
          </article>

          <article className="legal-card">
            <h2>Telefonos és e-mailes kapcsolatfelvétel</h2>
            <p>
              Telefonos vagy e-mailes megkeresés esetén az adatkezelő a megkeresés
              megválaszolásához szükséges adatokat kezeli. Az adatokat az adatkezelő
              nem használhatja fel ettől eltérő célra külön jogalap nélkül.
            </p>
            <p className="todo-note">TODO: adatmegőrzési idők</p>
          </article>

          <article className="legal-card">
            <h2>Weboldal látogatottsági mérése</h2>
            <p>
              A weboldal a jövőben használhat analitikai eszközöket a látogatottság
              mérésére és a weboldal fejlesztésére. Analitikai cookie-k kizárólag
              előzetes hozzájárulás alapján működhetnek, kivéve, ha a konkrét
              technikai megoldás jogszerűen hozzájárulás nélkül alkalmazható.
            </p>
            <p>
              A jelen sablon alapján személyes kapcsolati adat, így név, e-mail cím,
              telefonszám vagy üzenetszöveg nem kerülhet analitikai rendszerbe.
            </p>
          </article>

          <article className="legal-card">
            <h2>Google Analytics / Google Tag Manager / Google Ads használata</h2>
            <p>
              Amennyiben a weboldal Google Analytics, Google Tag Manager vagy Google
              Ads eszközöket használ, azok csak megfelelő hozzájárulási beállítások
              mellett aktiválhatók. Marketing és hirdetési célú cookie-k csak az
              érintett hozzájárulásával működhetnek.
            </p>
            <ul className="todo-list">
              <li>TODO: Google Analytics / Google Ads adatkezelési hivatkozások</li>
              <li>TODO: használt CMP/cookie megoldás neve</li>
            </ul>
          </article>

          <article className="legal-card">
            <h2>Cookie-k és hozzájárulás-kezelés</h2>
            <p>
              A szükséges cookie-k a weboldal működéséhez szükségesek, ezért ezek
              elutasítása a weboldal alapvető működését akadályozhatja. Az analitikai
              és marketing célú cookie-k csak hozzájárulás alapján működhetnek.
            </p>
            <p>
              A látogató a hozzájárulását bármikor módosíthatja a footerben található
              „Cookie beállítások” gombbal.
            </p>
          </article>

          <article className="legal-card">
            <h2>Adattovábbítás és adatfeldolgozók</h2>
            <p>
              Az adatkezelő igénybe vehet tárhelyszolgáltatót, e-mail szolgáltatót,
              webfejlesztőt, analitikai vagy hirdetési szolgáltatót. Az adatfeldolgozók
              a személyes adatokat kizárólag az adatkezelő utasításai alapján
              kezelhetik.
            </p>
            <ul className="todo-list">
              <li>TODO: tárhelyszolgáltató</li>
              <li>TODO: használt CMP/cookie megoldás neve</li>
            </ul>
          </article>

          <article className="legal-card">
            <h2>Adatmegőrzési idők</h2>
            <p>
              Az adatokat csak addig szabad kezelni, ameddig az adatkezelési cél
              eléréséhez szükséges, vagy ameddig jogszabály kötelező megőrzést ír elő.
            </p>
            <p className="todo-note">TODO: adatmegőrzési idők</p>
          </article>

          <article className="legal-card">
            <h2>Érintetti jogok</h2>
            <p>
              Az érintett jogosult tájékoztatást kérni az adatkezelésről, hozzáférést
              kérni a kezelt adataihoz, kérni azok helyesbítését, törlését,
              korlátozását, tiltakozni bizonyos adatkezelések ellen, illetve
              gyakorolni az adathordozhatósághoz való jogát, ha annak feltételei
              fennállnak.
            </p>
            <p>
              Hozzájáruláson alapuló adatkezelés esetén az érintett a hozzájárulását
              bármikor visszavonhatja; ez nem érinti a visszavonás előtti adatkezelés
              jogszerűségét.
            </p>
          </article>

          <article className="legal-card">
            <h2>Panasztételi lehetőség, NAIH</h2>
            <p>
              Az érintett panasszal fordulhat a Nemzeti Adatvédelmi és
              Információszabadság Hatósághoz.
            </p>
            <p>
              NAIH: 1055 Budapest, Falk Miksa utca 9-11.; postacím: 1363 Budapest,
              Pf. 9.; e-mail: ugyfelszolgalat@naih.hu; web: www.naih.hu.
            </p>
          </article>

          <article className="legal-card">
            <h2>Záró rendelkezések</h2>
            <p>
              A tájékoztató módosulhat, különösen jogszabályváltozás, új szolgáltatás,
              új adatfeldolgozó vagy új cookie/analitikai megoldás bevezetése esetén.
              A dokumentum véglegesítése előtt jogi és adatvédelmi ellenőrzés szükséges.
            </p>
          </article>
        </section>
      </main>

      <SiteFooter />
      <CookieConsent />
    </>
  );
}
