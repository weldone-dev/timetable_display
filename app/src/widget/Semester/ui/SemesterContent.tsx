"use client"
import type {
    IResponseTimetableListGroupComplexSemester,
    IResponseTimetableListTeacherComplexSemester
} from "@/shared/api/types";
import {TimetableWeekTable} from "./TimetableWeekTable";

interface IProps {
    data: IResponseTimetableListGroupComplexSemester | IResponseTimetableListTeacherComplexSemester;
}

export const SemesterContent = ({data}: IProps) => (
    <div className={"w-full"}>
        <h2 className={"text-[64px] font-bold leading-[78px] text-[#3D46A1]"}>
            {("teacher" in data) && data.teacher}
            {("group" in data) && data.group}
        </h2>
        <div className={"mt-[64px] mb-[32px]"}>
            <h3 className={"font-semibold text-[48px] leading-[59px] text-[#5A5A5A]"}>Неделя 1</h3>
            <div className={"text-center mt-[26px] pb-2.5 "}>
                <TimetableWeekTable content={data.timetable?.weekOdd}/>
            </div>
        </div>
        <div className={"mt-[64px] mb-[32px]"}>
            <h3 className={"font-semibold text-[48px] leading-[59px] text-[#5A5A5A]"}>Неделя 2</h3>
            <div className={"text-center mt-[26px] pb-2.5 "}>
                <TimetableWeekTable content={data.timetable?.weekEven}/>
            </div>
        </div>
    </div>
);

