"use client"
import styles from './page.module.css'
import { Button } from '@mui/material'
import { Hero } from './components/Hero'
import { CallNow } from './components/CallNow'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className={styles.main} id='main'>
    
    {/* <!-- ============================================ -->
    <!--                    LANDING                   -->
    <!-- ============================================ --> */}

    <Hero component="section" className={styles.hero}>
        <div className={styles.heroContent}>
            <div className={styles.heroText}>
                <h1>{t("main.head")}</h1>
                <p>
                    {t("main.subHead")}  
                </p>
                <div className={styles.buttons}>
                    <a className="button-solid" href="/about"
                    style={{ 
                        margin: 0,
                        marginRight: "2.88888889em",
                        height: "2.94444444em",
                        paddingTop: "0.16666667em"
                    }}>
                        About Us
                    </a>
                    <CallNow className={styles.callNow} />
                </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img decoding="async" src="/images/ryan-caselli.png" alt="" className={styles.businessCasual}/>
        </div>
    </Hero>

    {/* <!-- ============================================ -->
    <!--                  Services                    -->
    <!-- ============================================ --> */}

    <section className={styles.services} id="services">
        <div className={styles.service}>
            <h2>This is a main<span> service you do</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio dui, fermentum id augue.
            </p>

            <Button component="a" href="/contact" className="button-solid" sx={{
                background: "#fff !important",
                color: "#0e817c !important",
                ":hover": {
                    color: "#fff !important",
                    "::before": {
                        background: "#10625e !important"
                    }
                }
            }}>Get in Touch</Button>
        </div>
        <div className={styles.service}>
            <h2>This is THE main<span> service you do</span></h2>
            <p>
                Notice how this one is bigger and darker, this is your main service you provide.
            </p>
            <Button component="a" href="/contact" className="button-solid" sx={{
                background: "#fff !important",
                color: "#10625e !important",
                ":hover": {
                    color: "#fff !important",
                    "::before": {
                        background: "#0e817c !important"
                    }
                }
            }}>Get in Touch</Button>
        </div>
        <div className={styles.service}>
            <h2>This is a main<span> service you do</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio dui, fermentum id augue .
            </p>
            <Button component="a" href="/contact" className="button-solid" sx={{
                background: "#fff !important",
                color: "#0e817c !important",
                ":hover": {
                    color: "#fff !important",
                    "::before": {
                        background: "#10625e !important"
                    }
                }
            }}>Get in Touch</Button>
        </div>
    </section>

    {/* <!-- ============================================ -->
    <!--                   About                      -->
    <!-- ============================================ --> */}

    
    
    </main>
  )
}
