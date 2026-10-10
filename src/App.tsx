import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <main>
      <Navigation />
      <Hero />
      <Manifesto />
      <Services />
      <Team />
      <Gallery />
      <Booking />
      <Footer />
    </main>
  );
}

export default App;
