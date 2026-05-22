import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varun Dubey - Portfolio",
  description: "Personal portfolio of Varun Dubey",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/favicon-128x128.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Inline SVG favicon — always loads, no network request */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230e0b08'/%3E%3Ctext x='16' y='22' text-anchor='middle' font-family='%27DM Sans%27%2CArial%2Csans-serif' font-weight='700' font-size='16' fill='%23c49a6c'%3EVD%3C/text%3E%3C/svg%3E"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
