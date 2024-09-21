import type {IResponseTimetableSemesterContent} from "@/shared/api/types";

interface IProps {
    content?: IResponseTimetableSemesterContent[][];
}

export const TimetableWeekTable = ({content}: IProps) => (
    <div
        className={"text-[#5a5a5a] text-[14px] leading-[19px] max-w-[100vw] h-full overflow-x-auto scrollbar"}
    >
        <table className={"w-full border-separate border-spacing-0 border-spacing-y-[24px]"}>
            <thead>
            <tr className={"w-full  text-[#5A5A5A] text-[24px] font-bold leading-[29px]"}>
                <th className={"px-[5px] w-fit"}>Пара</th>
                {(["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]).map((value) => (
                    <th key={value} className={"px-[5px]"}>{value}</th>
                ))}
            </tr>
            </thead>
            <tbody className={""}>
            {content?.map((items, index) => (
                <tr key={`content-${index}`} className={"py-[10px]"}>
                    <td className={"text-[#3D46A1] text-[42px] font-bold leading-[51px]"}>{index + 1}</td>
                    {items.map((item, i) => (
                        <td className={"leading-[17px] px-[5px] py-[4px]  max-w-[180px]"} key={i}>
                            {item.subject === "undefined"
                                ? (<div
                                    className={"text-[#3D46A1] text-[40px] font-semibold leading-[49px] text-center"}>_</div>)
                                : (<>
                                    <div className={"text-[20px] font-bold text-[#3D46A1] leading-[24px]"}>
                                        {item.subject}
                                    </div>
                                    {item.with.map((e, index) => (
                                        <div key={index}
                                             className={"text-[20px] text-[#5A5A5A] font-normal whitespace-nowrap leading-[24px]"}
                                        >
                                            {e?.shortTeacherName || e?.group}
                                        </div>
                                    ))}

                                </>)
                            }
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);