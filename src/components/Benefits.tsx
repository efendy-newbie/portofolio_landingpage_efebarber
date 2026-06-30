import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, Heart, Sparkles, Scissors, Coins } from "lucide-react";
import { BARBER_INFO } from "../data/barberData";

// Icon mapping helper
const iconMap: Record<string, React.ComponentType<any>> = {
  Award: Award,
  ShieldCheck: ShieldCheck,
  Heart: Heart,
  Coins: Coins,
  Sparkles: Sparkles,
};

const BENEFITS = [
  {
    id: "b1",
    title: "Garansi Ganteng Maksimal",
    description: "Jika potongan rambut kurang pas dengan bentuk kepalamu, silakan kembali dalam waktu 3 hari. Kami perbaiki GRATIS sampai kamu puas!",
    iconName: "Award",
  },
  {
    id: "b2",
    title: "Alat Cukur Higienis 100%",
    description: "Semua gunting, clipper, sisir, dan handuk disterilisasi menggunakan mesin ultraviolet (UV) & alkohol medis sebelum menyentuh kulitmu.",
    iconName: "ShieldCheck",
  },
  {
    id: "b3",
    title: "Harga Pelajar Bersahabat",
    description: "Buktikan sendiri! Hanya dengan Rp 35.000 (diskon khusus KTM), kamu sudah bisa menikmati keramas premium dan pijat kepala rileks.",
    iconName: "Coins",
  },
  {
    id: "b4",
    title: "Free Konsultasi Gaya Rambut",
    description: "Bingung potongan yang cocok untuk tipe rambutmu? Barberman spesialis kami siap berdiskusi menyarankan gaya rambut terbaik sebelum dicukur.",
    iconName: "Sparkles",
  },
];

export default function Benefits() {
  return (
    <section className="py-36 bg-brand-bg relative overflow-hidden" id="benefits-section">
      {/* Decorative top divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-line/10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center space-x-2 bg-brand-gold-dark/10 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-brand-gold-dark uppercase mb-6">
            <span>Garansi Layanan</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mt-3 tracking-tight">
            Kenapa Harus Efe Barbershop? <br />
            <span className="text-brand-gold italic">4 Garansi Kepuasan Maksimal!</span>
          </h2>
          
          <p className="text-brand-grey-muted mt-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Kami berkomitmen memberikan kenyamanan dan kualitas pangkas premium yang tidak bisa kamu temukan di pangkas rambut biasa di Depok.
          </p>
        </div>

        {/* Benefits Grid - Completely borderless, cardless, pure typographical structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          {BENEFITS.map((benefit, index) => {
            const IconComponent = iconMap[benefit.iconName] || Scissors;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={benefit.id}
                className="space-y-4 group"
              >
                {/* Minimalist icon without borders */}
                <div className="text-brand-gold-dark transition-colors duration-300">
                  <IconComponent className="h-7 w-7" />
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-wide group-hover:text-brand-gold-dark transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-grey-muted font-sans leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
