import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ATA Haircutting | Best Haircutting in Town",
  description: "Experience the best precision cuts and expert styling at ATA Haircutting. Professional, clean, and masculine grooming.",
  openGraph: {
    title: "ATA Haircutting | Best Haircutting in Town",
    description: "Experience the best precision cuts and expert styling at ATA Haircutting. Professional, clean, and masculine grooming.",
    url: "https://ata-haircuting.ferdhyihza.com",
    siteName: "ATA Haircutting",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/opengraph-ata.png",
        width: 1200,
        height: 630,
        alt: "ATA Haircutting Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-gray-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}
