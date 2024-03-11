import Header from '@/components/Header'
import Footer from '@/components/Footer'

function Servicos() {
  return (
    <main className='min-h-screen flex flex-col'>
      <Header />
      <section className='flex-1 bg-accent flex items-center justify-center'>
        <h1 className='text-xl'>Servicos</h1>
      </section>
      <Footer />
    </main>
  )
}

export default Servicos
