import { cn } from "@/lib/utils";
import Create from "./create";
import SideBarCalendar from "./side-bar-calendar";
import SearchUser from "./search-user";
import MyCalendars from "./my-calendars";

export default function SideBar() {

    return (
        <aside className={cn("hidden w-92 transition-all duration-300 ease-in-out lg:block")}>

            <Create />
            <SideBarCalendar />
            <SearchUser />
            <MyCalendars />

        </aside>
    )
    
};
