import { scrollTo } from '../hooks/useScrollTo';
import { useState } from 'react';

import {
  Menu,
  X
} from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (section) => {
    scrollTo(section);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">

        <a
          href="/"
          className="logo"
        >
          <span className="logo-icon">
            &lt;/&gt;
          </span>

          <span>
            DevFlow
          </span>
        </a>

        <nav
          className={`nav ${
            menuOpen ? 'nav--open' : ''
          }`}
        >
          <button
            onClick={() => handleNavigate('#features')}
          >
            Преимущества
          </button>

          <button
            onClick={() => handleNavigate('#about')}
          >
            О проекте
          </button>

          <button
            onClick={() => handleNavigate('#contacts')}
          >
            Контакты
          </button>

          <button
            onClick={() => handleNavigate('#contacts')}
            className="btn btn--primary btn--sm nav-mobile-btn"
          >
            Связаться с нами
          </button>
        </nav>

        <button
          onClick={() => scrollTo('#contacts')}
          className="btn btn--primary btn--sm header-btn"
        >
          Связаться с нами
        </button>

        <button
          className="burger"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {
            menuOpen
              ? <X size={24} />
              : <Menu size={24} />
          }
        </button>

      </div>
    </header>
  );
}

export default Header;