import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.tagline,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans antialiased selection:bg-cyan-400/20 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
