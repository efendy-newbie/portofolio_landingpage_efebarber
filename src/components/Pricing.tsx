import React from "react";
import { motion } from "motion/react";
import { Clock, Tag } from "lucide-react";
import { SERVICES } from "../data/barberData";

interface PricingProps {
  onSelectService: (serviceName: string) => void;
}

export default function Pricing({ onSelectService }: PricingProps) {
  return (
    <section id="harga" className="py-36 bg-brand-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[40%] left-[-15%] w-[45%] h-[45%] rounded-full bg-brand-gold-dark/2 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-gold-dark/10 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-brand-gold-dark uppercase mb-6">
            <span>LAYANAN & HARGA</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Tarif Transparan & <br />
            <span className="text-brand-gold italic">Kualitas Premium Terjamin</span>
          </h2>
          
          <p className="text-brand-grey-muted mt-6 text-sm leading-relaxed font-sans max-w-xl mx-auto">
            Semua harga tertera bersih dan transparan. Tidak ada biaya tambahan tersembunyi. Silakan pilih paket layanan pangkas terbaik untuk gaya barumu!
          </p>
        </div>

        {/* Traditional Menu List Layout (No cards, no boxes!) */}
        <div className="space-y-16">
          {SERVICES.map((serv, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={serv.id}
                className="group text-left space-y-4"
              >
                {/* Service Name and Price Row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-xl sm:text-2xl text-white font-medium group-hover:text-brand-gold-dark transition-colors">
                      {serv.name}
                    </h3>
                    
                    {/* Badge */}
                    {serv.isPopular && (
                      <span className="bg-brand-gold-dark/15 text-brand-gold-dark text-[9px] font-mono px-2.5 py-0.5 rounded-full uppercase tracking-widest font-bold">
                        FAVORIT
                      </span>
                    )}

                    {serv.originalPrice && (
                      <span className="bg-[#2d1212] text-red-400 text-[9px] font-mono px-2.5 py-0.5 rounded-full uppercase tracking-widest font-bold flex items-center gap-1">
                        <Tag className="h-2 w-2" />
                        PROMO
                      </span>
                    )}
                  </div>
                  
                  {/* Price Leader Dots (Hidden on mobile) */}
                  <div className="hidden sm:block flex-1 border-b border-dashed border-brand-line/10 mx-4" />

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 shrink-0">
                    {serv.originalPrice && (
                      <span className="text-xs font-mono text-brand-grey-muted line-through">
                        {serv.originalPrice}
                      </span>
                    )}
                    <span className="font-display text-xl sm:text-2xl font-bold text-white">
                      {serv.price}
                    </span>
                  </div>
                </div>

                {/* Service Details & Benefits list */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pt-2">
                  <div className="space-y-2 max-w-xl">
                    <p className="text-sm font-sans text-brand-grey-muted leading-relaxed">
                      {serv.description}
                    </p>
                    
                    {/* Benefits items row */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-brand-grey-muted font-sans">
                      {serv.benefits.map((b, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                          <span className="text-brand-gold-dark">✓</span>
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Specs */}
                  <div className="flex items-center gap-4 shrink-0 pt-2 md:pt-0">
                    <div className="flex items-center gap-1.5 text-[10px] text-brand-grey-muted font-mono tracking-wider">
                      <Clock className="h-3 w-3 text-brand-gold-dark" />
                      <span>{serv.duration} MIN</span>
                    </div>

                    <button
                      onClick={() => onSelectService(serv.name)}
                      className="px-5 py-2.5 bg-transparent hover:bg-brand-gold text-brand-gold-dark hover:text-brand-bg hover:border-brand-gold border border-brand-gold-dark/30 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
                    >
                      BOOK SEKARANG
                    </button>
                  </div>
                </div>

                {/* Bottom Separator Line */}
                <div className="h-[1px] bg-brand-line/10 pt-4" />
              </motion.div>
            );
          })}
        </div>

        {/* Note on Student promos (simplified non-boxy layout) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center text-xs text-brand-grey-muted font-sans max-w-xl mx-auto pt-8 border-t border-brand-line/10"
        >
          <p className="leading-relaxed">
            💡 <strong className="text-brand-gold font-bold">Syarat Promo Pelajar:</strong> Cukup tunjukkan kartu pelajar aktif atau KTM mahasiswa kamu saat melakukan pembayaran di tempat.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
