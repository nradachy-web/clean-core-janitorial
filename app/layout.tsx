import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: "Clean Core Janitorial | Commercial Cleaning in Grand Rapids, MI",
    template: "%s | Clean Core Janitorial",
  },
  description:
    "Commercial janitorial and office cleaning across Grand Rapids and West Michigan. Locally and Latino-owned, bilingual, trained and insured. 100% satisfaction guarantee. Get a free quote.",
  keywords: [
    "commercial cleaning Grand Rapids",
    "janitorial services Grand Rapids",
    "office cleaning Michigan",
    "medical office cleaning",
    "Clean Core Janitorial",
    "commercial cleaning company West Michigan",
  ],
  openGraph: {
    title: "Clean Core Janitorial — Commercial Cleaning in West Michigan",
    description:
      "Dependable commercial cleaning for offices, medical, retail, and more. Locally owned, bilingual, fully insured.",
    type: "website",
    url: `https://${site.domain}`,
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
