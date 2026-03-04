import Header from './components/Header';
import Hero from './components/Hero';
import LiveActivity from './components/LiveActivity';
import HowItWorks from './components/HowItWorks';
import TokenDynamics from './components/TokenDynamics';
import Transparency from './components/Transparency';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <LiveActivity />
        <HowItWorks />
        <TokenDynamics />
        <Transparency />
      </main>
      <Footer />
    </div>
  );
}
