import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"
import { ScrollProvider } from "./components/ScrollProvider"
import { getHeaderMenuItems } from "../lib/contentfulUtils";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Evgeni Leonov - skådespelare",
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
      }],
  }
};

export default async function RootLayout({ children }) {
  const headerMenuItems = await getHeaderMenuItems();
  return (
    <html lang="sv">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >



        <ScrollProvider>
          <Navbar headerMenuItems={headerMenuItems} />

          <main className="w-full h-full">


            {children}

          </main>
        </ScrollProvider>
      </body>
    </html>
  );
}
