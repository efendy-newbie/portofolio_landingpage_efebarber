import React from "react";
import { motion } from "motion/react";
import { Sparkles, Flame, RefreshCw, Scissors, Sparkle } from "lucide-react";

export default function Features() {
  const steps = [
    {
      number: "01",
      roman: "I",
      tagline: "THE DIALOGUE",
      title: "Visi Sebelum Eksekusi",
      subtitle: "Analisis Bentuk Wajah & Rambut secara Personal",
      description: "Sebelum sebilah gunting menyentuh sehelai rambut pun, kami berdialog. Barber kami akan menganalisis geometri wajah, arah pusaran tumbuh rambut, serta tekstur alami kulit kepala Anda. Di sini, potongan rambut Anda dirancang secara khusus, bukan sekadar dipangkas.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
      alignLeft: true,
      badge: "KONSULTASI GRATIS"
    },
    {
      number: "02",
      roman: "II",
      tagline: "THE PURIFICATION",
      title: "Rileksasi Tanpa Batas",
      subtitle: "Premium Hair Wash & Scalp Massage Terapeutik",
      description: "Lepaskan semua kepenatan hari ini di bak bilas premium kami. Aliran air bersuhu presisi berpadu dengan pijatan kepala terapeutik yang melancarkan sirkulasi darah. Setiap sisa potongan terkecil dibersihkan sempurna, meninggalkan kesegaran yang mutlak.",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
      alignLeft: false,
      badge: "SENSORY RELIEF"
    },
    {
      number: "03",
      roman: "III",
      tagline: "THE RECOVERY",
      title: "Kesegaran yang Membangkitkan",
      subtitle: "Cold Towel & Premium Hair Tonic Treatment",
      description: "Grooming modern adalah tentang pemulihan energi. Kompres handuk dingin steril yang menyegarkan dahi serta mengecilkan pori-pori kulit wajah Anda seketika. Dilanjutkan dengan pijat tonik rambut premium untuk nutrisi folikel mendalam dan aroma maskulin ikonik.",
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200&auto=format&fit=crop",
      alignLeft: true,
      badge: "DEEP HYDRATION"
    },
    {
      number: "04",
      roman: "IV",
      tagline: "THE PRECISION",
      title: "Sentuhan Akhir Berkarakter",
      subtitle: "Professional Sculpting dengan Pomade & Clay Terbaik",
      description: "Langkah penutup yang menegaskan identitas Anda. Menggunakan paduan pomade, clay, atau hair powder premium yang disesuaikan dengan kebutuhan rambut Anda. Gaya Anda kini terkunci sempurna, siap melangkah keluar dengan penuh karisma.",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop",
      alignLeft: false,
      badge: "SIGNATURE FINISH"
    }
  ];

  return (
    <section id="fasilitas" className="py-44 bg-brand-bg relative overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute top-[10%] left-[-15%] w-[60%] h-[60%] rounded-full bg-brand-gold-dark/2 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[50%] h-[50%] rounded-full bg-brand-gold-dark/2 blur-[160px] pointer-events-none" />

      {/* Hero Header Section - Apple style asymmetric layout */}
      <div className="max-w-6xl mx-auto px-6 mb-36 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-brand-gold-dark/10 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-brand-gold-dark uppercase"
            >
              <Sparkle className="h-3 w-3 animate-spin-slow text-brand-gold-dark" />
              <span>The Grooming Ritual</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-none"
            >
              Bukan Sekadar Cukur, <br />
              <span className="text-brand-gold-dark italic font-normal">Tapi Sebuah Ritual.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 text-left lg:text-right pb-3">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-brand-grey-muted text-sm sm:text-base leading-relaxed font-sans max-w-md lg:ml-auto"
            >
              Selamat datang di standar baru penataan rambut. Kami mendesain setiap langkah pangkas sebagai rangkaian pengalaman sensorik yang mewah, mengembalikan kesegaran pikiran dan ketajaman gaya Anda.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Chapters / Acts Storyboard */}
      <div className="max-w-6xl mx-auto px-6 space-y-48 relative z-10">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            {/* Background Massive Watermark */}
            <div className={`absolute -top-16 font-display font-black text-[120px] sm:text-[200px] lg:text-[240px] text-white/[0.015] leading-none select-none pointer-events-none ${step.alignLeft ? "right-10" : "left-10"}`}>
              {step.roman}
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${step.alignLeft ? "" : "lg:flex-row-reverse"}`}>
              
              {/* Asymmetrical Image Layout with Overlaps */}
              <div className={`lg:col-span-6 relative ${step.alignLeft ? "order-1" : "lg:order-2"}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-[32px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  {/* Subtle golden ambient mask overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#110b08]/80 via-transparent to-[#110b08]/10 opacity-60 transition-opacity group-hover:opacity-40" />
                  
                  {/* Floating Luxury Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#110b08]/85 backdrop-blur-md text-[9px] font-mono font-bold tracking-widest text-brand-gold-dark border border-brand-gold-dark/20 uppercase">
                      {step.badge}
                    </span>
                  </div>

                  {/* Aesthetic Corner Frame Accent */}
                  <div className="absolute bottom-6 right-6 z-20 font-mono text-[10px] text-brand-gold-dark/50 tracking-wider">
                    EFE RITUAL // {step.number}
                  </div>
                </motion.div>
                
                {/* Decorative background shadow element for layering depth */}
                <div className={`absolute -inset-4 bg-brand-gold-dark/3 rounded-[40px] blur-3xl -z-10 transition-transform duration-700 group-hover:scale-105 pointer-events-none`} />
              </div>

              {/* Text Editorial Content */}
              <div className={`lg:col-span-6 space-y-6 text-left ${step.alignLeft ? "order-2" : "lg:order-1"}`}>
                <motion.div
                  initial={{ opacity: 0, x: step.alignLeft ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="space-y-4"
                >
                  {/* Monospace Tag & Number */}
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-brand-gold-dark uppercase">
                      {step.tagline}
                    </span>
                    <span className="h-px w-8 bg-brand-gold-dark/30" />
                    <span className="font-display text-sm italic text-brand-gold-dark/70 font-medium">
                      Act {step.roman}
                    </span>
                  </div>

                  {/* Large display titles */}
                  <div className="space-y-2">
                    <h3 className="font-display text-3xl sm:text-4.5xl text-white font-bold tracking-tight leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm font-sans font-semibold text-brand-gold-dark/90 tracking-wide">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Elegant story-driven paragraph */}
                  <p className="text-brand-grey-muted text-sm sm:text-base leading-relaxed font-sans max-w-lg pt-2">
                    {step.description}
                  </p>

                  {/* Aesthetic visual checklist helper (no lists, just pure elegance) */}
                  <div className="pt-4 flex items-center space-x-6 text-xs text-brand-gold-dark/60 font-mono tracking-widest uppercase">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-dark" />
                      PREMIUM STANDARD
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-dark" />
                      100% PERSONALIZED
                    </span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Luxury Amenity Menu Grid (Sleek minimalist, instead of basic checklist) */}
      <div className="max-w-5xl mx-auto px-6 mt-48 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-14 bg-[#18110b] rounded-[40px] border border-brand-gold-dark/5 space-y-10 relative overflow-hidden"
        >
          {/* Subtle glow inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold-dark/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Title Area */}
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-[10px] font-mono tracking-[0.3em] text-brand-gold-dark uppercase font-bold">
              COMPLIMENTARY ACCESS
            </span>
            <h4 className="font-display text-2xl sm:text-3.5xl text-white font-medium">
              Kenyamanan Tanpa Biaya Tambahan
            </h4>
            <p className="text-xs sm:text-sm text-brand-grey-muted font-sans leading-relaxed">
              Setiap tamu berhak menikmati seluruh fasilitas eksklusif ini di ruang tunggu maupun selama proses ritual pangkas berlangsung:
            </p>
          </div>

          {/* Spaced Out Luxury Menu Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-4 text-center">
            {[
              { label: "FULL AC DINGIN", desc: "Suhu Udara Nyaman" },
              { label: "FREE HIGH-SPEED WI-FI", desc: "Koneksi Stabil & Cepat" },
              { label: "TEH / AIR MINERAL", desc: "Disajikan Dingin & Segar" },
              { label: "SPOTIFY PREMIUM PLAYLIST", desc: "Musik Santai Pilihan" },
              { label: "SANITASI STERILISASI", desc: "Alat Higienis Berkualitas" }
            ].map((item, i) => (
              <div key={i} className="space-y-2 group">
                <div className="mx-auto w-8 h-8 rounded-full bg-brand-gold-dark/10 flex items-center justify-center text-brand-gold-dark mb-3 group-hover:bg-brand-gold-dark group-hover:text-brand-bg transition-all duration-300">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <p className="text-[10px] font-mono font-bold tracking-widest text-white leading-tight uppercase">
                  {item.label}
                </p>
                <p className="text-[9px] text-brand-grey-muted font-sans uppercase tracking-wider">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
