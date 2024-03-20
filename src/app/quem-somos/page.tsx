import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ProOnco - Quem Somos",
  description: "Saiba mais sobre a ProOnco e nossa missão na promoção da gestão hospitalar em oncologia.",
  themeColor: "red"
};

export default function QuemSomos() {
  return (
    <main className='min-h-screen flex flex-col'>
      <Header />
      <section className='flex-1 bg-accent flex items-center justify-center py-20'>
        <div className="container mx-auto text-center">
          <h1 className='text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-libre break-words'>Quem Somos</h1>
          <p className="mt-8 my-10 text-lg leading-relaxed">
            A ProOnco é uma empresa dedicada à promoção da excelência na gestão hospitalar em oncologia.
            Nossa missão é fornecer soluções especializadas e inovadoras que auxiliem instituições de saúde a oferecerem os melhores cuidados aos pacientes oncológicos.
          </p>
          <p className="mt-4 my-6 text-lg leading-relaxed">
            Nosso compromisso com a qualidade, inovação e melhoria contínua nos coloca na vanguarda da gestão hospitalar,
            capacitando nossos clientes a enfrentar os desafios complexos do tratamento do câncer com confiança e eficácia.
          </p>
          <p className="mt-4 my-6 text-lg leading-relaxed">
            Com uma equipe multidisciplinar de especialistas em oncologia, gestão hospitalar, tecnologia e finanças,
            estamos preparados para oferecer soluções sob medida que atendam às necessidades específicas de cada instituição.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
