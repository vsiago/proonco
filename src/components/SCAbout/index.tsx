import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function AboutUsSection() {
  return (
    <section className="bg-gradient-to-b from-sky-100 to-white py-16  md:py-24 md:px-8 overflow-hidden">
      <div className="md:container mx-auto relative">
        <div className="bg-gradient-to-br from-sky-800 to-blue-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-xl">
          <div className="md:max-w-[60%] lg:max-w-[50%] relative z-10">
            <h2 className="text-4xl font-bold mb-6">Quem somos</h2>
            <p className="text-lg mb-8">
              A ProOnco é uma empresa dedicada à promoção da excelência na gestão hospitalar em oncologia. Nossa missão é fornecer soluções especializadas e inovadoras que auxiliem instituições de saúde a oferecerem os melhores cuidados aos pacientes oncológicos.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">A equipe</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Dr. Camilo Campos</p>
                  <p className="text-sky-200">Médico Oncologista</p>
                </div>
                <div>
                  <p className="font-semibold">Dr. Camilo Campos</p>
                  <p className="text-sky-200">Médico Oncologista</p>
                </div>
              </div>
            </div>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white border-none rounded-full px-6 py-2 flex items-center group transition-all duration-300 ease-in-out">
              Conheça mais
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[45%] h-[110%] rounded-l-3xl overflow-hidden shadow-2xl hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-sky-900/20" />
          {/* Replace the div below with your actual image */}
          <div className="absolute inset-0 bg-blue-900 flex items-center justify-center text-white text-lg">
            Placeholder for doctor image
          </div>
        </div>
      </div>
    </section>
  )
}