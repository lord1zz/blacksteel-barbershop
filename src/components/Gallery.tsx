import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Scissors, Sparkles, Star } from 'lucide-react';
import './Gallery.css';

type Category = 'all' | 'haircut' | 'beard' | 'complex';

interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  icon: typeof Scissors;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Классическая стрижка', category: 'haircut', icon: Scissors },
  { id: 2, title: 'Оформление бороды', category: 'beard', icon: Sparkles },
  { id: 3, title: 'Полный образ', category: 'complex', icon: Star },
  { id: 4, title: 'Современная укладка', category: 'haircut', icon: Scissors },
  { id: 5, title: 'Моделирование бороды', category: 'beard', icon: Sparkles },
  { id: 6, title: 'Стрижка + борода', category: 'complex', icon: Star },
  { id: 7, title: 'Fade стрижка', category: 'haircut', icon: Scissors },
  { id: 8, title: 'Королевское бритьё', category: 'beard', icon: Sparkles },
  { id: 9, title: 'Премиум образ', category: 'complex', icon: Star },
];

const categories = [
  { id: 'all' as Category, label: 'Все работы' },
  { id: 'haircut' as Category, label: 'Стрижки' },
  { id: 'beard' as Category, label: 'Борода' },
  { id: 'complex' as Category, label: 'Комплекс' },
];

function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll('.gallery-item');

      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
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
  }, [filteredItems]);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  const getCategoryLabel = (category: Category): string => {
    const labels = {
      haircut: 'Стрижка',
      beard: 'Борода',
      complex: 'Комплекс',
      all: 'Все'
    };
    return labels[category];
  };

  return (
    <section className="gallery section" ref={sectionRef} id="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <div className="gallery-label">ПОРТФОЛИО</div>
          <h2 className="gallery-title">Наши работы</h2>

          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid" ref={gridRef}>
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="gallery-item">
                <div className="gallery-placeholder">
                  <Icon size={64} strokeWidth={1} />
                </div>

                <div className="gallery-overlay">
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-category">
                    {getCategoryLabel(item.category)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
