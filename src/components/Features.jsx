import {
  Zap,
  MonitorSmartphone,
  ShieldCheck,
  Users
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Высокая производительность',
    text: 'Используем React и современные технологии для быстрой работы приложений.',
    details: [
      'Virtual DOM',
      'Быстрый рендеринг',
      'Оптимизация интерфейса',
      'Высокая отзывчивость'
    ]
  },
  {
    icon: MonitorSmartphone,
    title: 'Адаптивный дизайн',
    text: 'Интерфейс отлично выглядит на любых устройствах: от мобильных до десктопов.',
    details: [
      'Mobile First',
      'Планшеты',
      'Ноутбуки',
      'Любые разрешения'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Надёжность',
    text: 'Пишем чистый и поддерживаемый код, следуем лучшим практикам разработки.',
    details: [
      'Чистая архитектура',
      'Поддерживаемость',
      'Безопасность',
      'Масштабируемость'
    ]
  },
  {
    icon: Users,
    title: 'Команда профессионалов',
    text: 'Опытные разработчики, которые любят своё дело и создают качественные продукты.',
    details: [
      'Code Review',
      'UX/UI подход',
      'Современный стек',
      'Лучшие практики'
    ]
  }
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h2>Преимущества</h2>

          <p>
            Наш подход позволяет создавать качественные продукты
            <br />
            с отличной производительностью и удобством
          </p>
        </div>

        <div className="features-grid">
          {features.map(({ icon: Icon, title, text, details }) => (
            <article className="feature-card" key={title}>
              <div className="feature-card-inner">

                <div className="feature-front">
                  <div className="feature-icon">
                    <Icon size={28} strokeWidth={2.2} />
                  </div>

                  <h3>{title}</h3>

                  <p>{text}</p>
                </div>

                <div className="feature-back">
                  <h3>{title}</h3>

                  <ul>
                    {details.map(item => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;