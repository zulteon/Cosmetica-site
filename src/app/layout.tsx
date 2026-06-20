import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anita Kozmetika",
  description: "Anita Kozmetika Szolnok: kozmetikai kezelések, gyantázás és szépségápolás.",
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
