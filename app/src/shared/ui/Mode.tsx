import cn from "clsx";
interface IProps {
    isSemesterMode: boolean;
    isTodayMode: boolean;
    onSelect?: (e: "today" | "semester")=>void;
}

export function Mode({isSemesterMode, isTodayMode, onSelect}: IProps) {
    function handleClick(e: "today" | "semester") {
        if (!onSelect) return
        onSelect(e)
    }
    const activeClass = "bg-[#3D46A1] text-white"
    const defaultClass = "rounded-[26px] py-[32px] px-[64px] cursor-pointer transition duration-200 select-none";
    return (
        <div className={"flex font-montserrat  font-medium text-[48px] leading-[60px] text-[#3D46A1] whitespace-nowrap bg-white rounded-[30px] shadow-[0px_12px_50px_0px_rgba(0,0,0,0.2)]"}>
            <div className={cn(defaultClass, {[activeClass]: isTodayMode})} onClick={()=>handleClick("today")}>Сегодня</div>
            <div className={cn(defaultClass, {[activeClass]: isSemesterMode})} onClick={()=>handleClick("semester")}>На семестр</div>
        </div>
    )
}