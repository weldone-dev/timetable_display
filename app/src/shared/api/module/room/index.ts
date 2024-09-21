import type {IResponseRoom} from "./types";
import {AxiosInstance} from "axios";
import {fetchData} from "@/shared/api/utils/fecthData";

export const Room = (axiosClassic: AxiosInstance) => {
    return {
        async getGroup(signal?: AbortSignal) {
            return fetchData<IResponseRoom>(axiosClassic, "/journal/rooms", "get-group", signal);
        },
        async getTeacher(signal?: AbortSignal): Promise<IResponseRoom> {
            return fetchData<IResponseRoom>(axiosClassic, "/journal/rooms", "get-teacher", signal);
        }
    }
}