import CookieConsent from "@/components/CookieConsent";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { priceTables } from "@/lib/pricing";
import { siteContact } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Árak | Anita Kozmetika Szolnok",
  description:
    "Anita Kozmetika árak Szolnokon: arckezelések, gyantázás, szempilla- és szemöldökszolgáltatások, fényterápia és kozmetikai extrák.",
};

function formatPrice(price?: string) {
  return price?.replaceAll("Ft", "").trim() ?? "";
}

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
              <div className="pricing-actions" aria-label="Árlista műveletek">
                <Link className="primary-button" href="/#kapcsolat">
                  Időpontot kérek
                </Link>
                <a className="text-link phone-link" href={siteContact.phoneHref}>
                  Érdeklődöm telefonon
                </a>
              </div>
            </div>
          </div>

          <div className="price-table-grid">
            {priceTables.map((table) => (
              <article className="price-card" id={table.id} key={table.title}>
                <div className="price-card-title">
                  <span className="blossom-dot small" aria-hidden="true" />
                  <h2>
                    <a href={`#${table.id}`}>{table.title}</a>
                  </h2>
                </div>
                <div className="price-table-wrap">
                  <table className={table.compact ? "price-table price-table-compact" : "price-table"}>
                    <thead>
                      <tr>
                        <th scope="col">Kezelés neve</th>
                        {table.compact ? null : <th scope="col">Kezelés leírása</th>}
                        {table.compact ? null : <th scope="col">Kezelési idő</th>}
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
                          {table.compact ? null : <td data-label="Kezelés leírása">{row.description ?? ""}</td>}
                          {table.compact ? null : <td data-label="Kezelési idő">{row.time ?? ""}</td>}
                          <td data-label="Ár">{formatPrice(row.price)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            ))}
          </div>
          <div className="pricing-bottom-cta" aria-label="Időpontkérés">
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
