// Shared client helpers for Nigar Sweets
// - Adds lazy-loading to images
// - Sets active nav item based on page title
// - Smooth-scrolls in-page anchors
// - Hides header on scroll (mobile subtle effect)

document.addEventListener('DOMContentLoaded', function () {
    // Scroll to home section on load for mobile
    if (window.location.hash === '' || window.location.hash === '#home') {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        setTimeout(() => homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  // ensure images use lazy loading
  document.querySelectorAll('img').forEach(img => {
    try { img.loading = 'lazy'; } catch (e) {}
  });

  // set active nav / bottom tab based on document title
  const title = (document.title || '').toLowerCase();
  document.querySelectorAll('nav a').forEach(a => {
    const text = (a.textContent || '').trim().toLowerCase();
    a.classList.remove('text-primary', 'font-bold', 'bg-secondary-container/20');
    if ((title.includes('product') && text.includes('product')) ||
        (title.includes('branch') && text.includes('branch')) ||
        (title.includes('creator') && text.includes('creator')) ||
        (title.includes('home') && text.includes('home'))) {
      a.classList.add('text-primary', 'font-bold', 'bg-secondary-container/20');
    }
  });

  // smooth scrolling for hash links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = a.getAttribute('href');
      if (href && href.length > 1) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Highlight active tab for mobile nav
          document.querySelectorAll('nav.md\\:hidden a').forEach(tab => tab.classList.remove('text-primary', 'font-bold', 'bg-secondary-container/20'));
          a.classList.add('text-primary', 'font-bold', 'bg-secondary-container/20');
        }
      }
    });
  });

  // subtle mobile header hide on scroll
  let lastY = window.scrollY || 0;
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY || 0;
      if (y > lastY && y > 120) {
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 220ms ease';
      } else {
        header.style.transform = '';
      }
      lastY = y;
    }, { passive: true });
  }
  
  // Inject a tiny CSS rule for page fade-out transitions
  try {
    const _style = document.createElement('style');
    _style.textContent = `html.page-fade-out { opacity: 0; transition: opacity 220ms ease; }`;
    document.head.appendChild(_style);
  } catch (e) {}

  // Intercept same-origin navigation to animate page exit
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    // skip hash-only anchors and external / protocol links
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:') || /^(https?:)?\\\/\\\//.test(href)) return;
    link.addEventListener('click', function (e) {
      if (link.target === '_blank') return; // allow new tab
      e.preventDefault();
      document.documentElement.classList.add('page-fade-out');
      const dest = new URL(href, window.location.href).href;
      setTimeout(() => window.location.href = dest, 240);
    });
  });
});
