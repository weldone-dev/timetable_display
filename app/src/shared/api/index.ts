import {axiosClassicClient} from "./utils/axiosClassic";
import {Room, Group, Teacher} from "./module";

const client = axiosClassicClient();
export const serviceAPIOnClient = {
    room: Room(client),
    group: Group(client),
    teacher: Teacher(client)
}