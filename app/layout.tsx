"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Header Responsivo */}
          <Header />

          {/* Área Principal */}
          <div className="flex-grow relative">
            {/* Fundo Responsivo */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                opacity: 0.4,
                backgroundImage: "url('/images/wallpaper.png')",
                backgroundPosition: "center",
              }}
            />
            {/* Conteúdo Principal */}
            <div className="flex flex-col h-full mt-6 sm:mt-4 relative z-10 px-4 sm:px-8 lg:px-12">
              {children}
            </div>
          </div>

          {/* Footer Responsivo */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
