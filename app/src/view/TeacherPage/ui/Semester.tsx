"use client"
import {useCallback} from "react";
import {serviceAPIOnClient} from "@/shared/api";
import type {IResponseTimetableListTeacherComplexSemester,} from "@/shared/api/types";
import {SemesterContent} from "@/widget/Semester";
import {List} from "./List";

export function Semester() {
    const fetchFunction = useCallback(
        (signal: AbortSignal) => (serviceAPIOnClient.teacher.getListTimetableForSemester(signal)),
        []
    );
    return (
        <List<IResponseTimetableListTeacherComplexSemester>
            fetchFunction={fetchFunction}
            noDataMessage="Ничего не найдено по запросу"
            ContentComponent={SemesterContent}
        />
    )
}