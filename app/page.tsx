'use client'
import styles from './page.module.css'
import { Box, Button, Typography, styled } from '@mui/material'
import { CallNow } from './components/CallNow'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'

const Hero = styled(Box)(({ theme }) => {
  return {
    fontSize: 'inherit',
    paddingBottom: '14em',
    paddingTop: '15em',
    position: 'relative',
    zIndex: 1,
    backgroundImage: "url('/images/landing.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    ':before': {
      content: "''",
      position: 'absolute',
      display: 'block',
      height: '100%',
      width: '100%',
      opacity: 0.9,
      top: 0,
      left: 0,
      zIndex: -10,
      background: theme.palette.mode === 'light' ? '#ECEFFE' : '#000',
    },
    h1: {
      fontWeight: 'bold',
      fontSize: '2.8em',
      color: '#000000',
      lineHeight: 1.17857143,
      marginBottom: '0.41071429em',
    },
    p: {
      fontSize: '0.9em',
      color: '#595959',
      lineHeight: 1.5,
      marginBottom: '1.33333333em',
    },
    '& .MuiButton-root': {
      margin: 0,
      marginRight: '2.88888889em',
      height: '2.94444444em',
      paddingTop: '0.16666667em',
    },
    '& #heroContent': {
      width: '96%',
      maxWidth: '57.2em',
      margin: 'auto',
      position: 'relative',
      zIndex: 10,
      padding: 0,
    },
    '& #ryan': {
      right: '2.5em',
      display: 'block',
      width: '17.5em',
      position: 'absolute',
      top: '-3.5em',
    },
    [theme.breakpoints.down('md')]: {
      '& #heroContent': {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
      },
      '& #ryan': {
        right: 0,
      },
      padding: '6.15em 0 11.45em 0',
      overflow: 'hidden',
    },
    [theme.breakpoints.down('sm')]: {
      '& #ryan': {
        display: 'none',
      },
      paddingTop: '5em',
      paddingBottom: '13.em',
      backgroundAttachment: 'fixed',
      backgroundImage: "url('/images/landing-mobile.jpg')",
    },
  }
})

export default function Home() {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <Box component="main" minHeight="50em" id="main">
      <Hero component="section">
        <Box id="heroContent">
          <Box width="100%" maxWidth="28.9em">
            <h1>{t('main.head')}</h1>
            <p>{t('main.subHead')}</p>
            <Box display="flex" justifyContent="flex-start">
              <Button onClick={() => router.push('/about')}>About Us</Button>
              <CallNow />
            </Box>
          </Box>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="ryan"
            decoding="async"
            src="/images/ryan-caselli.png"
            alt="ryan"
          />
        </Box>
      </Hero>

      {/* <!-- ============================================ -->
          <!--                  Services                    -->
          <!-- ============================================ --> */}

      <section className={styles.services} id="services">
        <div className={styles.service}>
          <Typography component="h2" maxWidth={200}>
            {t('services.left.title')}
          </Typography>
          <p>{t('services.left.subtitle')}</p>

          <Button
            onClick={() => router.push('/contact')}
            sx={{
              background: '#fff !important',
              color: '#0e817c !important',
              ':hover': {
                color: '#fff !important',
                '::before': {
                  background: '#10625e !important',
                },
              },
            }}
          >
            Get in Touch
          </Button>
        </div>
        <div className={styles.service}>
          <Typography component="h2" maxWidth={200}>
            {t('services.center.title')}
          </Typography>
          <p>{t('services.center.subtitle')}</p>
          <Button
            onClick={() => router.push('/contact')}
            sx={{
              background: '#fff !important',
              color: '#10625e !important',
              ':hover': {
                color: '#fff !important',
                '::before': {
                  background: '#0e817c !important',
                },
              },
            }}
          >
            Get in Touch
          </Button>
        </div>
        <div className={styles.service}>
          <Typography component="h2" maxWidth={200}>
            {t('services.right.title')}
          </Typography>
          <p>{t('services.right.subtitle')}</p>
          <Button
            onClick={() => router.push('/contact')}
            sx={{
              background: '#fff !important',
              color: '#0e817c !important',
              ':hover': {
                color: '#fff !important',
                '::before': {
                  background: '#10625e !important',
                },
              },
            }}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </Box>
  )
}
