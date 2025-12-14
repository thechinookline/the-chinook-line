import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Subheader from "../components/subheader";
import Header from "../components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Chinook Line",
  description:
    "Connecting Calgary to Edmonton and their towns by passenger rail. A project exploring feasibility, community benefits, and sustainable transit for Alberta's future. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="topStack">
          <Subheader />
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
