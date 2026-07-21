import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractivityProvider from "@/components/InteractivityProvider";
import FloatingParticles from "@/components/FloatingParticles";

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
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "TLCCRM Delta Children Camp",
    description: "Official portal for the TLCCRM Delta State HQ Children's Department. Catch Them Young for Christ.",
    images: [{ url: "/logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "TLCCRM Delta Children Camp",
    description: "Official portal for the TLCCRM Delta State HQ Children's Department.",
    images: ["/logo.png"],
  },
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
          <FloatingParticles />
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
