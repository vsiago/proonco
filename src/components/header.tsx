"use client";
import { useState } from "react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
    const [open, setOpen] = useState(false);

    const menuItems = ["Home", "About", "Services", "Contact"];

    return (
        <header className="bg-accent h-16 px-5 flex justify-between items-center ">

            <Image
                src="/logo-proonco-clara.png"
                width={150}
                height={20}
                alt="Logo ProOnco" />
            <nav className="">
                <ul
                    onClick={() => setOpen(!open)}
                    className="relative flex h-10 w-10 flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-700 rounded transition duration-150 ease-in hover:transform hover:scale-105"
                >
                    <li
                        className={`${open ? "transform rotate-45 absolute" : ""} w-6 h-[2px] rounded-[2px] bg-white transition duration-150 ease-in-out`}
                    ></li>
                    <li
                        className={`${open ? "transform -rotate-45 absolute" : ""} w-6 h-[2px] rounded-[2px] bg-white transition duration ease-in-out`}
                    ></li>
                </ul>
                <ul
                    className={`${open ? "bg-accent flex opacity-100 w-full transform translate-x-0" : " w-0 transform translate-x-full"} absolute top-16  right-0 flex flex-col transition duration-150 ease-out opacity-0 h-full`}
                >
                    {menuItems.map((item) => (
                        <li
                            className={`${open ? 'block' : 'hidden'} px-5 py-4`}
                            key={item}
                        >
                            <a href={`${item}`}>{item}</a>
                        </li>
                    ))}
                    <ModeToggle />
                </ul>
            </nav>
        </header>
    );
}