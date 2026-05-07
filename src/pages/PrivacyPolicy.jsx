import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

const SECTIONS = [
  {
    title: "1. Titolare del trattamento",
    content: `Flavia Coman — flavia@flaviacoman.com. Per qualsiasi richiesta relativa al trattamento dei dati personali è possibile contattare il titolare all'indirizzo email sopra indicato.`,
  },
  {
    title: "2. Dati raccolti",
    content: `Il sito raccoglie dati di navigazione anonimi tramite Google Analytics 4 (se il consenso è stato accordato): pagine visitate, durata della sessione, provenienza geografica approssimativa (nessun dato personale identificativo). Non vengono raccolti dati tramite form di contatto sul sito.`,
  },
  {
    title: "3. Finalità del trattamento",
    content: `I dati di navigazione vengono trattati esclusivamente per finalità statistiche aggregate, al fine di migliorare l'esperienza del sito. Non vengono usati per profilazione, marketing diretto o cessione a terzi.`,
  },
  {
    title: "4. Base giuridica",
    content: `Il trattamento avviene sulla base del consenso esplicito dell'utente (Art. 6, par. 1, lett. a del GDPR), espresso tramite il banner cookie. L'utente può revocare il consenso in qualsiasi momento.`,
  },
  {
    title: "5. Conservazione dei dati",
    content: `I dati analitici sono conservati per un massimo di 14 mesi, dopodiché vengono eliminati automaticamente da Google Analytics.`,
  },
  {
    title: "6. Terze parti",
    content: `Il sito integra: Google Analytics 4 (Google LLC, USA) — analytics anonimi, soggetti alle politiche di Google. Calendly (Calendly LLC) — prenotazione consulenze, soggetto alle politiche di Calendly. WhatsApp (Meta Platforms) — comunicazione diretta, soggetto alle politiche di Meta. Nessun dato personale viene trasmesso a queste piattaforme tramite il sito, salvo interazione diretta dell'utente.`,
  },
  {
    title: "7. Diritti dell'interessato",
    content: `Ai sensi del GDPR (artt. 15-22) hai il diritto di: accedere ai tuoi dati; richiederne la rettifica o la cancellazione; limitare o opporti al trattamento; richiedere la portabilità dei dati. Per esercitare questi diritti, scrivi a flavia@flaviacoman.com.`,
  },
  {
    title: "8. Cookie",
    content: `Il sito utilizza un cookie tecnico per memorizzare la tua preferenza sul consenso (localStorage). Se il consenso è accordato, vengono impostati i cookie analitici di Google Analytics. Puoi gestire o eliminare i cookie dalle impostazioni del browser.`,
  },
  {
    title: "9. Modifiche",
    content: `Questa informativa può essere aggiornata. La data dell'ultima modifica è indicata in calce. Continua a verificare periodicamente questa pagina.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="privacy">
      <div className="privacy__inner">
        <Link to="/" className="privacy__back">
          ← Torna al sito
        </Link>

        <div className="privacy__header">
          <span className="privacy__label">Informativa legale</span>
          <h1 className="privacy__title">Privacy Policy</h1>
          <p className="privacy__meta">
            Ultimo aggiornamento: Maggio 2026 · Redatta ai sensi del Reg. (UE)
            2016/679 (GDPR)
          </p>
        </div>

        <div className="privacy__sections">
          {SECTIONS.map(({ title, content }) => (
            <div key={title} className="privacy__section">
              <h2 className="privacy__section-title">{title}</h2>
              <p className="privacy__section-content">{content}</p>
            </div>
          ))}
        </div>

        <div className="privacy__footer">
          <p>
            Per qualsiasi domanda:{" "}
            <a href="mailto:flavia@flaviacoman.com">flavia@flaviacoman.com</a>
          </p>
          <Link to="/" className="privacy__back">
            ← Torna al sito
          </Link>
        </div>
      </div>
    </div>
  );
}
