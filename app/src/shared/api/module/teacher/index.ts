import {AxiosInstance} from "axios";
import type {
    IResponseTimetableListTeacherSemester,
    IResponseTimetableListTeacherToday,
} from "@/shared/api/types";
import {fetchData} from "@/shared/api/utils/fecthData";


export const Teacher = (axiosClassic: AxiosInstance) => {
    return {
        async getListName(signal?: AbortSignal) {
            return fetchData<string[]>(axiosClassic, "/journal/teachers", "list-name", signal);
        },
        async getListTimetableForDay(signal?: AbortSignal) {
            return fetchData<IResponseTimetableListTeacherToday>(axiosClassic, "/journal/teachers", "today", signal);
        },
        async getListTimetableForSemester(signal?: AbortSignal) {
            return fetchData<IResponseTimetableListTeacherSemester>(axiosClassic, "/journal/teachers", "all-semester", signal);
        }
    }
}