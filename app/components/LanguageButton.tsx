"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { InternationalizatinContext } from "../context/internationalization";

export const LanguageButton: React.FC = () => {
    const { language: [lng, setLanguage] } = useContext(InternationalizatinContext)

    const toggleLanguage = () => setLanguage(prevLng => prevLng === "en" ? "th" : "en")

    return (
        <div className={`${lng}-mode`}>
        <button className="dark-mode-button top-lang-button" aria-label="dark mode toggle" onClick={toggleLanguage}>
            <Image className="th" aria-hidden="true" src={`/images/th_flag_icon_round.svg`} alt="" width="24" height="24"/>
            <Image className="en" aria-hidden="true" src={`/images/en_flag_icon_round.svg`} alt="" width="24" height="24"/>
        </button></div>
    )
}