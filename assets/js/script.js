(() => {
  'use strict';

  // Back-to-top button visibility
  const toTop = document.querySelector('.to-top');
  if (toTop) {
    const toggleToTop = () => {
      toTop.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', toggleToTop, { passive: true });
    toggleToTop();

    toTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll reveal animation
  const revealTargets = document.querySelectorAll(
    '.section-head, .about__text, .about__images, .strength__item, ' +
    '.flow__lead, .flow__steps, .ceo__box, .interview, .recruit__gallery, ' +
    '.recruit__persona, .company__grid, .contact__tel'
  );
  revealTargets.forEach((el) => el.setAttribute('data-reveal', ''));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }
})();
