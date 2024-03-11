import type { Metadata } from "next";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "ProOnco - Quem Somos",
  description: "Transormando cuidado em cura.",
};

function QuemSomos() {
  return (
    <main className='min-h-screen flex flex-col'>
      <Header />
      <section className='flex-1 bg-accent flex items-center justify-center'>
        <h1 className='text-xl'>Quem Somos</h1>
      </section>
      <Footer />
    </main>
  )
}

export default QuemSomos
