import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Manifesto.css';

function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll('.word');

      if (words) {
        gsap.fromTo(
          words,
          { opacity: 0.2, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 30%',
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const text = "Барберинг — это не просто стрижка. Это ритуал, построенный на мастерстве, внимании к деталям и уважении к традициям. В BLACKSTEEL мы создаём образы, которые подчёркивают индивидуальность и характер каждого клиента.";
  const words = text.split(' ');

  return (
    <section className="manifesto section" ref={sectionRef}>
      <div className="manifesto-container">
        <div className="manifesto-label">ФИЛОСОФИЯ</div>

        <div className="manifesto-text" ref={textRef}>
          {words.map((word, index) => (
            <span key={index} className="word">
              {word}{' '}
            </span>
          ))}
        </div>

        <div className="manifesto-line"></div>
      </div>
    </section>
  );
}

export default Manifesto;
