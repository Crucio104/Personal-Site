/**
 * Main Application Logic for Alessio Curcio Portfolio
 * Multilingual (Flag-only Switcher), Beige & Bordeaux Themes, Typewriter, Filters, Modal & Copy Tooltips
 */

(function () {
  'use strict';

  // --- State ---
  let currentLang = localStorage.getItem('site_lang') || 'en';
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
  const transcriptModal = document.getElementById('transcript-modal');
  const transcriptModalClose = document.getElementById('transcript-modal-close');
  const transcriptModalCloseBtn = document.getElementById('transcript-modal-close-btn');
  const openTranscriptBtns = document.querySelectorAll('.open-transcript-modal');
  const tFilterBtns = document.querySelectorAll('.transcript-filter-btn');
  const tRows = document.querySelectorAll('#transcript-table tbody tr');
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
      themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Light Mode' : 'Dark Mode');
    }

    const themeColorMeta = document.getElementById('theme-color-meta');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', theme === 'dark' ? '#151113' : '#FAF6F0');
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
    document.documentElement.setAttribute('lang', lang);

    const t = translations[lang];

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key] && typeof t[key] === 'string') {
        el.innerHTML = t[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] && typeof t[key] === 'string') {
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

    const btt = document.getElementById('back-to-top');
    if (btt) {
      btt.setAttribute('title', lang === 'it' ? 'Torna in cima' : 'Scroll to top');
      btt.setAttribute('aria-label', lang === 'it' ? 'Torna in cima' : 'Scroll to top');
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
  let typewriterTimeout = null;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function initTypewriter() {
    if (typewriterTimeout) {
      clearTimeout(typewriterTimeout);
      typewriterTimeout = null;
    }
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    if (typewriterText) {
      typewriterText.textContent = '';
    }
    typeRole();
  }

  function typeRole() {
    if (!typewriterText) return;

    const roles = translations[currentLang]?.hero_roles || [
      "M.Sc. AIRO Student — Sapienza",
      "B.Sc. ACSAI Graduate — Sapienza"
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
  let toastTimer = null;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // --- Copy to Clipboard Buttons with Robust Fallback ---
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      const successFeedback = () => {
        const msg = translations[currentLang]?.contact_copied || 'Copiato negli appunti!';
        showToast(msg);
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
          btn.innerHTML = originalHtml;
        }, 2000);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy)
          .then(successFeedback)
          .catch(() => fallbackCopy(textToCopy, successFeedback));
      } else {
        fallbackCopy(textToCopy, successFeedback);
      }
    });
  });

  function fallbackCopy(text, callback) {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (successful) {
        callback();
      } else {
        window.prompt('Copy to clipboard:', text);
      }
    } catch (e) {
      window.prompt('Copy to clipboard:', text);
    }
  }

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

  // --- Academic Transcript Modal ---
  openTranscriptBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (transcriptModal) {
        transcriptModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeTranscriptModal() {
    if (transcriptModal) {
      transcriptModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (transcriptModalClose) {
    transcriptModalClose.addEventListener('click', closeTranscriptModal);
  }

  if (transcriptModalCloseBtn) {
    transcriptModalCloseBtn.addEventListener('click', closeTranscriptModal);
  }

  if (transcriptModal) {
    transcriptModal.addEventListener('click', (e) => {
      if (e.target === transcriptModal) closeTranscriptModal();
    });
  }

  // Transcript category filters
  tFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-tfilter');

      tRows.forEach((row) => {
        const cat = row.getAttribute('data-category') || '';
        if (filter === 'all' || cat.split(' ').includes(filter)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (cvModal && cvModal.classList.contains('active')) {
        closeCvModal();
      }
      if (transcriptModal && transcriptModal.classList.contains('active')) {
        closeTranscriptModal();
      }
      if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        if (mobileMenuBtn) mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    }
  });

  // --- Mobile Navigation ---
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileMenuBtn.innerHTML = isOpen 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  // --- Active Link on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 140;
    const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60);

    if (isAtBottom) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const contactLink = document.querySelector('.nav-link[href="#contact"]');
      if (contactLink) contactLink.classList.add('active');
      return;
    }

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

  // --- Project Filter Tabs (No setTimeout Race Conditions) ---
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        const match = filter === 'all' || category.split(' ').includes(filter);

        if (match) {
          card.classList.remove('card-hidden');
        } else {
          card.classList.add('card-hidden');
        }
      });
    });
  });

  // --- Contact Form (FormSubmit AJAX with Fallback) ---
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');
      const submitBtn = document.getElementById('form-submit-btn') || contactForm.querySelector('button[type="submit"]');

      const name = nameInput?.value.trim() || '';
      const email = emailInput?.value.trim() || '';
      const subject = subjectInput?.value.trim() || 'Nuovo Messaggio da Portfolio';
      const message = messageInput?.value.trim() || '';

      if (!name || !email || !message) {
        showToast(currentLang === 'it' ? 'Compila tutti i campi obbligatori.' : 'Please fill in all required fields.');
        return;
      }

      const t = translations[currentLang] || {};
      const sendingText = t.form_sending || (currentLang === 'it' ? 'Invio in corso...' : 'Sending...');
      const successText = t.form_success || (currentLang === 'it' ? 'Messaggio inviato con successo! Ti risponderò al più presto.' : 'Message sent successfully! I will get back to you soon.');
      const sentBtnText = t.form_sent || (currentLang === 'it' ? 'Messaggio Inviato!' : 'Message Sent!');
      const errorText = t.form_error || (currentLang === 'it' ? 'Errore durante l\'invio. Apertura client email...' : 'Could not send automatically. Opening email client...');
      const defaultBtnHtml = submitBtn ? submitBtn.innerHTML : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i> <span>${sendingText}</span>`;
      }

      try {
        const response = await fetch('https://formsubmit.co/ajax/alessio.curcio04@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            _subject: `[Personal Site] ${subject} — da ${name}`,
            message: message,
            _captcha: 'false',
            _template: 'table'
          })
        });

        const data = await response.json().catch(() => ({}));

        const isSuccess = response.ok && (data.success === 'true' || data.success === true);
        const needsActivation = data && data.message && (
          data.message.toLowerCase().includes('activation') ||
          data.message.toLowerCase().includes('activate')
        );

        if (isSuccess) {
          showToast(successText);
          contactForm.reset();
          if (submitBtn) {
            submitBtn.innerHTML = `<i class="fas fa-check-circle"></i> <span>${sentBtnText}</span>`;
            setTimeout(() => {
              submitBtn.disabled = false;
              submitBtn.innerHTML = defaultBtnHtml;
            }, 4000);
          }
        } else if (needsActivation) {
          console.warn('FormSubmit needs one-time email activation:', data.message);
          const activateMsg = currentLang === 'it'
            ? "Form in attesa di attivazione: controlla la mail ricevuta su alessio.curcio04@gmail.com e clicca 'Activate Form'."
            : "Form activation required: check alessio.curcio04@gmail.com and click 'Activate Form'.";
          showToast(activateMsg);
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = defaultBtnHtml;
          }
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        console.warn('FormSubmit AJAX issue, falling back to mailto:', err);
        showToast(errorText);

        const mailtoUrl = `mailto:alessio.curcio04@gmail.com?subject=${encodeURIComponent(
          `[Personal Site] ${subject} - da ${name}`
        )}&body=${encodeURIComponent(
          `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`
        )}`;

        setTimeout(() => {
          window.location.href = mailtoUrl;
        }, 600);

        if (submitBtn) {
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = defaultBtnHtml;
          }, 2500);
        }
      }
    });
  }

  // --- Back to Top Button ---
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- Force Dynamic Favicon Cache Busting ---
  function refreshFavicon() {
    const timestamp = Date.now();
    document.querySelectorAll('link[rel*="icon"]').forEach((link) => {
      const href = link.getAttribute('href');
      if (href) {
        const cleanHref = href.split('?')[0];
        link.setAttribute('href', `${cleanHref}?t=${timestamp}`);
      }
    });
  }

  // --- Initialization ---
  refreshFavicon();
  applyTheme(currentTheme);
  applyLanguage(currentLang);
})();
