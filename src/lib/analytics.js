const GA_KEY = import.meta.env.VITE_GA_MEASUREMENT_ID;

function loadGtag() {
  if (!GA_KEY || document.querySelector("#ga-script")) return;
  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_KEY}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  } // eslint-disable-line prefer-rest-params
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_KEY, { anonymize_ip: true });
}

export function enableAnalytics() {
  if (!GA_KEY) return;
  window[`ga-disable-${GA_KEY}`] = false;
  loadGtag();
}

export function disableAnalytics() {
  if (!GA_KEY) return;
  window[`ga-disable-${GA_KEY}`] = true;
}
