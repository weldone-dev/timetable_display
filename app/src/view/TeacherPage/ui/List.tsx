import {type FC} from "react";
import {useFetch} from "@/shared/hooks/useFetch";
import {Loading} from "@/shared/ui/Loading";
import {Error} from "@/shared/ui/Error";
import {useAppSelector} from "../model";

interface ListProps<T extends { teacher: string }> {
    fetchFunction: (signal: AbortSignal) => Promise<T[]>;
    noDataMessage: string;
    ContentComponent: FC<{ data: T }>;
}

export function List<T extends { teacher: string }>(
    {
        fetchFunction,
        noDataMessage,
        ContentComponent,
    }: ListProps<T>
) {
    const {data, error, refetch} = useFetch<T[]>(fetchFunction);
    const inputValue = useAppSelector(state => state.teacher.inputValue);

    const filteredData = data?.filter(value =>
        value.teacher.toLowerCase().startsWith(inputValue.toLowerCase())
    );

    if (error) {
        return <Error text={noDataMessage} refetch={refetch}/>;
    }
    if (!data) {
        return <Loading/>;
    }
    if (!filteredData?.length) {
        return (
            <div className="text-[#5A5A5A] text-[64px] font-bold leading-[78px]">
                Ничего не найдено по запросу “{inputValue}”
            </div>
        );
    }
    return (
        <div className="flex flex-col gap-[176px] mt-[176px]">
            {filteredData.map(item => (
                <ContentComponent key={item.teacher} data={item}/>
            ))}
        </div>
    );
}
