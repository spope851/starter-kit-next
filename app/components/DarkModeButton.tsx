"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeModeContext } from "../context/theme";

export const DarkModeButton: React.FC = () => {
    const { toggleThemeMode } = useContext(ThemeModeContext)

    return (
        <button className="dark-mode-button top-dark-mode-button" aria-label="dark mode toggle" onClick={toggleThemeMode}>
            <Image className="moon" aria-hidden="true" src="/images/moon.svg" alt="" width="24" height="24"/>
            <Image className="sun" aria-hidden="true" src="/images/sun.svg" alt="" width="24" height="24"/>
        </button>
    )
}