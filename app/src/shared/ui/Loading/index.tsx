"use client"
import {useEffect} from "react";
import Image from "next/image";
import icon from "./icon.png";
export const Loading = () => {
    useEffect(()=>{
        const previousStyle = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previousStyle;
        }
    }, [])
    return (
        <div className={"absolute w-full h-full inset-0"}>
            <div className={"absolute inset-0 bg-[#0000004D] z-0"}></div>
            <div
                className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_30px_50px_0_rgba(0,0,0,0.15)] w-[256px] h-[256px] rounded-[60px] flex justify-center items-center bg-white z-10"}>
                <div className={"animate-spin "}>
                    <Image src={icon} alt={""} width={96} height={96} className={"transform -scale-y-[1]"}/>
                </div>
            </div>
        </div>
    )
}