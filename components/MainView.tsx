import MonthView from "./month-view";
import SideBar from "./sidebar/SideBar";

export default function MainView() {
  return (
    <div className="flex">
      {/* Side bar */}
      <SideBar />

      {/* Month View */}
      <div className="w-full flex-1">
        <MonthView />
      </div>
    </div>
  );
}
