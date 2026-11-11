import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daveram A — The Developer Kingdom | Interactive Portfolio",
  description:
    "Enter the fantasy arcade portfolio of Daveram A. Explore three career castles, an alien-guided technology galaxy, project laboratory and final contact gate.",
  applicationName: "Daveram Developer Kingdom",
};

export const viewport: Viewport = {
  themeColor: "#10091f",
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
