import { LineChart } from 'lucide-react'

export default function Component() {
  const stats = [
    { label: "Clínicas", value: "55" },
    { label: "Médicos", value: "580" },
    { label: "Atendimentos mensais", value: "10 mil" },
    { label: "Média de tratamento de radioterapia", value: "55 mil", suffix: "por ano" },
    { label: "Estudos Clínicos em parceria com o IDOR", value: "42", suffix: "(1º semestre de 2023)" }
  ]

  return (
    <section className="container max-w-7xl py-8 px-4">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#637590] to-[#41526B] rounded-[2rem] border-2 border-sky-500">
        <div className="relative   rounded-3xl p-6 md:p-8 overflow-hidden">
          <div className="absolute inset-0 rounded-3xl   blur-xl" />
          <div className="absolute inset-[2px] rounded-3xl " />
          
          {/* Content */}
          <div className="relative">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8 text-white">
              <div className="bg-sky-500/20 p-2 rounded-full">
                <LineChart className="w-6 h-6 text-sky-400" />
              </div>
              <h2 className="text-2xl font-semibold">Oncologia em Números</h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 rounded-xl p-4 backdrop-blur-sm hover:bg-slate-700/70 transition-colors"
                >
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sky-200 text-sm">
                    {stat.label}
                    {stat.suffix && (
                      <span className="block text-sky-300/70 text-xs mt-1">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}