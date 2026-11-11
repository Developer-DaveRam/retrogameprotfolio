import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daveram A — Signal Run | Interactive Developer Portfolio",
  description:
    "Explore Daveram A's interactive developer portfolio: career missions, an alien-guided technology inventory, engineering build reviews and contact links.",
  applicationName: "Daveram Signal Run",
};

export const viewport: Viewport = {
  themeColor: "#07131b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
