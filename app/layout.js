import { Poppins } from "next/font/google";
import site from "@/data/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: site.seo.title,
  description: site.seo.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: site.brand.logo,
    apple: site.brand.logo,
  },
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: "/",
    type: "website",
    siteName: site.brand.name,
    images: [
      {
        url: site.seo.ogImage,
        width: 1200,
        height: 630,
        alt: site.brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage],
  },
};

export const viewport = {
  themeColor: "#0B1026",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
