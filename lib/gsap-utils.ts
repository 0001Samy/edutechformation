import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Fade in animation
export const fadeIn = (element: HTMLElement | HTMLElement[], options = {}) => {
  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out',
    ...options,
  });
};

// Fade in with scroll trigger
export const fadeInOnScroll = (
  element: HTMLElement | HTMLElement[],
  options = {}
) => {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    ...options,
  });
};

// Stagger animation
export const staggerIn = (
  elements: HTMLElement[] | NodeListOf<Element>,
  options = {}
) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    ...options,
  });
};

// Scale animation
export const scaleIn = (element: HTMLElement | HTMLElement[], options = {}) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)',
    ...options,
  });
};
