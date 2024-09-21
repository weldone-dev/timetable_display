"use client"
import {useCallback, useState} from "react";
import {Navigation} from "@/shared/ui/Navigation";
import {Loading} from "@/shared/ui/Loading";
import {Error} from "@/shared/ui/Error";
import {useFetch} from "@/shared/hooks/useFetch";
import {serviceAPIOnClient} from "@/shared/api";
import type {IResponseRoom} from "@/shared/api/module/room/types";
import type {IMode} from "./helpers/types";
import {RoomContent} from "./ui/RoomContent";
import {Mode} from "./ui/Mode";

const fetchFunctions = {
    group: (signal: AbortSignal) => serviceAPIOnClient.room.getGroup(signal),
    teacher: (signal: AbortSignal) => serviceAPIOnClient.room.getTeacher(signal),
};


export function OfficePage() {
    const [mode, setMode] = useState<IMode>("group");
    const fetchFunction = useCallback((signal: AbortSignal) => fetchFunctions[mode](signal), [mode]);
    const {data, error, loading, refetch} = useFetch<IResponseRoom>(fetchFunction);

    if (error) {
        return (<Error text={"Не удалось загрузить расписание"} refetch={refetch} />)
    }
    return (
        <div className={"w-full h-full flex flex-col font-montserrat"}>
            <main className={"pb-[468px]"}>
                <h1 className={"my-[128px] text-[#3D46A1] text-[96px] font-bold leading-[117px]"}>
                    Кабинеты по {mode === "group" ? "группам" : "преподавателям"}
                </h1>
                <article>
                    {loading && <Loading />}
                    {data && <RoomContent data={data}/>}
                </article>
            </main>
            <footer className={"fixed bottom-[64px] w-full left-0 right-0 px-[64px]"}>
                <div className={"flex flex-col gap-y-[32px]"}>
                    <div className={"flex gap-[32px] w-full "}>
                        <Mode
                            isGroupMode={mode === "group"}
                            isTeacherMode={mode === "teacher"}
                            onSelect={(e) => setMode(e)}
                        />
                    </div>
                    <Navigation/>
                </div>
            </footer>
        </div>
    );
}

