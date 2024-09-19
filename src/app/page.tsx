import Image from "next/image";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <section className="background-section h-screen w-full bg-[#0E264A] flex items-center justify-center">
        <div className="container mx-auto w-full mt-10">
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
            href="#about"
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
        </div>
      </section>
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
      <section className="min-h-[100vh] bg-[#D6E0E7] font-bai-jamjuree font-bold py-6">
        <div className=" container px-6 space-y-3 py-6">
          <div className=" flex items-center justify-center">
            <h2 className="text-2xl text-[#1D4C77]">Serviços</h2>
          </div>
          <div className=" bg-white/50 rounded p-5 border-2 shadow-lg shadow-slate-300/50">
            <div className="flex justify-between  items-center">
              <Image
                src="/gestao-icon.svg"
                width={32}
                height={32}
                alt="Seta para baixo"
                className="w-8 h-8"
              />
              <Image
                src="/arrow-bottom-dark.svg"
                width={32}
                height={32}
                alt="Seta para baixo"
                className="w-6 h-6"
              />
            </div>
            <p className="text-[#3C4051] mt-3">Gestão de Recursos Humanos</p>
          </div>

        </div>
      </section>
      <section className="min-h-[100vh]  bg-[#1D4C77]"></section>
      <section className="min-h-[100vh]  bg-[#D9E1E7]"></section>
      <section className="min-h-[100vh]  bg-[#0E264A]"></section>
      <section className="min-h-[100vh]  bg-[#D9E1E7]"></section>
      <Footer />
    </main>
  );
}
