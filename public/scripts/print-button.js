// Wire any element with `data-print-trigger` to fire window.print().
// CSP-safe (script-src 'self' permits this external module ; inline
// handlers would not).
(function () {
  const triggers = document.querySelectorAll('[data-print-trigger]');
  triggers.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });
})();
