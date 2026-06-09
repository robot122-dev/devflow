import { lenis } from '../lib/lenis';

export const scrollTo = (target) => {
  lenis.scrollTo(target, {
    offset: -120,
    duration: 1.5
  });
};