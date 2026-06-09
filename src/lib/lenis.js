import Lenis from 'lenis';

export const lenis = new Lenis({
  duration: 1.4,
  smoothWheel: true,
  smoothTouch: false
});

function raf(time) {
  lenis.raf(time);

  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);