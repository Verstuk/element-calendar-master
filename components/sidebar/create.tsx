import { ChevronDown, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import EventPopover from "../event-popover";
import { useCallback, useState } from "react";
import { useDateStore } from "@/lib/store";

export default function create() {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const handleOpenPopover = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsPopoverOpen(true);
    }, []);

    const handleClosePopover = useCallback(() => {
        setIsPopoverOpen(false);
    }, []);

    const { userSelectedDate } = useDateStore();
    return (
        <>
            <Button variant="outline" onClick={handleOpenPopover}>
                <PlusIcon className="h-4 w-4 text-[#a81616]" />
                <p className="text-base mb-1">Создать</p>
                <ChevronDown className="h-4 w-4 text-[#a81616]" />
            </Button>
            {isPopoverOpen && (
                <EventPopover
                    isOpen={isPopoverOpen}
                    onClose={handleClosePopover}
                    date={userSelectedDate.format("YYYY-MM-DD")}
                />
            )}
        </>
    )

};
