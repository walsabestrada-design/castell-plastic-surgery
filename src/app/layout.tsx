import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const title = "Dr. Adrián Castell — Cirugía Plástica y Reconstructiva";
const description =
  "Dr. Adrián Castell: cirugía plástica y reconstructiva con atención personal directa, de la consulta al control final. Especialidades, trayectoria y clínica.";

export const metadata: Metadata = {
  metadataBase: new URL("https://castell-plastic-surgery.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_ES",
    siteName: "Castell",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] font-sans text-[var(--foreground)]">
        <a href="#main" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
