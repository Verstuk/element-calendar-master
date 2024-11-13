import { useDateStore, useEventStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import "dayjs/locale/ru"; // Импортируем русский локаль  
import { EventRenderer } from "./events-renderer";
import { monthEvents } from "@/lib/data";

dayjs.locale('ru'); // Устанавливаем русский язык  



export default function MonthViewBox({
    day,
    rowIndex,
}: {
    day: dayjs.Dayjs | null
    rowIndex: number
}) {

    const { openPopover } = useEventStore()

    const { setDate } = useDateStore()

    if (!day) {
        return <div className="h-12 w-full border md:h-28 md:w-full ld:h-full"></div>
    }
    const isFirstDayOfMonth = day.date() === 1
    const isToday = day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setDate(day)
        openPopover()
    }
    return (
        <div className={cn(
            "group relative flex flex-col items-center gap-y-2 border",
            "transition-all hover:bg-blue-200"
        )}
            onClick={handleClick}
        >
            <div className="flex flex-col items-center">
                {rowIndex === 0 && (
                    <h4 className="text-xs text-gray-500 font-medium">
                        {day.format("dd").toLocaleUpperCase()}
                    </h4>
                )}
                <h4 className={cn(
                    "text-center text-sm",
                    isToday &&
                    "flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"
                )}>
                    {isFirstDayOfMonth ? day.format("MMM D") : day.format("D")}
                </h4>
            </div>
                <EventRenderer date={day} view="month" events={monthEvents} />
        </div>
    );
}
