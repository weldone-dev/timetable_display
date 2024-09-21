import cn from "clsx";
import type {
    IResponseTimetableListGroupComplexToday,
    IResponseTimetableListTeacherComplexToday
} from "@/shared/api/types";
import {Card} from "../ui/Card";

export const TodayContentItem = ({data}: { data: IResponseTimetableListTeacherComplexToday | IResponseTimetableListGroupComplexToday }) => (
    <div className={"mt-[176px]"}>
        <h2 className={"text-[64px] font-bold leading-[78px] text-[#3D46A1] mb-[64px]"}>
            {("teacher" in data) && data.teacher}
            {("group" in data) && data.group}
        </h2>
        <p className={"text-[48px] font-semibold leading-[59px] text-[#5A5A5A] mb-[64px]"}>{data.date}</p>
        <div className={"flex flex-col gap-[32px]"}>
            {data.content.map((contentItem, index) => (
                <div key={index} className={cn(
                    "p-[48px] rounded-[60px]",
                    contentItem.updatedPart
                        ? "bg-[#3D46A1]"
                        : "bg-white"
                )}>
                    <Card part={contentItem}/>
                </div>
            ))}
        </div>
    </div>
)