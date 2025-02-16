import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "GUB IDPC-2025",
  description:
    "Official website of GUB IDPC 2025 - The premier programming contest at Green University.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body style={{ fontFamily: "'Fira Code', monospace" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
