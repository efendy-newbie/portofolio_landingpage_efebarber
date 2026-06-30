import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scissors, HelpCircle, RefreshCw, Calendar, Sparkles } from "lucide-react";
import { HAIRSTYLES, BARBER_INFO } from "../data/barberData";
import { Hairstyle } from "../types";

export default function HairStyleFinder() {
  const [hairType, setHairType] = useState<string>("");
  const [faceShape, setFaceShape] = useState<string>("");
  const [vibe, setVibe] = useState<string>("");
  const [result, setResult] = useState<Hairstyle | null>(null);
  const [step, setStep] = useState<number>(1);

  const handleReset = () => {
    setHairType("");
    setFaceShape("");
    setVibe("");
    setResult(null);
    setStep(1);
  };

  const handleFindStyle = () => {
    // Basic recommendation logic based on characteristics
    let recommended: Hairstyle = HAIRSTYLES[0]; // Fallback to Comma Hair

    if (vibe === "edgy" || hairType === "curly") {
      recommended = HAIRSTYLES[1]; // Textured Crop
    } else if (vibe === "professional" || faceShape === "square") {
      recommended = HAIRSTYLES[2]; // Pompadour
    } else if (hairType === "wavy" || vibe === "casual" || faceShape === "oval") {
      recommended = HAIRSTYLES[0]; // Comma Hair
    }

    setResult(recommended);
    setStep(4);
  };

  const handleWhatsAppBooking = (styleName: string) => {
    const text = encodeURIComponent(
      `Halo Efe Barbershop! Saya baru saja menggunakan Hair Style Finder di website dan mendapat rekomendasi "${styleName}". Saya ingin book slot pangkas untuk gaya rambut tersebut. Bagaimana jadwal yang tersedia?`
    );
    window.open(`https://wa.me/${BARBER_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="cari-gaya" className="py-36 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full bg-brand-gold-dark/2 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-gold-dark/10 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-brand-gold-dark uppercase mb-6">
            <span>Rekomendasi Gaya Rambut</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Bingung Gaya Rambut Apa <br />
            <span className="text-brand-gold italic">yang Cocok Buat Wajahmu?</span>
          </h2>
          
          <p className="text-brand-grey-muted mt-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Biar nggak asal tebak, ikuti kuis interaktif 3 langkah super cepat ini untuk nemuin gaya rambut terbaik berdasarkan jenis rambut dan bentuk wajahmu!
          </p>
        </div>

        {/* Finder Widget Container (Premium Minimalist style - Borderless and clean) */}
        <div className="max-w-2xl mx-auto p-4 sm:p-6 relative">
          
          {/* Tesla-like Fluid Progress Indicators */}
          <div className="flex items-center justify-center space-x-3 mb-16 max-w-xs mx-auto">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  step === num ? "w-10 bg-brand-gold" : "w-3 bg-brand-gold-dark/20"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: HAIR TYPE */}
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h3 className="text-xl font-display font-bold text-white tracking-wide">Langkah 1: Apa jenis rambut kamu?</h3>
                  <p className="text-[10px] text-brand-gold-dark font-mono uppercase tracking-widest mt-2">PILIH SALAH SATU</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                  {[
                    { id: "straight", label: "Lurus", desc: "Jatuh lurus, halus, gampang diatur" },
                    { id: "wavy", label: "Bergelombang", desc: "Ada volume alami, bergelombang halus" },
                    { id: "curly", label: "Ikal / Keriting", desc: "Mengembang padat, penuh tekstur" }
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setHairType(option.id);
                        setStep(2);
                      }}
                      className={`p-6 rounded-3xl text-center transition-all duration-300 cursor-pointer ${
                        hairType === option.id
                          ? "bg-brand-gold-dark/15 border border-brand-gold/40 text-white shadow-xl"
                          : "bg-[#130d09] hover:bg-[#1a120d] text-brand-grey-muted border border-transparent hover:border-brand-gold-dark/10 hover:text-white"
                      }`}
                    >
                      <span className="block font-display font-bold text-base mb-2">{option.label}</span>
                      <span className="block text-[11px] leading-relaxed opacity-85 font-sans">{option.desc}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: FACE SHAPE */}
            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h3 className="text-xl font-display font-bold text-white tracking-wide">Langkah 2: Apa bentuk wajah kamu?</h3>
                  <p className="text-[10px] text-brand-gold-dark font-mono uppercase tracking-widest mt-2">PILIH YANG PALING MENDEKATI</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                  {[
                    { id: "oval", label: "Oval / Lonjong", desc: "Dahi sedikit lebar, dagu agak bulat" },
                    { id: "round", label: "Bulat", desc: "Lebar & panjang wajah hampir sama" },
                    { id: "square", label: "Kotak / Persegi", desc: "Rahang tegas, sudut wajah kuat" }
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setFaceShape(option.id);
                        setStep(3);
                      }}
                      className={`p-6 rounded-3xl text-center transition-all duration-300 cursor-pointer ${
                        faceShape === option.id
                          ? "bg-brand-gold-dark/15 border border-brand-gold/40 text-white shadow-xl"
                          : "bg-[#130d09] hover:bg-[#1a120d] text-brand-grey-muted border border-transparent hover:border-brand-gold-dark/10 hover:text-white"
                      }`}
                    >
                      <span className="block font-display font-bold text-base mb-2">{option.label}</span>
                      <span className="block text-[11px] leading-relaxed opacity-85 font-sans">{option.desc}</span>
                    </button>
                  ))}
                </div>

                <div className="flex justify-start pt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="text-[10px] text-brand-grey-muted hover:text-brand-gold transition-colors font-mono tracking-widest"
                  >
                    ← KEMBALI
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: VIBE / KARAKTER */}
            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h3 className="text-xl font-display font-bold text-white tracking-wide">Langkah 3: Karakter / Vibe apa yang ingin ditampilkan?</h3>
                  <p className="text-[10px] text-brand-gold-dark font-mono uppercase tracking-widest mt-2">SESUAIKAN KEPRIBADIANMU</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                  {[
                    { id: "casual", label: "Korea / Santai", desc: "Keren, modis, kalem ala idol K-Pop" },
                    { id: "professional", label: "Rapi & Formal", desc: "Gagah, rapi, dipercaya mertua & bos" },
                    { id: "edgy", label: "Berani & Kasual", desc: "Aktif, trendi, menonjol di keramaian" }
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setVibe(option.id);
                      }}
                      className={`p-6 rounded-3xl text-center transition-all duration-300 cursor-pointer ${
                        vibe === option.id
                          ? "bg-brand-gold-dark/15 border border-brand-gold/40 text-white shadow-xl"
                          : "bg-[#130d09] hover:bg-[#1a120d] text-brand-grey-muted border border-transparent hover:border-brand-gold-dark/10 hover:text-white"
                      }`}
                    >
                      <span className="block font-display font-bold text-base mb-2">{option.label}</span>
                      <span className="block text-[11px] leading-relaxed opacity-85 font-sans">{option.desc}</span>
                    </button>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-between items-center pt-6">
                  <button
                    onClick={() => setStep(2)}
                    className="text-[10px] text-brand-grey-muted hover:text-brand-gold transition-colors font-mono tracking-widest order-2 sm:order-1"
                  >
                    ← KEMBALI
                  </button>
                  
                  <button
                    onClick={handleFindStyle}
                    disabled={!vibe}
                    className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-brand-gold text-brand-bg px-8 py-3.5 rounded-full font-display font-bold text-xs tracking-widest uppercase transition-all duration-300 order-1 sm:order-2 ${
                      vibe ? "opacity-100 hover:bg-brand-gold-light cursor-pointer" : "opacity-55 cursor-not-allowed"
                    }`}
                  >
                    <Scissors className="h-3.5 w-3.5" />
                    <span>Dapatkan Rekomendasi</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: RECOMMENDATION RESULT */}
            {step === 4 && result && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="space-y-8 text-center sm:text-left"
              >
                <div className="flex flex-col sm:flex-row gap-8 items-center">
                  
                  {/* Result Image */}
                  <div className="w-48 h-48 rounded-3xl overflow-hidden shrink-0 shadow-2xl relative">
                    <img
                      src={result.image}
                      alt={result.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-gold-dark/5" />
                  </div>

                  {/* Result Info */}
                  <div className="space-y-4 flex-1">
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      <span className="px-3 py-1 rounded-full bg-brand-gold-dark/10 text-brand-gold-dark text-[10px] font-mono font-bold uppercase tracking-widest">
                        Kecocokan 98%
                      </span>
                      <span className="px-3 py-1 rounded-full bg-brand-gold-dark/10 text-brand-gold-dark text-[10px] font-mono font-bold uppercase tracking-widest">
                        Perawatan: {result.difficulty}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      {result.name}
                    </h3>
                    
                    <p className="text-sm font-sans text-brand-grey-muted leading-relaxed">
                      {result.description}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start pt-1">
                      {result.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] text-brand-gold-dark font-mono uppercase tracking-wider bg-brand-gold-dark/5 px-3 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Call To Actions */}
                <div className="pt-8 border-t border-brand-line/30 flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center space-x-2 text-brand-grey-muted hover:text-white transition-colors font-bold font-mono text-[10px] tracking-widest cursor-pointer uppercase"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    <span>COBA KUIS LAGI</span>
                  </button>

                  <button
                    onClick={() => handleWhatsAppBooking(result.name)}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-brand-gold hover:bg-brand-gold-light text-brand-bg px-8 py-3.5 rounded-full font-display font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer"
                    id="finder-booking-btn"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Booking Gaya Rambut Ini</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
