import { cn } from "@/lib/utils";
import Create from "./create";
import SideBarCalendar from "./side-bar-calendar";
import SearchUser from "./search-user";
import MyCalendars from "./my-calendars";
import { useToggleSideBarStore } from "@/lib/store";

export default function SideBar() {
    const { isSideBarOpen } = useToggleSideBarStore();

    return (
        <aside className={cn("hidden w-92 transition-all duration-300 ease-in-out lg:block p-4",
            isSideBarOpen && "lg:hidden"
        )}>

            <Create />
            <SideBarCalendar />
            <SearchUser />
            <MyCalendars />

        </aside>
    )
    
};
