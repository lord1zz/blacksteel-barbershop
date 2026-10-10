import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(`.${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              BLACK<span>STEEL</span>
            </div>
            <p className="footer-tagline">
              Премиальный барбершоп, где традиционное мастерство встречается с современной эстетикой.
            </p>
            <div className="footer-social">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="YouTube"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Навигация</h3>
            <div className="footer-links">
              <button className="footer-link" onClick={() => scrollToSection('hero')}>
                Главная
              </button>
              <button className="footer-link" onClick={() => scrollToSection('manifesto')}>
                О нас
              </button>
              <button className="footer-link" onClick={() => scrollToSection('services')}>
                Услуги
              </button>
              <button className="footer-link" onClick={() => scrollToSection('team')}>
                Команда
              </button>
              <button className="footer-link" onClick={() => scrollToSection('gallery')}>
                Работы
              </button>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Услуги</h3>
            <div className="footer-links">
              <button className="footer-link" onClick={() => scrollToSection('services')}>
                Мужская стрижка
              </button>
              <button className="footer-link" onClick={() => scrollToSection('services')}>
                Оформление бороды
              </button>
              <button className="footer-link" onClick={() => scrollToSection('services')}>
                Королевское бритьё
              </button>
              <button className="footer-link" onClick={() => scrollToSection('booking')}>
                Записаться
              </button>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Контакты</h3>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <span className="footer-contact-text">
                Москва, ул. Тверская, 15
              </span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <span className="footer-contact-text">
                +7 (495) 123-45-67
              </span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" />
              <span className="footer-contact-text">
                info@blacksteel.ru
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 BLACKSTEEL. Все права защищены.
        </p>
        <div className="footer-legal">
          <a href="#" className="footer-legal-link">
            Политика конфиденциальности
          </a>
          <a href="#" className="footer-legal-link">
            Условия использования
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
