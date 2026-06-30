import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Scissors, Sparkles, Check, Flame } from "lucide-react";
import { HAIRSTYLES, BARBER_INFO } from "../data/barberData";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HAIRSTYLES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HAIRSTYLES.length) % HAIRSTYLES.length);
  };

  const handleWhatsAppStyle = (styleName: string) => {
    const text = encodeURIComponent(
      `Halo Efe Barbershop! Saya lihat model rambut "${styleName}" di galeri portfolio website Anda. Saya ingin potong dengan model tersebut, apakah bisa pesan slot untuk minggu ini? Terima kasih.`
    );
    window.open(`https://wa.me/${BARBER_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  const currentStyle = HAIRSTYLES[activeIndex];

  return (
    <section id="portfolio" className="py-36 bg-brand-bg relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] h-[35%] rounded-full bg-brand-gold-dark/2 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-brand-gold-dark/2 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-gold-dark/10 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-brand-gold-dark uppercase mb-6">
            <span>Portfolio Kami</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mt-3 tracking-tight leading-none">
            Galeri Karya Pangkasan Kami <br />
            <span className="text-brand-gold italic">Tinggal Tunjuk Model Idamanmu!</span>
          </h2>
          
          <p className="text-brand-grey-muted mt-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Inilah beberapa mahakarya pangkasan asli dari barberman Efe Barbershop. Tinggal pilih dan tunjukkan model ini saat kamu datang!
          </p>
        </div>

        {/* Carousel Container (Borderless & Clean) */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          <div className="relative overflow-hidden p-2 sm:p-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Image Slide Column */}
              <div className="lg:col-span-5 relative">
                {/* Soft glow behind image */}
                <div className="absolute inset-4 bg-brand-gold-dark/5 rounded-3xl blur-2xl -z-10" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="relative aspect-square rounded-3xl overflow-hidden group bg-brand-bg shadow-2xl"
                  >
                    <img
                      src={currentStyle.image}
                      alt={currentStyle.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Text Description Column */}
              <div className="lg:col-span-7 space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 text-left"
                  >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {currentStyle.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-brand-gold-dark/10 text-[10px] text-brand-gold-dark font-mono uppercase tracking-widest font-bold">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Style Name */}
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      {currentStyle.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm font-sans text-brand-grey-muted leading-relaxed">
                      {currentStyle.description}
                    </p>

                    {/* Detailed Specifications */}
                    <div className="pt-6 border-t border-brand-line/20 grid grid-cols-2 gap-6 text-[10px] font-mono font-bold uppercase tracking-widest">
                      <div>
                        <span className="block text-brand-grey-muted">Sifat Gaya:</span>
                        <span className="block text-white mt-2 text-xs">{currentStyle.difficulty}</span>
                      </div>
                      <div>
                        <span className="block text-brand-grey-muted">Ideal Wajah:</span>
                        <span className="block text-brand-gold-dark mt-2 text-xs">
                          {currentStyle.faceShape === "oval" ? "Semua Wajah" : currentStyle.faceShape}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Booking for this Style */}
                <div className="pt-4 text-left">
                  <button
                    onClick={() => handleWhatsAppStyle(currentStyle.name)}
                    className="inline-flex items-center space-x-2 bg-brand-gold hover:bg-brand-gold-light text-brand-bg px-8 py-3.5 rounded-full font-display font-bold text-xs tracking-widest uppercase shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <Scissors className="h-4 w-4" />
                    <span>PILIH GAYA RAMBUT INI</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-[-15px] sm:left-[-30px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-transparent hover:bg-brand-gold text-brand-gold hover:text-brand-bg flex items-center justify-center border border-brand-gold/30 hover:border-brand-gold transition-all duration-300 z-20 cursor-pointer"
            id="portfolio-prev-btn"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[-15px] sm:right-[-30px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-transparent hover:bg-brand-gold text-brand-gold hover:text-brand-bg flex items-center justify-center border border-brand-gold/30 hover:border-brand-gold transition-all duration-300 z-20 cursor-pointer"
            id="portfolio-next-btn"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Tesla-like progress indicators for dots */}
          <div className="flex justify-center space-x-2.5 mt-10">
            {HAIRSTYLES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "bg-brand-gold w-8" : "bg-brand-gold-dark/20 w-2.5"
                }`}
                aria-label={`Slide ke-${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
