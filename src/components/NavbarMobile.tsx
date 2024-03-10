import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";

function NavbarMobile() {
    return (
        <Sheet>
            <SheetTrigger>Abrir</SheetTrigger>
            <SheetContent>
                <SheetHeader className="-mt-[6px]">
                    <ModeToggle mobile={true} />
                </SheetHeader>
                <SheetDescription className="mt-8">
                    <div className="w-full text-start">Início</div>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
}

export default NavbarMobile;
