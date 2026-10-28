/**
 * Main Application Logic for Alessio Curcio Portfolio
 * Multilingual (Flag-only Switcher), Beige & Bordeaux Themes, Typewriter, Filters, Modal & Copy Tooltips
 */

(function () {
  'use strict';

  // --- State ---
  let currentLang = localStorage.getItem('site_lang') || 'it';
  let currentTheme = localStorage.getItem('site_theme') || 'dark';

  // Elements
  const langToggleBtn = document.getElementById('lang-toggle');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  const typewriterText = document.getElementById('typewriter-text');
  const toast = document.getElementById('toast');
  const cvModal = document.getElementById('cv-modal');
  const cvModalClose = document.getElementById('cv-modal-close');
  const openCvModalBtns = document.querySelectorAll('.open-cv-modal');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const contactForm = document.getElementById('contact-form');

  // --- Theme Management ---
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
    localStorage.setItem('site_theme', theme);

    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
      themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Light Mode' : 'Dark Mode');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // --- Multilingual Management (Flag Only) ---
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('site_lang', lang);

    const t = translations[lang];

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    // Update toggle button: ONLY FLAG EMOJI
    if (langToggleBtn) {
      langToggleBtn.innerHTML = lang === 'it' 
        ? '<span class="flag-icon">🇬🇧</span>' 
        : '<span class="flag-icon">🇮🇹</span>';
      langToggleBtn.setAttribute('title', lang === 'it' ? 'Switch to English' : 'Passa all\'Italiano');
      langToggleBtn.setAttribute('aria-label', lang === 'it' ? 'Switch to English' : 'Passa all\'Italiano');
    }

    // Reset Typewriter with new language roles
    initTypewriter();
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'it' ? 'en' : 'it');
    });
  }

  // --- Typewriter Effect ---
  let typewriterTimeout;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function initTypewriter() {
    clearTimeout(typewriterTimeout);
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typeRole();
  }

  function typeRole() {
    const roles = translations[currentLang]?.hero_roles || [
      "M.Sc. AIRO Student @ Sapienza",
      "B.Sc. ACSAI Graduate @ Sapienza"
    ];

    const currentRole = roles[roleIndex % roles.length];

    if (isDeleting) {
      charIndex--;
      typewriterText.textContent = currentRole.substring(0, charIndex);
    } else {
      charIndex++;
      typewriterText.textContent = currentRole.substring(0, charIndex);
    }

    let typeSpeed = isDeleting ? 30 : 65;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 1800; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex++;
      typeSpeed = 350;
    }

    typewriterTimeout = setTimeout(typeRole, typeSpeed);
  }

  // --- Toast Notification ---
  let toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // --- Copy to Clipboard Buttons ---
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const msg = translations[currentLang]?.contact_copied || 'Copiato negli appunti!';
        showToast(msg);

        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      }).catch(() => {
        window.prompt('Copy to clipboard:', textToCopy);
      });
    });
  });

  // --- CV Modal ---
  openCvModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cvModal) {
        cvModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeCvModal() {
    if (cvModal) {
      cvModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (cvModalClose) {
    cvModalClose.addEventListener('click', closeCvModal);
  }

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeCvModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal?.classList.contains('active')) {
      closeCvModal();
    }
  });

  // --- Mobile Navigation ---
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileMenuBtn.innerHTML = isOpen 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // --- Active Link on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);

      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  });

  // --- Project Filter Tabs ---
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --- Contact Form ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value || '';
      const email = document.getElementById('form-email')?.value || '';
      const subject = document.getElementById('form-subject')?.value || 'Nuovo Messaggio da Portfolio';
      const message = document.getElementById('form-message')?.value || '';

      const mailtoUrl = `mailto:alessio.curcio04@gmail.com?subject=${encodeURIComponent(
        `[Personal Site] ${subject} - da ${name}`
      )}&body=${encodeURIComponent(
        `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`
      )}`;

      const successMsg = translations[currentLang]?.form_success || 
        'Grazie! Il tuo client di posta si aprirà con il messaggio compilato.';
      showToast(successMsg);

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 600);
    });
  }

  // --- Initialization ---
  applyTheme(currentTheme);
  applyLanguage(currentLang);
})();
