'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const menuItems = [
    { nome: 'Início', link: '/' },
    { nome: 'Serviços', link: '#services' },
    { nome: 'Quem Somos', link: '#about' },
    { nome: 'Benefícios', link: '#benefits' },
    { nome: 'Oncologia em Números', link: '#statics' },
    { nome: 'Contato', link: '#contact' },
  ];

  const handleMenuItemClick = (e: any) => {
    // Fechar o menu
    setOpen(false);

    // Se a navegação for para um link de âncora, fazemos o scroll suave
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolled = currentScrollPos > 0;

      setScrolled(isScrolled);

      if (currentScrollPos > 600) {
        if (currentScrollPos > prevScrollPos && isVisible) {
          // Scroll para baixo
          setIsVisible(false);
        } else if (currentScrollPos < prevScrollPos && !isVisible) {
          // Scroll para cima
          setIsVisible(true);
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isVisible]);

  return (
    <header
      className={`${
        isVisible
          ? ` fixed top-0 w-full translate-y-0 duration-300 ease-in-out bg-clip-padding  bg-opacity-90 z-[2000] ${
              scrolled ? 'h-16 backdrop-filter backdrop-blur-lg border-b border-sky-500/20' : 'h-20 md:h-28 border-sky-500/50'
            }`
          : '-translate-y-16' // Esconde o cabeçalho
      } ${scrolled && window.pageYOffset > 700 ? 'bg-sky-500' : ''}`}
    >
      <nav className="min-h-full px-6 flex w-full justify-between items-center md:container mx-auto">
        <Link href="/">
          <Image
            src="/logo-proonco-clara.png"
            width={150}
            height={20}
            alt="Logo ProOnco"
            className="md:w-[200px]"
          />
        </Link>
        <ul
          onClick={() => setOpen(!open)}
          className="md:hidden relative flex h-10 w-10 flex-col items-center justify-center gap-3 cursor-pointer  rounded transition duration-150 ease-in hover:transform hover:scale-105"
        >
          <li
            className={`${
              open ? 'transform rotate-45 absolute' : ''
            } w-7 h-[3px] rounded-[2px] bg-white transition duration-150 ease-in-out`}
          ></li>
          <li
            className={`${
              open ? 'transform -rotate-45 absolute' : ''
            } w-7 h-[3px] rounded-[2px] bg-white transition duration ease-in-out`}
          ></li>
        </ul>
        <ul
          className={`${
            open
              ? `bg-[#0E264A]/95 backdrop-blur-3xl flex opacity-100 w-full h-screen ${
                  scrolled ? 'mt-16' : 'mt-20'
                }`
              : 'w-full h-0'
          } fixed top-0 right-0 pr-3 flex flex-col items-end transition duration-200 ease-out opacity-0 flex-1`}
        >
          {menuItems.map((item, index) => (
            <li
              key={item.nome}
              style={{ transitionDelay: `${open ? index * 70 : 0}ms` }}
              className={`px-6 ${
                open
                  ? 'opacity-100 transform  translate-y-0'
                  : 'opacity-0 transform  -translate-y-10'
              } transition-all ease-out duration-500`}
            >
              <Link
                className={`${
                  open
                    ? 'inline-block ml-0 pointer-events-auto transition ease-in py-6'
                    : 'py-0 opacity-0 ml-6 hidden pointer-events-none'
                } text-slate-400 text-lg hover:text-sky-500 hover:font-semibold font-bai-jamjuree border-b-[1px] border-slate-950/50 pl-20 focus:text-white focus:font-semibold`}
                href={`${item.link}`}
                onClick={handleMenuItemClick} // Chama a função ao clicar
              >
                {item.nome}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="hidden md:flex gap-3">
          {menuItems.map((item) => (
            <li key={item.nome}>
              <Link
                className="px-2 py-1 text-slate-400 font-bai-jamjuree text-lg hover:text-sky-500 hover:font-semibold transition-all ease-in-out duration-150"
                href={item.link}
                onClick={handleMenuItemClick} // Chama a função ao clicar
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
