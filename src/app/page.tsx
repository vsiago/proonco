import Image from "next/image";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col ">
      <Header />
      <section className="background-section h-[90vh] w-full bg-[#0E264A] flex items-center justify-center">
        <div className="container mx-auto w-full">
          {/* <Image
            src={require("../../public/logo-proonco.png")}
            width={65}
            height={65}
            alt="Icone Pro Onco"
            className="mx-auto"
          /> */}
          <h1 className="font-bai-jamjuree text-center  w-full text-6xl md:text-[6rem] font-bold">
            ProOnco Gestão <br /> Oncologica Hospitalar
          </h1>
          <a
            href="#about"
            className="flex border-2 w-[90%] md:w-[23%] mx-auto  border-[#23B3E0] bg-gradient-to-br from-sky-200/20 to-sky-500/20 hover:bg-gradient-to-tr hover:from-sky-500/20 hover:to-sky-200/20 mt-20 px-6 py-4 rounded-full justify-between transition-all ease-linear duration-150 hover:drop-shadow-2xl"
          >
            <span className="font-bold text-base">Conheça</span>
            <Image
              src={require("../../public/logo-proonco.png")}
              width={20}
              height={20}
              alt="Icone Pro Onco"
              className="w-5 h-5"
            />
          </a>
        </div>
      </section>

      <section className="min-h-[100vh]  bg-[#D6E0E7]"></section>
      <section className="min-h-[100vh]  bg-[#1D4C77]"></section>
      <section className="min-h-[100vh]  bg-[#D9E1E7]"></section>
      <section className="min-h-[100vh]  bg-[#0E264A]"></section>
      <section className="min-h-[100vh]  bg-[#D9E1E7]"></section>
      <Footer />
    </main>
  );
}
