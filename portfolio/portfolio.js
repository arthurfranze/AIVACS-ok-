/* ===================================================
   AIVACS — portfolio.js
   Stagger reveal for portfolio item grids (subpages).
   Loaded after main.js and animations.js.
   =================================================== */
(function () {

  /* ---- Stagger each card with 80ms offset ---- */
  const gridObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const items = entry.target.querySelectorAll('.portfolio-item');
      items.forEach((item, i) => {
        setTimeout(() => item.classList.add('revealed'), i * 80);
      });
      gridObs.unobserve(entry.target);
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.portfolio-items-grid').forEach(grid => {
    gridObs.observe(grid);
  });

  /* ---- Reveal-up for any remaining .reveal-up on the page ---- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-up').forEach(el => revealObs.observe(el));

})();
