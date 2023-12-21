"use client";
import React, { Dispatch, ReactNode, SetStateAction, createContext, useMemo, useState } from "react";
import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import parser from 'accept-language-parser'
import en from '@/app/data/i18n/en.json'
import th from '@/app/data/i18n/th.json'
import { usePathname } from "next/navigation";

type SupportedLanguages = 'en' | 'th'

const SUPPORTED_LANGUAGES: SupportedLanguages[] = ["en", "th"]

type InternationalizatinContextProps = {
    language: [SupportedLanguages | null, Dispatch<SetStateAction<SupportedLanguages | null>>]
}

export const InternationalizatinContext = createContext({} as InternationalizatinContextProps)

export const InternationalizationProvider: React.FC<{ children: ReactNode, defaultLng: string | null }> = ({ children, defaultLng }) => {
    const supportedLng = parser.pick(SUPPORTED_LANGUAGES, String(defaultLng))
    const language = useState(supportedLng)
    const ns = usePathname().split("/").at(-1) || "home"
    
    useMemo(() => i18n.use(initReactI18next).init({
        debug: process.env.NODE_ENV === "development",
        lng: language[0] ?? undefined,
        ns,
        fallbackLng: 'en',
        resources: {
            en,
            th
        }
    }), [language, ns])

    const contextValue = useMemo(() => {
        return {
            language
        }
    }, [language])

    return (
        <InternationalizatinContext.Provider value={contextValue}>{children}</InternationalizatinContext.Provider>
    )
}