import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, BarChartIcon as ChartBar, Lightbulb, Trophy, Star, Heart } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function Component() {
  const benefits = [
    {
      icon: Users,
      title: "Expertise Especializada",
      description: "Conte com uma equipe de profissionais experientes e especializados em gestão hospitalar e oncologia."
    },
    {
      icon: Lightbulb,
      title: "Abordagem Holística",
      description: "Desenvolvemos estratégias personalizadas que abrangem todos os aspectos da gestão hospitalar em oncologia, desde a logística até a qualidade do atendimento ao paciente."
    },
    {
      icon: ChartBar,
      title: "Resultados Comprovados",
      description: "Nossas soluções são baseadas em evidências e resultados tangíveis, comprovados por meio de parcerias bem-sucedidas com hospitais e instituições de saúde em todo o país."
    },
    {
      icon: Award,
      title: "Inovação Contínua",
      description: "Estamos sempre atualizados com as últimas tendências e tecnologias em oncologia e gestão hospitalar, garantindo que nossos clientes recebam as melhores práticas e soluções inovadoras."
    },
    {
      icon: Trophy,
      title: "Compromisso com a Excelência",
      description: "Nosso compromisso é com a excelência em tudo o que fazemos, buscando constantemente superar as expectativas e oferecer resultados excepcionais para nossos clientes e pacientes.",
      additionalIcons: [Star, Heart]
    }
  ]

  return (
    <section className="md:container mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 border-2 border-sky-200 rounded-full" />
            <div className="absolute inset-2 border-2 border-sky-300 rounded-full" />
            <div className="absolute inset-4 border-2 border-sky-400 rounded-full" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Benefícios da Parceria
            <br />
            com a Pronco
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isLastItem = index === benefits.length - 1

            return (
              <Card
                key={index}
                className={cn(
                  "bg-white shadow-sm hover:shadow-md transition-shadow duration-300",
                  isLastItem && "md:col-span-2"
                )}
              >
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-sky-50 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-sky-500" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-sky-600">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                      {benefit.additionalIcons && (
                        <div className="flex gap-4 mt-4">
                          {benefit.additionalIcons.map((AdditionalIcon, iconIndex) => (
                            <div
                              key={iconIndex}
                              className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center"
                            >
                              <AdditionalIcon className="w-6 h-6 text-sky-500" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )})}
        </div>
    </section>
  )
}