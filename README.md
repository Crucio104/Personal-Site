# Sito Personale & CV — Alessio Curcio

Un sito personale moderno, ad alte prestazioni, bilingue (Italiano 🇮🇹 / Inglese 🇬🇧) e completamente responsive sviluppato per presentare il profilo accademico, i progetti e il Curriculum Vitae di **Alessio Curcio** (M.Sc. AIRO Student & B.Sc. ACSAI Graduate — Sapienza Università di Roma).

---

## 🌟 Caratteristiche Principali

- **Design High-Tech & Minimalista**: Estetica moderna con glassmorphism, accenti ciano/indaco, tipografia pulita (Inter e JetBrains Mono) e transizioni fluide.
- **Sfondo Interattivo Canvas (Neural Mesh)**: Rete neurale particellare generativa con reattività al passaggio del mouse e ottimizzazione delle prestazioni.
- **Bilingue Istantaneo (IT / EN)**: Passaggio immediato tra Italiano e Inglese con persistenza della preferenza in `localStorage`.
- **Tema Scuro / Chiaro (Dark / Light Mode)**: Toggle rapido tra Dark Theme ad alto contrasto e Light Theme rifinito.
- **Dati Integrati & Verificati**:
  - Dati estratti dal profilo GitHub **Crucio104** (18 repository, descrizioni, tag tecnici e metriche).
  - Esperienze accademiche e industriali (Laurea Triennale ACSAI con 30 e 30L, Laurea Magistrale AIRO, collaborazioni con **IBM** ed **Ericsson**).
  - Risultati agonistici (Olimpiadi di Matematica, Informatica e punteggio massimo **TeraBebras**).
  - Dettagli di contatto completi con copia rapida negli appunti (Email, Telefono, LinkedIn, GitHub).
- **Progetti Filtrabili**: Filtro interattivo per categoria (*Tutti*, *AI & Multi-Agente*, *Computer Vision & Robotica*, *Web & Sistemi Distribuiti*).
- **Integrazione CV Completa**:
  - Download diretto del file PDF originale [`Alessio_Curcio_CV.pdf`](assets/docs/Alessio_Curcio_CV.pdf).
  - Modal di visualizzazione / anteprima in-browser integrata.
- **Zero Dipendenze di Runtime**: Pura architettura HTML5, CSS3 moderno e Vanilla JavaScript. Caricamento istantaneo (100/100 performance) senza pesanti runtime pyodide o framework compilati.

---

## 📁 Struttura della Cartella

```
PersonalSite/
├── index.html                   # Pagina principale del sito
├── serve.py                     # Script di avvio rapido con server locale Python
├── README.md                    # Documentazione del progetto
└── assets/
    ├── css/
    │   └── style.css            # Stili CSS completi, variabili tema, glassmorphism e responsive
    ├── js/
    │   ├── canvas.js            # Animazione interattiva rete neurale
    │   ├── translations.js      # Dizionario bilingue completo (IT & EN)
    │   └── main.js              # Gestione logica, filtri, modal, typewriter e contatti
    ├── img/
    │   ├── profile.png          # Foto profilo di Alessio Curcio
    │   └── favicon.svg          # Favicon vettoriale personalizzata
    └── docs/
        └── Alessio_Curcio_CV.pdf # File PDF del Curriculum Vitae
```

---

## 🚀 Come Visualizzare il Sito in Locale

Puoi avviare il sito in due modi semplici:

### Opzione 1: Con lo script Python (Consigliato)
Esegui nel terminale all'interno della cartella:
```bash
python3 serve.py
```
Il server si avvierà su `http://localhost:3000` e aprirà automaticamente il browser.

### Opzione 2: Apertura Diretta
Fai doppio click su `index.html` per aprirlo direttamente in qualsiasi browser (Google Chrome, Safari, Firefox, Edge).

---

## 🌐 Opzioni di Pubblicazione Online (Hosting Gratuito)

Il sito è statico e pronto per essere deployato istantaneamente su qualsiasi piattaforma:

1. **GitHub Pages (Gratuito, 1 minuto)**:
   - Crea una repository su GitHub (es. `PersonalSite` o `Crucio104.github.io`).
   - Carica questi file e vai su **Settings > Pages > Deploy from a branch (`main`)**.
   - Il sito sarà online all'indirizzo `https://Crucio104.github.io/`!

2. **Vercel (In sostituzione del vecchio sito)**:
   - Collega la repository su [Vercel](https://vercel.com).
   - Imposta la root directory come cartella principale e clicca **Deploy**.

3. **Netlify o Cloudflare Pages**:
   - Trascina semplicemente la cartella `PersonalSite` sul cruscotto di Netlify Drop o Cloudflare.

