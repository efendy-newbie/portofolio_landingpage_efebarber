import React from "react";
import { motion } from "motion/react";

export default function FullscreenBanner() {
  return (
    <section className="relative h-[65vh] sm:h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Fullscreen Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/barber_fullscreen_banner_1782824844366.jpg"
          alt="Efe Barbershop Fullscreen Vibe"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft overlay using cream & dark brown accents to blend it beautifully */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 via-brand-bg/40 to-brand-bg/90" />
      </div>

      {/* Floating minimalistic quote or tagline over the photo */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="text-[10px] font-mono tracking-widest text-brand-gold-dark uppercase bg-brand-bg/85 px-4 py-2 rounded-full border border-brand-line">
            EFE LUXURY EXPERIENCE
          </span>
          <p className="font-display text-2xl sm:text-4xl lg:text-5xl text-white italic leading-snug pt-2">
            "Lebih dari sekadar memangkas rambut, kami membentuk rasa percaya diri Anda."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
