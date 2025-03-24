import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CHeader from "./components/CHeader"
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

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CHeader />

        <main className="w-full">{children}</main>

        <footer className="p-4 text-center border-t border-gray-200 mt-8 bg-[rgb(141,235,141)] flex h-14 text-black justify-center">

          <p><span>Kontakta mig:</span> 070 402 46 06</p>
          <a href="mailto:evgenileonov1987@gmail.com" className="mr-4 ml-4" >
            <img className="h-full" src="/icons/mail.png" />
          </a>
          <p>
            <span>evgenileonov1987@gmail.com</span>
          </p>

        </footer>
      </body>
    </html>
  );
}
