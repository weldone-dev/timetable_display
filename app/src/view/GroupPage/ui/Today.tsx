"use client"
import {useCallback} from "react";
import type {IResponseTimetableListGroupComplexToday} from "@/shared/api/types";
import {serviceAPIOnClient} from "@/shared/api";
import {TodayContentItem} from "@/widget/Today/ui/TodayContentItem";
import {List} from "./List";

export const Today = () => {
    const fetchFunction = useCallback(
        (signal: AbortSignal) => serviceAPIOnClient.group.getListTimetableForDay(signal),
        []
    );
    return (
        <List<IResponseTimetableListGroupComplexToday>
            fetchFunction={fetchFunction}
            noDataMessage="Ничего не найдено по запросу"
            ContentComponent={TodayContentItem}
        />
    );

}