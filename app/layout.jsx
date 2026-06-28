import "./globals.css";

export const metadata = {
  title: "The User Manual for Founder Psychology — Scale Yourself",
  description:
    "Essays, frameworks, and video for the moments that don't show up on the roadmap. Drawn from thousands of hours coaching YC founders.",
  metadataBase: new URL("https://usermanual.scaleyourself.com"),
  openGraph: {
    title: "The User Manual for Founder Psychology — Scale Yourself",
    description:
      "Essays, frameworks, and video for the moments that don't show up on the roadmap.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0B2E",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
