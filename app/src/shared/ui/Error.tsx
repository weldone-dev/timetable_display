import {useState} from "react";
import cn from "clsx";

interface IProps {
    text: string;
    refetch: () => void
}
export const Error = ({text, refetch}:IProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => {
        if (isLoading) return;

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        refetch();
    };
    return (
        <div className={"mt-[200px] w-full flex justify-between items-center"}>
            <div className={"text-[64px] font-bold leading-[78px] text-[#5A5A5A]"}>{text}</div>
            <button
                className={"bg-[#3D46A1] py-[32px] px-[64px] rounded-[30px] disabled:bg-[#5A5A5A]"}
                onClick={handleClick}
                disabled={isLoading}
            >
                <svg className={cn(isLoading && "animate-spin")} xmlns="http://www.w3.org/2000/svg" width="48" height="51" viewBox="0 0 48 51" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M40.9704 0.65332C42.075 0.65332 42.9704 1.54875 42.9704 2.65332V13.967C42.9704 15.0716 42.075 15.967 40.9704 15.967H29.6567C28.5521 15.967 27.6567 15.0716 27.6567 13.967C27.6567 12.8625 28.5521 11.967 29.6567 11.967H35.951C28.3634 5.98548 17.3297 6.49502 10.3291 13.4956C2.77897 21.0458 2.77897 33.2869 10.3291 40.8371C17.8792 48.3872 30.1204 48.3872 37.6706 40.8371C42.7289 35.7788 44.4009 28.6137 42.6769 22.158C42.3919 21.0908 43.026 19.9947 44.0931 19.7097C45.1603 19.4247 46.2565 20.0588 46.5414 21.126C48.6187 28.9045 46.6078 37.5567 40.499 43.6655C31.3868 52.7777 16.6129 52.7777 7.50068 43.6655C-1.61155 34.5533 -1.61155 19.7794 7.50068 10.6672C16.1194 2.04849 29.8031 1.58169 38.9704 9.26682V2.65332C38.9704 1.54875 39.8658 0.65332 40.9704 0.65332Z"
                          fill="white"/>
                </svg>
            </button>
        </div>
    )
}