'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const Navbar: React.FC = () => {
  const { t } = useTranslation('global', {
    keyPrefix: 'nav',
  })
  const pathname = usePathname().split('/')[1]
  const isActive = (route: string) => pathname === route

  return (
    <ul id="on-top" className="navbar-links">
      <li className="nav-li">
        <a id={`${isActive('') && 'active-menu'}`} href="/">
          {t('home')}
        </a>
      </li>
      <li className="nav-li">
        <a
          id={`${isActive('about') && 'active-menu'}`}
          className="link"
          href="/about"
        >
          {t('about')}
        </a>
      </li>
      <li className="nav-li">
        <a
          id={`${isActive('services') && 'active-menu'}`}
          className="link"
          href="/#services"
        >
          {t('services')}
        </a>
      </li>
      {/* <!-- <li className="nav-li"><a className="link" href="html/portfolio">Portfolio</a></li> --> */}
      <li className="nav-li">
        <a
          id={`${isActive('testimonials') && 'active-menu'}`}
          className="link"
          href="/testimonials"
        >
          {t('testimonials')}
        </a>
      </li>
      <li className="nav-li">
        <a
          id={`${isActive('contact') && 'active-menu'}`}
          className="link"
          href="/contact"
        >
          {t('contact')}
        </a>
      </li>
    </ul>
  )
}
