'use client'
import { Button } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const Footer: React.FC = () => {
  const { t } = useTranslation('global', {
    keyPrefix: 'footer',
  })
  const router = useRouter()

  return (
    <footer id="footer">
      <div className="container">
        <div className="left-section">
          <a className="logo" onClick={() => router.push('/')}>
            <Image
              loading="lazy"
              decoding="async"
              src="/images/logo-white.svg"
              alt="logo"
              width="293"
              height="91"
            />
          </a>
          <p>{t('description')}</p>
        </div>
        <div className="right-section">
          <div className="lists">
            <ul>
              <li>
                <h2>{t('helpLinks.company.title')}</h2>
              </li>
              <li>
                <a onClick={() => router.push('/')}>{t('helpLinks.company.home')}</a>
              </li>
              <li>
                <a onClick={() => router.push('/about')}>About Us</a>
              </li>
              <li>
                <a onClick={() => router.push('/contact')}>Services</a>
              </li>
            </ul>
            <ul>
              <li>
                <h2>{t('helpLinks.support.title')}</h2>
              </li>
              <li>
                <a onClick={() => router.push('/contact')}>
                  {t('helpLinks.support.contact')}
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <h2>{t('helpLinks.contact.title')}</h2>
              </li>
              <li>
                <Image
                  loading="lazy"
                  decoding="async"
                  src="/images/pin.svg"
                  alt=""
                  width="24"
                  height="24"
                />
                <a onClick={() => router.push('/contact')} target="_blank">
                  {t('helpLinks.contact.location')}
                </a>
              </li>
              <li>
                <Image
                  loading="lazy"
                  decoding="async"
                  src="/images/footer-phone.svg"
                  alt=""
                  width="24"
                  height="24"
                />
                <a href={`tel:${t('helpLinks.contact.phone')}`}>
                  {t('helpLinks.contact.phone')}
                </a>
              </li>
              <li>
                <Image
                  loading="lazy"
                  decoding="async"
                  src="/images/email.svg"
                  alt=""
                  width="24"
                  height="24"
                />
                <a href={`mailto:${t('helpLinks.contact.email')}`}>
                  {t('helpLinks.contact.email')}
                </a>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <Button
              onClick={() => router.push('/contact')}
              sx={{
                m: 0,
                height: '2.94444444em',
                pt: '0.16666667em',
                width: '13.88888889em',
              }}
            >
              {t('callToAction')}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
