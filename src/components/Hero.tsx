import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import gsap from 'gsap';
import { ArrowRight, Play } from 'lucide-react';
import MetallicObject from './MetallicObject';
import './Hero.css';

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 100, rotationX: -15 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1.4, delay: 0.3 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 1 },
          '-=0.8'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        );

      if (buttonsRef.current?.children) {
        tl.fromTo(
          Array.from(buttonsRef.current.children),
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15 },
          '-=0.4'
        );
      }

      if (coordsRef.current?.children) {
        tl.fromTo(
          Array.from(coordsRef.current.children),
          { opacity: 0 },
          { opacity: 0.5, duration: 1, stagger: 0.1 },
          '-=0.6'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-coords" ref={coordsRef}>
            <span className="coord-line">55.7558° N</span>
            <span className="coord-line">37.6173° E</span>
            <span className="coord-line">EST. 2024</span>
          </div>

          <h1 className="hero-title" ref={titleRef}>
            BLACK<span className="title-accent">STEEL</span>
          </h1>

          <p className="hero-subtitle" ref={subtitleRef}>
            PRECISION. CHARACTER. CRAFT.
          </p>

          <p className="hero-desc" ref={descRef}>
            Премиальный барбершоп, где традиционное мастерство встречается с современной эстетикой.
            Мы создаём образы, которые отражают характер и стиль.
          </p>

          <div className="hero-buttons" ref={buttonsRef}>
            <button className="btn btn-primary" onClick={scrollToBooking}>
              Записаться
              <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary" onClick={scrollToGallery}>
              <Play size={20} />
              Наши работы
            </button>
          </div>
        </div>

        <div className="hero-3d">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4a9eff" />
            <MetallicObject />
          </Canvas>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>ПРОКРУТИТЕ</span>
      </div>
    </section>
  );
}

export default Hero;
