import type { Metadata, Viewport } from 'next'
import './globals.css'
import './dark.css'
import './dark-root-styles.css'
import Image from 'next/image'
import { headers } from 'next/headers'
import { ThemeProvider } from './context/theme'
import { Body } from './components/Body'
import { InternationalizationProvider } from './context/internationalization'
import { MobileNavButton } from './components/MobileNavButton'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

const title = 'Title | Business | Location, WA'
const description = 'The main thing your business does.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: process.env.VERCEL_URL,
    siteName: title,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/favicon.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@s_pop3',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0e817c',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = headers()
  const defaultLng = headersList.get('Accept-Language')

  return (
    <html lang="en">
      <InternationalizationProvider defaultLng={defaultLng}>
        <ThemeProvider>
          <Body>
            <header>
              {/* <!-- Mobile Nav Strip --> */}
              <div className="mobile-wrapper">
                <div className="mobile-nav container mobile-nav-container">
                  <Image
                    className="light"
                    id="mobile-logo"
                    src="/images/logo.svg"
                    alt="mobile_company_logo"
                    width="110"
                    height="32"
                  />
                  <Image
                    className="dark"
                    id="mobile-logo"
                    src="/images/logo-white.svg"
                    alt="mobile_company_logo"
                    width="110"
                    height="32"
                  />
                  {/* <!-- Hamburger Menu --> */}
                  <MobileNavButton />
                </div>
              </div>
              <Navbar />
            </header>

            {children}

            <Footer />
          </Body>
        </ThemeProvider>
      </InternationalizationProvider>
    </html>
  )
}
