import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function create() {
    return (
        <Button variant="outline">
            <PlusIcon className="h-4 w-4" />
            <p>Создать</p>
        </Button>
    )
    
};
