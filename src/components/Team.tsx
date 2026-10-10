import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { User } from 'lucide-react';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'Дмитрий Волков',
    position: 'Старший мастер',
    description: 'Специализация на классических и fade стрижках. 12 лет опыта работы в премиальных барбершопах Москвы.',
    experience: '12+',
    clients: '5000+',
  },
  {
    id: 2,
    name: 'Александр Петров',
    position: 'Мастер-барбер',
    description: 'Эксперт по моделированию бороды и королевскому бритью. Прошёл обучение в Лондоне.',
    experience: '8+',
    clients: '3500+',
  },
  {
    id: 3,
    name: 'Михаил Соколов',
    position: 'Мастер-стилист',
    description: 'Создаёт современные образы, работает с текстурой и укладкой. Участник международных конкурсов.',
    experience: '10+',
    clients: '4200+',
  },
];

function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.team-card');

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
    <section className="team section" ref={sectionRef} id="team">
      <div className="team-container">
        <div className="team-header">
          <div className="team-label">КОМАНДА</div>
          <h2 className="team-title">Наши мастера</h2>
        </div>

        <div className="team-grid" ref={cardsRef}>
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image-wrapper">
                <div className="team-image-placeholder">
                  <User className="team-image-icon" strokeWidth={1} />
                </div>
              </div>

              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-description">{member.description}</p>

                <div className="team-stats">
                  <div className="team-stat">
                    <span className="team-stat-value">{member.experience}</span>
                    <span className="team-stat-label">Лет опыта</span>
                  </div>
                  <div className="team-stat">
                    <span className="team-stat-value">{member.clients}</span>
                    <span className="team-stat-label">Клиентов</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
