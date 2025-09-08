(function () {
  'use strict';
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('global-nav');
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('open');
    });
  }
  // アンカークリックでメニューを閉じる（モバイル）
  navList?.addEventListener('click', (e) => {
    const t = e.target;
    if (t && t.tagName === 'A') {
      toggle?.setAttribute('aria-expanded','false');
      navList.classList.remove('open');
    }
  });
})();
