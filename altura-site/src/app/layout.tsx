import type { Metadata } from "next";
import { Orbitron, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const fontHeading = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Altura - Software Development Agency",
  description: "Building the future of the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
