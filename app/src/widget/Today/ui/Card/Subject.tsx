import cn from "clsx";

export const Subject = ({isUpdated, subject}: { isUpdated: boolean; subject: string; }) => (
    <div className={cn("text-[56px] font-bold leading-[68px] mb-[48px]", (isUpdated ? "text-[#FFF]" : "text-[#3D46A1]"))}>
        {subject}
    </div>
)
