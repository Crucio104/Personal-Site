/**
 * Multilingual Translations Dictionary (Italian & English)
 * Fully populated with Alessio Curcio's real academic, project, and background details.
 */
const translations = {
  it: {
    // Navigation
    nav_about: "Chi Sono",
    nav_experience: "Esperienze",
    nav_education: "Formazione",
    nav_skills: "Competenze",
    nav_projects: "Progetti",
    nav_contact: "Contatti",
    nav_resume: "Scarica CV",

    // Hero
    hero_status: "Disponibile per opportunità & collaborazioni",
    hero_greeting: "Ciao, sono",
    hero_name: "Alessio Curcio",
    hero_roles: [
      "M.Sc. AIRO Student @ Sapienza",
      "Laurea ACSAI @ Sapienza",
      "Specialista Sistemi Multi-Agente & LLM",
      "Computer Vision & Robotics Developer"
    ],
    hero_bio: "Studente magistrale in Artificial Intelligence and Robotics (AIRO) e laureato triennale in Applied Computer Science and Artificial Intelligence (ACSAI) presso Sapienza Università di Roma. Focalizzato su architetture multi-agente, modelli LLM locali incentrati sulla privacy, computer vision (YOLO) e sistemi robotici concorrenti.",
    hero_btn_projects: "Esplora Progetti",
    hero_btn_contact: "Mettiti in Contatto",
    hero_btn_cv: "Scarica CV (PDF)",
    hero_btn_cv_preview: "Anteprima CV",

    // Quick Stats
    stat_repos: "Progetti GitHub",
    stat_repos_sub: "18+ Repository attive",
    stat_grade: "30 e 30L Programmazione",
    stat_grade_sub: "Esami Python & Java a Sapienza",
    stat_olympiad: "Olimpiadi & TeraBebras",
    stat_olympiad_sub: "Punteggio max & Fasi Nazionali",
    stat_english: "100% Corso in Inglese",
    stat_english_sub: "B2 Certificato + Soggiorno Oxford",

    // About Section
    about_badge: "Profilo",
    about_title: "Percorso Accademico & Visione Tecnologica",
    about_p1: "Sono un ingegnere software e ricercatore accademico orientato all'Intelligenza Artificiale e alla Robotica. Ho conseguito la Laurea Triennale in <strong>Applied Computer Science and Artificial Intelligence (ACSAI)</strong> presso l'<strong>Università La Sapienza di Roma</strong> — un percorso accademico d'eccellenza erogato interamente in lingua inglese.",
    about_p2: "Attualmente frequento il Corso di Laurea Magistrale in <strong>Artificial Intelligence and Robotics (AIRO)</strong> presso lo stesso ateneo. La mia passione risiede nella convergenza tra <em>sistemi autonomi multi-agente</em>, <em>modelli linguistici eseguiti in locale (Local LLMs)</em> per la tutela della privacy, <em>computer vision real-time</em> e programmazione concorrente di basso livello per il controllo robotico.",
    about_p3: "Parallelamente agli studi, ho collaborato a laboratori e progetti con giganti dell'industria come <strong>IBM</strong> ed <strong>Ericsson</strong>, e ho consolidato solide basi logico-matematiche partecipando con successo a competizioni nazionali di problem solving, informatica e matematica.",
    
    about_card1_title: "Laurea Magistrale AIRO",
    about_card1_desc: "Sapienza Università di Roma — Multi-Agent Systems, Reinforcement Learning, Robot Programming, Deep Learning.",
    about_card2_title: "Laurea Triennale ACSAI",
    about_card2_desc: "Interamente in lingua inglese. Voto massimo (30 e 30 e lode) negli esami di programmazione Python e Java.",
    about_card3_title: "Maturità Scientifica",
    about_card3_desc: "Liceo Scientifico 'Vito Volterra' (Scienze Applicate) diplomato nel 2023 con <strong>98/100</strong>.",
    about_card4_title: "Problem Solving Competitivo",
    about_card4_desc: "Punteggio massimo nella gara TeraBebras; fasi regionali e nazionali alle Olimpiadi di Matematica e Informatica.",

    // Experience Section
    exp_badge: "Esperienza & Gare",
    exp_title: "Collaborazioni Tecniche & Traguardi",
    exp_ibm_title: "Collaborazioni Tecniche & Big Data Research",
    exp_ibm_org: "IBM & Sapienza University",
    exp_ibm_period: "Attività Accademica & Progetti",
    exp_ibm_desc: "Attività di ricerca sull'utilizzo di Big Data Analytics per la profilazione psicologica basata su dati di figure pubbliche. Sviluppo di agenti conversazionali e chatbot per il customer service avvalendosi dei servizi IBM Cloud e Watson.",
    
    exp_ericsson_title: "Digital Labs & Software Engineering",
    exp_ericsson_org: "Ericsson & Fondazione Mondo Digitale",
    exp_ericsson_period: "Laboratori Tecnologici",
    exp_ericsson_desc: "Partecipazione attiva a laboratori di accelerazione delle competenze digitali e sfide ingegneristiche nel campo delle telecomunicazioni, robotica e programmazione avanzata ad oggetti.",

    exp_comp_title: "Olimpiadi Nazionali & Gare di Algoritmica",
    exp_comp_org: "Olimpiadi di Informatica, Matematica & Bebras",
    exp_comp_period: "Piazzamenti d'Eccellenza",
    exp_comp_desc: "Fasi regionali e nazionali delle Olimpiadi di Informatica, Matematica e Problem Solving; qualificazione alle fasi nazionali dei Giochi Matematici dell'Università Bocconi; conseguimento del punteggio massimo nella prestigiosa competizione internazionale TeraBebras.",

    // Education Section
    edu_badge: "Formazione",
    edu_title: "Curriculum Studi",
    edu_msc_title: "Master of Science in Artificial Intelligence and Robotics (AIRO)",
    edu_msc_inst: "Sapienza Università di Roma",
    edu_msc_status: "In corso",
    edu_msc_desc: "Corso internazionale avanzato incentrato su Robotica Autonoma, Visione Artificiale, Sistemi Multi-Agente, Machine Learning e Controllo Intelligente.",
    
    edu_bsc_title: "Bachelor of Science in Applied Computer Science and Artificial Intelligence (ACSAI)",
    edu_bsc_inst: "Sapienza Università di Roma",
    edu_bsc_status: "Laureato",
    edu_bsc_desc: "Corso triennale tenuto al 100% in lingua inglese. Riconoscimento di 30 e 30 e lode nei corsi di programmazione (Python, Java). Corsi cardine: Strutture Dati e Algoritmi, Sistemi Operativi, Basi di Dati, Web & Software Architecture, Reti, Intelligenza Artificiale, Programmazione Multicore.",

    edu_hs_title: "Diploma di Maturità Scientifica — Scienze Applicate",
    edu_hs_inst: "Liceo Scientifico Statale 'Vito Volterra'",
    edu_hs_status: "Voto: 98/100",
    edu_hs_desc: "Curriculum di informatica, matematica avanzata e fisica. Forte orientamento alle scienze computazionali e agli algoritmi.",

    // Skills Section
    skills_badge: "Stack Tecnologico",
    skills_title: "Competenze & Strumenti",
    skills_cat_ai: "Intelligenza Artificiale & Visione",
    skills_cat_lang: "Linguaggi di Programmazione",
    skills_cat_front: "Frontend & Interfacce",
    skills_cat_back: "Backend, Sistemi & Cloud",

    // Projects Section
    proj_badge: "Portfolio Progetti",
    proj_title: "Lavori Selezionati & Repository",
    proj_filter_all: "Tutti",
    proj_filter_ai: "AI & Multi-Agente",
    proj_filter_vision: "Computer Vision & Robotica",
    proj_filter_web: "Web & Sistemi Distribuiti",
    proj_view_repo: "Vedi Codice",
    proj_view_details: "Dettagli Architettura",

    // Project Details
    p1_title: "OpenSyntax AI Coding Workspace",
    p1_desc: "Workspace avanzato che sfrutta un'orchestrazione multi-agente per lo sviluppo software autonomo. Supporta compilazione real-time per Python, C/C++, Java, Go, Rust con terminale incorporato e integrazione flessibile tra LLM locali e OpenAI.",
    p1_tech: ["TypeScript", "Multi-Agent", "React", "Local LLMs", "Node.js"],

    p2_title: "Local LLM Email Agent",
    p2_desc: "Assistente per la gestione inbox privacy-first che opera completamente offline con modelli linguistici locali (via LM Studio). Analizza e categorizza email, genera riassunti e alert intelligenti con interfaccia grafica elegante.",
    p2_tech: ["Python", "LM Studio", "Privacy AI", "GUI", "Automation"],

    p3_title: "Echo Messaging System",
    p3_desc: "Piattaforma di messaggistica real-time con architettura moderna ad alte prestazioni per il corso di Web & Software Architecture di Sapienza. Supporta messaggi diretti, stanze di gruppo, protocolli WebSocket, backend in Go, frontend Vue.js e deploy con Docker Compose.",
    p3_tech: ["Go", "Vue.js", "WebSockets", "Docker Compose", "PostgreSQL"],

    p4_title: "LoL Farming Bot con YOLOv11",
    p4_desc: "Bot autonomo per League of Legends basato su visione artificiale in tempo reale tramite YOLOv11. Rileva e calcola le priorità sui minion, gestisce lo skillshot, il level-up e monitora il perimetro di sicurezza delle torri.",
    p4_tech: ["Python", "YOLOv11", "Computer Vision", "PyTorch", "Screen Analysis"],

    p5_title: "Voice Cloning Qwen3-TTS",
    p5_desc: "Interfaccia web moderna per Qwen3-TTS che abilita il text-to-speech ad altissima fedeltà e la clonazione vocale zero-shot. Interfaccia ultra-reattiva in React, supporto multilingua e containerizzazione completa Docker.",
    p5_tech: ["TypeScript", "React", "Docker", "Audio AI", "Qwen-TTS"],

    p6_title: "Stock Market Predictor (LSTM)",
    p6_desc: "Applicazione di previsione delle serie storiche finanziarie tramite reti neurali ricorrenti LSTM. Integra il recupero dati real-time con Yahoo Finance API, calcolo di medie mobili e dashboard interattiva creata con Streamlit.",
    p6_tech: ["Python", "LSTM Neural Networks", "Streamlit", "Pandas", "Yahoo Finance"],

    p7_title: "PDF File Extractor con OCR",
    p7_desc: "Applicazione desktop professionale per l'estrazione e conversione di testi da documenti PDF e scansioni raster tramite motore OCR Tesseract. Interfaccia dark-mode in PyQt5 ed esportazione formattata verso DOCX e TXT.",
    p7_tech: ["Python", "PyQt5", "Tesseract OCR", "DOCX Export", "Desktop App"],

    p8_title: "Multicore & Robotic Systems",
    p8_desc: "Implementazioni approfondite di programmazione concorrente, sincronizzazione thread-safe (mutex, semafori), allocazione di memoria efficiente e algoritmi di controllo per cinetismi robotici in C e C++.",
    p8_tech: ["C", "C++", "Multithreading", "Robotics", "POSIX Threads"],

    p9_title: "Quest for Valentine",
    p9_desc: "Browser game narrativo a bivi con estetica retro in pixel art, gestione degli stati di dialogo, motore particellare dinamico e finali multipli scritto in puro Vanilla JavaScript.",
    p9_tech: ["JavaScript", "HTML5 Canvas", "Game Design", "Pixel Art"],

    p10_title: "Cross-Platform Portfolio (Flet)",
    p10_desc: "Il precedente sito web e portfolio multipiattaforma sviluppato interamente in Python tramite il framework Flet (Flutter engine), deployato su Vercel.",
    p10_tech: ["Python", "Flet", "Flutter Engine", "Vercel"],

    // Resume Modal
    modal_title: "Curriculum Vitae — Alessio Curcio",
    modal_close: "Chiudi",
    modal_download: "Scarica PDF",
    modal_open_tab: "Apri in una nuova scheda",

    // Contact Section
    contact_badge: "Contattami",
    contact_title: "Parliamo di Nuove Opportunità",
    contact_p: "Sono sempre aperto a discutere progetti di ricerca accademica, posizioni ingegneristiche in ambito AI/Robotica e collaborazioni innovative.",
    contact_email_label: "Email Diretta",
    contact_phone_label: "Telefono / WhatsApp",
    contact_location_label: "Posizione",
    contact_location_val: "Roma / Ciampino, Italia",
    contact_social_label: "Profili Professionali",
    contact_copied: "Copiato negli appunti!",
    
    form_name: "Il tuo Nome",
    form_email: "La tua Email",
    form_subject: "Oggetto",
    form_message: "Il tuo Messaggio",
    form_submit: "Invia Messaggio",
    form_success: "Grazie! Il tuo client di posta si aprirà con il messaggio compilato.",

    // Footer
    footer_text: "Progettato & Sviluppato per Alessio Curcio. Basato sul profilo GitHub, esperienze accademico-industriali e CV.",
    footer_rights: "Tutti i diritti riservati."
  },

  en: {
    // Navigation
    nav_about: "About Me",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    nav_resume: "Download CV",

    // Hero
    hero_status: "Open to opportunities & collaborations",
    hero_greeting: "Hi, I'm",
    hero_name: "Alessio Curcio",
    hero_roles: [
      "M.Sc. AIRO Student @ Sapienza",
      "B.Sc. ACSAI Graduate @ Sapienza",
      "Multi-Agent Systems & LLM Specialist",
      "Computer Vision & Robotics Developer"
    ],
    hero_bio: "Master's student in Artificial Intelligence and Robotics (AIRO) and Bachelor's graduate in Applied Computer Science and Artificial Intelligence (ACSAI) at Sapienza University of Rome. Technical focus on multi-agent orchestration, privacy-first local LLM architectures, real-time computer vision (YOLO), and concurrent robotic control.",
    hero_btn_projects: "Explore Projects",
    hero_btn_contact: "Get in Touch",
    hero_btn_cv: "Download CV (PDF)",
    hero_btn_cv_preview: "Preview CV",

    // Quick Stats
    stat_repos: "GitHub Projects",
    stat_repos_sub: "18+ Active Repositories",
    stat_grade: "30 & 30L Programming",
    stat_grade_sub: "Python & Java Exams @ Sapienza",
    stat_olympiad: "Olympiads & TeraBebras",
    stat_olympiad_sub: "Top Score & National Stages",
    stat_english: "100% English Program",
    stat_english_sub: "B2 Certified + Oxford Study Abroad",

    // About Section
    about_badge: "Profile",
    about_title: "Academic Pathway & Technical Vision",
    about_p1: "I am a software engineer and AI researcher focused on Artificial Intelligence and Robotics. I earned my Bachelor's degree in <strong>Applied Computer Science and Artificial Intelligence (ACSAI)</strong> from <strong>Sapienza University of Rome</strong> — an elite degree program taught entirely in English.",
    about_p2: "I am currently pursuing my Master of Science in <strong>Artificial Intelligence and Robotics (AIRO)</strong> at the same university. My passion lies at the intersection of <em>autonomous multi-agent systems</em>, <em>privacy-focused local LLMs</em>, <em>real-time computer vision</em>, and low-level concurrent programming for robotic systems.",
    about_p3: "Alongside my studies, I have taken part in technological collaborations and digital labs with industry leaders such as <strong>IBM</strong> and <strong>Ericsson</strong>, backed by an established background in competitive problem solving, mathematics, and informatics olympiads.",
    
    about_card1_title: "M.Sc. in AIRO",
    about_card1_desc: "Sapienza University of Rome — Multi-Agent Systems, Reinforcement Learning, Robot Programming, Deep Learning.",
    about_card2_title: "B.Sc. in ACSAI",
    about_card2_desc: "Taught entirely in English. Maximum marks (30 and 30 cum laude) in university programming examinations (Python & Java).",
    about_card3_title: "Scientific High School",
    about_card3_desc: "Liceo Scientifico 'Vito Volterra' (Applied Sciences), graduated in 2023 with <strong>98/100</strong>.",
    about_card4_title: "Competitive Problem Solving",
    about_card4_desc: "Max score in the TeraBebras competition; regional & national stages in Math & Informatics Olympiads.",

    // Experience Section
    exp_badge: "Experience & Contests",
    exp_title: "Technical Collaborations & Milestones",
    exp_ibm_title: "Technical Collaboration & Big Data Analytics",
    exp_ibm_org: "IBM & Sapienza University",
    exp_ibm_period: "Academic Activity & Projects",
    exp_ibm_desc: "Conducted research on utilizing Big Data analytics for psychological profiling models of public figures. Developed customer service conversational chatbots leveraging IBM Cloud and Watson services.",
    
    exp_ericsson_title: "Digital Labs & Software Engineering",
    exp_ericsson_org: "Ericsson & Fondazione Mondo Digitale",
    exp_ericsson_period: "Technological Labs",
    exp_ericsson_desc: "Participated in digital skills acceleration programs and software engineering problem sets covering telecommunications, robotics, and advanced object-oriented architectures.",

    exp_comp_title: "National Olympiads & Algorithmic Competitions",
    exp_comp_org: "Informatics, Mathematics & Bebras Olympiads",
    exp_comp_period: "Recognized Rankings",
    exp_comp_desc: "Reached regional and national stages in Italian Mathematics, Informatics and Problem Solving Olympiads; national finalist in Bocconi University's Mathematics Games; attained the maximum score in the prestigious TeraBebras international competition.",

    // Education Section
    edu_badge: "Education",
    edu_title: "Academic Background",
    edu_msc_title: "Master of Science in Artificial Intelligence and Robotics (AIRO)",
    edu_msc_inst: "Sapienza University of Rome",
    edu_msc_status: "Currently Enrolled",
    edu_msc_desc: "Advanced international program centered on Autonomous Robotics, Computer Vision, Multi-Agent Systems, Deep Learning, and Intelligent Control.",
    
    edu_bsc_title: "Bachelor of Science in Applied Computer Science and Artificial Intelligence (ACSAI)",
    edu_bsc_inst: "Sapienza University of Rome",
    edu_bsc_status: "Graduated",
    edu_bsc_desc: "Three-year undergraduate program taught 100% in English. Perfect grades (30 and 30 cum laude) in programming examinations (Python, Java). Core subjects: Data Structures and Algorithms, Operating Systems, Databases, Web & Software Architecture, Computer Networks, AI, Multicore Programming.",

    edu_hs_title: "Scientific High School Diploma — Applied Sciences",
    edu_hs_inst: "Liceo Scientifico Statale 'Vito Volterra'",
    edu_hs_status: "Grade: 98/100",
    edu_hs_desc: "Curriculum focused on computer science, advanced mathematics, and physics. Strong emphasis on computational thinking and algorithm design.",

    // Skills Section
    skills_badge: "Tech Stack",
    skills_title: "Skills & Technologies",
    skills_cat_ai: "Artificial Intelligence & Vision",
    skills_cat_lang: "Programming Languages",
    skills_cat_front: "Frontend & UI Design",
    skills_cat_back: "Backend, Systems & Cloud",

    // Projects Section
    proj_badge: "Featured Projects",
    proj_title: "Selected Works & Repositories",
    proj_filter_all: "All",
    proj_filter_ai: "AI & Multi-Agent",
    proj_filter_vision: "Computer Vision & Robotics",
    proj_filter_web: "Web & Distributed",
    proj_view_repo: "View Code",
    proj_view_details: "Architecture Specs",

    // Project Details
    p1_title: "OpenSyntax AI Coding Workspace",
    p1_desc: "Next-generation AI workspace featuring multi-agent orchestration for autonomous software engineering. Supports real-time compilation across Python, C/C++, Java, Go, and Rust with an integrated terminal and flexible support for both local LLMs and OpenAI endpoints.",
    p1_tech: ["TypeScript", "Multi-Agent", "React", "Local LLMs", "Node.js"],

    p2_title: "Local LLM Email Agent",
    p2_desc: "Privacy-focused inbox assistant running locally via LM Studio without transmitting sensitive data to the cloud. Automatically summarizes threads, categorizes messages according to custom AI rules, and provides an intuitive GUI.",
    p2_tech: ["Python", "LM Studio", "Privacy AI", "GUI", "Automation"],

    p3_title: "Echo Messaging System",
    p3_desc: "Modern high-throughput real-time messaging platform engineered for Sapienza's Web & Software Architecture curriculum. Implements direct conversations, group rooms, WebSockets, Go backend, Vue.js client, and Docker Compose orchestration.",
    p3_tech: ["Go", "Vue.js", "WebSockets", "Docker Compose", "PostgreSQL"],

    p4_title: "LoL Farming Bot with YOLOv11",
    p4_desc: "Autonomous League of Legends bot powered by real-time computer vision via YOLOv11. Detects and calculates minion prioritization, executes skillshots, monitors tower safety radii, and handles automated level-ups.",
    p4_tech: ["Python", "YOLOv11", "Computer Vision", "PyTorch", "Screen Analysis"],

    p5_title: "Voice Cloning Qwen3-TTS",
    p5_desc: "Modern web application for Qwen3-TTS enabling zero-shot voice cloning and high-fidelity speech synthesis. Features a reactive React UI, multilingual generation, and turnkey Docker deployment.",
    p5_tech: ["TypeScript", "React", "Docker", "Audio AI", "Qwen-TTS"],

    p6_title: "Stock Market Predictor (LSTM)",
    p6_desc: "Financial time-series forecasting application employing LSTM recurrent neural networks. Integrates real-time market data through Yahoo Finance API, technical moving averages, and interactive Streamlit visualizations.",
    p6_tech: ["Python", "LSTM Neural Networks", "Streamlit", "Pandas", "Yahoo Finance"],

    p7_title: "PDF File Extractor with OCR",
    p7_desc: "Production-grade desktop application for extracting text from digital and scanned PDFs via Tesseract OCR engine. Features a dark PyQt5 GUI and multi-format export (DOCX/TXT).",
    p7_tech: ["Python", "PyQt5", "Tesseract OCR", "DOCX Export", "Desktop App"],

    p8_title: "Multicore & Robotic Systems",
    p8_desc: "Low-level implementations of concurrent programming, thread-safe synchronization (mutexes, semaphores), optimized memory pools, and kinematic control routines for robotic actuators in C and C++.",
    p8_tech: ["C", "C++", "Multithreading", "Robotics", "POSIX Threads"],

    p9_title: "Quest for Valentine",
    p9_desc: "Branching narrative browser adventure game featuring retro pixel art styling, interactive dialogue states, particle effects engine, and multiple endings created in Vanilla JavaScript.",
    p9_tech: ["JavaScript", "HTML5 Canvas", "Game Design", "Pixel Art"],

    p10_title: "Cross-Platform Portfolio (Flet)",
    p10_desc: "Previous cross-platform CV & portfolio application built entirely in Python using the Flet framework (Flutter engine), originally deployed on Vercel.",
    p10_tech: ["Python", "Flet", "Flutter Engine", "Vercel"],

    // Resume Modal
    modal_title: "Curriculum Vitae — Alessio Curcio",
    modal_close: "Close",
    modal_download: "Download PDF",
    modal_open_tab: "Open in New Tab",

    // Contact Section
    contact_badge: "Get in Touch",
    contact_title: "Let's Build Something Exceptional",
    contact_p: "I am always eager to discuss academic research initiatives, software engineering roles in AI & Robotics, and innovative collaborative projects.",
    contact_email_label: "Direct Email",
    contact_phone_label: "Phone / WhatsApp",
    contact_location_label: "Location",
    contact_location_val: "Rome / Ciampino, Italy",
    contact_social_label: "Professional Networks",
    contact_copied: "Copied to clipboard!",
    
    form_name: "Your Name",
    form_email: "Your Email",
    form_subject: "Subject",
    form_message: "Your Message",
    form_submit: "Send Message",
    form_success: "Thank you! Your default email client will open with your pre-filled message.",

    // Footer
    footer_text: "Engineered & Designed for Alessio Curcio. Sourced from GitHub profile, academic credentials, and CV.",
    footer_rights: "All rights reserved."
  }
};
