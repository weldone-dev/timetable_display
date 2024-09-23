import type {IResponseRoom} from "@/shared/api/module/room/types";
import type {IMode} from "../helpers/types";
import {useCallback} from "react";
import {useFetch} from "@/shared/hooks/useFetch";
import {Error} from "@/shared/ui/Error";
import {Loading} from "@/shared/ui/Loading";
import {serviceAPIOnClient} from "@/shared/api";


const fetchFunctions = {
    group: (signal: AbortSignal) => serviceAPIOnClient.room.getGroup(signal),
    teacher: (signal: AbortSignal) => serviceAPIOnClient.room.getTeacher(signal),
};


interface IProps {
    mode: IMode;
}

export function RoomContent ({ mode }: IProps) {
    const fetchFunction = useCallback((signal: AbortSignal) => fetchFunctions[mode](signal), [mode]);
    const {data, error, loading, refetch} = useFetch<IResponseRoom>(fetchFunction);

    if (error) {
        return (<Error text={"Не удалось загрузить расписание"} refetch={refetch} />);
    }
    if (loading || !data ) {
        return <Loading/>;
    }
    return (
        <>
            <div className={"mb-[128px]"}>
                <h2 className={"text-[#5A5A5A] text-[64px] leading-[78px] font-bold"}>{data.date}</h2>
            </div>
            <div className={"flex flex-col gap-[32px]"}>
                {data.content.map((content, i) => (
                    <div key={`${content.title}-${i}`} className={"flex gap-[32px]"}>
                        <div className={"w-full text-[#3D46A1] text-[42px] leading-[63px] font-bold basis-[250%] whitespace-nowrap overflow-hidden"}>
                            {content.title}
                        </div>
                        {content.items.map((item, index) => (
                            <div
                                key={`${content.title}-${i}-${index}`}
                                className={"bg-[#3D46A1] rounded-[50px] min-w-[50px] h-[63px] flex basis-full justify-center items-center text-white text-[32px] font-medium leading-[39px]"}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}