import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "ProOnco - Início",
    description: "Transformando cuidado em cura.",
    themeColor: "red"
};

export default function Home() {
    return (
        <main className='min-h-screen flex flex-col'>
            <Header />
            <section className='flex-1 bg-accent flex items-center justify-center'>
                <div className="container mx-auto text-center">
                    <div className="h-full my-20">
                        <h1 className='text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-libre break-words'>Oncologia: Promovendo Gestão Hospitalar Especializada</h1>
                    </div>
                    <div className="mt-8 my-10">
                        <h2 className="text-2xl font-bold mb-4">Serviços</h2>
                        <ul className="text-left flex flex-col gap-7">
                            <li className="mb-4">
                                <h3 className="text-lg font-semibold">1. Consultoria Especializada em Oncologia</h3>
                                <p>Oferecemos consultoria especializada em oncologia para otimizar processos hospitalares, melhorar a qualidade do atendimento e garantir protocolos eficazes de tratamento.</p>
                            </li>
                            <li className="mb-4">
                                <h3 className="text-lg font-semibold">2. Gestão de Recursos Humanos</h3>
                                <p>Auxiliamos na seleção, treinamento e capacitação de profissionais de saúde especializados em oncologia, garantindo uma equipe qualificada e motivada para lidar com os desafios específicos dessa área.</p>
                            </li>
                            <li className="mb-4">
                                <h3 className="text-lg font-semibold">3. Tecnologia e Inovação</h3>
                                <p>Implementamos soluções tecnológicas avançadas para gestão hospitalar em oncologia, incluindo sistemas de informação, telemedicina, e ferramentas de análise de dados para promover uma abordagem baseada em evidências.</p>
                            </li>
                            <li className="mb-4">
                                <h3 className="text-lg font-semibold">4. Gestão Financeira e Administrativa</h3>
                                <p>Oferecemos serviços de gestão financeira e administrativa personalizados para hospitais oncológicos, visando a otimização de recursos, redução de custos e maximização da eficiência operacional.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8 my-10">
                        <h2 className="text-2xl font-bold mb-4">Benefícios da Parceria com a Pronco Gestão Hospitalar</h2>
                        <ul className="text-left">
                            <li className="mb-4">
                                <h3 className="text-lg font-semibold">Expertise Especializada</h3>
                                <p>Conte com uma equipe de profissionais experientes e especializados em gestão hospitalar e oncologia.</p>
                            </li>
                            <li className="mb-4">
                                <h3 className="text-lg font-semibold">Abordagem Holística</h3>
                                <p>Desenvolvemos estratégias personalizadas que abrangem todos os aspectos da gestão hospitalar em oncologia, desde a logística até a qualidade do atendimento ao paciente.</p>
                            </li>
                            <li className="mb-4">
                                <h3 className="text-lg font-semibold">Resultados Comprovados</h3>
                                <p>Nossas soluções são baseadas em evidências e resultados tangíveis, comprovados por meio de parcerias bem-sucedidas com hospitais e instituições de saúde em todo o país.</p>
                            </li>
                            <li className="mb-4">
                                <h3 className="text-lg font-semibold">Inovação Contínua</h3>
                                <p>Estamos sempre atualizados com as últimas tendências e tecnologias em oncologia e gestão hospitalar, garantindo que nossos clientes recebam as melhores práticas e soluções inovadoras.</p>
                            </li>
                            <li className="mb-4">
                                <h3 className="text-lg font-semibold">Compromisso com a Excelência</h3>
                                <p>Nosso compromisso é com a excelência em tudo o que fazemos, buscando constantemente superar as expectativas e oferecer resultados excepcionais para nossos clientes e pacientes.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8 my-10">
                        <h2 className="text-2xl font-bold mb-4">Entre em Contato Conosco</h2>
                        <p>Se você está buscando melhorar a gestão hospitalar em oncologia e promover melhores resultados para sua instituição, entre em contato conosco hoje mesmo para saber mais sobre nossos serviços e como podemos ajudar. Estamos aqui para apoiá-lo em sua jornada rumo à excelência em cuidados oncológicos.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
