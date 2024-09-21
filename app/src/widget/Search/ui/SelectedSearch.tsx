import {CloseIcon} from "@/shared/ui/icons";


interface IProps {
    handleClearSelected: () => void;
    inputValue: string;
}

export const SelectedSearch = ({handleClearSelected, inputValue}: IProps) => (
    <div
        className={"w-full text-white text-[48px] font-medium leading-[59px] cursor-pointer flex items-center"}
         onClick={handleClearSelected}
    >
        <div className={"w-full"}>
            {inputValue}
        </div>
        <CloseIcon/>
    </div>
)