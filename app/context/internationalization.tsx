"use client";
import React, { Dispatch, ReactNode, SetStateAction, createContext, useMemo, useState } from "react";
import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import parser from 'accept-language-parser'

type SupportedLanguages = 'en' | 'th'

const SUPPORTED_LANGUAGES: SupportedLanguages[] = ["en", "th"]

type InternationalizatinContextProps = {
    language: [SupportedLanguages | null, Dispatch<SetStateAction<SupportedLanguages | null>>]
}

export const InternationalizatinContext = createContext({} as InternationalizatinContextProps)

export const InternationalizationProvider: React.FC<{ children: ReactNode, defaultLng: string | null }> = ({ children, defaultLng }) => {
    const supportedLng = parser.pick(SUPPORTED_LANGUAGES, String(defaultLng))
    const language = useState(supportedLng)
    
    useMemo(() => i18n.use(initReactI18next).init({
        debug: process.env.NODE_ENV === "development",
        lng: language[0] ?? undefined,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    home: {
                        main: {
                            head: "Main headline, put top keyword here",
                            subHead: "Expand on the keyword with more keywords and add a list of related services that you do and include the city, state of your service area.",
                        }
                    }
                }
            },
            th: {
                translation: {
                    home: {
                        main: {
                            head: "พาดหัวหลัก ใส่คีย์เวิร์ดยอดนิยมที่นี่",
                            subHead: "ขยายคำหลักด้วยคำหลักเพิ่มเติม และเพิ่มรายการบริการที่เกี่ยวข้องที่คุณทำ และระบุเมือง รัฐของพื้นที่ให้บริการของคุณ",
                        }
                    }
                }
            }
        }
    }), [language])

    const contextValue = useMemo(() => {
        return {
            language
        }
    }, [language])

    return (
        <InternationalizatinContext.Provider value={contextValue}>{children}</InternationalizatinContext.Provider>
    )
}