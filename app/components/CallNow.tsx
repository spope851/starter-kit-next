"use client";
import { Box, BoxProps, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from '../page.module.css'

export const CallNow: React.FC<BoxProps> = ({ className }) => {
    const theme = useTheme()
    const TEXT_SX = {
        color: theme.palette.mode === "light" ? "#000" : "#fff"
    }

    return (
        <Box className={className} component="a" href="tel:555-213-9120">
            <Image decoding="async" src={theme.palette.mode === "light" ? "/images/phone.svg": "/images/phone-dark.svg"} alt="" aria-hidden="true" width="21" height="21"/>
            <div className={styles.group}>
                <Box component="span" className={styles.text} sx={TEXT_SX}>Call Now</Box>
                <Box component="span" className={styles.number} sx={TEXT_SX}>(555) 213-9120</Box>
            </div>
        </Box>
    )
}