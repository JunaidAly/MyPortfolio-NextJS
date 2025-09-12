import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Junaid Ali - Full Stack Developer',
  description: 'BS Computer Science graduate passionate about MERN stack development. Experienced React Developer with expertise in building dynamic and scalable web applications.',
  keywords: 'React Developer, MERN Stack, Web Developer, JavaScript, Node.js, Portfolio',
  authors: [{ name: 'Junaid Ali' }],
  openGraph: {
    title: 'Junaid Ali - Full Stack Developer',
    description: 'BS Computer Science graduate passionate about MERN stack development.',
    type: 'website',
    url: 'https://junaidali.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Junaid Ali - Full Stack Developer',
    description: 'BS Computer Science graduate passionate about MERN stack development.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}