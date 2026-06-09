import {
  CheckCircle2,
} from 'lucide-react';

import aboutImage from '../assets/images/about.png';

const advantages = [
  'Компонентная архитектура React',
  'Современный стек разработки',
  'Чистый и масштабируемый код'
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__wrapper">

          <div className="about__content">
            <span className="about__eyebrow">
              О проекте DevFlow
            </span>

            <h2>
              Современный подход
              <br />
              к веб-разработке
            </h2>

            <p className="about__description">
              DevFlow демонстрирует возможности React,
              компонентной архитектуры и современных
              инструментов фронтенд-разработки для создания
              быстрых, адаптивных и удобных веб-приложений.
            </p>

            <ul className="about__list">
              {advantages.map(item => (
                <li key={item}>
                  <CheckCircle2 size={18} />
                  {item}
                </li>
              ))}
            </ul>

          </div>

          <div className="about__visual">
            <div className="about__glow" />

            <img
              src={aboutImage}
              alt="DevFlow"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;