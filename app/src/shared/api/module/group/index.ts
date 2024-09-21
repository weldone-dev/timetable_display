import {AxiosInstance} from "axios";
import {fetchData} from "@/shared/api/utils/fecthData";
import type {
    IResponseTimetableListGroupSemester,
    IResponseTimetableListGroupToday
} from "@/shared/api/types";


export const Group = (axiosClassic: AxiosInstance) => {
    return {
        getListName(signal?: AbortSignal) {
            return fetchData<string[]>(axiosClassic, "/journal/groups", "group-name", signal);
        },

        getListTimetableForDay(signal?: AbortSignal) {
            return fetchData<IResponseTimetableListGroupToday>(axiosClassic, "/journal/groups", "today", signal);
        },

        getListTimetableSemester(signal?: AbortSignal) {
            return fetchData<IResponseTimetableListGroupSemester>(axiosClassic, "/journal/groups", "all-semester", signal);
        }
    }
}