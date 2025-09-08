(function () {
  'use strict';

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('global-nav');
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('open');
    });

    // Close when link clicked
    navList.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.tagName === 'A') {
        toggle.setAttribute('aria-expanded', 'false');
        navList.classList.remove('open');
      }
    });
  }

  // News ticker: duplicate items to create seamless loop
  const ticker = document.querySelector('.ticker');
  if (ticker) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = Array.from(ticker.children);
    // Ensure enough width for scrolling
    items.forEach((li) => ticker.appendChild(li.cloneNode(true)));
    if (!prefersReduced) {
      ticker.classList.add('animating');
      ticker.addEventListener('mouseenter', () => ticker.classList.remove('animating'));
      ticker.addEventListener('mouseleave', () => ticker.classList.add('animating'));
    }
  }

  // Bottom nav: set aria-current based on hash in view
  const bottomNav = document.querySelector('.bottom-nav');
  if (bottomNav) {
    const links = bottomNav.querySelectorAll('a[href^="#"]');
    const sections = Array.from(links).map((a) => {
      const id = a.getAttribute('href').slice(1);
      return document.getElementById(id);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = visible.target.id;
        links.forEach((a) => a.removeAttribute('aria-current'));
        const active = bottomNav.querySelector(`a[href="#${id}"]`);
        if (active) active.setAttribute('aria-current', 'page');
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0.2, 0.5, 0.8] }
    );
    sections.filter(Boolean).forEach((sec) => observer.observe(sec));
  }
})();

