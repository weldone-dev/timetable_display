"use client"
import cn from "clsx";
import {useCallback, useRef} from "react";
import {serviceAPIOnClient} from "@/shared/api";
import {useFetch} from "@/shared/hooks/useFetch";
import {SearchIcon} from "@/shared/ui/icons";
import {DropdownList, SelectedSearch} from "@/widget/Search";
import {setSearchFocus, setSearchValue, useAppDispatch, useAppSelector,} from "../model";

export function Search() {
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLInputElement>(null);

    const inputValue = useAppSelector(state => state.group.inputValue);
    const isFocused = useAppSelector(state => state.group.isInputFocus);

    const fetchFunction = useCallback((signal: AbortSignal) => (serviceAPIOnClient.group.getListName(signal)), []);
    const {data} = useFetch<string[]>(fetchFunction);


    const handleFocus = () => {
        dispatch(setSearchFocus(true));
    };

    const handleClickSearchGroupName = (groupName: string) => {
        dispatch(setSearchValue(groupName));
        dispatch(setSearchFocus(false));
    }

    const handleClearSelected = () => {
        dispatch(setSearchValue(""));
    }

    return (
        <div className={"w-full"}>
            <DropdownList
                isFocused={isFocused}
                inputValue={inputValue}
                data={data}
                handleClickSearchName={handleClickSearchGroupName}
            />
            <div
                className={cn("flex gap-x-[24px] w-full bg-white rounded-[60px] items-center p-[32px] font-montserrat shadow-[0px_12px_50px_0px_rgba(0,0,0,0.2)] ", {
                    ["border-[4px] border-[#3D46A1] shadow-[0_12px_50px_0_rgba(0,0,0,0.2),0_0_40px_0_rgba(101,115,255,0.5)]"]: isFocused,
                    ["!bg-[#3D46A1]"]: (inputValue && !isFocused)
                })}
            >
                <SearchIcon fill={(!!inputValue && !isFocused) ? "white" : "#3D46A1"}/>
                {
                    ((!!inputValue && !isFocused))
                        ? (<SelectedSearch handleClearSelected={handleClearSelected} inputValue={inputValue}/>)
                        : (
                            <input
                                ref={ref}
                                type={"text"}
                                onFocus={handleFocus}
                                value={inputValue}
                                maxLength={10}
                                onChange={(e) => e.preventDefault()}
                                className={"text-[#292D34] text-[48px] font-medium leading-[60px] focus:outline-none w-full placeholder:text-[#3D46A1] select-none"}
                                placeholder={(!isFocused && "Поиск по группе") || ""}
                            />
                        )
                }
            </div>
        </div>
    )
}