import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-4 border-b border-gray-200">
          <nav className="w-full mx-auto flex justify-center items-center">
            <h1 className="text-xl font-bold">Evgeni Leonov</h1>
          </nav>
        </header>

        <main className="w-full">{children}</main>

        <footer className="p-4 text-center border-t border-gray-200 mt-8">
          © {new Date().getFullYear()} Evgeni Leonov. Alla rättigheter förbehållna.
        </footer>
      </body>
    </html>
  );
}
