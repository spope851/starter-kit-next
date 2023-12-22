import { Box, styled } from '@mui/material'

export const InitHero = styled(Box)(({ theme }) => {
  const fileName = `/images/about${theme.palette.mode === 'light' ? '' : '-dark'}`

  return {
    minHeight: '15em',
    height: '15em',
    marginTop: '7.4em',
    backgroundImage: `url(${fileName}.jpg)`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    fontSize: 'inherit',
    h1: {
      color: '#fff',
      fontSize: '3.2em',
      textAlign: 'center',
      margin: 0,
      position: 'relative',
      ':before': {
        content: "''",
        position: 'absolute',
        display: 'block',
        height: '200%',
        width: '40%',
        maxWidth: '250px',
        background: 'transparent',
        border: '0.15625em solid var(--primary)',
        opacity: 0.5,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: -1,
      },
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '50vh',
      backgroundImage: `url(${fileName}-mobile.jpg)`,
    },
  }
})
