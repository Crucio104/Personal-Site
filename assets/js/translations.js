/**
 * Multilingual Translations Dictionary (Italian & English)
 * Accurate, concise, professional tone without unnecessary fluff.
 * Highlights B.Sc. ACSAI graduation with 110/110 at Sapienza, INGV Research Internship,
 * and M.Sc. in AIRO starting in 2026.
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
    hero_status: "Disponibile per collaborazioni",
    hero_greeting: "Ciao, sono",
    hero_name: "Alessio Curcio",
    hero_roles: [
      "M.Sc. AIRO Student (2026) — Sapienza",
      "Laurea ACSAI (110/110) — Sapienza",
      "Tirocinio Ricerca Software — INGV",
      "Sistemi Multi-Agente & LLM",
      "Computer Vision & Robotica"
    ],
    hero_bio: "Studente magistrale in Artificial Intelligence and Robotics (AIRO, immatricolato 2026) e laureato triennale in Applied Computer Science and Artificial Intelligence (ACSAI) con <strong>110/110</strong> presso Sapienza Università di Roma. Ho svolto il tirocinio curriculare e tesi triennale presso l'<strong>INGV</strong> (Istituto Nazionale di Geofisica e Vulcanologia) sviluppando un sistema desktop 4D per l'analisi di dati sismici. Mi occupo di sistemi multi-agente, modelli linguistici locali (Local LLMs), computer vision e robotica.",
    hero_btn_projects: "Progetti",
    hero_btn_contact: "Contattami",
    hero_btn_cv: "Scarica CV (PDF)",
    hero_btn_cv_preview: "Anteprima CV",

    // Quick Stats (Exactly 4 High-Impact Blocks)
    stat_grade: "110 / 110",
    stat_grade_sub: "Laurea ACSAI Sapienza",
    stat_msc: "AI & Robotica",
    stat_msc_sub: "Sapienza Università (2026)",
    stat_ingv: "Tirocinio INGV",
    stat_ingv_sub: "Seismic Viewer 4D & Tesi",
    stat_repos: "Progetti GitHub",
    stat_repos_sub: ">18 Repository pubbliche",

    // About Section
    about_badge: "Profilo",
    about_title: "Percorso Accademico & Tecnologie",
    about_p1: "Ho conseguito la Laurea Triennale in <strong>Applied Computer Science and Artificial Intelligence (ACSAI)</strong> presso <strong>Sapienza Università di Roma</strong> con votazione di <strong>110/110</strong>, completando un corso di studi tenuto interamente in lingua inglese.",
    about_p2: "Ho svolto il tirocinio curriculare e tesi di laurea presso l'<strong>INGV (Istituto Nazionale di Geofisica e Vulcanologia)</strong>, realizzando <strong>Seismic Viewer</strong>: un'applicazione desktop per la visualizzazione 4D spazio-temporale di dati sismici, clustering geologico e stima automatica dei piani di faglia.",
    about_p3: "Attualmente frequento la Laurea Magistrale in <strong>Artificial Intelligence and Robotics (AIRO)</strong> presso Sapienza (avviata nel 2026). Mi concentro su sistemi multi-agente, modelli linguistici eseguiti in locale (Local LLMs), computer vision con YOLO e programmazione robotica. Ho inoltre completato laboratori tecnici con <strong>IBM</strong> ed <strong>Ericsson</strong> e ottenuto il punteggio massimo nella competizione TeraBebras.",
    
    // Exactly 4 About Feature Cards
    about_card1_title: "Laurea Magistrale AIRO",
    about_card1_desc: "Sapienza Università di Roma (2026 – In corso) — Sistemi Multi-Agente, Reinforcement Learning, Robot Programming e Deep Learning.",
    about_card2_title: "Laurea Triennale ACSAI (110/110)",
    about_card2_desc: "Sapienza Università di Roma (2023 – 2026). Corso in lingua inglese. Voto finale 110/110.",
    about_card_ingv_title: "Tirocinio Ricerca INGV",
    about_card_ingv_desc: "Sviluppo di Seismic Viewer 4D: clustering sismico, stima di faglie e streaming binario compresso (-80%).",
    about_card4_title: "Maturità (98/100) & Gare",
    about_card4_desc: "Liceo Scientifico 'Vito Volterra' (Scienze Applicate, 2023). Punteggio massimo nella gara TeraBebras e fasi nazionali alle Olimpiadi di Matematica e Informatica.",

    // Experience Section
    exp_badge: "Esperienza & Ricerca",
    exp_title: "Attività Tecniche, Ricerca & Gare",
    exp_ingv_title: "Tirocinio di Ricerca Software — Seismic Viewer 4D",
    exp_ingv_org: "INGV (Istituto Nazionale di Geofisica e Vulcanologia) & Sapienza",
    exp_ingv_period: "Tirocinio & Tesi",
    exp_ingv_desc: "Progettazione e sviluppo di Seismic Viewer, applicazione desktop interattiva per la visualizzazione 4D spazio-temporale di dati sismici. Backend scientifico in Python per clustering spaziale e stima automatica dei piani di faglia geologici. Frontend 3D in WebGL con protocollo di streaming binario ad alte prestazioni (riduzione dati dell'80% rispetto a JSON) per mantenere framerate interattivi su grandi dataset sismici (Campi Flegrei). Integrazione con le API GOSSIP di INGV, dati di sollevamento del suolo GNSS e tomografia sismica.",
    
    exp_ibm_title: "Analisi Dati & Chatbot",
    exp_ibm_org: "IBM & Sapienza University",
    exp_ibm_period: "Progetti Accademici",
    exp_ibm_desc: "Analisi di Big Data per modelli di profilazione e sviluppo di chatbot di assistenza clienti tramite servizi IBM Cloud e Watson.",
    
    exp_ericsson_title: "Laboratori Software & Telecomunicazioni",
    exp_ericsson_org: "Ericsson & Fondazione Mondo Digitale",
    exp_ericsson_period: "Laboratori Tecnologici",
    exp_ericsson_desc: "Attività pratiche su telecomunicazioni, architetture software e programmazione ad oggetti applicata.",

    exp_comp_title: "Olimpiadi & Gare di Algoritmica",
    exp_comp_org: "Olimpiadi di Informatica, Matematica & TeraBebras",
    exp_comp_period: "Piazzamenti",
    exp_comp_desc: "Fasi regionali e nazionali alle Olimpiadi di Informatica, Matematica e Problem Solving; qualificazione alle finali dei Giochi Bocconi; punteggio massimo ottenuto nella gara internazionale TeraBebras.",

    // Education Section
    edu_badge: "Formazione",
    edu_title: "Studi Accademici",
    edu_msc_lead: "Master of Science (M.Sc.) in",
    edu_msc_title: "Artificial Intelligence and Robotics (AIRO)",
    edu_msc_name: "Artificial Intelligence and Robotics (AIRO)",
    edu_msc_inst: "Sapienza Università di Roma",
    edu_msc_status: "2026 – In corso",
    edu_msc_desc: "Corso in lingua inglese su Robotica Autonoma, Visione Artificiale, Sistemi Multi-Agente, Machine Learning e Controllo.",
    
    edu_bsc_lead: "Bachelor of Science (B.Sc.) in",
    edu_bsc_title: "Applied Computer Science and Artificial Intelligence (ACSAI)",
    edu_bsc_name: "Applied Computer Science and Artificial Intelligence (ACSAI)",
    edu_bsc_inst: "Sapienza Università di Roma",
    edu_bsc_grade: "Grade: 110 / 110",
    edu_bsc_status: "Grade: 110 / 110",
    edu_bsc_desc: "Corso triennale tenuto interamente in lingua inglese (2023 – 2026). Votazione finale di 110/110. Tesi di laurea e tirocinio svolti presso l'INGV con il progetto Seismic Viewer. Corsi: Strutture Dati e Algoritmi, Sistemi Operativi, Basi di Dati, Architetture Software, Reti, Intelligenza Artificiale, Programmazione Concorrente.",
    edu_btn_transcript: "Visualizza Piano di Studi & Tesi",

    edu_hs_lead: "Diploma di Maturità Scientifica",
    edu_hs_title: "Scienze Applicate",
    edu_hs_name: "Scienze Applicate",
    edu_hs_inst: "Liceo Scientifico Statale 'Vito Volterra'",
    edu_hs_grade: "Grade: 98 / 100",
    edu_hs_status: "Grade: 98 / 100",
    edu_hs_desc: "Curriculum di informatica, matematica e fisica (2018 – 2023).",

    // Skills Section
    skills_badge: "Competenze",
    skills_title: "Tecnologie & Strumenti",
    skills_cat_ai: "Intelligenza Artificiale & Visione",
    skills_cat_lang: "Linguaggi di Programmazione",
    skills_cat_front: "Frontend & Interfacce",
    skills_cat_back: "Backend, Sistemi & Strumenti",

    // Projects Section
    proj_badge: "Progetti",
    proj_title: "Lavori & Repository GitHub",
    proj_filter_all: "Tutti",
    proj_filter_ai: "AI & Multi-Agente",
    proj_filter_vision: "Computer Vision & Robotica",
    proj_filter_web: "Web & Sistemi Distribuiti",
    proj_view_repo: "Repository",
    proj_view_details: "Dettagli",

    // Project Details
    p1_title: "OpenSyntax AI Coding Workspace",
    p1_desc: "Workspace con orchestrazione multi-agente per lo sviluppo software. Supporta compilazione per Python, C/C++, Java, Go e Rust, con terminale integrato e supporto a LLM locali (LM Studio) e OpenAI.",
    p1_tech: ["TypeScript", "Multi-Agent", "React", "Local LLMs", "Node.js"],

    p2_title: "Local LLM Email Agent",
    p2_desc: "Assistente per la posta in arrivo con LLM locali tramite LM Studio. Riassume i messaggi, applica regole di priorità ed esegue l'elaborazione in locale senza inviare dati a server esterni.",
    p2_tech: ["Python", "LM Studio", "Privacy AI", "GUI", "Automation"],

    p3_title: "Echo Messaging System",
    p3_desc: "Applicazione di messaggistica istantanea con chat dirette e di gruppo. Sviluppata per il corso di Web & Software Architecture con backend in Go, WebSocket, frontend Vue.js e Docker Compose.",
    p3_tech: ["Go", "Vue.js", "WebSockets", "Docker Compose", "PostgreSQL"],

    p4_title: "LoL Farming Bot con YOLOv11",
    p4_desc: "Bot per League of Legends basato su computer vision con YOLOv11. Rileva i minion a schermo, calcola le priorità di attacco ed esegue azioni di gioco evitando il raggio delle torri.",
    p4_tech: ["Python", "YOLOv11", "Computer Vision", "PyTorch", "Screen Analysis"],

    p5_title: "Voice Cloning Qwen3-TTS",
    p5_desc: "Interfaccia web in React per Qwen3-TTS per sintesi vocale e clonazione vocale zero-shot multilingua, distribuita con container Docker.",
    p5_tech: ["TypeScript", "React", "Docker", "Audio AI", "Qwen-TTS"],

    p6_title: "Stock Market Predictor (LSTM)",
    p6_desc: "Previsione di serie storiche finanziarie con reti neurali LSTM, integrazione dati da Yahoo Finance e interfaccia interattiva con Streamlit.",
    p6_tech: ["Python", "LSTM", "Streamlit", "Pandas", "Yahoo Finance"],

    p7_title: "PDF File Extractor con OCR",
    p7_desc: "Applicazione desktop in PyQt5 per estrarre testo da documenti PDF e immagini tramite Tesseract OCR, con esportazione in formati DOCX e TXT.",
    p7_tech: ["Python", "PyQt5", "Tesseract OCR", "DOCX Export", "Desktop App"],

    p8_title: "Multicore & Robotic Systems",
    p8_desc: "Programmi in C e C++ su programmazione concorrente (thread POSIX, mutex, semafori), gestione della memoria e algoritmi di controllo per la robotica.",
    p8_tech: ["C", "C++", "Multithreading", "Robotics", "POSIX Threads"],

    p9_title: "Quest for Valentine",
    p9_desc: "Browser game narrativo a bivi in puro JavaScript con grafica pixel art, gestione dello stato dei dialoghi ed effetti particellari su Canvas.",
    p9_tech: ["JavaScript", "HTML5 Canvas", "Game Design", "Pixel Art"],

    p10_title: "Cross-Platform Portfolio (Flet)",
    p10_desc: "Portfolio multipiattaforma sviluppato in Python tramite il framework Flet (Flutter engine).",
    p10_tech: ["Python", "Flet", "Flutter Engine", "Vercel"],

    // Resume Banner & Modal
    resume_banner_badge: "Curriculum Vitae",
    resume_banner_title: "Scarica il CV in formato PDF",
    resume_banner_desc: "CV per recruiter e sistemi ATS: include formazione (Laurea ACSAI 110/110, tesi INGV, magistrale AIRO dal 2026), progetti, competenze tecniche e contatti.",
    modal_title: "Curriculum Vitae — Alessio Curcio",
    modal_close: "Chiudi",
    modal_download: "Scarica PDF",
    modal_open_tab: "Apri in una nuova scheda",

    // Contact Section
    contact_badge: "Contatti",
    contact_title: "Mettiti in Contatto",
    contact_p: "Disponibile per opportunità ingegneristiche in ambito AI e Robotica, progetti di ricerca e collaborazioni software.",
    contact_email_label: "Email",
    contact_phone_label: "Telefono / WhatsApp",
    contact_location_label: "Posizione",
    contact_location_val: "Roma / Ciampino, Italia",
    contact_social_label: "Profili",
    contact_copied: "Copiato negli appunti!",
    
    form_name: "Nome",
    form_email: "Email",
    form_subject: "Oggetto",
    form_message: "Messaggio",
    form_submit: "Invia Messaggio",
    form_sending: "Invio in corso...",
    form_sent: "Messaggio Inviato!",
    form_success: "Messaggio inviato con successo! Ti risponderò al più presto.",
    form_error: "Errore durante l'invio. Apertura client email...",

    // Footer
    footer_text: "Sito personale di Alessio Curcio. Dati da GitHub, percorso accademico e CV.",
    footer_rights: "Tutti i diritti riservati.",

    // Transcript Modal
    transcript_modal_title: "Certificato di Laurea & Esami di Profitto",
    transcript_modal_sub: "Sapienza Università di Roma — Facoltà di Ingegneria dell'Informazione, Informatica e Statistica",
    transcript_final_grade: "Voto Finale",
    transcript_total_credits: "Crediti Totali",
    transcript_passed_exams: "Esami Superati",
    transcript_thesis_badge: "Tesi Triennale & Tirocinio",
    transcript_advisor: "Relatore: Prof. Danilo Avola",
    transcript_partner: "Ente Ospitante: INGV",
    transcript_date: "Data Laurea: 23/10/2026",
    tfilter_all: "Tutti gli Esami (23)",
    tfilter_ai: "AI, Visione & HCI",
    tfilter_sw: "Software & Sistemi",
    tfilter_math: "Matematica & Statistica",
    ttable_name: "Insegnamento / Attività Formativa",
    ttable_ssd: "Codice & SSD",
    ttable_cfu: "CFU",
    ttable_date: "Data",
    ttable_grade: "Voto",
    transcript_verified_note: "Certificato ufficiale Sapienza Università di Roma (L-31 L-270 Ordin. 2021) • UID: 5883130",
    modal_close: "Chiudi"
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
    hero_status: "Open to collaborations",
    hero_greeting: "Hi, I'm",
    hero_name: "Alessio Curcio",
    hero_roles: [
      "M.Sc. AIRO Student (2026) — Sapienza",
      "B.Sc. ACSAI Graduate (110/110) — Sapienza",
      "Software Research Intern — INGV",
      "Multi-Agent Systems & LLMs",
      "Computer Vision & Robotics"
    ],
    hero_bio: "Master's student in Artificial Intelligence and Robotics (AIRO, enrolled 2026) and Bachelor's graduate in Applied Computer Science and Artificial Intelligence (ACSAI) with <strong>110/110</strong> at Sapienza University of Rome. Completed a research software engineering internship at <strong>INGV</strong> (National Institute of Geophysics and Volcanology) developing an interactive 4D seismic analysis system. Working on multi-agent systems, local LLMs, computer vision, and robotics.",
    hero_btn_projects: "Projects",
    hero_btn_contact: "Contact Me",
    hero_btn_cv: "Download CV (PDF)",
    hero_btn_cv_preview: "Preview CV",

    // Quick Stats (Exactly 4 High-Impact Blocks)
    stat_grade: "110 / 110",
    stat_grade_sub: "B.Sc. ACSAI Sapienza",
    stat_msc: "AI & Robotics",
    stat_msc_sub: "Sapienza University (2026)",
    stat_ingv: "INGV Internship",
    stat_ingv_sub: "Seismic Viewer 4D & Thesis",
    stat_repos: "GitHub Projects",
    stat_repos_sub: ">18 Active Repositories",

    // About Section
    about_badge: "Profile",
    about_title: "Academic Background & Focus",
    about_p1: "I graduated with a Bachelor's degree in <strong>Applied Computer Science and Artificial Intelligence (ACSAI)</strong> from <strong>Sapienza University of Rome</strong> with a final grade of <strong>110/110</strong>, completing an undergraduate curriculum taught entirely in English.",
    about_p2: "I completed my curricular internship and bachelor's thesis at the <strong>National Institute of Geophysics and Volcanology (INGV)</strong>, engineering <strong>Seismic Viewer</strong>: an interactive 4D desktop application for spatio-temporal seismic catalogue visualization, spatial clustering, and automated geological fault plane estimation.",
    about_p3: "I am currently pursuing my Master of Science in <strong>Artificial Intelligence and Robotics (AIRO)</strong> at Sapienza (started in 2026), focusing on multi-agent systems, local LLMs, computer vision with YOLO, and concurrent robotic control. I also completed technical programs with <strong>IBM</strong> and <strong>Ericsson</strong>, and achieved the top score in the TeraBebras competition.",
    
    // Exactly 4 About Feature Cards
    about_card1_title: "M.Sc. in AIRO",
    about_card1_desc: "Sapienza University of Rome (2026 – Present) — Multi-Agent Systems, Reinforcement Learning, Robot Programming, Deep Learning.",
    about_card2_title: "B.Sc. in ACSAI (110/110)",
    about_card2_desc: "Sapienza University of Rome (2023 – 2026). Taught in English. Final grade: 110/110.",
    about_card_ingv_title: "INGV Research Internship",
    about_card_ingv_desc: "Engineered Seismic Viewer 4D for seismic clustering, fault plane estimation, and compressed binary streaming (-80%).",
    about_card4_title: "High School (98/100) & Contests",
    about_card4_desc: "Liceo Scientifico 'Vito Volterra' (Applied Sciences, 2023). Maximum score in TeraBebras competition; national stages in Math & Informatics Olympiads.",

    // Experience Section
    exp_badge: "Experience & Research",
    exp_title: "Technical Work, Research & Competitions",
    exp_ingv_title: "Software Engineering Research Intern — Seismic Viewer 4D",
    exp_ingv_org: "INGV (National Institute of Geophysics and Volcanology) & Sapienza",
    exp_ingv_period: "Thesis & Internship",
    exp_ingv_desc: "Designed and engineered Seismic Viewer, an interactive 4D desktop application for spatio-temporal seismic data visualization. Developed a Python scientific backend for spatial clustering and automated geological fault plane estimation. Built a high-performance WebGL 3D rendering frontend with a custom binary streaming protocol achieving an 80% data reduction compared to JSON for fluid framerates on large seismic datasets (Campi Flegrei). Integrated INGV GOSSIP API, GNSS ground uplift, and 3D seismic tomography.",
    
    exp_ibm_title: "Data Analysis & Chatbots",
    exp_ibm_org: "IBM & Sapienza University",
    exp_ibm_period: "Academic Projects",
    exp_ibm_desc: "Big Data analysis for profiling models and customer support chatbots built with IBM Cloud and Watson services.",
    
    exp_ericsson_title: "Software & Telecom Labs",
    exp_ericsson_org: "Ericsson & Fondazione Mondo Digitale",
    exp_ericsson_period: "Technical Labs",
    exp_ericsson_desc: "Hands-on labs covering telecommunications, software architectures, and applied object-oriented programming.",

    exp_comp_title: "Olympiads & Algorithmic Contests",
    exp_comp_org: "Informatics, Mathematics & TeraBebras",
    exp_comp_period: "Rankings",
    exp_comp_desc: "Regional and national stages in Italian Mathematics, Informatics and Problem Solving Olympiads; finalist in Bocconi University's Mathematics Games; maximum score achieved in the TeraBebras competition.",

    // Education Section
    edu_badge: "Education",
    edu_title: "Academic Degrees",
    edu_msc_lead: "Master of Science (M.Sc.) in",
    edu_msc_title: "Artificial Intelligence and Robotics (AIRO)",
    edu_msc_name: "Artificial Intelligence and Robotics (AIRO)",
    edu_msc_inst: "Sapienza University of Rome",
    edu_msc_status: "2026 – Present",
    edu_msc_desc: "English-taught program covering Autonomous Robotics, Computer Vision, Multi-Agent Systems, Machine Learning, and Control.",
    
    edu_bsc_lead: "Bachelor of Science (B.Sc.) in",
    edu_bsc_title: "Applied Computer Science and Artificial Intelligence (ACSAI)",
    edu_bsc_name: "Applied Computer Science and Artificial Intelligence (ACSAI)",
    edu_bsc_inst: "Sapienza University of Rome",
    edu_bsc_grade: "Grade: 110 / 110",
    edu_bsc_status: "Grade: 110 / 110",
    edu_bsc_desc: "Undergraduate degree taught entirely in English (2023 – 2026). Final graduation grade: 110/110. Bachelor's thesis and internship completed at INGV on the Seismic Viewer project. Coursework: Data Structures & Algorithms, Operating Systems, Databases, Software Architecture, Networks, AI, Multicore Programming.",
    edu_btn_transcript: "View Exam Transcript & Thesis",

    edu_hs_lead: "Scientific High School Diploma",
    edu_hs_title: "Applied Sciences Curriculum",
    edu_hs_name: "Applied Sciences Curriculum",
    edu_hs_inst: "Liceo Scientifico Statale 'Vito Volterra'",
    edu_hs_grade: "Grade: 98 / 100",
    edu_hs_status: "Grade: 98 / 100",
    edu_hs_desc: "Curriculum focused on computer science, mathematics, and physics (2018 – 2023).",

    // Skills Section
    skills_badge: "Tech Stack",
    skills_title: "Skills & Tools",
    skills_cat_ai: "Artificial Intelligence & Vision",
    skills_cat_lang: "Programming Languages",
    skills_cat_front: "Frontend & UI Design",
    skills_cat_back: "Backend, Systems & Tools",

    // Projects Section
    proj_badge: "Projects",
    proj_title: "Selected Repositories",
    proj_filter_all: "All",
    proj_filter_ai: "AI & Multi-Agent",
    proj_filter_vision: "Computer Vision & Robotics",
    proj_filter_web: "Web & Distributed",
    proj_view_repo: "Repository",
    proj_view_details: "Details",

    // Project Details
    p1_title: "OpenSyntax AI Coding Workspace",
    p1_desc: "AI workspace featuring multi-agent orchestration for software development. Supports compilation for Python, C/C++, Java, Go, and Rust with an integrated terminal and support for local LLMs (LM Studio) and OpenAI.",
    p1_tech: ["TypeScript", "Multi-Agent", "React", "Local LLMs", "Node.js"],

    p2_title: "Local LLM Email Agent",
    p2_desc: "Desktop inbox assistant using local LLMs through LM Studio. Summarizes messages, applies priority rules, and runs locally without sending data to external cloud services.",
    p2_tech: ["Python", "LM Studio", "Privacy AI", "GUI", "Automation"],

    p3_title: "Echo Messaging System",
    p3_desc: "Messaging application supporting direct and group chats. Developed for the Web & Software Architecture course with Go backend, WebSockets, Vue.js frontend, and Docker Compose.",
    p3_tech: ["Go", "Vue.js", "WebSockets", "Docker Compose", "PostgreSQL"],

    p4_title: "LoL Farming Bot with YOLOv11",
    p4_desc: "League of Legends bot powered by real-time computer vision with YOLOv11. Detects onscreen minions, calculates attack priority, and executes gameplay actions while monitoring turret radius.",
    p4_tech: ["Python", "YOLOv11", "Computer Vision", "PyTorch", "Screen Analysis"],

    p5_title: "Voice Cloning Qwen3-TTS",
    p5_desc: "React web interface for Qwen3-TTS providing multilingual text-to-speech and zero-shot voice cloning, deployed with Docker.",
    p5_tech: ["TypeScript", "React", "Docker", "Audio AI", "Qwen-TTS"],

    p6_title: "Stock Market Predictor (LSTM)",
    p6_desc: "Financial time-series forecasting with LSTM neural networks, Yahoo Finance integration, and Streamlit interactive dashboard.",
    p6_tech: ["Python", "LSTM", "Streamlit", "Pandas", "Yahoo Finance"],

    p7_title: "PDF File Extractor with OCR",
    p7_desc: "PyQt5 desktop application to extract text from digital and scanned PDFs via Tesseract OCR, with export to DOCX and TXT.",
    p7_tech: ["Python", "PyQt5", "Tesseract OCR", "DOCX Export", "Desktop App"],

    p8_title: "Multicore & Robotic Systems",
    p8_desc: "C and C++ programs covering concurrent programming (POSIX threads, mutexes, semaphores), memory management, and robotic control algorithms.",
    p8_tech: ["C", "C++", "Multithreading", "Robotics", "POSIX Threads"],

    p9_title: "Quest for Valentine",
    p9_desc: "Branching narrative browser game in Vanilla JavaScript with pixel art, dialogue state management, and Canvas particle effects.",
    p9_tech: ["JavaScript", "HTML5 Canvas", "Game Design", "Pixel Art"],

    p10_title: "Cross-Platform Portfolio (Flet)",
    p10_desc: "Cross-platform portfolio website built in Python with the Flet framework (Flutter engine).",
    p10_tech: ["Python", "Flet", "Flutter Engine", "Vercel"],

    // Resume Banner & Modal
    resume_banner_badge: "Curriculum Vitae",
    resume_banner_title: "Download CV in PDF format",
    resume_banner_desc: "Recruiter and ATS-friendly CV: includes education (B.Sc. ACSAI 110/110, INGV thesis, M.Sc. AIRO starting 2026), projects, technical skills, and contact details.",
    modal_title: "Curriculum Vitae — Alessio Curcio",
    modal_close: "Close",
    modal_download: "Download PDF",
    modal_open_tab: "Open in New Tab",

    // Contact Section
    contact_badge: "Contact",
    contact_title: "Get in Touch",
    contact_p: "Open to software engineering and AI/Robotics opportunities, academic research projects, and collaborations.",
    contact_email_label: "Email",
    contact_phone_label: "Phone / WhatsApp",
    contact_location_label: "Location",
    contact_location_val: "Rome / Ciampino, Italy",
    contact_social_label: "Profiles",
    contact_copied: "Copied to clipboard!",
    
    form_name: "Name",
    form_email: "Email",
    form_subject: "Subject",
    form_message: "Message",
    form_submit: "Send Message",
    form_sending: "Sending...",
    form_sent: "Message Sent!",
    form_success: "Message sent successfully! I'll get back to you soon.",
    form_error: "Could not send automatically. Opening email client...",

    // Footer
    footer_text: "Personal website of Alessio Curcio. Data sourced from GitHub, academic record, and CV.",
    footer_rights: "All rights reserved.",

    // Transcript Modal
    transcript_modal_title: "Academic Degree Certificate & Profit Exams",
    transcript_modal_sub: "Sapienza University of Rome — Faculty of Information Engineering, Informatics & Statistics",
    transcript_final_grade: "Final Grade",
    transcript_total_credits: "Total Credits",
    transcript_passed_exams: "Passed Exams",
    transcript_thesis_badge: "B.Sc. Thesis & Internship",
    transcript_advisor: "Advisor: Prof. Danilo Avola",
    transcript_partner: "Research Host: INGV",
    transcript_date: "Graduation Date: 23/10/2026",
    tfilter_all: "All Exams (23)",
    tfilter_ai: "AI, Vision & HCI",
    tfilter_sw: "Software & Systems",
    tfilter_math: "Math & Statistics",
    ttable_name: "Course / Educational Activity",
    ttable_ssd: "Code & SSD",
    ttable_cfu: "Credits",
    ttable_date: "Date",
    ttable_grade: "Grade",
    transcript_verified_note: "Official Sapienza University Certificate (L-31 L-270 Ordin. 2021) • UID: 5883130",
    modal_close: "Close"
  }
};
