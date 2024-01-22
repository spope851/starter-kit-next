'use client'
import { Box, styled, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

const StyledImage = styled(Image)({
  display: 'inline-block',
  width: '1.16666667em',
  height: '1.16666667em',
})

export const CallNow: React.FC = () => {
  const theme = useTheme()
  const { t } = useTranslation()
  const SHARED_SX = {
    color: theme.palette.mode === 'light' ? '#000' : '#fff',
    display: 'block',
    lineHeight: 1.16666667,
  }
  const TEXT_SX = {
    ...SHARED_SX,
    fontSize: '0.6em',
    textTransform: 'uppercase',
    marginBottom: '0.5em',
  }
  const NUMBER_SX = {
    ...SHARED_SX,
    fontWeight: 'bold',
    fontSize: '1em',
  }
  const WRAPPER_SX = {
    height: '2.94444444em',
    width: '9.11111111em',
    fontSize: '0.9em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: 'none',
    margin: 0,
  }

  return (
    <Box component="a" href={`tel:${t('main.phone')}`} sx={WRAPPER_SX}>
      <StyledImage
        decoding="async"
        src={
          theme.palette.mode === 'light'
            ? '/images/phone.svg'
            : '/images/phone-dark.svg'
        }
        alt=""
        aria-hidden="true"
        width="21"
        height="21"
      />
      <div>
        <Box component="span" sx={TEXT_SX}>
          {t('main.call')}
        </Box>
        <Box component="span" sx={NUMBER_SX}>
          {t('main.phone')}
        </Box>
      </div>
    </Box>
  )
}
