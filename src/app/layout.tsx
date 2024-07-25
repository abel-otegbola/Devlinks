import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import AuthProvider from "../context/useAuth";
import LinksProvider from "../context/linksContext"

const instrmentSans = Instrument_Sans({ subsets: ["latin"] });

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
      <AuthProvider>
        <LinksProvider>
          <body className={`${instrmentSans.className} text-black bg-slate`}>{children}</body>
        </LinksProvider>
      </AuthProvider>
    </html>
  );
}
