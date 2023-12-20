"use client";
import { Box, BoxProps, useTheme } from "@mui/material";
import React from "react";

export const Hero: React.FC<BoxProps> = ({children, sx, ...props}) => {
    const theme = useTheme()

    return (
        <Box {...props} sx={{
            ...sx,
            ":before": {
                background: theme.palette.mode === "light" ? "#ECEFFE" : "#000"
            }
        }}>
            {children}
        </Box>
    )
}