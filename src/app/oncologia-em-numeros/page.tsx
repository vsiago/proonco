import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProOnco - Oncologia em Números",
  description: "Transormando cuidado em cura.",
};

function OncologiaEmNumeros() {
  return (
    <main className='min-h-screen flex flex-col'>
      <section className='flex-1 bg-accent flex items-center justify-center'>
        <h1 className='text-xl'>Oncologia em Números</h1>
      </section>
    </main>
  )
}

export default OncologiaEmNumeros
