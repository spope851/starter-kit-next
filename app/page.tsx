import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main} id='main'>
    
    {/* <!-- ============================================ -->
    <!--                    LANDING                   -->
    <!-- ============================================ --> */}

    <section className={styles.hero}>
        <div className={styles.heroContent}>
            <div className={styles.heroText}>
                <h1 id="home-h">Main headline, put top keyword here</h1>
                <p>
                    Expand on the keyword with more keywords and add a list of related services that you do and include the city, state of your service area.  
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
                    <a className={styles.callNow} href="tel:555-213-9120">
                        <Image className={styles.light} decoding="async" src="/images/phone.svg" alt="" aria-hidden="true" width="21" height="21"/>
                        <Image className={styles.dark} decoding="async" src="/images/phone-dark.svg" alt="" aria-hidden="true" width="21" height="21"/>
                        <div className={styles.group}>
                            <span className={styles.text}>Call Now</span>
                            <span className={styles.number}>(555) 213-9120</span>
                        </div>
                    </a>
                </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img decoding="async" src="/images/ryan-caselli.png" alt="" className={styles.businessCasual}/>
        </div>
    </section>

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
