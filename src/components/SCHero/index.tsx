import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto w-full mt-10 ">
          {/* <Image
            src={require("../../public/logo-proonco.png")}
            width={65}
            height={65}
            alt="Icone Pro Onco"
            className="mx-auto"
          /> */}
          <h1 className="font-bai-jamjuree text-center  w-full text-6xl md:text-[6rem] font-extrabold">
            ProOnco Gestão <br /> Oncologica <br /> Hospitalar
          </h1>
          <a
            href="#services"
            className="flex border-2 w-[90%] md:w-[23%] mx-auto items-center  border-[#23B3E0] bg-gradient-to-br from-sky-200/20 to-sky-500/20 hover:bg-gradient-to-tr hover:from-sky-500/20 hover:to-sky-200/20 mt-20 px-6 py-4 rounded-full justify-between transition-all ease-linear duration-150 hover:drop-shadow-2xl"
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
  )
}