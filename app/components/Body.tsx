"use client";
import { Box, BoxProps, useTheme } from "@mui/material";
import React from "react";

export const Body: React.FC<BoxProps> = ({ children }) => {
    const theme = useTheme()

    return (
        <Box component="body" className={theme.palette.mode === "light" ? "" : "dark-mode"}>
            {children}
        </Box>
    )
}