import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Porto Mumet.in - Portfolio",
  description: "Portfolio jasa pembuatan website dan aplikasi mobile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
