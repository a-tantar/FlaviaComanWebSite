import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutStory from "./components/AboutStory/AboutStory";
import ConsultationCard from "./components/ConsultationCard/ConsultationCard";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Method from "./components/Method/Method";
import Problem from "./components/Problem/Problem";
import ResultsTestimonial from "./components/ResultsTestimonial/ResultsTestimonial";
import Skills from "./components/Skills/Skills";
import Vision from "./components/Vision/Vision";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const NAV_ITEMS = [
  { label: "Il Metodo", href: "#metodo" },
  { label: "Chi sono", href: "#chisono" },
  { label: "Competenze", href: "#competenze" },
  { label: "Risultati", href: "#risultati" },
  { label: "Consulenza", href: "#consulenza" },
];

function HomePage() {
  return (
    <>
      <Header navItems={NAV_ITEMS} />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="problema">
          <Problem />
        </section>
        <section id="metodo">
          <Method />
        </section>
        <section id="visione">
          <Vision />
        </section>
        <section id="chisono">
          <AboutStory />
        </section>
        <section id="competenze">
          <Skills />
        </section>
        <section id="risultati">
          <ResultsTestimonial />
        </section>
        <section id="consulenza">
          <ConsultationCard />
        </section>
        <FinalCTA />
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  );
}
