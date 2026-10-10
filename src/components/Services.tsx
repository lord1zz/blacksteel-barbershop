import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Scissors, Sparkles, ShowerHead, Star } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Scissors,
    title: 'Мужская стрижка',
    description: 'Классическая или современная стрижка с учётом формы лица и структуры волос',
    duration: '45 мин',
    price: '€45',
  },
  {
    icon: Sparkles,
    title: 'Стрижка и оформление бороды',
    description: 'Моделирование бороды, коррекция контура, уход за кожей',
    duration: '60 мин',
    price: '€55',
  },
  {
    icon: ShowerHead,
    title: 'Королевское бритьё',
    description: 'Традиционное бритьё опасной бритвой с горячим полотенцем и уходом',
    duration: '50 мин',
    price: '€65',
  },
  {
    icon: Star,
    title: 'Комплексный уход',
    description: 'Полный спектр услуг: стрижка, борода, бритьё и укладка',
    duration: '90 мин',
    price: '€95',
  },
];

function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.service-card');

      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80, rotationX: -15 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services section" ref={sectionRef}>
      <div className="services-container">
        <div className="services-header">
          <div className="services-label">УСЛУГИ</div>
          <h2 className="services-title">Мастерство в каждой детали</h2>
        </div>

        <div className="services-grid" ref={cardsRef}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <Icon size={32} />
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <div className="service-meta">
                  <span className="service-duration">{service.duration}</span>
                  <span className="service-price">{service.price}</span>
                </div>

                <div className="service-shine"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
