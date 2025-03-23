import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Lora } from 'next/font/google';
import { Navbar } from '../components/layout/navbar';
import { Footer } from '../components/layout/footer';
import FloatingButtons from '../components/FloatingButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SocialFloatingButtons from '../components/FloatingButton';

const playfair = Playfair_Display({ subsets: ['latin'] });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = {
  title: 'Wild Earth Jungle Camp',
  description: 'Experience luxury in the heart of nature',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} ${lora.variable}`}>
        <Navbar />
        <main>{children}</main>
        <SocialFloatingButtons 
        whatsappNumber="+919845866505" // Replace with your actual WhatsApp number
        instagramUsername="wildearthjunglecamp" // Replace with your Instagram username
        whatsappMessage="Hello! I'm interested in your services." // Customize your default message
      />
        <Footer />
      </body>
    </html>
  );
}