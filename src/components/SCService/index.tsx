"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Users, LayoutGrid, Settings, PiggyBank, Target, Heart } from 'lucide-react'
import ButtonComponent from "@/components/ButtonComponent"
import { cn } from "@/lib/utils"

type Service = {
  id: number
  title: string
  icon: React.ElementType
  description: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Consultoria em Oncologia",
    icon: Users,
    description: "Oferecemos consultoria especializada para otimizar processos oncológicos e melhorar resultados clínicos."
  },
  {
    id: 2,
    title: "Gestão de Recursos Humanos",
    icon: LayoutGrid,
    description: "Desenvolvemos estratégias eficientes para gestão de equipes médicas e administrativas."
  },
  {
    id: 3,
    title: "Tecnologia e Inovação",
    icon: Settings,
    description: "Implementamos soluções tecnológicas avançadas para modernizar o atendimento oncológico."
  },
  {
    id: 4,
    title: "Gestão Financeira e Administrativa",
    icon: PiggyBank,
    description: "Oferecemos consultoria especializada em oncologia para otimizar processos hospitalares, melhorar a qualidade do atendimento e garantir protocolos eficazes de tratamento."
  },
  {
    id: 5,
    title: "Zero desperdício",
    icon: Target,
    description: "Implementamos práticas sustentáveis para eliminar desperdícios e otimizar recursos."
  },
  {
    id: 6,
    title: "Paliação",
    icon: Heart,
    description: "Desenvolvemos programas especializados em cuidados paliativos oncológicos."
  }
]

export default function Component() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <div className="text-sky-400">
            <Settings className="h-8 w-8" />
          </div>
          <h2 className="text-2xl text-gray-700">Serviços</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            const isExpanded = expandedId === service.id
            
            return (
              <Card 
                key={service.id}
                className={cn(
                  "relative bg-white/50 border-2 border-white hover:bg-white transition-all duration-300 cursor-pointer text-slate-700",
                  isExpanded && "ring-2 ring-sky-400"
                )}
                onClick={() => setExpandedId(isExpanded ? null : service.id)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <Icon className="h-8 w-8 text-sky-400 mb-4" />
                    <ChevronDown 
                      className={cn(
                        "h-6 w-6 text-slate-400 transition-transform duration-300",
                        isExpanded && "rotate-180"
                      )} 
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className={cn(
                    "text-sm text-gray-500 overflow-hidden transition-[max-height,opacity] duration-300",
                    isExpanded 
                      ? "max-h-[200px] opacity-100" 
                      : "max-h-0 opacity-0"
                  )}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="flex justify-end mt-8">
          {/* <ButtonComponent /> */}
        </div>
      </div>
  )
}