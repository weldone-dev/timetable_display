import cn from "clsx";

export const NotPart = ({isUpdated}: { isUpdated: boolean }) => {
    return (
        <div className={"flex justify-center items-center h-[362px]"}>
            <div className={cn(
                "text-[56px] font-bold leading-[68px]",
                (isUpdated)
                    ? "text-[#FFF]"
                    : "text-[#3D46A1]"
            )}>
                Нет пары
            </div>
        </div>
    )
}