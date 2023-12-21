"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
    const { t } = useTranslation("global", {
        keyPrefix: "footer"
    })

    return (
        <footer id="footer">
            <div className="container">
                <div className="left-section">
                    <a className="logo" href="/"><Image loading="lazy" decoding="async" src="/images/logo-white.svg" alt="logo" width="293" height="91"/></a>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia sequi placeat dignissimos adipisci explicabo excepturi a beatae architecto autem.  
                    </p>
                </div>
                <div className="right-section">
                    <div className="lists">
                        <ul>
                            <li><h2>{t("company")}</h2></li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Services</a></li>
                        </ul>
                        <ul>
                            <li><h2>{t("support")}</h2></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                        <ul>
                            <li><h2>{t("contact")}</h2></li>
                            <li><Image loading="lazy" decoding="async" src="/images/pin.svg" alt="" width="24" height="24"/><a href="" target="_blank">Somewhere, Tx</a></li>
                            <li><Image loading="lazy" decoding="async" src="/images/footer-phone.svg" alt="" width="24" height="24"/><a href="tel:555-213-9120">(555) 213-9120</a></li>
                            <li><Image loading="lazy" decoding="async" src="/images/email.svg" alt="" width="24" height="24"/><a href="mailto:info@email.com">info@email.com</a></li>
                        </ul>
                    </div>

                    <div className="buttons">
                        <a className="button-solid" href="/contact" >
                            Call to action button
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}