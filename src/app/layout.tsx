import type { Metadata } from "next";
import { Judson } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Judson({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-yellow-50`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
