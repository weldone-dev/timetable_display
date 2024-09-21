import type {IResponseRoom} from "@/shared/api/module/room/types";

export function RoomContent ({ data }: { data:  IResponseRoom }) {
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