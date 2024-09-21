"use client"
import Link from "next/link";
import cn from "clsx";
import {usePathname} from "next/navigation";

export function Navigation() {
    const pathname = usePathname()
    return (
        <ul className={"w-full p-[32px] flex text-[#3D46A1] text-[48px] font-medium leading-[60px] font-montserrat bg-white rounded-[60px] shadow-[0px_12px_50px_0px_rgba(0,0,0,0.2)]"}>
            {([
                {text: "Группы", uri: "/group"},
                {text: "Преподаватели", uri: "/teachers"},
                {text: "Кабинеты", uri: "/office"}
            ]).map(item => (
                <li
                    key={item.uri}
                    className={cn("w-full rounded-[30px]  ", {
                        "bg-[#3D46A1] text-white": pathname === item.uri
                    })}
                >
                    <Link href={item.uri} className={"block w-full py-[32px] text-center"} draggable={"false"}>{item.text}</Link>
                </li>
            ))}
        </ul>
    )
}