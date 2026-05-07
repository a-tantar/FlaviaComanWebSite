import { BrowserRouter, Route, Routes } from "react-router-dom";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Loader from "./components/Loader/Loader";
import Method from "./components/Method/Method";
import Problem from "./components/Problem/Problem";
import Vision from "./components/Vision/Vision";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const NAV_ITEMS = [
  { label: "Risultati", href: "#metodo" },
  { label: "Contattami", href: "#contatti" },
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
        <section id="contatti">
          <FinalCTA />
        </section>
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Loader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  );
}
