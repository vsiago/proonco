"use client";
import { useState } from "react";
import Image from "next/image";
// import { ModeToggle } from "./ModeToggle";


export default function Header() {
    const [open, setOpen] = useState(false);

    const menuItems = [
        {
            nome: "Início",
            link: "/"
        },
        {
            nome: "Quem Somos",
            link: "/quem-somos"
        },
        {
            nome: "Oncologia em Números",
            link: "/oncologia-em-numeros"
        },
        {
            nome: "Serviços",
            link: "/servicos"
        },
        {
            nome: "Contatos",
            link: "/contatos"
        }
    ]


    return (
        <header className="bg-accent min-h-16 px-6 flex justify-between items-center ">

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
                    className={`${open ? "bg-accent flex opacity-100 w-full h-full left-0" : "w-full h-0"} absolute top-16  right-0 flex flex-col transition duration-200 ease-out opacity-0 flex-1`}
                >
                    {menuItems.map((item) => (
                        <li className="px-6"
                            key={item.nome}
                        >
                            <a className={`${open ? 'inline-block' : 'hidden opacity-0'} text-slate-300 py-6 border-b-[1px] border-slate-700 w-full`} href={`${item.link}`}>{item.nome}</a>
                        </li>
                    ))}
                    {/* <ModeToggle /> */}
                </ul>
            </nav>
        </header>
    );
}