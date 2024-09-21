"use client"
import {useCallback} from "react";
import {serviceAPIOnClient} from "@/shared/api";
import type {IResponseTimetableListTeacherComplexToday} from "@/shared/api/types";
import {TodayContentItem} from "@/widget/Today/ui/TodayContentItem";
import {List} from "./List";

export function Today() {

    const fetchFunction = useCallback((signal: AbortSignal) => (serviceAPIOnClient.teacher.getListTimetableForDay(signal)), []);
    return (
        <List<IResponseTimetableListTeacherComplexToday>
            fetchFunction={fetchFunction}
            noDataMessage="Ничего не найдено по запросу"
            ContentComponent={TodayContentItem}
        />
    );
}