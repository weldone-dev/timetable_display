import cn from "clsx";
import {type ReactNode} from "react";
import {Mode} from "./Mode";
import {Navigation} from "./Navigation";


interface IProps {
    search: ReactNode;
    keyboard: ReactNode;
    mode: string;
    onSelectMode: (e: "semester" | "today") => void;
    isInputFocused: boolean;
}

export const FooterGroupOrTeacher = (
    {
        search,
        keyboard,
        mode,
        isInputFocused,
        onSelectMode
    }: IProps
) => {

    return (
        <footer
            className={cn("fixed w-full left-0 right-0 px-[64px] transition-all duration-200", isInputFocused ? "bottom-[776px]" : "bottom-0")}>
            <div className={isInputFocused ? "mb-[32px]" : "mb-[64px]"}>
                <div
                    className={cn("flex flex-col gap-y-[32px] transition-all duration-150", isInputFocused ? "-mb-[220px]" : "mb-0")}>
                    <div className={"flex gap-[32px] w-full "}>
                        {search}
                        {!isInputFocused
                            && (
                                <Mode
                                    isSemesterMode={mode === "semester"}
                                    isTodayMode={mode === "today"}
                                    onSelect={onSelectMode}
                                />
                            )
                        }
                    </div>
                    <div className={cn("transition-all duration-300", isInputFocused ? "opacity-0" : "opacity-100")}>
                        <Navigation/>
                    </div>

                </div>
                <div className={cn("opacity-100 transition-all delay-200 duration-150", {
                    ["opacity-0"]: isInputFocused
                })}>
                    {keyboard}
                </div>
            </div>
        </footer>
    )
}