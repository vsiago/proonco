import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ProOnco - Nossos Serviços",
  description: "Descubra como a ProOnco pode ajudar na gestão completa do seu hospital oncológico.",
  themeColor: "red"
};

export default function Servicos() {
  return (
    <main className='min-h-screen flex flex-col'>
      <Header />
      <section className='flex-1 bg-accent flex items-center justify-center'>
        <div className="container mx-auto text-center">
          <h1 className='text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-libre break-words'>Nossos Serviços</h1>
          <p className="mt-8 text-lg leading-relaxed">
            Na ProOnco, oferecemos uma gama abrangente de serviços de gestão hospitalar para hospitais oncológicos, incluindo:
          </p>
          <div className="mt-8 text-slate-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Consultoria Especializada em Oncologia</h2>
              <p className="text-lg">Otimizamos processos hospitalares, melhoramos a qualidade do atendimento e garantimos protocolos eficazes de tratamento.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Gestão de Recursos Humanos</h2>
              <p className="text-lg">Auxiliamos na seleção, treinamento e capacitação de profissionais de saúde especializados em oncologia, garantindo uma equipe qualificada e motivada.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Tecnologia e Inovação</h2>
              <p className="text-lg">Implementamos soluções tecnológicas avançadas para gestão hospitalar em oncologia, incluindo sistemas de informação, telemedicina e análise de dados.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Gestão Financeira</h2>
              <p className="text-lg">Oferecemos serviços de gestão financeira personalizados, visando a otimização de recursos, redução de custos e maximização da eficiência operacional.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Gestão Farmacêutica</h2>
              <p className="text-lg">Gerenciamos estoques, distribuição e dispensação de medicamentos, garantindo um suprimento contínuo e eficiente de medicamentos oncológicos.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Cuidados ao Paciente</h2>
              <p className="text-lg">Fornecemos cuidados abrangentes e personalizados aos pacientes, incluindo suporte emocional, educação sobre o tratamento e gerenciamento de sintomas.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md col-span-full">
              <h2 className="text-2xl font-semibold mb-4">Gestão Completa para Hospitais</h2>
              <p className="text-lg">Além dos serviços mencionados, fornecemos uma gestão completa para hospitais oncológicos, abrangendo todas as áreas necessárias para garantir a excelência no cuidado ao paciente.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
