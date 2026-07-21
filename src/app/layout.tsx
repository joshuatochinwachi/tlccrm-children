import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractivityProvider from "@/components/InteractivityProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TLCCRM Delta Children Camp — Raising Godly Children",
  description: "Official portal for the TLCCRM Delta State Headquarters Children's Department Holiday Bible Camps. Nurturing faith, growth, and fellowship in Jesus.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-neutral-cream text-primary selection:bg-accent-gold selection:text-primary">
        <InteractivityProvider>
          <Header />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </InteractivityProvider>
      </body>
    </html>
  );
}
