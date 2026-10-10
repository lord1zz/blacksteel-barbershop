# BLACKSTEEL Barbershop

![BLACKSTEEL](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-19.2.8-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-blue)
![Vite](https://img.shields.io/badge/Vite-8.3.0-purple)

Премиальный барбершоп лендинг с 3D-анимацией и современным дизайном.

## 🔗 Live Demo

**[Посмотреть сайт →](https://my-project-nu-six-57.vercel.app)**

## ✨ Особенности

- 🎨 **Темная металлическая тема** с градиентами и блестящими эффектами
- 🌀 **3D объект на Three.js** в главной секции с интерактивной анимацией
- ⚡ **GSAP анимации** при скролле для плавных переходов
- 📱 **Полностью адаптивный** дизайн для всех устройств
- 🎯 **8 секций**: Hero, Философия, Услуги, Команда, Галерея, Запись, Контакты
- 🎭 **Фиксированная навигация** с мобильным меню
- 📝 **Форма онлайн-записи** с выбором услуги и мастера

## 🛠️ Технологии

- **Frontend**: React 19 + TypeScript
- **Сборка**: Vite 8
- **3D графика**: Three.js + @react-three/fiber + @react-three/drei
- **Анимации**: GSAP + ScrollTrigger
- **Иконки**: Lucide React
- **Деплой**: Vercel

## 🚀 Быстрый старт

```bash
# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev

# Собрать для production
npm run build

# Preview production билда
npm run preview
```

## 📂 Структура проекта

```
src/
├── components/
│   ├── Navigation.tsx      # Фиксированная навигация
│   ├── Hero.tsx           # Главная секция с 3D объектом
│   ├── MetallicObject.tsx # 3D металлический объект
│   ├── Manifesto.tsx      # Философия бренда
│   ├── Services.tsx       # Карточки услуг
│   ├── Team.tsx           # Команда мастеров
│   ├── Gallery.tsx        # Галерея работ с фильтрацией
│   ├── Booking.tsx        # Форма онлайн-записи
│   └── Footer.tsx         # Контакты и соц. сети
├── App.tsx                # Главный компонент
└── main.tsx              # Точка входа
```

## 🎨 Дизайн-система

### Цветовая палитра

```css
--black: #0a0a0a      /* Основной фон */
--graphite: #1a1a1a   /* Вторичный фон */
--steel: #2a2a2a      /* Карточки */
--chrome: #c8c8c8     /* Акценты */
--silver: #a8a8a8     /* Текст */
--white: #f5f5f5      /* Заголовки */
```

### Типографика

- **Шрифт**: Inter, system-ui
- **Заголовки**: 42px - 80px (responsive)
- **Текст**: 15px - 16px

## 📋 Секции сайта

1. **Hero** - Главный экран с 3D объектом и призывом к действию
2. **Manifesto** - Философия барберинга с анимацией текста
3. **Services** - 4 основные услуги с ценами
4. **Team** - 3 мастера с опытом работы
5. **Gallery** - Портфолио работ с фильтрацией
6. **Booking** - Форма записи онлайн
7. **Footer** - Контакты, навигация, соцсети

## 🔧 Команды

```bash
npm run dev       # Запуск dev-сервера (localhost:5173)
npm run build     # Production сборка
npm run preview   # Preview production билда
npm run lint      # Проверка кода с Oxlint
```

## 📄 Лицензия

Проект создан как портфолио. Свободен для использования.

## 👨‍💻 Автор

**lord1zz**

- GitHub: [@lord1zz](https://github.com/lord1zz)
- Проект: [BLACKSTEEL Barbershop](https://github.com/lord1zz/blacksteel-barbershop)

---

Создано с ❤️ и Claude Code
