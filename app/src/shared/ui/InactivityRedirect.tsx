"use client"
import { useEffect } from 'react';
import {usePathname, useRouter} from 'next/navigation';

export const InactivityRedirect = () => {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const resetTimer = () => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                if (pathname !== "/group") {
                    router.push('/group');
                }
            }, 2 * 60 * 1000); // 2 minutes
        };

        resetTimer();

        const typesListener = ["mousemove", "keydown","touchstart", "touchmove", "scroll"]
        typesListener.map((item)=>{
            document.addEventListener(item, resetTimer);
        })

        return () => {
            clearTimeout(timer);
            typesListener.map((item)=>{
                document.removeEventListener(item, resetTimer);
            })
        };
    }, [pathname, router]);

    return null;
};