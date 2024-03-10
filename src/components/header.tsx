import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import NavbarMobile from "../components/NavbarMobile";

export default function Header() {
    return (
        <header className=" bg-sky-500 text-sky-100 text-base">
            <nav className="container mx-auto flex items-center justify-between py-4">
                <Image
                    src="/logo-proonco-clara.png"
                    width={150}
                    height={20}
                    alt="Logo ProOnco"
                />
                {/* <ul className="flex gap-3">
                    <li>
                        <a className="px-3 py-2" href="/">
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                </ul> */}
                <ModeToggle mobile={true} />
                <NavbarMobile />
            </nav>
        </header>
    );
}
