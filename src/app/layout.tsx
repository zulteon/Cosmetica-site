import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Anita Kozmetika Szolnok",
  description:
    "Anita Kozmetika Szolnok: arckezelés, gyantázás, szempilla- és szemöldökszolgáltatások.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
