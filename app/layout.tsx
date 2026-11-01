import type { Metadata, Viewport } from "next";
import { connection } from "next/server";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } } : {}),
  title: { default: "Pulso Volts | Em breve", template: "%s | Pulso Volts" },
  description: "Em breve, uma nova energia para viver a cidade. Pulso Volts: mobilidade elétrica, bicicletas e patinetes elétricos.",
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo-pulso-volts.webp", apple: "/images/logo-pulso-volts.webp" },
  openGraph: { title: "Pulso Volts — Em breve", description: "Mais liberdade no caminho. Uma nova energia para viver a cidade.", locale: "pt_BR", type: "website", siteName: "Pulso Volts", images: [{ url: "/images/cidade-eletrica.webp", width: 1672, height: 941, alt: "Pulso Volts — Uma nova energia está chegando" }] },
  twitter: { card: "summary_large_image", title: "Pulso Volts — Em breve", images: ["/images/cidade-eletrica.webp"] },
};
export const viewport: Viewport = { themeColor: "#030b12", width: "device-width", initialScale: 1 };
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  await connection();
  return <html lang="pt-BR"><body>{children}</body></html>;
}
