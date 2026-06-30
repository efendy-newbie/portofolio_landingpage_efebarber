import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import Benefits from "./components/Benefits";
import FullscreenBanner from "./components/FullscreenBanner";
import Features from "./components/Features";
import HairStyleFinder from "./components/HairStyleFinder";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import EventBanner from "./components/EventBanner";
import GoogleMapsMock from "./components/GoogleMapsMock";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import StickyCTA from "./components/StickyCTA";

export default function App() {
  const [selectedService, setSelectedService] = useState("");

  const handleOpenBooking = () => {
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-brand-bg text-brand-grey-text min-h-screen selection:bg-brand-gold-dark selection:text-brand-bg animate-fade-in" id="app-root">
      
      {/* Header & Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 1. HERO (Teks besar, Foto besar, Teks kecil) */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Intro Context Sections */}
      <ProblemSection />
      <Benefits />

      {/* 2. FOTO FULLSCREEN (Fullscreen atmospheric banner) */}
      <FullscreenBanner />

      {/* Features & Stylist Interactive Tools */}
      <Features />
      <HairStyleFinder />
      <Portfolio />

      {/* 3. QUOTE PELANGGAN (Borderless Editorial Testimonials) */}
      <Testimonials />

      {/* 4. PRICING (Dotted Luxury Price List Menu) */}
      <Pricing onSelectService={handleSelectService} />

      {/* Booking Form (Minimal, non-boxy) */}
      <ContactForm selectedService={selectedService} />

      {/* 5. FOTO EVENT LAGI (Bottom styling/team lifestyle photo) */}
      <EventBanner />

      {/* Location / Maps Info */}
      <GoogleMapsMock />

      {/* Detailed Footer */}
      <Footer />

      {/* Floating Utilities */}
      <FloatingWhatsApp />
      <StickyCTA onOpenBooking={handleOpenBooking} />

    </div>
  );
}
