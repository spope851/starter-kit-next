import Image from 'next/image'
import styles from './page.module.css'
import { ReactNode, Fragment } from 'react'

const REVIEWS = [
    {
        name: "Leah M",
        stars: 5
    },
    {
        name: "Chad K.",
        stars: 4
    },
    {
        name: "Kaytlyn Wallin",
        stars: 3
    },
    {
        name: "Ryan P",
        stars: 2
    },
    {
        name: "Marco P.",
        stars: 1
    },
]

export default function Home() {
  return (
    <main id="main">
    
        {/* <!-- ============================================ -->
        <!--                    LANDING                   -->
        <!-- ============================================ --> */}
    
        <section className={styles.initHero}>
            <h1 id="home-h">Testimonials</h1>
        </section>

        {/* <!-- ============================================ -->
        <!--                 TESTOMONIES                  -->
        <!-- ============================================ --> */}
        
        <section className={styles.reviews}>
            {REVIEWS.map(({ name, stars }) => <Fragment key={name}><div className={styles.stars}>
                {[1,2,3,4,5].reduce((p: ReactNode[], _, idx) => {
                if (idx < stars) p.push(<Image key={idx} loading="lazy" decoding="async" src="/images/star.svg" alt="" height="30" width="30"/>)
                return p
}               , [])}
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis assumenda voluptatum dolor quaerat labore quis commodi impedit quod inventore reiciendis beatae, ab molestias veniam quam sequi magnam natus aut?
            </p>
            <span className={styles.name}>{name}</span></Fragment>)}
        </section>
    </main>
  )
}
