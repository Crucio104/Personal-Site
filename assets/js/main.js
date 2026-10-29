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
  const thesisModal = document.getElementById('thesis-modal');
  const thesisModalClose = document.getElementById('thesis-modal-close');
  const thesisModalCloseBtn = document.getElementById('thesis-modal-close-btn');
  const openThesisBtns = document.querySelectorAll('.open-thesis-modal');
  const thesisTabBtns = document.querySelectorAll('.thesis-tab-btn');
  const thesisPanes = document.querySelectorAll('.thesis-tab-pane');
  const thesisIframe = document.getElementById('thesis-iframe');
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

    // Update toggle button: Clean text badge
    if (langToggleBtn) {
      langToggleBtn.innerHTML = lang === 'it' 
        ? '<span class="lang-badge">EN</span>' 
        : '<span class="lang-badge">IT</span>';
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

    // Re-render active Seismic Viewer showcase module
    if (typeof renderShowcaseModule === 'function') {
      renderShowcaseModule(currentShowcaseIdx);
    }
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

  // --- Fluid Count-Up Number Animation (Animation 2) ---
  function animateCounter(el) {
    if (!el) return;
    const target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;

    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const duration = parseInt(el.getAttribute('data-duration') || '1250', 10);

    const startTime = performance.now();
    const startVal = 0;

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic curve
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = startVal + (target - startVal) * ease;

      const formatted = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
      el.textContent = `${prefix}${formatted}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        const finalVal = decimals > 0 ? target.toFixed(decimals) : target.toString();
        el.textContent = `${prefix}${finalVal}${suffix}`;
      }
    }

    requestAnimationFrame(step);
  }

  // --- Unified Modal Background Scroll Lock ---
  let lockedScrollY = 0;
  let activeModalsCount = 0;

  function lockBodyScroll() {
    if (activeModalsCount === 0) {
      lockedScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.documentElement.classList.add('modal-open');
      document.body.classList.add('modal-open');
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }
    activeModalsCount++;
  }

  function unlockBodyScroll() {
    activeModalsCount = Math.max(0, activeModalsCount - 1);
    if (activeModalsCount === 0) {
      const htmlEl = document.documentElement;
      const prevScrollBehavior = htmlEl.style.scrollBehavior;
      htmlEl.style.scrollBehavior = 'auto';

      htmlEl.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';

      // If the scroll drifted from the position where the modal was opened, restore it instantly
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      if (Math.abs(currentScrollY - lockedScrollY) > 1) {
        window.scrollTo({ top: lockedScrollY, left: 0, behavior: 'instant' });
      }

      setTimeout(() => {
        htmlEl.style.scrollBehavior = prevScrollBehavior;
      }, 100);
    }
  }

  function openModal(modalEl) {
    if (!modalEl) return;
    lockBodyScroll();
    modalEl.classList.add('active');

    // Trigger smooth count-up animation for counters in this modal
    const modalCounters = modalEl.querySelectorAll('.count-up-target');
    if (modalCounters.length > 0) {
      setTimeout(() => {
        modalCounters.forEach((target) => animateCounter(target));
      }, 150);
    }
  }

  function closeModal(modalEl) {
    if (!modalEl || !modalEl.classList.contains('active')) return;
    modalEl.classList.remove('active');
    unlockBodyScroll();
  }

  // Prevent scroll drift or touchmove outside scrollable modal containers
  document.addEventListener('wheel', (e) => {
    if (activeModalsCount > 0) {
      const scrollable = e.target.closest('.modal-body, .modal-transcript-body');
      if (!scrollable) {
        e.preventDefault();
      }
    }
  }, { passive: false });

  document.addEventListener('touchmove', (e) => {
    if (activeModalsCount > 0) {
      const scrollable = e.target.closest('.modal-body, .modal-transcript-body');
      if (!scrollable) {
        e.preventDefault();
      }
    }
  }, { passive: false });

  window.addEventListener('scroll', () => {
    if (activeModalsCount > 0) {
      const curY = window.pageYOffset || document.documentElement.scrollTop || 0;
      if (Math.abs(curY - lockedScrollY) > 1) {
        window.scrollTo({ top: lockedScrollY, left: 0, behavior: 'instant' });
      }
    }
  }, { passive: true });

  // Tap iOS sheet handle to dismiss modal
  document.querySelectorAll('.ios-sheet-handle').forEach((handle) => {
    handle.addEventListener('click', () => {
      const parentModal = handle.closest('.modal-backdrop');
      if (parentModal) closeModal(parentModal);
    });
  });

  // --- CV Modal ---
  openCvModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cvModal) {
        openModal(cvModal);
        const iframe = document.getElementById('cv-iframe');
        if (iframe && iframe.dataset.src && !iframe.src) {
          iframe.src = iframe.dataset.src;
        }
      }
    });
  });

  function closeCvModal() {
    if (cvModal) closeModal(cvModal);
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
        openModal(transcriptModal);
      }
    });
  });

  function closeTranscriptModal() {
    if (transcriptModal) closeModal(transcriptModal);
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

  // --- Transcript Modal Nav Tabs (Exams vs Degree & Thesis) ---
  const tNavTabBtns = document.querySelectorAll('.transcript-nav-tab-btn');
  const tTabPanes = document.querySelectorAll('.transcript-tab-pane');

  tNavTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tNavTabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-ttab');

      tTabPanes.forEach((pane) => pane.classList.remove('active'));
      const activePane = document.getElementById('ttab-pane-' + target);
      if (activePane) activePane.classList.add('active');
    });
  });

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

  // --- Thesis & 4D Viewer Modal ---
  openThesisBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (thesisModal) {
        openModal(thesisModal);
      }
    });
  });

  function closeThesisModal() {
    if (thesisModal) closeModal(thesisModal);
  }

  if (thesisModalClose) {
    thesisModalClose.addEventListener('click', closeThesisModal);
  }

  if (thesisModalCloseBtn) {
    thesisModalCloseBtn.addEventListener('click', closeThesisModal);
  }

  if (thesisModal) {
    thesisModal.addEventListener('click', (e) => {
      if (e.target === thesisModal) closeThesisModal();
    });
  }

  // Thesis segmented tab switching & lazy loading of 20MB PDF
  thesisTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      thesisTabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const targetTab = btn.getAttribute('data-tab');

      thesisPanes.forEach((pane) => pane.classList.remove('active'));
      const activePane = document.getElementById('pane-' + targetTab);
      if (activePane) activePane.classList.add('active');

      // Lazy-load PDF on tab switch to avoid heavy initial 20MB download
      if (targetTab === 'pdf' && thesisIframe && !thesisIframe.src) {
        const dataSrc = thesisIframe.getAttribute('data-src');
        if (dataSrc) thesisIframe.src = dataSrc;
      }
    });
  });

  // --- Seismic Viewer Interactive Module Showcase ---
  const showcaseModules = [
    {
      img: 'assets/img/thesis/seismic-4d-planes.webp',
      alt: '4D Cylinder Partitioning & Structural Fault Planes',
      badge_i18n: 'thesis_fig1_badge',
      title_i18n: 'thesis_fig1_title',
      desc_i18n: 'thesis_fig1_desc',
      counter_it: 'Modulo 1 di 4',
      counter_en: 'Module 1 of 4',
      tags: ['RANSAC', 'SVD Refinement', '4D Time Scrubbing', 'Campi Flegrei']
    },
    {
      img: 'assets/img/thesis/seismic-cluster-analysis.webp',
      alt: '3D Spatial Clustering & Convex Hulls',
      badge_i18n: 'thesis_fig2_badge',
      title_i18n: 'thesis_fig2_title',
      desc_i18n: 'thesis_fig2_desc',
      counter_it: 'Modulo 2 di 4',
      counter_en: 'Module 2 of 4',
      tags: ['DBSCAN', 'MiniBatchKMeans', 'Global Label Matching', 'Convex Hulls']
    },
    {
      img: 'assets/img/thesis/seismic-3d-hypocentres.webp',
      alt: '3D Subsurface Hypocentral Point Cloud',
      badge_i18n: 'thesis_fig3_badge',
      title_i18n: 'thesis_fig3_title',
      desc_i18n: 'thesis_fig3_desc',
      counter_it: 'Modulo 3 di 4',
      counter_en: 'Module 3 of 4',
      tags: ['WebGL', 'Plotly.js', 'Latitude Scaling', '60 FPS GPU']
    },
    {
      img: 'assets/img/thesis/seismic-2d-geospatial.webp',
      alt: '2D Geospatial Map View & Tomography',
      badge_i18n: 'thesis_fig4_badge',
      title_i18n: 'thesis_fig4_title',
      desc_i18n: 'thesis_fig4_desc',
      counter_it: 'Modulo 4 di 4',
      counter_en: 'Module 4 of 4',
      tags: ['INGV GOSSIP API', 'GNSS Uplift', 'Tomography Vp/Vs', 'FastAPI']
    }
  ];

  let currentShowcaseIdx = 0;
  const showcaseNavBtns = document.querySelectorAll('.thesis-showcase-nav-btn');
  const showcaseImg = document.getElementById('showcase-img');
  const showcaseBadge = document.getElementById('showcase-badge');
  const showcaseTitle = document.getElementById('showcase-title');
  const showcaseDesc = document.getElementById('showcase-desc');
  const showcaseTags = document.getElementById('showcase-tags');
  const showcaseZoomLink = document.getElementById('showcase-zoom-link');
  const showcaseCounter = document.getElementById('showcase-counter');

  function renderShowcaseModule(idx) {
    if (!showcaseModules[idx]) return;
    currentShowcaseIdx = idx;
    const m = showcaseModules[idx];
    const t = translations[currentLang] || translations.en;

    showcaseNavBtns.forEach((b) => {
      b.classList.toggle('active', parseInt(b.getAttribute('data-idx'), 10) === idx);
    });

    if (showcaseImg) {
      showcaseImg.style.opacity = '0.25';
      setTimeout(() => {
        showcaseImg.src = m.img;
        showcaseImg.alt = m.alt;
        showcaseImg.style.opacity = '1';
      }, 120);
    }

    if (showcaseZoomLink) showcaseZoomLink.href = m.img;
    if (showcaseBadge) {
      showcaseBadge.setAttribute('data-i18n', m.badge_i18n);
      showcaseBadge.textContent = t[m.badge_i18n] || '';
    }
    if (showcaseTitle) {
      showcaseTitle.setAttribute('data-i18n', m.title_i18n);
      showcaseTitle.textContent = t[m.title_i18n] || '';
    }
    if (showcaseDesc) {
      showcaseDesc.setAttribute('data-i18n', m.desc_i18n);
      showcaseDesc.textContent = t[m.desc_i18n] || '';
    }
    if (showcaseCounter) {
      showcaseCounter.textContent = currentLang === 'it' ? m.counter_it : m.counter_en;
    }
    if (showcaseTags) {
      showcaseTags.innerHTML = m.tags.map((tag) => `<span class="thesis-gallery-tag">${tag}</span>`).join('');
    }
  }

  showcaseNavBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      renderShowcaseModule(idx);
    });
  });

  if (showcaseImg) {
    showcaseImg.addEventListener('click', () => {
      if (showcaseZoomLink && showcaseZoomLink.href) {
        window.open(showcaseZoomLink.href, '_blank');
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (cvModal && cvModal.classList.contains('active')) {
        closeCvModal();
      }
      if (transcriptModal && transcriptModal.classList.contains('active')) {
        closeTranscriptModal();
      }
      if (thesisModal && thesisModal.classList.contains('active')) {
        closeThesisModal();
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
      updateNavbarBlur();
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        updateNavbarBlur();
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

  // --- Fluid Project Filter Tabs (Animation 5) ---
  let isFilteringProjects = false;
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active') || isFilteringProjects) return;

      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      isFilteringProjects = true;

      const toHide = [];
      const toShow = [];

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        const match = filter === 'all' || category.split(' ').includes(filter);
        if (match) {
          toShow.push(card);
        } else {
          toHide.push(card);
        }
      });

      // Phase 1: Smoothly fade and scale down cards to hide
      toHide.forEach((card) => {
        card.classList.add('card-anim-out');
      });

      setTimeout(() => {
        toHide.forEach((card) => {
          card.classList.remove('card-anim-out');
          card.classList.add('card-hidden');
        });

        // Phase 2: Setup matching cards with initial state and staggered entry
        toShow.forEach((card, idx) => {
          card.classList.remove('card-hidden');
          card.classList.add('card-anim-in');
          card.style.transitionDelay = `${(idx % 6) * 45}ms`;
        });

        // Force browser layout reflow
        void document.body.offsetHeight;

        requestAnimationFrame(() => {
          toShow.forEach((card) => {
            card.classList.remove('card-anim-in');
            card.classList.add('revealed');
          });

          setTimeout(() => {
            toShow.forEach((card) => {
              card.style.transitionDelay = '';
            });
            isFilteringProjects = false;
          }, toShow.length * 45 + 300);
        });
      }, 190);
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

  // --- Dynamic Smart Navbar (Auto-hide on scroll down, reveal on scroll up + Reading Progress) ---
  const navbar = document.getElementById('navbar');
  const navbarProgress = document.getElementById('navbar-progress');
  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
  const scrollDeltaThreshold = 8;

  function updateNavbar() {
    if (!navbar) return;
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // 1. Reading progress indicator
    if (navbarProgress && maxScroll > 0) {
      const progress = Math.min(100, Math.max(0, (currentScrollY / maxScroll) * 100));
      navbarProgress.style.width = `${progress}%`;
    }

    const isMobileMenuOpen = navLinks && navLinks.classList.contains('open');
    const isModalOpen = document.documentElement.classList.contains('modal-open');

    // Never hide navbar if mobile menu or a modal is active
    if (isMobileMenuOpen || isModalOpen) {
      navbar.classList.remove('navbar-hidden');
      navbar.classList.add('navbar-visible', 'navbar-scrolled');
      return;
    }

    // Top of page: transparent hero navbar
    if (currentScrollY <= 20) {
      navbar.classList.remove('navbar-hidden', 'navbar-scrolled');
      navbar.classList.add('navbar-visible');
      lastScrollY = currentScrollY;
      return;
    }

    // Scrolled past 20px: apply frosted glass
    navbar.classList.add('navbar-scrolled');

    // Detect scroll direction
    const delta = currentScrollY - lastScrollY;

    if (Math.abs(delta) > scrollDeltaThreshold) {
      if (delta > 0 && currentScrollY > 100) {
        // Scrolling DOWN -> Slide UP & Hide
        navbar.classList.add('navbar-hidden');
        navbar.classList.remove('navbar-visible');
      } else if (delta < 0) {
        // Scrolling UP -> Slide DOWN & Reveal with frosted glass
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
      }
      lastScrollY = currentScrollY;
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });

  // --- Card Spotlight Mouse-Following Glowing Border ---
  const spotlightCards = document.querySelectorAll(
    '.project-card, .feature-card, .timeline-card, .skill-category-card, .stat-item, .thesis-showcase-card, .profile-card'
  );
  
  spotlightCards.forEach((card) => {
    card.classList.add('spotlight-card');
    let ticking = false;

    card.addEventListener('mousemove', (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    }, { passive: true });
  });

  // --- Bi-Directional iOS Spring Scroll Reveal (Always active when scrolling UP & DOWN) ---
  const revealElements = document.querySelectorAll(
    '.stat-item, .project-card, .skill-category-card, .feature-card, .timeline-item, .section-header'
  );

  revealElements.forEach((el) => {
    el.classList.add('reveal-stagger');
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Calculate subtle sibling stagger delay
          const parent = entry.target.parentElement;
          if (parent) {
            const siblings = Array.from(parent.children).filter((c) => c.classList.contains('reveal-stagger'));
            const idx = siblings.indexOf(entry.target);
            if (idx >= 0) {
              entry.target.style.transitionDelay = `${(idx % 4) * 60}ms`;
            }
          }
          entry.target.classList.add('revealed');

          // Trigger fluid count-up if element or children have count-up-target
          if (entry.target.classList.contains('count-up-target')) {
            animateCounter(entry.target);
          }
          const counters = entry.target.querySelectorAll('.count-up-target');
          if (counters.length > 0) {
            counters.forEach((c) => animateCounter(c));
          }
        } else {
          entry.target.style.transitionDelay = '0ms';
          entry.target.classList.remove('revealed');
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((item) => item.classList.add('revealed'));
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
  updateNavbar();
  applyTheme(currentTheme);
  applyLanguage(currentLang);
})();
