'use client'
import { Button } from '@mui/material'
import styles from './page.module.css'
import { InitHero } from '../components/InitHero'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main id="main">
      {/* <!-- ============================================ -->
          <!--                    LANDING                   -->
          <!-- ============================================ --> */}

      <InitHero className={styles.initHero} component="section">
        <h1 id="home-h">{t('head')}</h1>
      </InitHero>

      {/* <!-- ============================================ -->
          <!--                    FORM                      -->
          <!-- ============================================ --> */}

      <section className={styles.form}>
        <div className={styles.leftSection}>
          <span className={styles.topper}>Business Name</span>
          <h2>Send a Message</h2>
          <p>
            If you have any questions or concerns please feel free to reach out to
            us. we respond to every call and email.
          </p>
          <form
            id="contact"
            className={styles.contact}
            name="Contact Form"
            method="post"
            data-netlify-recaptcha="true"
            data-netlify="true"
          >
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                aria-label="name"
                className={styles.name}
                name="name"
                placeholder="Full Name"
                type="text"
                tabIndex={1}
                required
              />
              <div aria-hidden="true" className={styles.hoverBox}></div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                aria-label="email"
                className="input1 right"
                name="email"
                placeholder="Email Address"
                type="email"
                tabIndex={2}
                required
              />
              <div aria-hidden="true" className={styles.hoverBox}></div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                aria-label="phone number"
                className="input1"
                name="phone"
                placeholder="Phone Number"
                type="tel"
                tabIndex={3}
                required
              />
              <div aria-hidden="true" className={styles.hoverBox}></div>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="location">Location</label>
              <input
                id="location"
                aria-label="location"
                className="input1 right"
                name="location"
                placeholder="Your Location"
                type="text"
                tabIndex={4}
                required
              />
              <div aria-hidden="true" className={styles.hoverBox}></div>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="how">How did you hear about us</label>
              <input
                id="how"
                aria-label="how did you hear about us"
                name="hear"
                placeholder="How Did You Hear About Us"
                type="text"
                tabIndex={5}
                required
              />
              <div aria-hidden="true" className={styles.hoverBox}></div>
            </div>
            <div className={styles.inputGroupTextarea}>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  aria-label="write your message"
                  name="message"
                  placeholder="Tell us about what you need help with"
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
            <span className={styles.heading}>Location</span>
            <span className={styles.info}>Somewhere, TX</span>
          </div>
          <div className={styles.infoGroup}>
            <span className={styles.heading}>Phone</span>
            <a className={styles.info} href="tel:555-213-9120">
              (555) 213-9120
            </a>
          </div>
          <div className={styles.infoGroup}>
            <span className={styles.heading}>Email</span>
            <a className={styles.info} href="mailto:info@email.com">
              info@email.com
            </a>
          </div>
          <div className={styles.infoGroup}>
            <span className={styles.heading}>Hours</span>
            <span className={styles.info}>Mon to Sat: 9am to 7pm</span>
          </div>
        </div>
      </section>
    </main>
  )
}
