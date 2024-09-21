import cn from "clsx";
import type {IMode} from "../helpers/types";


interface IProps {
    isGroupMode: boolean;
    isTeacherMode: boolean;
    onSelect?: (e: IMode)=>void;
}

export function Mode({isGroupMode, isTeacherMode, onSelect}: IProps) {
    function handleClick(e: IMode) {
        if (!onSelect) return;
        onSelect(e);
    }
    const activeClass = "bg-[#3D46A1] text-white";
    const defaultClass = "w-full text-center rounded-[30px] py-[32px] px-[64px] cursor-pointer transition duration-200 select-none";
    return (
        <div className={"flex w-full font-montserrat font-medium text-[48px] leading-[60px] text-[#3D46A1] whitespace-nowrap bg-white rounded-[30px] shadow-[0px_12px_50px_0px_rgba(0,0,0,0.2)]"}>
            <div className={cn(defaultClass, {[activeClass]: isGroupMode})} onClick={()=>handleClick("group")}>По группам</div>
            <div className={cn(defaultClass, {[activeClass]: isTeacherMode})} onClick={()=>handleClick("teacher")}>По преподавателям</div>
        </div>
    );
}