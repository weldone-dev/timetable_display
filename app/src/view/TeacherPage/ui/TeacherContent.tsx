"use client"
import {useEffect} from "react";
import {FooterGroupOrTeacher} from "@/shared/ui/FooterGroupOrTeacher";
import {setInputValue, setMode, useAppDispatch, useAppSelector} from "../model";
import {Semester} from "./Semester";
import {Today} from "./Today";
import {Search} from "./Search";
import {Keyboard} from "./Keyboard";


export const TeacherContent = () => {
    const dispatch = useAppDispatch();
    const isInputFocused = useAppSelector(state => state.teacher.isInputFocus);
    const mode = useAppSelector(state => state.teacher.mode);

    useEffect(() => {
        dispatch(setMode("today"));
        dispatch(setInputValue(""));
    }, [dispatch]);

    return (
        <div className={"w-full h-full flex flex-col"}>
            <main className={"pb-[468px]"}>
                <h1 className={"mt-[128px] text-[#3D46A1] text-[96px] font-bold leading-[117px]"}>
                    Расписание по преподавателям
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
    );
}