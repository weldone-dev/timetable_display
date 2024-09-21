
export interface IResponseRoom{
    date: string;
    content: IResponseRoomContent[];
}

export interface IResponseRoomContent {
    title: string;
    items: [string, string, string, string, string];
}