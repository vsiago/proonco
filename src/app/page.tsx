import Header from '../components/Header';
import Footer from '@/components/Footer';
import SCService from '@/components/SCService';
import SCAbout from '@/components/SCAbout';
import SCBenefits from '@/components/SCBenefits';
import SCStatics from '@/components/SCStatics';
import SCOncologyForm from '@/components/SCOncologyForm';
import SCHero from '@/components/SCHero';
import ParticlesComponent from '@/components/particles';


export default function Home() {
  return (
    <main className="">
      <Header />
      <section className=" relative z-50 h-[93vh] md:h-screen w-full flex items-center justify-center">
        <SCHero />
      </section>
      <div className='background-section h-full w-full absolute z-10 top-0 opacity-30'>
        <ParticlesComponent id="particles" />

      </div>
      <section
        id="services"
        className="bg-gradient-to-b from-sky-100 to-white py-16 px-4 md:py-24 md:px-8 overflow-hidden"
      >
        <SCService />
      </section>
      <section
        id="about"
        className="bg-gradient-to-b from-sky-100 to-white py-16 px-4 md:py-24 md:px-8 overflow-hidden"
      >
        <SCAbout />
      </section>
      <section
        id="benefits"
        className="bg-gradient-to-b from-sky-100 to-white py-16 px-4 md:py-24 md:px-8 overflow-hidden"
      >
        <SCBenefits />
      </section>
      <section
        id="statics"
        className="bg-gradient-to-b from-sky-100 to-white py-16 px-4 md:py-24 md:px-8 overflow-hidden"
      >
        <SCStatics />
      </section>
      <section
        id="contact"
        className="bg-gradient-to-b from-sky-100 to-white py-16 px-4 md:py-24 md:px-8 overflow-hidden"
      >
        <SCOncologyForm />
      </section>
        <Footer />
    </main>
  );
}
