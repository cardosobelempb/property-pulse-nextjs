import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Pulse | Details",
  keywords: [
    "real estate",
    "property listings",
    "home buying",
    "property market",
    "real estate trends",
  ],
  description: "Find the perfect property with Property Pulse.",
};

export default function PropertyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
