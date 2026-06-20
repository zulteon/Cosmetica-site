import CookieConsent from "@/components/CookieConsent";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { priceTables } from "@/lib/pricing";

export default function PriceListPage() {
  return (
    <>
      <SiteHeader />

      <main className="pricing-page">
        <section className="pricing-section" aria-labelledby="pricing-title">
          <div className="pricing-heading">
            <p className="section-kicker">Árak</p>
            <div>
              <h1 id="pricing-title">Anita Kozmetika árak 2026</h1>
              <p>Érvényes: 2026. március 1-től</p>
            </div>
          </div>

          <div className="price-table-grid">
            {priceTables.map((table) => (
              <article className="price-card" key={table.title}>
                <div className="price-card-title">
                  <span className="blossom-dot small" aria-hidden="true" />
                  <h2>{table.title}</h2>
                </div>
                <div className="price-table-wrap">
                  <table className="price-table">
                    <thead>
                      <tr>
                        <th scope="col">Kezelés neve</th>
                        <th scope="col">Kezelés leírása</th>
                        <th scope="col">Kezelési idő</th>
                        <th scope="col">Ár</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, index) => (
                        <tr className={row.isNote ? "price-note-row" : undefined} key={`${row.name}-${index}`}>
                          <th scope="row">
                            {row.group ? <span className="price-row-group">{row.group}</span> : null}
                            {row.name}
                          </th>
                          <td data-label="Kezelés leírása">{row.description ?? ""}</td>
                          <td data-label="Kezelési idő">{row.time ?? ""}</td>
                          <td data-label="Ár">{row.price ?? ""}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
