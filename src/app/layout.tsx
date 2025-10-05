import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://junaidaly.vercel.app'),
  title: {
    default: 'Junaid Ali - Full Stack Developer',
    template: '%s | Junaid Ali'
  },
  description: 'BS Computer Science graduate passionate about MERN stack development. Experienced React Developer with expertise in building dynamic and scalable web applications.',
  keywords: ['React Developer', 'MERN Stack', 'Web Developer', 'JavaScript', 'Node.js', 'Portfolio', 'Full Stack Developer', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Junaid Ali' }],
  creator: 'Junaid Ali',
  publisher: 'Junaid Ali',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://junaidaly.vercel.app/',
    siteName: 'Junaid Ali Portfolio',
    title: 'Junaid Ali - Full Stack Developer',
    description: 'BS Computer Science graduate passionate about MERN stack development. Experienced React Developer with expertise in building dynamic and scalable web applications.',
    images: [
      {
        url: '/myprofile.jpg',
        width: 1200,
        height: 630,
        alt: 'Junaid Ali - Full Stack Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junaid Ali - Full Stack Developer',
    description: 'BS Computer Science graduate passionate about MERN stack development.',
    images: ['/myprofile.jpg'],
  },
  verification: {
    google: '50f10be814dc33ec',
  },
  alternates: {
    canonical: 'https://junaidaly.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}