import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Shekhar Salon | Luxury Hair Design",
  description: "Aurangabad's premier hair salon and grooming destination.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${montserrat.variable} font-body bg-cream-50`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}