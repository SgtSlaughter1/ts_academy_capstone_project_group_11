import React from "react";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import PlanetGallery from "./components/PlanetGallery";
import FactsSection from "./components/FactsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <main className="app-container">
      <Hero />
      <VideoSection />
      <PlanetGallery />
      <FactsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}

export default App;
