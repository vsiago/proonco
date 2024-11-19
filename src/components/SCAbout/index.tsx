import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function AboutUsSection() {
  return (
      <div className="md:container  mx-auto relative flex flex-col-reverse md:flex-row py-8 xl:pr-40 ">
        <div className="bg-gradient-to-br to-[#0E264A] from-[#0F4B7D]/90 rounded-3xl p-8 md:p-12 lg:p-16 w-[100%] text-white  border-2 border-sky-500/80 hover:shadow-custom-blue transition-all duration-300 ease-in-out">
          <div className="md:max-w-[80%] lg:max-w-[60%] relative z-50 my-12">
            <h2 className="text-4xl font-bold mb-6 ">Quem somos</h2>
            <p className="md:text-lg mb-8 z-50">
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
            {/* <button className="bg-sky-500  hover:bg-sky-600 text-white border-none rounded-full px-6 py-5 flex items-center group transition-all duration-300 ease-in-out">
              Conheça mais
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </button> */}
          </div>
        </div>
        <div className='h-[300px] top-0 md:h-full w-full max-w-[400px] absolute z-10 md:right-14 rounded-2xl bg-gradient-to-tr to-[#3E5E82] from-[#3D5E81]/40  backdrop-blur-sm'></div>
              <Image width={700} height={700} alt='Imagem de um casal de médicos' className='h-[90%] w-[60%] md:w-[100%] xl:[100%] absolute object-contain md:-right-[20rem] xl:-right-[28rem] z-30' src={"/bg-about.png"} />
        <div className='h-[300px] top-7 md:h-full w-full max-w-[400px] absolute  md:right-6 rounded-3xl border-4 border-sky-400'></div>
      
      </div>
  )
}