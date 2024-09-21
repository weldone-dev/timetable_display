import {type FC} from "react";
import {Loading} from "@/shared/ui/Loading";
import {Error} from "@/shared/ui/Error";
import {useFetch} from "@/shared/hooks/useFetch";
import {useAppSelector} from "@/view/GroupPage/model";

interface ListProps<T extends { group: string }> {
    fetchFunction: (signal: AbortSignal) => Promise<T[]>;
    noDataMessage: string;
    ContentComponent: FC<{ data: T }>;
}

export function List<T extends { group: string }>(
    {
        fetchFunction,
        noDataMessage,
        ContentComponent,
    }: ListProps<T>
) {
    const {data, error, refetch} = useFetch<T[]>(fetchFunction);
    const inputValue = useAppSelector(state => state.group.inputValue);

    const filteredData = data?.filter(value =>
        value.group.toLowerCase().startsWith(inputValue.toLowerCase())
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
                <ContentComponent key={item.group} data={item}/>
            ))}
        </div>
    );
}
