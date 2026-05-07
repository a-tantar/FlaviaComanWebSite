# SITE TEMPLATE — Web Studio Pokeball 🔴⚪
> Usa questo file come punto di partenza per ricreare un sito da zero in modo veloce e consistente.
> Tutte le specifiche tecniche sono pre-configurate. Alla fine del file trovi le **10 domande di onboarding** da eseguire nel terminale.

---

## STACK TECNOLOGICO

| Layer | Tecnologia | Versione |
|---|---|---|
| Framework UI | React | ^18.3.1 |
| Build tool | Vite | ^5.4.10 |
| Animazioni | GSAP | ^3.15.0 |
| Form e-mail | EmailJS Browser | ^4.2.0 |
| Icone | Font Awesome (solid + brands) | ^7.2.0 |
| Analytics | Google Analytics 4 | — |
| Deploy | Vercel (SPA rewrite) | — |

### Font (variable fonts via @fontsource)
```
@fontsource-variable/bricolage-grotesque  → Display / Titoli
@fontsource-variable/dm-sans              → Body / UI
@fontsource/instrument-serif              → Accenti corsivi
```

### Variabili d'ambiente richieste (`.env`)
```env
VITE_GA_MEASUREMENT_ID=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

---

## ARCHITETTURA DEL PROGETTO

```
root/
├── public/
│   ├── logos/              ← Logo principale + favicon
│   ├── videos/             ← Video testimonials (.webm)
│   ├── og-image.jpg        ← Open Graph image (1200×630)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── AmbientBackground/   ← Sfondo fisso animato
│   │   ├── CTA/                 ← Sezione finale call-to-action
│   │   ├── ContactModal/        ← Modale contatto full-screen
│   │   ├── CookieBanner/        ← Banner GDPR consenso
│   │   ├── Footer/              ← Footer
│   │   ├── Header/              ← Navbar fissa
│   │   ├── Hero/                ← Prima sezione
│   │   ├── Loader/              ← Schermata di caricamento
│   │   ├── Numbers/             ← Contatori statistiche
│   │   ├── Problem/             ← Sezione problemi
│   │   ├── Services/            ← Griglia servizi
│   │   ├── Showcase/            ← Case studies
│   │   └── Testimonial/         ← Carosello recensioni
│   ├── pages/
│   │   ├── PrivacyPolicy.jsx
│   │   └── NotFound.jsx
│   ├── hooks/
│   │   ├── useGSAP.js           ← Hook animazioni sezioni
│   │   └── useScrollSection.js  ← Hook navigazione full-page
│   ├── lib/
│   │   ├── analytics.js         ← GA4 enable/disable
│   │   └── emailjs.js           ← Invio form
│   ├── App.jsx                  ← Logica full-page scroll
│   ├── main.jsx                 ← Routing
│   └── index.css                ← CSS variables globali
├── index.html                   ← SEO meta + JSON-LD
├── vite.config.js
├── vercel.json
└── .env
```

---

## SISTEMA DI DESIGN

### Palette colori (CSS Variables)

> **La palette viene definita durante l'onboarding** (domande 7 e 8).
> Il tema (chiaro/scuro) e i colori brand vengono forniti dal cliente.
> Claude genera le variabili di conseguenza seguendo la struttura qui sotto.

```css
/* ─── TEMA SCURO (dark) ───────────────────────────────────────── */
:root[data-theme="dark"] {
  /* Backgrounds — scala da scuro a meno scuro */
  --bg:               [COLORE_BASE_SCURO];        /* es. #0C0F1A */
  --bg-secondary:     [COLORE_BASE_SCURO +5%];    /* es. #111528 */
  --bg-tertiary:      [COLORE_BASE_SCURO +10%];   /* es. #171C32 */

  /* Testo */
  --fg:               [COLORE_TESTO_CHIARO];      /* es. #E8ECF4 */
  --text-dim:         [--fg a 55% opacità];
  --text-muted:       [--fg a 32% opacità];

  /* Card / Bordi */
  --card-bg:          rgba(255,255,255, 0.03);
  --card-border:      [--fg a 8% opacità];
  --card-shadow:      0 2px 12px rgba(0,0,0,0.30), 0 8px 40px rgba(0,0,0,0.22);

  /* Divisori */
  --divider:          [--fg a 7% opacità];
  --divider-strong:   [--fg a 12% opacità];
}

/* ─── TEMA CHIARO (light) ─────────────────────────────────────── */
:root[data-theme="light"] {
  /* Backgrounds — scala da bianco a grigio leggero */
  --bg:               [COLORE_BASE_CHIARO];       /* es. #FFFFFF */
  --bg-secondary:     [COLORE_BASE_CHIARO -3%];   /* es. #F7F8FC */
  --bg-tertiary:      [COLORE_BASE_CHIARO -6%];   /* es. #EFF1F7 */

  /* Testo */
  --fg:               [COLORE_TESTO_SCURO];       /* es. #0F1117 */
  --text-dim:         [--fg a 60% opacità];
  --text-muted:       [--fg a 40% opacità];

  /* Card / Bordi */
  --card-bg:          rgba(0,0,0, 0.02);
  --card-border:      [--fg a 10% opacità];
  --card-shadow:      0 2px 12px rgba(0,0,0,0.06), 0 8px 40px rgba(0,0,0,0.08);

  /* Divisori */
  --divider:          [--fg a 8% opacità];
  --divider-strong:   [--fg a 15% opacità];
}

/* ─── COLORI BRAND (comuni a entrambi i temi) ─────────────────── */
:root {
  /* Colore primario — fornito dal cliente nell'onboarding */
  --accent-solid:     [COLORE_1];                        /* colore principale esatto */
  --accent-hover:     [COLORE_1 scurito ~10%];           /* stato hover */
  --accent-glow:      [COLORE_1 a 15% opacità];
  --accent-tint:      [COLORE_1 a 8% opacità];
  --accent-mid:       [COLORE_1 a 18% opacità];

  /* Gradiente accent — usa COLORE_1 → COLORE_2 se fornito, altrimenti COLORE_1 → tinta */
  --accent:           linear-gradient(135deg, [COLORE_1], [COLORE_2 o variante]);

  /* Colore secondario — se fornito dal cliente, altrimenti derivato da COLORE_1 */
  --accent2:          [COLORE_2 o COLORE_1 +15% luminosità];
  --accent2-glow:     [COLORE_2 a 12% opacità];

  /* Hover sui bordi card */
  --card-border-hover:[COLORE_1 a 32% opacità];

  /* Glow per titoli gradient e ambient background */
  --glow-1:           [COLORE_1];
  --glow-2:           [COLORE_2 o variante media];
  --glow-3:           [tinta chiara di COLORE_1];

  /* Layout — invarianti */
  --pad:              clamp(20px, 4vw, 80px);
  --max:              1200px;
}
```

**Regola per il gradient text sui titoli:**
```css
/* H1/H2 con <em> — usa sempre --glow-1 → --glow-3 */
background: linear-gradient(135deg, var(--glow-1), var(--glow-3));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Tipografia

```css
--font-display:  'Bricolage Grotesque Variable'  /* Titoli H1/H2 — peso 800 */
--font-body:     'DM Sans Variable'              /* Body / UI — peso 300–500 */
--font-serif:    'Instrument Serif'              /* Accenti corsivi in <em> */

/* Scale tipografica responsive */
H1:    clamp(48px, 8vw, 96px)
H2:    clamp(36px, 6vw, 72px)
H3:    clamp(1.1rem, 2vw, 1.35rem)
Body:  0.9rem – 1rem  /  line-height: 1.5–1.7
Label: 0.72rem – 0.8rem
```

**Gradient text su titoli:**
```css
background: linear-gradient(135deg, var(--glow-1), var(--glow-3));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## RESPONSIVE — BREAKPOINTS

> Soglia principale desktop/mobile: **1400px**
> Sotto 1400px lo scroll full-page si disabilita → scroll nativo

```
≤375px   – iPhone SE / telefoni piccoli
≤393px   – iPhone 14 Pro / 15
≤430px   – iPhone 14/15 standard, Pixel
≤480px   – Portrait generico
≤640px   – Telefono grande / tablet piccolo
≤768px   – Tablet portrait — griglia a 1 colonna
≤1024px  – Tablet landscape — nav compressa
≤1400px  – iPad Pro / laptop piccolo — scroll nativo
 >1400px  – Desktop — full-page scroll GSAP

/* Altezza */
max-height: 860px   – Laptop 1080p windowed
max-height: 1050px  – Desktop medi
```

### Regole responsive generali
- Griglia 2×2 → colonna singola su ≤768px
- Modale 2 colonne → colonna singola su ≤768px
- Header: nasconde nav su ≤768px
- Padding: usa sempre `clamp()` o `var(--pad)`
- Font: sempre `clamp()` per titoli
- Touch scroll: delta minimo 30px per evitare scroll accidentali

---

## COMPONENTI — SPECIFICHE

### Header (fisso, z-index: 100)
- Logo a sinistra → ritorna alla sezione 0
- Voci di navigazione al centro → anchor alle sezioni
- Pulsante CTA a destra → apre ContactModal
- Sfondo: `backdrop-filter: blur(12px)` su scroll
- Glassmorphism: `rgba(12,15,26,0.85)` + bordo bottom sottile
- Mobile ≤768px: nasconde le voci nav, mantiene logo + CTA

### AmbientBackground (fisso, z-index: -1)
- Base color: `var(--bg)`
- Pattern diagonale: `repeating-linear-gradient` 45°, opacità bassa
- 3 radial gradients sovrapposti (bagliori brand)
- SVG noise overlay (grain texture)
- Completamente non interattivo

### Loader (z-index: 9999)
- Mostrato solo al primo accesso per sessione (`sessionStorage`)
- Logo: fade-in + translateY (0.8s, delay 0.2s) via GSAP
- Barra progressione: scaleX 0→1 (durata random 2.5s–5s)
- Fade out + hide al completamento
- Non blocca la pagina se già visitata

### Hero (Sezione 0)
- 2 orbs fluttuanti (blur animato, keyframe CSS)
- 4 icone social fluttuanti con rotazione continua (24–28s loop)
- Maschera gradiente in basso per blend verso sezione successiva
- Struttura content:
  - Badge/kicker testuale
  - Logo o nome brand
  - H1 con `<em>` in gradient
  - Sottotitolo
  - Barra 3 statistiche inline
  - Pulsante CTA primario → ContactModal
- Animazioni GSAP: stagger 0.08s sull'attivazione sezione

### Problem (Sezione 1)
- Kicker
- H2 con emphasis gradient
- Griglia 3 colonne (1 colonna su mobile)
- Ogni card: icona + titolo + descrizione
- Hover: `translateY(-4px)` + border accent
- Frase bridge → collegamento visivo alla sezione successiva

### Showcase (Sezione 2)
- Kicker
- H2 bold
- Testo introduttivo
- 2 card case study:
  - Immagine/avatar profilo
  - Nome cliente
  - 4 statistiche in griglia 2×2 (numero + label)
  - Border-left con accent color
- Mobile: stack verticale

### Services (Sezione 3)
- Kicker
- H2 con gradient
- Griglia 2×2 di card servizio:
  - Icona Font Awesome
  - Titolo servizio
  - Descrizione
  - Lista bullet punti chiave
- Hover card: bordo accent + leggera elevazione
- Mobile: 1 colonna

### Testimonial (Sezione 4)
- Background video scrollante (file .webm in loop, muted, autoplay)
- Overlay scuro `rgba(0,0,0,0.7)`
- Card singola visibile con:
  - Avatar / nome cliente
  - Stelle (rating)
  - Testo recensione
- Frecce navigazione sinistra/destra
- Dot indicators (cliccabili)
- Auto-avanzamento ogni 5s se sezione attiva
- Transizioni GSAP: fade-out 0.25s → swap → fade-in 0.35s

### Numbers (Sezione 5)
- Kicker
- H2 con gradient
- 5 contatori animati:
  - Numero con suffisso (es. "1M+", "4.8/5")
  - Label descrittiva
- Animazione GSAP: counter snap su attivazione (2s, delay 0.5s)
- Layout: flex row, wrap su mobile

### CTA (Sezione 6 — ultima)
- H2 headline finale
- Sottotitolo
- Pulsante CTA grande → ContactModal
- Trust signals: location, rating, n° clienti
- Footer embeddato in absolute bottom

### Footer (dentro CTA)
- Colonna sinistra: brand, città, email
- Colonna destra: copyright, P.IVA, credit
- Mobile: stack verticale, testo centrato

### ContactModal (z-index: 200)
- Fixed full-screen overlay con backdrop blur
- Griglia 2 colonne (>768px) → 1 colonna (≤768px)
- **Colonna form:**
  - Input: Nome, Email, Telefono
  - Select: Servizio di interesse
  - Textarea: Messaggio
  - Checkbox: consenso privacy (required)
  - Pulsante invio
- **Colonna info:**
  - Email, Telefono, Indirizzo studio
  - Link social
- Stati del form: Idle → Loading (spinner) → Success (checkmark) → auto-chiusura 5s
- Stato errore: icona X rossa + pulsante retry
- Chiusura: click backdrop / tasto Escape
- Reset form al successo
- Animazione GSAP: overlay + pannello + fields staggerati

### CookieBanner (z-index: 260)
- Fixed bottom-center
- Safe area bottom per mobile (iOS notch)
- Pulsanti: "Rifiuta" / "Accetta"
- Salva scelta in `localStorage` (key: es. `site_cookie_consent`)
- Accetta → `enableAnalytics()` (GA4)
- Rifiuta → `disableAnalytics()`

---

## NAVIGAZIONE FULL-PAGE (Desktop >1400px)

```
Trigger supportati:
  - Wheel scroll (deltaY)
  - Touch swipe (touchstart + touchend, delta min 30px)
  - Tasti: ArrowDown / ArrowUp / PageDown / PageUp

Animazione sezione:
  - GSAP gsap.to() con power3.inOut
  - Durata: 1.3s
  - translateY delle sezioni in percentuale

Entrance animation per ogni sezione:
  - Elementi con [data-*-anim] attribute
  - gsap.set(): opacity 0, y: 40 (initial state)
  - gsap.to() su activate: opacity 1, y: 0
  - Stagger: 0.08s–0.18s
  - Duration: 0.75s–0.9s, ease: power3.out

Mobile ≤1400px:
  - Scroll nativo
  - goTo(index) usa scrollIntoView({ behavior: 'smooth' })
```

---

## SEO & STRUTTURA HTML

### `index.html` — meta tag da compilare
```html
<html lang="[LINGUA]">
<title>[TITOLO SITO]</title>
<meta name="description" content="[DESCRIZIONE 150 CHAR]">
<meta name="keywords" content="[KEYWORD1], [KEYWORD2], ...">
<link rel="canonical" href="[URL_DOMINIO]">

<!-- Open Graph -->
<meta property="og:title" content="[OG TITLE]">
<meta property="og:description" content="[OG DESC]">
<meta property="og:image" content="[URL]/og-image.jpg">
<meta property="og:url" content="[URL_DOMINIO]">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">

<!-- Theme color -->
<meta name="theme-color" content="[ACCENT HEX]">
```

### JSON-LD — Schema.org (da compilare)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[NOME AZIENDA]",
  "url": "[URL]",
  "telephone": "[TEL]",
  "email": "[EMAIL]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[VIA]",
    "addressLocality": "[CITTÀ]",
    "addressCountry": "[IT/EN/...]"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[X.X]",
    "reviewCount": "[N]"
  }
}
```

### Pagine aggiuntive da includere sempre
- `/privacy-policy` — GDPR compliance (card layout, 9 sezioni)
- `/*` → `404.jsx` — pagina not found con CTA ritorno home

### `vercel.json` (SPA routing)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## INTEGRAZIONE SERVIZI ESTERNI

### EmailJS (form contatto)
```js
// lib/emailjs.js
import emailjs from '@emailjs/browser';
emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  { to_email, from_name, from_email, phone, service, message },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

### Google Analytics 4
```js
// lib/analytics.js
// Carica GA4 solo se consenso dato
export const enableAnalytics = () => { /* gtag init */ }
export const disableAnalytics = () => { window['ga-disable-MEASUREMENT_ID'] = true; }
```

---

## CHECKLIST PRIMA DEL DEPLOY

- [ ] `.env` compilato con tutte le variabili
- [ ] `og-image.jpg` in `/public` (1200×630px)
- [ ] `robots.txt` e `sitemap.xml` aggiornati con URL reale
- [ ] JSON-LD compilato con dati reali
- [ ] Favicon inserito in `/public/logos/`
- [ ] Video `.webm` testimonials in `/public/videos/` (se usati)
- [ ] EmailJS template configurato e testato
- [ ] GA4 property creata e ID inserito
- [ ] Privacy Policy aggiornata con dati aziendali reali
- [ ] Colori brand e tema (chiaro/scuro) generati da `site-config.json` in `index.css` `:root`
- [ ] Font personalizzati importati (se diversi dai default)
- [ ] Test responsive su: 375px, 430px, 768px, 1024px, 1400px, 1920px
- [ ] Test altezze su: 667px (iPhone SE), 844px, 1080px
- [ ] `vercel.json` presente per routing SPA

---

## ONBOARDING — 10 DOMANDE DI CONFIGURAZIONE

> Eseguire il seguente script nel terminale subito dopo aver clonato il repository.
> Crea il file `site-config.json` che Claude (o lo sviluppatore) userà per generare il sito.

```bash
#!/bin/bash

echo ""
echo "============================================"
echo "  SITE TEMPLATE — Configurazione iniziale"
echo "============================================"
echo ""

read -p "1. Come si chiama il brand/azienda del cliente? " BRAND_NAME

read -p "2. In che nicchia/settore opera? (es. fotografia, fitness, avvocato, ristorante, ecommerce, SaaS...) " NICHE

read -p "3. Chi è il pubblico target? (es. PMI italiane, donne 25-40, professionisti B2B, giovani under 30) " TARGET

read -p "4. Qual è il tono di voce del brand? (es. professionale, amichevole, lusso, ironico, tecnico) " TONE

read -p "5. Quante pagine deve avere il sito? (es. 1 = landing page, 3 = home+servizi+contatti, 5+) " PAGES

read -p "6. Quali sezioni vuoi nella home? (lista separata da virgole, es. hero,problem,services,testimonial,cta) " SECTIONS

echo ""
echo "7. Tema del sito — scegli:"
echo "   [1] dark   — sfondo scuro, testo chiaro (premium, tech, luxury, studio)"
echo "   [2] light  — sfondo chiaro, testo scuro (minimal, corporate, clean)"
read -p "   Inserisci 1 o 2: " THEME_CHOICE
case $THEME_CHOICE in
  1) THEME="dark" ;;
  2) THEME="light" ;;
  *) THEME="dark" ; echo "   Scelta non valida, impostato: dark" ;;
esac

echo ""
echo "8. Colori brand del cliente:"
read -p "   Colore primario (hex obbligatorio, es. #FF3301): " COLOR_PRIMARY
read -p "   Colore secondario (hex opzionale, premi invio per saltare): " COLOR_SECONDARY
if [ -z "$COLOR_SECONDARY" ]; then
  COLOR_SECONDARY="auto"
  echo "   Colore secondario: verrà derivato automaticamente dal primario"
fi

read -p "9. Quali integrazioni sono richieste? (lista, es. emailjs, whatsapp, calendly, stripe, instagram-feed) " INTEGRATIONS

read -p "10. Qual è l'obiettivo principale del sito? (es. generare lead, vendere prodotto, mostrare portfolio, prenotazioni) " GOAL

echo ""
echo "============================================"
echo "  Riepilogo configurazione"
echo "============================================"
echo "Brand:        $BRAND_NAME"
echo "Nicchia:      $NICHE"
echo "Target:       $TARGET"
echo "Tono:         $TONE"
echo "Pagine:       $PAGES"
echo "Sezioni:      $SECTIONS"
echo "Tema:         $THEME"
echo "Colore 1:     $COLOR_PRIMARY"
echo "Colore 2:     $COLOR_SECONDARY"
echo "Integrazioni: $INTEGRATIONS"
echo "Obiettivo:    $GOAL"
echo ""

# Genera site-config.json
cat > site-config.json <<EOF
{
  "brand": "$BRAND_NAME",
  "niche": "$NICHE",
  "target": "$TARGET",
  "tone": "$TONE",
  "pages": "$PAGES",
  "sections": "$SECTIONS",
  "theme": "$THEME",
  "colorPrimary": "$COLOR_PRIMARY",
  "colorSecondary": "$COLOR_SECONDARY",
  "integrations": "$INTEGRATIONS",
  "goal": "$GOAL"
}
EOF

echo "✓ Configurazione salvata in site-config.json"
echo ""
echo "============================================"
echo "  Prossimo passo — scegli il tuo AI:"
echo ""
echo "  CLAUDE CODE (terminale):"
echo "  > Leggi site-config.json e SITE_TEMPLATE.md"
echo "    e genera il sito completo"
echo ""
echo "  GITHUB COPILOT (VSCode — Chat o Edits):"
echo "  > @workspace Leggi site-config.json e"
echo "    SITE_TEMPLATE.md e genera il sito completo"
echo ""
echo "  PROMPT UNIVERSALE (funziona con entrambi):"
echo "  > Sei uno sviluppatore React/Vite esperto."
echo "    Leggi i file site-config.json e SITE_TEMPLATE.md"
echo "    presenti nella root del progetto e usa le"
echo "    specifiche tecniche del template per costruire"
echo "    il sito completo personalizzato con i dati"
echo "    del cliente. Rispetta breakpoint, variabili CSS,"
echo "    struttura componenti e animazioni GSAP descritte."
echo "============================================"
echo ""
```

> **Come usare lo script:**
>
> **Mac / Linux (bash/zsh):**
> ```bash
> chmod +x setup.sh
> ./setup.sh
> ```
>
> **Windows — Git Bash** *(raccomandato, già incluso con Git for Windows)*:
> ```bash
> bash setup.sh
> ```
>
> **Windows — PowerShell** *(se non hai Git Bash)*:
> ```powershell
> bash setup.sh
> ```
> oppure, se bash non è disponibile, esegui direttamente:
> ```powershell
> sh setup.sh
> ```
>
> 4. Usa il prompt generato con **Claude Code** o **GitHub Copilot** (vedi output terminale)

---

*Template versione 1.0 — Basato su React 18 + Vite + GSAP*
