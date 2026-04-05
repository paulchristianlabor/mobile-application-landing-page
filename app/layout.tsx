import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mobile Application — Stay Organized. Stay Ahead.",
  description:
    "The quiet productivity companion for driven professionals. Manage tasks, track progress, and stay in flow wherever you are.",
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: "Mobile Application — Stay Organized. Stay Ahead.",
    description:
      "The quiet productivity companion for driven professionals. Manage tasks, track progress, and stay in flow wherever you are.",
    images: ["/opengraph.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
