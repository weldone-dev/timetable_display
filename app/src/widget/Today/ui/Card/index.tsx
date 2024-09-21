import cn from "clsx";
import type { IResponseTimetableGroupContentItemToday, IResponseTimetableContentTeacherItemToday } from "@/shared/api/types";
import { Subject } from "./Subject";
import { NotPart } from "./NotPart";

interface CardProps {
    part: IResponseTimetableGroupContentItemToday | IResponseTimetableContentTeacherItemToday;
}

export const Card = ({ part }: CardProps) => {
    const isUpdated = part.updatedPart;

    if (part.subject === "undefined") {
        return <NotPart isUpdated={isUpdated} />;
    }

    return (
        <div className="flex flex-col gap-[5px]">
            <Subject isUpdated={isUpdated} subject={part.subject} />
            <div className="flex flex-col gap-[24px]">
                {part.with.map((value, index) => (
                    <div className={cn("flex gap-[32px] text-[48px] font-semibold leading-[59px]")} key={index}>
                        {value.room && (
                            <div
                                className={cn(
                                    "flex justify-center items-center w-[178px] rounded-[40px]",
                                    isUpdated ? "bg-[#00000033] text-white" : "bg-[#0000000D] text-[#292D34]"
                                )}
                            >
                                {value.room}
                            </div>
                        )}
                        <div className={cn("text-[48px] font-medium leading-[59px]", isUpdated ? "text-white" : "text-[#292D34]")}>
                            {"shortTeacherName" in value
                                ? value.shortTeacherName
                                : value.group
                            }
                        </div>
                    </div>
                ))}
            </div>
            <div className={cn("w-full text-end text-[48px] leading-[59px] font-normal", isUpdated ? "text-white" : "text-[#AFAFAF]")}>
                {part.time}
            </div>
        </div>
    );
};