import type { Metadata } from "next";
import {
  Inter as FontSans,
  Playfair_Display as PlayFair,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/component/header";
import Footer from "@/components/component/footer";
import { Toaster } from "react-hot-toast";

// Fonts
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontPlayfair = PlayFair({
  subsets: ["latin"],
  variable: "--font-playfair_display",
});

export const metadata: Metadata = {
  title: "Dong Fang",
  description: "restaurant website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontPlayfair.variable
        )}
      >
        <Toaster position="bottom-center" reverseOrder={false} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
