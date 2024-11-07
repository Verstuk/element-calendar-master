import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function LeftHeader() {
  return (
    <div className="flex items-center gap-3">
      {/* Sidebar Toggle and Calendar Icon */}
      <div className="hidden items-center lg:flex">
        <Button variant="ghost" className="rounded-full p-2">
          <Menu className="size-6" />
        </Button>
        <Image src="/img/logo_quanta.png" width={140} height={60} alt="icon" />
        <h1 className="text-2xl px-3 pb-1">Календарь</h1>
      </div>
      {/* Today Button */}

      <Button variant={"outline"}>Сегодня</Button>

      {/* Navigation Controls */}

      <div className="flex items-center gap-3">
        <MdKeyboardArrowLeft
          className="size-6 cursor-pointer font-bold"
        />
        <MdKeyboardArrowRight
          className="size-6 cursor-pointer font-bold"
        />
      </div>
      {/* Current Month and Year Display */}
      <h1 className="hidden text-xl lg:block">
        Ноябрь-1-2024
      </h1>
    </div>
  );
}
