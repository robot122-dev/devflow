import { useState } from 'react';

function CookieBanner({ openPolicy }) {
  const [visible, setVisible] = useState(() => {
    return !localStorage.getItem(
      'cookie-consent'
    );
  });

  const [closing, setClosing] = useState(false);

  const hideBanner = () => {
    setClosing(true);

    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  const acceptCookies = () => {
    localStorage.setItem(
      'cookie-consent',
      'true'
    );

    hideBanner();
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`cookie-banner ${
        closing ? 'cookie-banner--closing' : ''
      }`}
    >
      <div className="cookie-banner__content">

        <p>
          Мы используем cookie-файлы для улучшения
          работы сайта и анализа посещаемости.
          Подробнее в нашей&nbsp;

          <button
            className="cookie-link"
            onClick={openPolicy}
            type="button"
          >
            политике конфиденциальности
          </button>.
        </p>

        <div className="cookie-banner__actions">
          <button
            className="btn btn--sm btn--primary"
            onClick={acceptCookies}
          >
            Принять
          </button>

          <button
            className="cookie-close"
            onClick={hideBanner}
            type="button"
          >
            ✕
          </button>

        </div>

      </div>
    </div>
  );
}

export default CookieBanner;