'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { DarkModeButton } from './DarkModeButton'
import { LanguageButton } from './LanguageButton'

export const Navbar: React.FC = () => {
  const { t } = useTranslation('global', {
    keyPrefix: 'nav',
  })
  const pathname = usePathname().split('/')[1]
  const isActive = (route: string) => pathname === route
  const router = useRouter()

  return (
    <nav>
      <div className="navbar-menu">
        <div id="side-menu" className="side-nav">
          <a className="nav-logo" onClick={() => router.push('/')}>
            <Image
              className="light"
              aria-hidden="true"
              decoding="async"
              src="images/logo.svg"
              alt="compnay logo"
              height="80"
              width={116}
            />
            <Image
              className="dark"
              aria-hidden="true"
              decoding="async"
              src="images/logo-white.svg"
              alt="compnay logo"
              height="80"
              width={116}
            />
          </a>
          <ul id="on-top" className="navbar-links">
            <li className="nav-li">
              <a
                id={`${isActive('') && 'active-menu'}`}
                onClick={() => router.push('/')}
                className="link"
              >
                {t('home')}
              </a>
            </li>
            <li className="nav-li">
              <a
                id={`${isActive('about') && 'active-menu'}`}
                className="link"
                onClick={() => router.push('/about')}
              >
                {t('about')}
              </a>
            </li>
            <li className="nav-li">
              <a
                id={`${isActive('services') && 'active-menu'}`}
                className="link"
                onClick={() => router.push('/#services')}
              >
                {t('services')}
              </a>
            </li>
            <li className="nav-li">
              <a
                id={`${isActive('testimonials') && 'active-menu'}`}
                className="link"
                onClick={() => router.push('/testimonials')}
              >
                {t('testimonials')}
              </a>
            </li>
            <li className="nav-li">
              <a
                id={`${isActive('contact') && 'active-menu'}`}
                className="link"
                onClick={() => router.push('/contact')}
              >
                {t('contact')}
              </a>
            </li>
          </ul>
        </div>
        <DarkModeButton />
        <LanguageButton />
      </div>
    </nav>
  )
}
