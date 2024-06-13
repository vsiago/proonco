"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const menuItems = [
    {
      nome: "Início",
      link: "/",
    },
    {
      nome: "Quem Somos",
      link: "/quem-somos",
    },
    {
      nome: "Oncologia em Números",
      link: "/oncologia-em-numeros",
    },
    {
      nome: "Serviços",
      link: "/servicos",
    },
    {
      nome: "Contatos",
      link: "/contatos",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolled = currentScrollPos > 0;

      setScrolled(isScrolled);

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setPrevScrollPos(currentScrollPos);
        setOpen(false);
      } else {
        // Scrolling up
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`${
        scrolled
          ? "bg-sky-500 fixed top-0 z-10 h-16 flex w-full translate-y-0 duration-300 ease-in-out bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90"
          : "h-44 absolute w-full"
      } `}
    >
      <nav className="min-h-full px-6 flex w-full justify-between items-center md:container mx-auto ">
        <a href="/">
          <Image
            src="/logo-proonco-clara.png"
            width={150}
            height={20}
            alt="Logo ProOnco"
            className="md:w-[200px]"
          />
        </a>
        <ul
          onClick={() => setOpen(!open)}
          className="md:hidden relative flex h-10 w-10 flex-col items-center justify-center gap-3 cursor-pointer hover:bg-slate-700 rounded transition duration-150 ease-in hover:transform hover:scale-105"
        >
          <li
            className={`${
              open ? "transform rotate-45 absolute" : ""
            } w-7 h-[3px] rounded-[2px] bg-white transition duration-150 ease-in-out`}
          ></li>
          <li
            className={`${
              open ? "transform -rotate-45 absolute" : ""
            } w-7 h-[3px] rounded-[2px] bg-white transition duration ease-in-out`}
          ></li>
        </ul>
        <ul
          className={`${
            open
              ? "bg-[#0E264A]/30 backdrop-blur-xl flex opacity-100 w-full h-screen mt-16"
              : "w-full h-0"
          } fixed ${
            scrolled ? "top-16" : "top-20"
          } right-0 flex flex-col transition duration-200 ease-out opacity-0 flex-1`}
        >
          {menuItems.map((item, index) => (
            <li
              key={item.nome}
              style={{ transitionDelay: `${open ? index * 70 : 0}ms` }}
              className={`px-6 ${
                open
                  ? "opacity-100 transform translate-x-0 "
                  : "opacity-0 transform -translate-x-10"
              } transition-all ease-out duration-500`}
            >
              <a
                className={`${
                  open
                    ? "inline-block ml-0 pointer-events-auto transition ease-in py-6"
                    : "py-0 opacity-0 ml-6 hidden pointer-events-none"
                } text-slate-300 font-bai-jamjuree border-b-[1px] border-slate-700 w-full focus:text-white focus:font-semibold`}
                href={`${item.link}`}
              >
                {item.nome}
              </a>
            </li>
          ))}
        </ul>
        <ul className="hidden md:flex gap-3">
          {menuItems.map((item, intex) => (
            <li key={item.nome}>
              <Link
                className="px-2 py-1 text-[#7992C4] font-bai-jamjuree text-lg hover:text-sky-500 hover:font-semibold transition-all ease-in-out duration-150"
                href={item.link}
              >
                {item.nome}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
