/* ==========================================================================
   Main UI Module
   Handles navigation, scroll animations, mobile nav, smooth scroll,
   and contact form submission.
   ========================================================================== */

/* --- Intersection Observer for scroll animations --- */
/**
 * Sets up IntersectionObserver for all `.animate-hidden` elements.
 * On intersect: adds `animate-visible`, removes `animate-hidden`, unobserves.
 * Can be called again after dynamically adding elements (e.g. project cards).
 */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        entry.target.classList.remove('animate-hidden');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-hidden').forEach(el => {
    observer.observe(el);
  });
}

/* --- Active nav link highlighting --- */
function initNavHighlight() {
  const sections = document.querySelectorAll('main > section');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`
        );
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' });

  sections.forEach(section => observer.observe(section));
}

/* --- Mobile nav toggle --- */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('nav-menu--open');
    toggle.setAttribute('aria-expanded',
      menu.classList.contains('nav-menu--open').toString());
  });

  // Close menu when a nav-link is clicked (mobile UX)
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('nav-menu--open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --- Smooth scroll for anchor links --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* --- Contact form submission --- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (!form || !status) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // i18n-aware success message
        const lang = (typeof getLanguage === 'function') ? getLanguage() : 'en';
        const successMsg = lang === 'ru'
          ? 'Сообщение отправлено!'
          : 'Message sent successfully!';
        status.textContent = successMsg;
        status.className = 'form-status form-status--success';
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      const lang = (typeof getLanguage === 'function') ? getLanguage() : 'en';
      const errorMsg = lang === 'ru'
        ? 'Не удалось отправить сообщение. Попробуйте ещё раз.'
        : 'Failed to send message. Please try again.';
      status.textContent = errorMsg;
      status.className = 'form-status form-status--error';
    }
  });
}

/* --- Initialize all modules on DOMContentLoaded --- */
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initNavHighlight();
  initMobileNav();
  initSmoothScroll();
  initContactForm();
});
