import heroImage from '../assets/images/hero-laptop.png';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__badge">
            Современные технологии
          </span>

          <h1 className="hero__title">
            Создаем будущее
            <br />
            веб-разработки
          </h1>

          <p className="hero__text">
            Мы используем React и современные подходы
            для создания быстрых, надёжных и удобных
            веб-приложений.
          </p>

          <div className="hero__actions">
            <button className="btn btn--lg btn--primary">
              Узнать больше
            </button>

            <button className="btn btn--lg btn--secondary">
              Посмотреть проект
            </button>
          </div>
        </div>

        <div className="hero__image">
          <img src={heroImage} alt="React Development" />
        </div>
      </div>
    </section>
  );
}

export default Hero;