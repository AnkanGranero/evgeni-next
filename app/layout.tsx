import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { barlowCondensed } from "../styles/fonts";
import "@/styles/globals.css";
import { views } from "@/lib/views";
import { ReactNode } from "react";
import PersonSchema from "@/components/person-schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://evgenileonov.se"),
  title: {
    default: "Evgeni Leonov - skådespelare",
    template: "%s | Evgeni Leonov",
  },
  description: "Officiell hemsida för skådespelaren Evgeni Leonov.",
  openGraph: {
    title: "Evgeni Leonov",
    description: "Officiell hemsida för skådespelaren Evgeni Leonov.",
    type: "website",
    url: "https://evgenileonov.se",
    images: [
      {
        url: "/Evgeni_Leonov_foto.jpg",
        width: 1200,
        height: 630,
        alt: "Evgeni Leonov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evgeni Leonov - skådespelare",
    description: "Officiell hemsida för skådespelaren Evgeni Leonov.",
    images: ["/Evgeni_Leonov_foto.jpg"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="sv" className={barlowCondensed.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <PersonSchema />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Libre+Franklin:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar views={views} />

        <main className="w-full min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
