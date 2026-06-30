import React from "react";
import { Scissors, Instagram, Facebook, MessageSquare, ArrowUp } from "lucide-react";
import { BARBER_INFO } from "../data/barberData";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#05070a] border-t border-brand-line pt-16 pb-8 relative overflow-hidden" id="footer-section">
      <div className="absolute top-[-20%] left-[20%] w-[40%] h-[40%] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-brand-line">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <a href="#home" className="flex items-center space-x-2 group focus:outline-none">
              <div className="p-1.5 rounded-lg bg-brand-gold text-brand-bg border border-brand-line transition-transform group-hover:rotate-12 shadow-sm">
                <Scissors className="h-4 w-4" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white uppercase">
                EFE <span className="text-brand-gold">BARBERSHOP</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm font-sans text-brand-grey-muted leading-relaxed">
              Penyedia jasa pangkas rambut modern, profesional, dan ternyaman dengan harga bersahabat khusus untuk anak muda, mahasiswa, dan pelajar di Depok.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-3 pt-2">
              {[
                { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
                { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
                { name: "WhatsApp", icon: MessageSquare, href: `https://wa.me/${BARBER_INFO.whatsappNumber}` },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="p-2 rounded-lg bg-brand-card hover:bg-brand-gold text-brand-grey-muted hover:text-brand-bg border border-brand-line transition-all cursor-pointer"
                  aria-label={`Kunjungi ${soc.name} kami`}
                >
                  <soc.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider">Navigasi Cepat</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              {[
                { name: "Mengapa Kami", href: "#mengapa" },
                { name: "Fasilitas Premium", href: "#fasilitas" },
                { name: "Cari Gaya Rambut", href: "#cari-gaya" },
                { name: "Galeri Portfolio", href: "#portfolio" },
                { name: "Daftar Tarif", href: "#harga" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-brand-grey-muted hover:text-brand-gold transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-5 space-y-4 text-left">
            <h4 className="text-[10px] font-mono font-bold text-brand-gold uppercase tracking-wider">Informasi Kontak</h4>
            <div className="space-y-2 text-xs sm:text-sm font-mono text-brand-grey-muted">
              <p className="leading-relaxed">📍 {BARBER_INFO.address}</p>
              <p>📞 CS Booking: +{BARBER_INFO.whatsappNumber}</p>
              <p>🕒 Jam Buka: {BARBER_INFO.openingHours}</p>
            </div>
          </div>

        </div>

        {/* Bottom row: copyright & scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-brand-grey-muted">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} EFE BARBERSHOP. All rights reserved.</p>
            <p className="mt-1 text-white/10">Designed with modern luxury and elegant precision.</p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-brand-card hover:bg-brand-gold hover:text-brand-bg text-brand-grey-muted border border-brand-line transition-all cursor-pointer"
            id="footer-scroll-top-btn"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
