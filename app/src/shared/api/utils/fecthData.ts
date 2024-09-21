import type {AxiosInstance} from "axios";

export const fetchData = async <T>(
    axiosClassic: AxiosInstance,
    path: string,
    cmd: string,
    signal?: AbortSignal
): Promise<T> => {
    const baseUrl = axiosClassic.defaults.baseURL;
    const params = new URLSearchParams({cmd});
    const response = await fetch(`${baseUrl}${path}?${params}`, {signal});
    if (!response.ok) {
        throw new Error(`Failed to fetch ${path} data for command: ${cmd}`);
    }
    return response.json();
};