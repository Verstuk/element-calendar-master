import { useDateStore, useEventStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { getHours, isCurrentDay } from "@/lib/getTime";
import { EventRenderer } from "./events-renderer";
import { dayEvents } from "@/lib/data";


export default function DayView() {

    const [currentTime, setCurrentTime] = useState(dayjs());
    const { userSelectedDate, setDate } = useDateStore();
    const { openPopover, events } = useEventStore();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(dayjs());
        }, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    const isToday = userSelectedDate.format("DD-MM-YY") === dayjs().format("DD-MM-YY");

    return (
        <>
            <div className="grid grid-cols-[auto_auto_1fr] px-4">
                <div className="w-16 border-r border-gray-300 text-xs">GMT +2</div>
                <div className="flex w-16 flex-col items-center">
                    <div className={cn("text-xs font-semibold", isToday && "text-blue-600 font-semibold")}>
                        {userSelectedDate.format("dd").toLocaleUpperCase()}{" "}
                    </div>{" "}
                    <div
                        className={cn(
                            "h-12 w-12 rounded-full p-2 text-2xl",
                            isToday && "bg-blue-600 text-white pl-3",
                        )}
                    >
                        {userSelectedDate.format("DD")}{" "}
                    </div>
                </div>
                <div></div>
            </div>

            <ScrollArea className="h-[70vh]">
                <div className="grid grid-cols-[auto_1fr] p-4">
                    {/* Time Column */}
                    <div className="w-16 border-r border-gray-300">
                        {getHours.map((hour, index) => (
                            <div key={index} className="relative h-16">
                                <div className="absolute -top-2 text-xs text-gray-600">
                                    {hour.format("HH:mm")}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Day Boxes Column */}
                    <div className="relative border-r border-gray-300">
                        {getHours.map((hour, i) => (
                            <div
                                key={i}
                                className="relative flex h-16 cursor-pointer flex-col items-center gap-y-2 border-b border-gray-300 hover:bg-gray-100"
                                onClick={() => {
                                    setDate(userSelectedDate.hour(hour.hour()));
                                    openPopover();
                                  }}
                            >
                                <EventRenderer events={dayEvents} date={userSelectedDate.hour(hour.hour())} view="day" />
                            </div>
                        ))}

                        {/* Current time indicator */}

                        {isCurrentDay(userSelectedDate) && (
                            <div
                                className={cn("absolute h-0.5 w-full bg-red-500")}
                                style={{
                                    top: `${((currentTime.hour() * 60 + currentTime.minute()) / 1440) * 100}%`,
                                }}
                            />
                        )}
                    </div>
                </div>


            </ScrollArea>
        </>
    );
}
;