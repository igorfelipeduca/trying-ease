import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/utils/i18n/language-context";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Experimenting Ease | Igor Duca",
  description:
    "Experimenting with different types of eases. Using default ones and custom ones from 'The Ease Blueprint'",
  openGraph: {
    title: "Experimenting Ease | Igor Duca",
    description:
      "Experimenting with different types of eases. Using default ones and custom ones from 'The Ease Blueprint'",
    url: "https://ease.duca.dev",
    siteName: "Experimenting Ease | Igor Duca",
    images: [
      {
        url: "/thumb.png",
        width: 1200,
        height: 630,
        alt: "Experimenting Ease | Igor Duca",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experimenting Ease | Igor Duca",
    description:
      "Experimenting with different types of eases. Using default ones and custom ones from 'The Ease Blueprint'",
    images: ["/thumb.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${geistSans.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
