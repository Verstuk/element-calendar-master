"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useViewStore } from "@/lib/store";

export default function RightHeader() {

  const { setView } = useViewStore();

  return (
    <div className="flex items-center space-x-4">
      {/* <SelectComponent /> */}
      <Select onValueChange={(v) => setView(v)}>
        <SelectTrigger className="w-24 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0">
          <SelectValue placeholder="Месяц" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="month">Месяц</SelectItem>
          <SelectItem value="week">Неделя</SelectItem>
          <SelectItem value="day">День</SelectItem>
        </SelectContent>
      </Select>

      <Avatar>
        <AvatarImage src="/img/1.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
