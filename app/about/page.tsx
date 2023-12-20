import Image from 'next/image'
import styles from './page.module.css'

const MEMBERS = [
    {
        name: "Brad Pitt",
        role: "Owner/Operator"
    },
    {
        name: "Gus Chuggins",
        role: "Office Administrator/LVN"
    },
    {
        name: "Rip Magnificant",
        role: "PMHNP-BC"
    },
    {
        name: "Armie Sledgehammer",
        role: "PMHNP-BC"
    },
]

export default function Home() {
  return (
    <main id="main">
    
        {/* <!-- ============================================ -->
        <!--                    LANDING                   -->
        <!-- ============================================ --> */}
    
        <section className={styles.initHero}>
            <h1 id="home-h">About Company</h1>
        </section>

        {/* <!-- ============================================ -->
        <!--                     About                    -->
        <!-- ============================================ --> */}
    
        <section className={styles.aboutContent}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image decoding="async" src="/images/about-image.jpg" alt="" width="500" height="400" />
                </div>
                <div className={styles.content}>
                    <span className={styles.topper}>Who We Are</span>
                    <h2>Headline that describes your business.  Make it two lines</h2>
                    <div aria-hidden="true" className={styles.decoration}>
                        <Image src="/images/leaf.svg" alt="" width="30" height="30" />
                        <div className={styles.line}></div>
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam laborum impedit assumenda ut doloremque, culpa dignissimos quaerat tenetur suscipit mollitia quod nobis cupiditate hic ducimus repudiandae ipsum similique iste voluptatem! Omnis velit dolorum fugit assumenda maiores tempora et molestias numquam. Dolorum, quas quisquam iure maiores a ipsam sequi quam laborum.   
                    </p>
                </div>
            </div>
        </section>

        {/* <!-- ============================================ -->
        <!--                     Staff                    -->
        <!-- ============================================ --> */}
    
        <section className={styles.staff}>
            <span className={styles.topper}>Our Team</span>
            <h2>Meet Our Staff</h2>
            <p className={styles.mainP}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, eum voluptates. Provident nesciunt aspernatur iusto ea? Ipsam eos sed culpa.
            </p>
            <div className={styles.container}>
                {MEMBERS.map(({ name, role }) => <div key={name} className={styles.member}>
                    <div className={styles.image}>
                        <Image decoding="async" src="/images/about-image.jpg" alt="" width="400" height="400" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.desc}>
                            <h3>{name}</h3>
                            <span className={styles.title}>{role}</span></div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eos asperiores, magni atque, a, necessitatibus consectetur molestiae rerum quaerat cum fugiat soluta quam voluptatum. Ut, totam debitis? Quisquam nesciunt tenetur officiis pariatur? Nostrum aspernatur officiis quos iusto nisi assumenda fugiat.
                        </p>
                    </div>
                </div>)}
            </div>
        </section>
        
    </main>
  )
}
