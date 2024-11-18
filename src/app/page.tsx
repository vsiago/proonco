import Header from '../components/Header';
import Footer from '@/components/Footer';
import SCService from '@/components/SCService';
import SCAbout from '@/components/SCAbout';
import SCBenefits from '@/components/SCBenefits';
import SCStatics from '@/components/SCStatics';
import SCOncologyForm from '@/components/SCOncologyForm';
import SCHero from '@/components/SCHero';

export default function Home() {
  return (
    <main className="">
      <Header />
      <section className="background-section h-[93vh] md:h-screen w-full bg-[#0E264A] flex items-center justify-center">
        <SCHero />
      </section>
     
      <section id="services" className="bg-gradient-to-b from-sky-100 to-white py-16 px-4 md:py-24 md:px-8 overflow-hidden">
        <SCService />
      </section>
      <section id="about" className="bg-gradient-to-b from-sky-100 to-white py-16 px-4 md:py-24 md:px-8 overflow-hidden">
        <SCAbout />
      </section>
      <section id="benefits" className="bg-gradient-to-b from-sky-100 to-white py-16 px-4 md:py-24 md:px-8 overflow-hidden">
      <SCBenefits />
        
      </section>
      <section id="statics" className="bg-gradient-to-b from-sky-100 to-white py-16 px-4 md:py-24 md:px-8 overflow-hidden">
        <SCStatics />
      </section>
      <section id="contact" className="bg-gradient-to-b from-sky-100 to-white py-16 px-4 md:py-24 md:px-8 overflow-hidden">
        <SCOncologyForm />
      </section>
      <section className="bg-gradient-to-b from-sky-100 to-white overflow-hidden">
      <Footer />
</section>
    </main>
  );
}
