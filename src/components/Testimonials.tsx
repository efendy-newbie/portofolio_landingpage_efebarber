import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/barberData";

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-28 bg-brand-bg relative overflow-hidden">
      {/* Soft natural lighting accent */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] h-[35%] rounded-full bg-brand-gold-dark/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-card border border-brand-line px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider text-brand-gold uppercase mb-4">
            <span>SUARA PELANGGAN</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mt-3 tracking-tight">
            Apa Kata Mereka Tentang <br />
            <span className="text-brand-gold italic">Efe Barbershop?</span>
          </h2>
        </div>

        {/* Quotes Layout (Borderless and pure luxury typography) */}
        <div className="space-y-24 max-w-4xl mx-auto">
          {TESTIMONIALS.map((test, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                key={test.id}
                className="relative flex flex-col items-center justify-center space-y-6 text-center group"
              >
                {/* Large elegant quote mark */}
                <div className="text-brand-gold-dark/15 select-none transition-transform duration-300 group-hover:scale-105">
                  <Quote className="h-10 w-10 rotate-180" />
                </div>

                {/* Big Italic Quote */}
                <p className="font-display text-xl sm:text-2xl lg:text-3xl text-brand-cream italic leading-relaxed max-w-3xl">
                  "{test.text}"
                </p>

                {/* Star rating & style transformation summary */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-1 justify-center">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-brand-gold text-brand-gold-dark" />
                    ))}
                  </div>
                  
                  {/* Transformation Tagline */}
                  <div className="text-[10px] font-mono tracking-wider uppercase text-brand-grey-muted">
                    Style: <span className="text-red-400 line-through">{test.beforeStyle}</span>
                    <span className="text-brand-gold-dark mx-2">➔</span>
                    <span className="text-brand-gold font-bold">{test.afterStyle}</span>
                  </div>
                </div>

                {/* User Info & Avatar */}
                <div className="flex items-center space-x-3.5 pt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-line shrink-0 shadow-lg">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-display font-bold text-white tracking-wide">
                      {test.name}, {test.age}
                    </h4>
                    <p className="text-xs text-brand-grey-muted font-mono">{test.occupation}</p>
                  </div>
                </div>

                {/* Elegant Minimal Divider Line between quotes */}
                {index < TESTIMONIALS.length - 1 && (
                  <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-brand-line to-transparent pt-12" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Verification banner */}
        <div
          className="mt-20 text-center text-[10px] font-mono font-semibold text-brand-grey-muted flex items-center justify-center gap-2 bg-brand-card border border-brand-line px-5 py-2.5 rounded-full max-w-sm mx-auto"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
          <span>ULASAN TERVERIFIKASI GOOGLE MAPS</span>
        </div>

      </div>
    </section>
  );
}
