import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../assets/styles/globals.css";
import { MainLayout } from "@/components/layout/MainLayout";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Property Pulse | Home",
  keywords: [
    "real estate",
    "property listings",
    "home buying",
    "property market",
    "real estate trends",
  ],
  description: "Find the perfect property with Property Pulse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppinsSans.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
