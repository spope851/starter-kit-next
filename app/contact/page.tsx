'use client'
import { Button } from '@mui/material'
import styles from './page.module.css'
import { InitHero } from '../components/InitHero'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main id="main">
      <InitHero component="section">
        <h1 id="home-h">{t('head')}</h1>
      </InitHero>

      {/* <!-- ============================================ -->
          <!--                    FORM                      -->
          <!-- ============================================ --> */}

      <section className={styles.form}>
        <div className={styles.leftSection}>
          <span className={styles.topper}>{t('main.businessName')}</span>
          <h2>{t('main.title')}</h2>
          <p>{t('main.subtitle')}</p>
          <form
            id="contact"
            className={styles.contact}
            name="Contact Form"
            method="post"
            data-netlify-recaptcha="true"
            data-netlify="true"
          >
            <div className={styles.inputGroup}>
              <label htmlFor="name">{t('main.form.name.label')}</label>
              <input
                aria-label="name"
                className={styles.name}
                name="name"
                placeholder={t('main.form.name.placeholder')}
                type="text"
                tabIndex={1}
                required
              />
              <div aria-hidden="true" className={styles.hoverBox}></div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">{t('main.form.email.label')}</label>
              <input
                id="email"
                aria-label="email"
                className="input1 right"
                name="email"
                placeholder={t('main.form.email.placeholder')}
                type="email"
                tabIndex={2}
                required
              />
              <div aria-hidden="true" className={styles.hoverBox}></div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="phone">{t('main.form.phone.label')}</label>
              <input
                id="phone"
                aria-label="phone number"
                className="input1"
                name="phone"
                placeholder={t('main.form.phone.placeholder')}
                type="tel"
                tabIndex={3}
                required
              />
              <div aria-hidden="true" className={styles.hoverBox}></div>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="location">{t('main.form.location.label')}</label>
              <input
                id="location"
                aria-label="location"
                className="input1 right"
                name="location"
                placeholder={t('main.form.location.placeholder')}
                type="text"
                tabIndex={4}
                required
              />
              <div aria-hidden="true" className={styles.hoverBox}></div>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="how">{t('main.form.question.label')}</label>
              <input
                id="how"
                aria-label="how did you hear about us"
                name="hear"
                placeholder={t('main.form.question.placeholder')}
                type="text"
                tabIndex={5}
                required
              />
              <div aria-hidden="true" className={styles.hoverBox}></div>
            </div>
            <div className={styles.inputGroupTextarea}>
              <div className={styles.inputGroup}>
                <label htmlFor="message">{t('main.form.message.label')}</label>
                <textarea
                  id="message"
                  aria-label="write your message"
                  name="message"
                  placeholder={t('main.form.message.placeholder')}
                  tabIndex={6}
                  required
                ></textarea>
                <div aria-hidden="true" className={styles.hoverBox}></div>
              </div>
            </div>
            <p className={styles.formSubmit}>
              <Button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
                sx={{
                  px: '6px',
                  py: '1px',
                  border: 'none',
                }}
              >
                Submit
              </Button>
            </p>
          </form>
        </div>
        <div className={styles.contactRight}>
          <div className={styles.infoGroup}>
            <span className={styles.heading}>{t('main.aside.location.label')}</span>
            <span className={styles.info}>{t('main.aside.location.value')}</span>
          </div>
          <div className={styles.infoGroup}>
            <span className={styles.heading}>{t('main.aside.phone.label')}</span>
            <a className={styles.info} href={`tel:${t('main.aside.phone.value')}`}>
              {t('main.aside.phone.value')}
            </a>
          </div>
          <div className={styles.infoGroup}>
            <span className={styles.heading}>{t('main.aside.email.label')}</span>
            <a
              className={styles.info}
              href={`mailto:${t('main.aside.email.value')}`}
            >
              {t('main.aside.email.value')}
            </a>
          </div>
          <div className={styles.infoGroup}>
            <span className={styles.heading}>{t('main.aside.hours.label')}</span>
            <span className={styles.info}>{t('main.aside.hours.value')}</span>
          </div>
        </div>
      </section>
    </main>
  )
}
