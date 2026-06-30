import React from "react";
import { motion } from "motion/react";
import { Scissors, CheckCircle, Calendar, MessageSquare, Flame } from "lucide-react";
import { BARBER_INFO } from "../data/barberData";
import barberHeroImg from "../assets/images/barber_hero_1782822606740.jpg";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  // Direct Link to WhatsApp with greeting message
  const handleDirectWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo Efe Barbershop! Saya tertarik untuk melakukan pangkas rambut. Bisa info slot kosong hari ini? Terima kasih!`
    );
    window.open(`https://wa.me/${BARBER_INFO.whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-brand-bg vintage-grid-pattern">
      {/* Background Decorative Gradients & Accents */}
      <div className="absolute top-[-5%] right-[-5%] w-[45%] h-[45%] rounded-full bg-brand-gold/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] rounded-full bg-brand-gold/5 blur-[110px] pointer-events-none" />

      {/* Elegant Horizontal & Vertical Lines */}
      <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-line to-transparent" />
      <div className="absolute top-0 bottom-0 left-12 w-px bg-brand-line/5 hidden xl:block" />
      <div className="absolute top-0 bottom-0 right-12 w-px bg-brand-line/5 hidden xl:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* 1. TEKS BESAR (Big Heading) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-gold-dark/10 text-brand-gold-dark px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase font-mono">
            <span>EFE BARBERSHOP CO.</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1]">
            Cukuran Presisi, <br />
            <span className="text-brand-gold italic">Gaya Maksimal.</span>
          </h1>
        </motion.div>

        {/* 2. FOTO BESAR (Big Photo) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto mb-12"
          id="hero-image-container"
        >
          <div className="absolute inset-4 bg-brand-gold-dark/5 rounded-3xl blur-3xl -z-10 animate-pulse" />
          
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-[#1a110a] group shadow-2xl">
            <img
              src={barberHeroImg}
              alt="Efe Barbershop Interior"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-101 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/95 via-transparent to-black/10 pointer-events-none" />
            
            {/* Soft, minimal floating info badge */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4 items-center justify-between z-10">
              <div className="text-left">
                <p className="text-[10px] text-brand-gold uppercase tracking-widest font-bold font-mono">LOKASI STRATEGIS</p>
                <p className="text-xs sm:text-sm font-semibold text-white">Margonda, Depok (Dekat Kampus UI)</p>
              </div>
              <div className="flex items-center space-x-1.5 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-xs text-brand-gold font-bold font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <span>BUKA SETIAP HARI</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. TEKS KECIL (Small Supporting Text & CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto space-y-10"
          id="hero-content"
        >
          <p className="text-sm sm:text-base lg:text-lg font-sans text-brand-grey-muted leading-relaxed">
            Penyedia jasa pangkas rambut modern, profesional, dan ternyaman khusus untuk anak muda, mahasiswa, dan pekerja di Depok yang mendambakan tampilan fresh dengan presisi tinggi. Nikmati pelayanan eksklusif dengan harga terjangkau.
          </p>

          {/* Minimal non-boxy USP badges */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-brand-grey-text font-mono font-medium">
            {BARBER_INFO.usp.map((point, index) => (
              <span key={index} className="flex items-center gap-2">
                <span className="text-brand-gold-dark">✦</span>
                {point}
              </span>
            ))}
          </div>

          {/* Luxury CTA Actions */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenBooking}
              className="flex-1 inline-flex items-center justify-center space-x-2 bg-brand-gold hover:bg-brand-gold-light text-brand-bg px-8 py-3.5 rounded-full font-display font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              id="hero-primary-cta"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Cukur Sekarang</span>
            </button>

            <button
              onClick={handleDirectWhatsApp}
              className="flex-1 inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 px-8 py-3.5 rounded-full font-display font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer"
              id="hero-secondary-cta"
            >
              <MessageSquare className="h-4 w-4 text-brand-gold-dark" />
              <span>Konsultasi via WA</span>
            </button>
          </div>

          {/* Trust Stats - Horizontal and subtle */}
          <div className="pt-8 border-t border-brand-line/50 flex flex-wrap justify-center gap-12 text-brand-grey-muted">
            <div className="text-center">
              <span className="block text-2xl font-display font-bold text-white">4.9/5 ★</span>
              <span className="text-[10px] uppercase tracking-wider font-mono">1,500+ Google Reviews</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-display font-bold text-brand-gold-dark">AC Premium</span>
              <span className="text-[10px] uppercase tracking-wider font-mono">Ruangan Dingin & Nyaman</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-display font-bold text-white">Rp 35k</span>
              <span className="text-[10px] uppercase tracking-wider font-mono">Harga Pelajar Aktif</span>
            </div>
          </div>

        </motion.div>
        
      </div>
    </section>
  );
}
