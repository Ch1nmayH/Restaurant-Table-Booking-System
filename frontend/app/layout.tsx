import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DineDash",
  description: "Welcome to DineDash, your ultimate dining companion! Whether you're planning a romantic dinner, a family gathering, or a night out with friends, we've got you covered. Discover top-rated restaurants, browse menus, and secure your table in just a few taps. Say goodbye to long waits and hello to effortless reservations. With real-time availability and personalized recommendations, your perfect dining experience starts here. Bon appétit!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
