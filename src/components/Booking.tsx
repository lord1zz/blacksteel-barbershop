import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Clock, MapPin, Phone } from 'lucide-react';
import './Booking.css';

function Booking() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    master: '',
    date: '',
    time: '',
    comment: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Спасибо за запись! Мы свяжемся с вами в ближайшее время.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="booking section" ref={sectionRef} id="booking">
      <div className="booking-container">
        <div className="booking-header">
          <div className="booking-label">ЗАПИСЬ</div>
          <h2 className="booking-title">Записаться на приём</h2>
          <p className="booking-description">
            Заполните форму, и мы свяжемся с вами для подтверждения записи
          </p>
        </div>

        <form className="booking-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ваше имя"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+7 (___) ___-__-__"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="service">
              Услуга
            </label>
            <select
              id="service"
              name="service"
              className="form-select"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Выберите услугу</option>
              <option value="haircut">Мужская стрижка - €45</option>
              <option value="beard">Стрижка и оформление бороды - €55</option>
              <option value="shave">Королевское бритьё - €65</option>
              <option value="complex">Комплексный уход - €95</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="master">
              Мастер
            </label>
            <select
              id="master"
              name="master"
              className="form-select"
              value={formData.master}
              onChange={handleChange}
              required
            >
              <option value="">Выберите мастера</option>
              <option value="volkov">Дмитрий Волков</option>
              <option value="petrov">Александр Петров</option>
              <option value="sokolov">Михаил Соколов</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="date">
                Дата
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="form-input"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="time">
                Время
              </label>
              <select
                id="time"
                name="time"
                className="form-select"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Выберите время</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="comment">
              Комментарий (необязательно)
            </label>
            <textarea
              id="comment"
              name="comment"
              className="form-textarea"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Дополнительные пожелания или вопросы"
            />
          </div>

          <button type="submit" className="form-submit">
            Отправить заявку
          </button>
        </form>

        <div className="booking-info">
          <div className="info-item">
            <div className="info-icon">
              <MapPin size={24} />
            </div>
            <h3 className="info-title">Адрес</h3>
            <p className="info-text">
              Москва, ул. Тверская, 15
            </p>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <Clock size={24} />
            </div>
            <h3 className="info-title">Часы работы</h3>
            <p className="info-text">
              Пн-Вс: 10:00 - 22:00
            </p>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <Phone size={24} />
            </div>
            <h3 className="info-title">Телефон</h3>
            <p className="info-text">
              +7 (495) 123-45-67
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
