import './globals.scss';
import { Metadata } from 'next';
import { Playfair_Display, JetBrains_Mono } from 'next/font/google';
import ClientLayout from '@/components/Layout/ClientLayout';
import { Analytics } from '@vercel/analytics/next';

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair'
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-mono'
});
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
export const metadata: Metadata = {
  title: "Damir Gumerov | Frontend Developer",
  description: "Portfolio of Damir Gumerov, building performant web applications.",
  
  openGraph: {
    title: "Damir Gumerov | Frontend Developer",
    description: "Portfolio of Damir Gumerov, building performant web applications.",
    url: SITE_URL, 
    siteName: "Damir Gumerov Portfolio",
    images: [
      {
        url: "/images/og-preview.png", 
        width: 1200,
        height: 630,
        alt: "Damir Gumerov Portfolio Preview",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Damir Gumerov | Frontend Developer",
    description: "Portfolio of Damir Gumerov, building performant web applications.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${playfair.variable} ${jetbrainsMono.variable}`}>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}