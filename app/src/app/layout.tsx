import cn from "clsx";
import type {Metadata} from "next";
import Script from "next/script";
import {Inter, Montserrat} from "next/font/google";
import React from "react";
import "./globals.css";
import {InactivityRedirect} from "@/shared/ui/InactivityRedirect";
import {DisableContextMenu} from "@/shared/ui/DisableContextMenu";

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
})
const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
    variable: "--font-latin"
});

export const metadata: Metadata = {
    title: "App",
    description: "Display Timetable App",
};

export default function RootLayout(
    {children,}: Readonly<
        { children: React.ReactNode; }
    >) {
    return (
        <html lang="ru">
        <body className={cn(montserrat.variable, inter.variable, "font-montserrat")}>
        {children}
        <InactivityRedirect/>
        <DisableContextMenu />
        <Script src={"/script.js"}></Script>
        </body>
        </html>
    );
}
