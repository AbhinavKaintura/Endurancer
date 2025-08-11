import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/navigation/NavBar';
import Footer from '@/components/navigation/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Endurance - Reclaim Your Focus",
  description: "Break free from digital distraction. Experience the perfect fusion of ancient wisdom and modern neuroscience for cognitive enhancement.",
  keywords: "meditation, focus, cognitive training, mindfulness, wellness, mental health",
  authors: [{ name: "Endurance Tech Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900`}
      >
        <NavBar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
