"use client"
import {useEffect} from "react";
import {FooterGroupOrTeacher} from "@/shared/ui/FooterGroupOrTeacher";
import {useAppDispatch, useAppSelector, setMode, setSearchValue} from "../model";
import {Semester} from "./Semester";
import {Today} from "./Today";
import {Search} from "./Search"
import {Keyboard} from "./Keyboard";

export function GroupPageContent() {
    const dispatch = useAppDispatch();
    const isInputFocused = useAppSelector(state => state.group.isInputFocus);
    const mode = useAppSelector(state => state.group.mode);
    useEffect(() => {
        dispatch(setMode("today"))
        dispatch(setSearchValue(""))
    }, [dispatch])
    return (
        <div className={"w-full h-full flex flex-col"}>
            <main className={"pb-[468px]"}>
                <h1 className={"mt-[128px] text-[#3D46A1] text-[96px] font-bold leading-[117px]"}>
                    Расписание по группам
                </h1>
                <div>
                    {mode === "semester" && (<Semester/>)}
                    {mode === "today" && (<Today/>)}
                </div>
            </main>
            <FooterGroupOrTeacher
                mode={mode}
                isInputFocused={isInputFocused}
                search={<Search/>}
                keyboard={<Keyboard/>}
                onSelectMode={(e) => dispatch(setMode(e))}
            />
        </div>
    )
}