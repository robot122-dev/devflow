import { useState } from 'react';

import PrivacyModal from './PrivacyModal';
import { scrollTo } from '../hooks/useScrollTo';

import {
  FaGithub,
  FaTelegramPlane
} from 'react-icons/fa';

import { SiVk } from 'react-icons/si';

function Footer() {
  const [policyOpen, setPolicyOpen] =
  useState(false);

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer__top">

          <div className="footer__brand">
            <a href="/" className="logo">
              <span className="logo-icon">&lt;/&gt;</span>
              <span>DevFlow</span>
            </a>

            <p>
              Создаём современные веб-приложения
              с использованием React и новых
              технологий.
            </p>
          </div>

          <div className="footer__column">
            <h3>Навигация</h3>

            <button
              onClick={() => scrollTo('#features')}
            >
              Преимущества
            </button>

            <button
              onClick={() => scrollTo('#about')}
            >
              О проекте
            </button>

            <button
              onClick={() => scrollTo('#contacts')}
            >
              Контакты
            </button>

          </div>

          <div className="footer__column">
            <h3>Полезные ссылки</h3>

            <a href="https://react.dev">React</a>
            <a href="https://vite.dev">Vite</a>
            <a href="https://github.com/robot122-dev/devflow">
              GitHub
            </a>
          </div>

          <div className="footer__column">
            <h3>Следите за нами</h3>

            <div className="footer__socials">
                <a href="#">
                    <FaGithub />
                </a>

                <a href="#">
                    <FaTelegramPlane />
                </a>

                <a href="#">
                    <SiVk />
                </a>
            </div>
          </div>

        </div>

        <div className="footer__bottom">

          <span>
            © 2026 DevFlow. Все права защищены.
          </span>

          <div className="footer__legal">
            <button
              onClick={() => setPolicyOpen(true)}
            >
              Политика конфиденциальности
            </button>

            <span>•</span>

            <a href="#">
              Условия использования
            </a>
          </div>

        </div>

      </div>

      <PrivacyModal
        isOpen={policyOpen}
        onClose={() => setPolicyOpen(false)}
      />

    </footer>
  );
}

export default Footer;