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