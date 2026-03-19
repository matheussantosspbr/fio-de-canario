import type { Metadata } from "next";
import { Norican } from "next/font/google";
import "@/app/styles/globals.css";

const norican = Norican({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-norican'
});

export const metadata: Metadata = {
  title: "Fio de Canário",
  description: "Onde o crochê ganha asas.💛🪽",
  icons: {
    icon: "/images/logo.png",
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
        <meta name="theme-color" content="#875b2d" />
      </head>
      <body className="min-h-full flex flex-col justify-center items-center">{children}</body>
    </html>
  );
}
