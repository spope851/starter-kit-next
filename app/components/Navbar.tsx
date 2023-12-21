'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const Navbar: React.FC = () => {
  const { t } = useTranslation('global', {
    keyPrefix: 'nav',
  })
  const pathname = usePathname().split('/')[1]
  const isActive = (route: string) => pathname === route
  const router = useRouter()

  return (
    <ul id="on-top" className="navbar-links">
      <li className="nav-li">
        <a id={`${isActive('') && 'active-menu'}`} onClick={() => router.push('/')}>
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
  )
}
