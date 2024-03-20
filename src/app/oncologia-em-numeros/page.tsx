import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ProOnco - Oncologia em Números",
  description: "Explore estatísticas e dados sobre o câncer e sua gestão hospitalar.",
  themeColor: "red"
};

export default function OncologiaEmNumeros() {
  return (
    <main className='min-h-screen flex flex-col'>
      <Header />
      <section className='flex-1 bg-accent flex items-center justify-center'>
        <div className="container mx-auto text-center">
          <h1 className='text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-libre break-words'>Oncologia em Números</h1>
          <p className="mt-8 text-lg leading-relaxed">
            A luta contra o câncer é uma batalha global. Aqui estão alguns dados que destacam a importância da gestão hospitalar eficaz na oncologia:
          </p>
          <div className="mt-4 grid text-slate-800 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Taxa de Incidência de Câncer</h2>
              <p className="text-lg">Estima-se que haja mais de 19 milhões de novos casos de câncer a cada ano em todo o mundo.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Mortalidade por Câncer</h2>
              <p className="text-lg">O câncer é uma das principais causas de morte em todo o mundo, responsável por mais de 9 milhões de óbitos por ano.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Recursos Financeiros</h2>
              <p className="text-lg">Os custos diretos e indiretos do câncer são substanciais, com impacto significativo nos sistemas de saúde e na economia global.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Importância da Gestão Hospitalar</h2>
              <p className="text-lg">Uma gestão hospitalar eficaz é fundamental para garantir o acesso a tratamentos de qualidade, o gerenciamento adequado de recursos e melhores resultados para os pacientes.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
