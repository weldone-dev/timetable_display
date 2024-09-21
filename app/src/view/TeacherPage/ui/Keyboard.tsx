import cn from "clsx";
import {setInputFocus, setInputValue, useAppDispatch, useAppSelector} from "../model";
import {ClearIcon, CloseIcon} from "@/shared/ui/icons";


export function Keyboard() {
    const dispatch = useAppDispatch();
    const isFocused = useAppSelector(state => state.teacher.isInputFocus);
    const inputValue = useAppSelector(state => state.teacher.inputValue);

    const keys = [
        "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х",
        "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э",
        "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "⌫",
        "Space", "-", "Enter"
    ];
    const keyClasses: Record<string, string> = {
        "Enter": "!bg-[#3D46A1] text-white hover:bg-[#2B367A] col-span-2",
        "⌫": "bg-[#ECECEC]",
        "0": "col-span-3 bg-[#ECECEC]",
        ".": "",
        "Space": "col-span-8"
    };

    function onKeyPress(key: string) {
        switch (key) {
            case "Space":
                dispatch(setInputValue(inputValue + " "));
                break;
            case "Enter":
                dispatch(setInputFocus(false));
                break;
            case "⌫":
                if (inputValue.length) {
                    dispatch(setInputValue(inputValue.slice(0, -1)));
                }
                break;
            default:
                dispatch(setInputValue(inputValue + key));
                break;
        }
    }


    function handleClose() {
        dispatch(setInputFocus(false));
        dispatch(setInputValue(""));
    }

    const ContentKey = (key: string) => {
        switch (key) {
            case "⌫":
                return (<ClearIcon/>);
            case "Space":
                return "";
            default:
                return key;
        }
    }
    return (
        <div
            className={cn("absolute mt-[32px] w-full h-[776px] bg-white right-0 left-0 rounded-t-[60px] p-[80px] shadow-[0px_-12px_50px_0_rgba(0,0,0,0.2)] font-latin", {
                ["hidden"]: !isFocused
            })}>
            <div className="grid grid-cols-11 gap-[16px] w-[1216px] mx-auto">
                {keys.map((key) => (
                    <button
                        key={key}
                        onClick={() => onKeyPress(key)}
                        className={cn(
                            "h-[96px] flex justify-center items-center text-[40px] leading-[24px] text-[#3D46A1] bg-[#F8F8F8] hover:bg-[#ECECEC] rounded-[20px] select-none", keyClasses[key]
                        )}
                    >
                        {ContentKey(key)}
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