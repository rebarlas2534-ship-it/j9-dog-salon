import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "J-9 Dog Salon | Professional Dog Grooming in Sturgeon Bay, WI",
  description:
    "Expert dog grooming services in Sturgeon Bay, WI. Baths, full grooms, nail trims, and more. Book your appointment today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
