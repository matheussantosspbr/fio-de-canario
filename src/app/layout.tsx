import type { Metadata, Viewport } from "next";
import { Norican } from "next/font/google";
import "@/app/styles/globals.css";

const norican = Norican({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-norican'
});
export const viewport: Viewport = {
  themeColor: "#875b2d",
};

export const metadata: Metadata = {
  title: "Fio de Canário",
  description: "Onde o crochê ganha asas.💛🪽",
  keywords: "Fio de Canário, Crochê, Artesanato, Fios, Agulhas, Barbante, Algodão, Lã, Seda, Linho, roupas",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${norican.variable}`}>
      <head>
        <script src="https://kit.fontawesome.com/22c21b90be.js" crossOrigin="anonymous"></script>
      </head>
      <body className="h-full flex flex-col justify-center items-center">{children}</body>
    </html>
  );
}
