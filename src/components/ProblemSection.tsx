import React from "react";
import { motion } from "motion/react";
import { Frown, Sparkles } from "lucide-react";
import { PROBLEMS } from "../data/barberData";

export default function ProblemSection() {
  return (
    <section id="mengapa" className="py-36 relative overflow-hidden bg-brand-bg">
      {/* Decorative Background Accent */}
      <div className="absolute top-1/2 left-0 w-[40%] h-[40%] rounded-full bg-brand-gold-dark/3 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center space-x-2 bg-brand-gold-dark/10 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-brand-gold-dark uppercase mb-6">
            <span>Dilema Cukur Rambut</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Capek Nyari Barbershop Bagus <br />
            <span className="text-brand-gold italic">yang Nggak Bikin Kantong Bolong?</span>
          </h2>
          
          <p className="text-brand-grey-muted mt-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Banyak barbershop menawarkan hasil keren tapi harga selangit, atau sebaliknya, harga murah tapi hasilnya asal-asalan. Kami hadir untuk menghentikan dilema ini.
          </p>
        </div>

        {/* Problem vs Solution Split - Pure borderless asymmetric layout */}
        <div className="space-y-24 max-w-4xl mx-auto">
          {PROBLEMS.map((prob, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              key={prob.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left Column: Realita Lapangan */}
              <div className="md:col-span-5 space-y-3 text-left">
                <div className="flex items-center space-x-2 text-red-400/80 font-mono text-[10px] font-bold tracking-widest uppercase">
                  <Frown className="h-3.5 w-3.5 shrink-0" />
                  <span>Realita Lapangan</span>
                </div>
                <p className="font-display text-xl text-brand-grey-text/90 leading-relaxed italic">
                  "{prob.painPoint}"
                </p>
              </div>

              {/* Middle spacer line for layout rhythm */}
              <div className="hidden md:block md:col-span-1 self-stretch flex justify-center items-center">
                <div className="w-[1px] h-12 bg-brand-gold-dark/20" />
              </div>

              {/* Right Column: Efe Solution */}
              <div className="md:col-span-6 space-y-3 text-left">
                <div className="flex items-center space-x-2 text-brand-gold font-mono text-[10px] font-bold tracking-widest uppercase">
                  <Sparkles className="h-3.5 w-3.5 text-brand-gold shrink-0 animate-pulse" />
                  <span>Standar Baru Efe</span>
                </div>
                <p className="font-sans text-sm sm:text-base font-normal text-brand-grey-muted leading-relaxed">
                  {prob.efeSolution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pure typographic Call-out Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 text-center max-w-2xl mx-auto pt-12 border-t border-brand-line/30 space-y-4"
        >
          <p className="text-sm sm:text-base font-sans font-medium text-brand-grey-text/90 leading-relaxed italic">
            "Kami percaya penampilan terbaik adalah hak semua cowok, tanpa harus mengorbankan uang makan atau kuota bulanan. Di Efe, kamu dapetin keduanya: cukuran kelas atas, dan dompet tetap lega!"
          </p>
          <p className="text-[10px] text-brand-gold uppercase tracking-widest font-bold font-mono">
            — MANAJEMEN EFE BARBERSHOP
          </p>
        </motion.div>

      </div>
    </section>
  );
}
