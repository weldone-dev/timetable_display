import cn from "clsx";
import {setSearchFocus, setSearchValue, useAppDispatch, useAppSelector} from "../model";
import {ClearIcon, CloseIcon} from "@/shared/ui/icons";


export function Keyboard() {

    const dispatch = useAppDispatch();
    const isFocused = useAppSelector(state => state.group.isInputFocus);
    const inputValue = useAppSelector(state => state.group.inputValue);


    const keys = [
        '1', '2', '3', 'А', 'С',
        '4', '5', '6', 'М', 'И',
        '7', '8', '9', 'Д', '⌫',
        '0', '-', 'Enter'
    ];
    const keyClasses: Record<string, string> = {
        'Enter': '!bg-[#3D46A1] text-white hover:bg-[#2B367A]',
        '⌫': 'bg-[#ECECEC]',
        '0': 'col-span-3 bg-[#ECECEC]',
        ...Array.from({length: 9}, (_, i) => (i + 1).toString()).reduce((acc, num) => {
            acc[num] = 'bg-[#ECECEC]';
            return acc;
        }, {} as Record<string, string>)
    };

    function onKeyPress(key: string) {
        switch (key) {
            case 'Enter':
                dispatch(setSearchFocus(false));
                break;
            case '⌫':
                if (inputValue.length) {
                    dispatch(setSearchValue(inputValue.slice(0, -1)));
                }
                break;
            default:
                dispatch(setSearchValue(inputValue + key));
                break;
        }
    }

    function handleClose() {
        dispatch(setSearchFocus(false));
        dispatch(setSearchValue(""));
    }

    return (
        <div
            className={cn("absolute mt-[32px] w-full h-[776px] bg-white right-0 left-0 rounded-t-[60px] p-[80px] shadow-[0px_-12px_50px_0_rgba(0,0,0,0.2)] font-latin", {
                ["hidden"]: !isFocused
            })}>
            <div className="grid grid-cols-5 gap-[16px] w-[1216px] mx-auto">
                {keys.map((key) => (
                    <button
                        key={key}
                        onClick={() => onKeyPress(key)}
                        className={cn(
                            "h-[96px] flex justify-center items-center text-[40px] leading-[24px] text-[#3D46A1] bg-[#F8F8F8] hover:bg-[#ECECEC] rounded-[20px] select-none", keyClasses[key]
                        )}
                    >
                        {(key === "⌫")
                            ? (<ClearIcon/>)
                            : (key)
                        }
                    </button>
                ))}
            </div>
            <div className={"w-full flex justify-center mt-[48px]"}>
                <button className={"p-[20px]"} onClick={handleClose}>
                    <CloseIcon/>
                </button>
            </div>
        </div>
    );
}