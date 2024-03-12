import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProOnco - Serviços",
  description: "Transormando cuidado em cura.",
};

function Servicos() {
  return (
    <main className='min-h-screen flex flex-col'>
      <section className='flex-1 bg-accent flex items-center justify-center'>
        <h1 className='text-xl'>Serviços</h1>
      </section>
    </main>
  )
}

export default Servicos
