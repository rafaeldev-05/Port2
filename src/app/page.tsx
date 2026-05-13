import { About } from '@/components/About';
import { ClientEffects } from '@/components/ClientEffects';
import { DiscoveryForm } from '@/components/DiscoveryForm';
import { Experience } from '@/components/Experience';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Loader } from '@/components/Loader';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Skills } from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <FAQ />
        <DiscoveryForm />
      </main>
      <Footer />
      <ClientEffects />
    </>
  );
}
