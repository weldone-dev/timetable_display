import cn from "clsx";

interface IProps {
    isFocused: boolean;
    inputValue: string;
    data: string[] | null;
    handleClickSearchName: (e: string) => void;
    handleSearchFilter?: (value: string) => string[]
}

export const DropdownList = (
    {
        isFocused,
        inputValue,
        data,
        handleClickSearchName,
        handleSearchFilter
    }: IProps
) => {
    function handleFilter(value: string) {
        return handleSearchFilter
            ? handleSearchFilter(value)
            : value.toLowerCase().startsWith(inputValue)
    }

    return (
        (isFocused) && (
            <div
                className={cn("p-[48px] pb-[50px] -mb-[50px] rounded-t-[60px] bg-white", inputValue ? "opacity-100" : "opacity-0")}>
                <ul className={cn("mb-[30px] overflow-auto transition-all duration-150", inputValue ? "max-h-[500px]" : "max-h-0")}>
                    {data
                        ?.filter(value => handleFilter(value))
                        .map((item) => (
                            <li key={item}
                                className={"text-[#3D46A1] text-[48px] font-semibold leading-[59px] cursor-pointer py-[12px]"}
                                onClick={() => handleClickSearchName(item)}
                            >
                                {item}
                            </li>
                        ))}

                </ul>
            </div>
        )
    )
}