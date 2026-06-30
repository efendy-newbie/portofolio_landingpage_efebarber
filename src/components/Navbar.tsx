import React, { useState, useEffect } from "react";
import { Menu, X, Scissors, Phone } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Mengapa", href: "#mengapa" },
    { name: "Fasilitas", href: "#fasilitas" },
    { name: "Cari Gaya", href: "#cari-gaya" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Harga", href: "#harga" },
    { name: "Lokasi", href: "#lokasi" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-brand-bg/85 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center space-x-2.5 group focus:outline-none"
            id="nav-logo"
          >
            <span className="font-display font-bold text-xl tracking-widest text-white group-hover:text-brand-gold-dark transition-colors uppercase">
              EFE <span className="text-brand-gold-dark italic font-normal">BARBER.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="relative font-display text-xs font-semibold tracking-widest text-brand-grey-muted hover:text-white transition-colors duration-300 uppercase py-1 group/link"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold-dark transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-2 bg-transparent hover:bg-brand-gold text-brand-gold hover:text-brand-bg px-6 py-2 rounded-full border border-brand-gold/30 hover:border-brand-gold transition-all duration-300 font-display font-bold text-[11px] tracking-widest uppercase cursor-pointer"
              id="nav-booking-btn"
            >
              <Phone className="h-3 w-3" />
              <span>BOOK NOW</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-grey-muted hover:text-white p-2 rounded-full focus:outline-none transition-colors"
              aria-expanded="false"
              id="mobile-menu-toggle"
            >
              <span className="sr-only">Buka Menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-72 bg-brand-bg border-l border-brand-line/50 shadow-2xl transform transition-transform duration-500 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-nav-panel"
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-brand-grey-muted hover:text-white p-2 rounded-full focus:outline-none"
            id="mobile-menu-close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-4 px-8 py-4 text-left">
          <div className="pb-8 border-b border-brand-line/30">
            <span className="font-display font-bold text-xl text-white uppercase tracking-wider">
              EFE <span className="text-brand-gold-dark italic font-normal">BARBER.</span>
            </span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="py-2.5 font-display font-semibold text-sm tracking-widest text-brand-grey-muted hover:text-white transition-all uppercase"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-8">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center space-x-2 bg-brand-gold text-brand-bg px-6 py-3.5 rounded-full font-display font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer"
              id="mobile-nav-booking-btn"
            >
              <Phone className="h-4 w-4" />
              <span>BOOK NOW</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-xs z-40 transition-opacity duration-500"
          id="mobile-nav-overlay"
        />
      )}
    </nav>
  );
}
