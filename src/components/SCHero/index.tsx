"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Setup dos timers para exibir os textos com delay
  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true); // Mostrar o texto após 1 segundo
    }, 1000);

    const buttonTimer = setTimeout(() => {
      setShowButton(true); // Mostrar o botão após 2 segundos
    }, 2000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  // Intersection Observer para a animação da imagem e do título
  const { ref, inView } = useInView({
    threshold: 0.5, // Ação disparada quando 50% da imagem estiver visível
    triggerOnce: true, // A animação será acionada apenas uma vez
  });

  return (
    <div className="container mx-auto w-full mt-10">
      {/* Título com animação */}
      <h1
        ref={ref} // Adicionando o Intersection Observer à tag h1
        className={`font-bai-jamjuree text-center w-full text-6xl md:text-[6rem] font-extrabold ${
          inView ? "slide-in-bottom" : "hidden-bottom"
        }`}
      >
        ProOnco Gestão <br /> Oncológica <br /> Hospitalar
      </h1>

      {/* Texto que aparece com delay */}
      <div
        className={`${
          showText ? "slide-in-bottom text-white" : "hidden-bottom"
        } text-center mt-5 text-xl md:text-3xl font-semibold text-gray-800`}
      >
        Soluções de gestão para hospitais e clínicas oncológicas.
      </div>

      {/* Botão que aparece com delay */}
      <a
        href="#services"
        className={`${
          showButton
            ? "slide-in-bottom"
            : "hidden-bottom"
        } flex border-2 w-[90%] md:w-[23%] mx-auto items-center hover:text-slate-600 z-[2000] border-[#23B3E0] bg-gradient-to-br from-sky-200/20 to-sky-500/20 hover:bg-white active:bg-white focus:bg-white hover:border-white mt-20 px-6 py-4 rounded-full justify-between transition-all ease-linear duration-150 hover:drop-shadow-2xl`}
      >
        <span className="font-bold text-base">Conheça</span>
        <Image
          src="/arrow-bottom.svg"
          width={22}
          height={22}
          alt="Seta para baixo"
          className="w-6 h-6"
        />
      </a>

      {/* SVG do divisor de forma */}
      <div className="custom-shape-divider-bottom-1726520428">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
