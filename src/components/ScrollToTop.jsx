import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-top ${
        visible ? 'active' : ''
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp size={22} />
    </button>
  );
}

export default ScrollToTop;