import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Scale Yourself",
  description:
    "Coaching and content that helps founders grow as quickly as their startups",
  icons: {
    icon: "/images/1c26e0934b1ea057-favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
