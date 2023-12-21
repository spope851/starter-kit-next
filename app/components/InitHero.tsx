'use client'
import { Box, styled } from '@mui/material'

export const InitHero = styled(Box)(({ theme }) => {
  const fileName = `/images/about${theme.palette.mode === 'light' ? '' : '-dark'}`

  return {
    [theme.breakpoints.down('sm')]: {
      background: `url(${fileName}-mobile.jpg)`,
    },
    background: `url(${fileName}.jpg)`,
  }
})
