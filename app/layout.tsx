import type { Metadata } from "next";
import { Open_Sans, Spectral_SC, Raleway } from 'next/font/google'
import "./globals.css";

const spectral = Raleway({
  subsets: ['cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Element calendar",
  description: "Comfortable and simple calendar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spectral.className}>
      <body  >
        {children}
      </body>
    </html>
  );
}
