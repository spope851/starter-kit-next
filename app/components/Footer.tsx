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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
            mollitia sequi placeat dignissimos adipisci explicabo excepturi a beatae
            architecto autem.
          </p>
        </div>
        <div className="right-section">
          <div className="lists">
            <ul>
              <li>
                <h2>{t('company')}</h2>
              </li>
              <li>
                <a onClick={() => router.push('/')}>Home</a>
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
                <h2>{t('support')}</h2>
              </li>
              <li>
                <a onClick={() => router.push('/contact')}>Contact Us</a>
              </li>
            </ul>
            <ul>
              <li>
                <h2>{t('contact')}</h2>
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
                  Somewhere, Tx
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
                <a href="tel:555-213-9120">(555) 213-9120</a>
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
                <a href="mailto:info@email.com">info@email.com</a>
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
              Call to action button
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
