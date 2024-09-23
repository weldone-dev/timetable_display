import axios, {type CreateAxiosDefaults} from "axios";

export const axiosClassicClient = () => {
    return axios.create({
            baseURL: "/api",
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        } as CreateAxiosDefaults
    )
}