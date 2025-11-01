import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./assets/styles/globals.css";
import { MainLayout } from "./components/layout/main.layout";
import NavBar from "./components/nav-bar";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Property Pulse",
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
    <html lang="en">
      <body className={`${poppinsSans.variable} antialiased`}>
        <NavBar />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
