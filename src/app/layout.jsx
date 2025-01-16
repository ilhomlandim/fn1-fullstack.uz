import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FN1-fullstack guruhi",
  description: "Najot Ta'limda yashovchi yagona guruh :)",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="uz">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-body bg-cover bg-no-repeat flex flex-col h-full`}
      >
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
