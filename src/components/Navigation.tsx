import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

const navLinks = [
  { id: 'hero', label: 'Главная' },
  { id: 'manifesto', label: 'О нас' },
  { id: 'services', label: 'Услуги' },
  { id: 'team', label: 'Команда' },
  { id: 'gallery', label: 'Работы' },
  { id: 'booking', label: 'Запись' },
];

function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
      );
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(`.${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      ref={navRef}
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          BLACK<span>STEEL</span>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="nav-link"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
