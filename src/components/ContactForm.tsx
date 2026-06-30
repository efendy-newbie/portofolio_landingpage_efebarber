import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Send, Calendar, Clock, User, Scissors, Smartphone, Info, Award } from "lucide-react";
import { SERVICES, BARBER_INFO, HAIRSTYLES } from "../data/barberData";

interface ContactFormProps {
  selectedService: string;
}

export default function ContactForm({ selectedService }: ContactFormProps) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [service, setService] = useState("");
  const [hairStyle, setHairStyle] = useState("");
  const [barber, setBarber] = useState("Bebas (Siapa Saja)");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Sync selected service when changed from pricing section
  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrorMsg("");

    // Validate inputs
    if (!name.trim()) {
      setErrorMsg("Nama Lengkap wajib diisi.");
      return;
    }
    if (!whatsapp.trim()) {
      setErrorMsg("Nomor WhatsApp wajib diisi.");
      return;
    }
    if (!service) {
      setErrorMsg("Silakan pilih Paket Layanan.");
      return;
    }
    if (!date) {
      setErrorMsg("Silakan tentukan Hari/Tanggal.");
      return;
    }
    if (!time) {
      setErrorMsg("Silakan tentukan Jam Kedatangan.");
      return;
    }

    // Generate Beautifully Structured WhatsApp Text
    const formattedMessage = `Halo Efe Barbershop! saya ingin melakukan booking pangkas rambut:

━━━━━━━━━━━━━━━━━━━━━
📋 *DATA BOOKING EFE BARBER*
━━━━━━━━━━━━━━━━━━━━━
👤 *Nama:* ${name}
📱 *WhatsApp:* ${whatsapp}
✂️ *Layanan:* ${service}
💇‍♂️ *Gaya Rambut:* ${hairStyle || "Konsultasi di Tempat"}
💈 *Barber:* ${barber}
📅 *Hari/Tanggal:* ${date}
🕒 *Jam Kedatangan:* ${time} WIB
━━━━━━━━━━━━━━━━━━━━━

Mohon konfirmasi ketersediaan slot waktu ini ya. Terima kasih banyak!`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${BARBER_INFO.whatsappNumber}?text=${encodedMessage}`;

    // Mark success animation
    setIsSuccess(true);

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSuccess(false);
    }, 800);
  };

  return (
    <section id="booking-section" className="py-36 bg-brand-bg relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-brand-gold-dark/2 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-gold-dark/10 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-brand-gold-dark uppercase mb-6">
            <span>Formulir Pemesanan</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Amankan Slot Cukuranmu <br />
            <span className="text-brand-gold italic">Tanpa Antre Panjang!</span>
          </h2>
          
          <p className="text-brand-grey-muted mt-6 text-sm leading-relaxed max-w-2xl mx-auto font-sans">
            Isi detail singkat di bawah untuk membuat pemesanan. Data pendaftaran otomatis terstruktur dan langsung terkirim ke WhatsApp Admin kami. Praktis dan bebas ribet!
          </p>
        </div>

        {/* Split Layout: Info on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Opening Info and FAQs */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="p-8 bg-[#130d09] rounded-3xl space-y-5 shadow-xl text-left border border-brand-gold-dark/5">
                <h3 className="text-base font-display font-bold text-white flex items-center gap-2">
                  <Info className="h-4 w-4 text-brand-gold-dark" />
                  <span>Petunjuk Pemesanan</span>
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm font-sans text-brand-grey-muted leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold-dark font-bold">1.</span>
                    <span>Toleransi kedatangan maksimal 15 menit dari jadwal booking.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold-dark font-bold">2.</span>
                    <span>Jika terlambat tanpa kabar, slot dialihkan ke walk-in customer.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold-dark font-bold">3.</span>
                    <span>Pembayaran di kasir (Bisa QRIS, Bank Transfer, atau Cash).</span>
                  </li>
                </ul>
              </div>

              {/* Working Hours Card */}
              <div className="p-8 bg-[#130d09] rounded-3xl space-y-4 shadow-xl text-left border border-brand-gold-dark/5">
                <p className="text-[10px] font-mono text-brand-gold-dark uppercase tracking-widest font-bold">JAM OPERASIONAL</p>
                <p className="text-xl font-display font-bold text-white">{BARBER_INFO.openingHours}</p>
                <p className="text-xs text-brand-grey-muted leading-relaxed">Datang langsung diperbolehkan, namun pelanggan yang mendaftar booking prioritas akan didahulukan.</p>
              </div>
            </div>

            {/* Quick Contact Badge */}
            <div className="p-8 rounded-3xl bg-[#130d09] flex items-center justify-between shadow-xl text-left border border-brand-gold-dark/5">
              <div>
                <p className="text-[10px] text-brand-grey-muted font-mono uppercase tracking-widest font-bold">BUTUH BANTUAN?</p>
                <p className="text-sm font-display font-bold text-white mt-1">Admin Efe Barbershop</p>
              </div>
              <a
                href={`https://wa.me/${BARBER_INFO.whatsappNumber}`}
                target="_blank"
                referrerPolicy="no-referrer"
                className="px-6 py-3 rounded-full bg-brand-gold hover:bg-brand-gold-light text-brand-bg font-display font-bold text-[10px] tracking-widest uppercase transition-all duration-300"
              >
                Chat CS
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#130d09] rounded-3xl p-6 sm:p-10 shadow-2xl relative border border-brand-gold-dark/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Validation Alert */}
              {errorMsg && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono font-bold flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Input Group: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2 text-left">
                  <label htmlFor="name-input" className="block text-[10px] font-mono text-brand-grey-muted uppercase tracking-widest font-bold">
                    NAMA LENGKAP <span className="text-brand-gold-dark">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-grey-muted" />
                    <input
                      id="name-input"
                      type="text"
                      placeholder="Masukkan nama Anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#1c140e] border border-transparent focus:border-brand-gold-dark/40 rounded-full py-3.5 pl-12 pr-4 text-sm text-white placeholder-brand-grey-muted focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-2 text-left">
                  <label htmlFor="wa-input" className="block text-[10px] font-mono text-brand-grey-muted uppercase tracking-widest font-bold">
                    NOMOR WHATSAPP <span className="text-brand-gold-dark">*</span>
                  </label>
                  <div className="relative">
                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-grey-muted" />
                    <input
                      id="wa-input"
                      type="tel"
                      placeholder="Contoh: 081234567890"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full bg-[#1c140e] border border-transparent focus:border-brand-gold-dark/40 rounded-full py-3.5 pl-12 pr-4 text-sm text-white placeholder-brand-grey-muted focus:outline-none transition-all"
                    />
                  </div>
                </div>

              </div>

              {/* Input Group: Service and Style selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Service Selection */}
                <div className="space-y-2 text-left">
                  <label htmlFor="service-select" className="block text-[10px] font-mono text-brand-grey-muted uppercase tracking-widest font-bold">
                    PAKET LAYANAN <span className="text-brand-gold-dark">*</span>
                  </label>
                  <div className="relative">
                    <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-grey-muted pointer-events-none" />
                    <select
                      id="service-select"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#1c140e] border border-transparent focus:border-brand-gold-dark/40 rounded-full py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>-- Pilih Paket Layanan --</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.price})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Hairstyle Selection */}
                <div className="space-y-2 text-left">
                  <label htmlFor="style-select" className="block text-[10px] font-mono text-brand-grey-muted uppercase tracking-widest font-bold">
                    GAYA RAMBUT IMPIAN <span className="text-brand-grey-muted">(OPSIONAL)</span>
                  </label>
                  <div className="relative">
                    <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-grey-muted pointer-events-none" />
                    <select
                      id="style-select"
                      value={hairStyle}
                      onChange={(e) => setHairStyle(e.target.value)}
                      className="w-full bg-[#1c140e] border border-transparent focus:border-brand-gold-dark/40 rounded-full py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Konsultasi di Tempat</option>
                      {HAIRSTYLES.map((h) => (
                        <option key={h.id} value={h.name}>
                          {h.name}
                        </option>
                      ))}
                      <option value="Lainnya">Model Lainnya (Tunjukkan Foto)</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Input Group: Barber selection */}
              <div className="space-y-2 text-left">
                <label className="block text-[10px] font-mono text-brand-grey-muted uppercase tracking-widest font-bold">
                  PILIH BARBER SPESIALIS <span className="text-brand-grey-muted">(OPSIONAL)</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { id: "Bebas", label: "Bebas/Siapa Saja", desc: "Sesuai Antrean" },
                    { id: "Aris", label: "Barber Aris", desc: "Korean Specialist" },
                    { id: "Jefri", label: "Barber Jefri", desc: "Fade Specialist" },
                    { id: "Rian", label: "Barber Rian", desc: "Classic Specialist" },
                  ].map((barb) => (
                    <button
                      key={barb.id}
                      type="button"
                      onClick={() => setBarber(barb.label)}
                      className={`p-4 rounded-3xl text-center transition-all duration-300 cursor-pointer border ${
                        barber === barb.label
                          ? "border-brand-gold bg-brand-gold-dark/15 text-white shadow-xl"
                          : "border-transparent bg-[#1c140e] text-brand-grey-muted hover:border-brand-gold-dark/10 hover:text-white"
                      }`}
                    >
                      <span className="block text-xs font-display font-bold">{barb.label}</span>
                      <span className="block text-[9px] text-brand-grey-muted mt-1 leading-none font-sans">{barb.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Group: Date and Time slots */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Date Input */}
                <div className="space-y-2 text-left">
                  <label htmlFor="date-input" className="block text-[10px] font-mono text-brand-grey-muted uppercase tracking-widest font-bold">
                    PILIH HARI / TANGGAL <span className="text-brand-gold-dark">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-grey-muted pointer-events-none" />
                    <input
                      id="date-input"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#1c140e] border border-transparent focus:border-brand-gold-dark/40 rounded-full py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none transition-all cursor-pointer"
                    />
                  </div>
                </div>

                {/* Time Input */}
                <div className="space-y-2 text-left">
                  <label htmlFor="time-select" className="block text-[10px] font-mono text-brand-grey-muted uppercase tracking-widest font-bold">
                    JAM KEDATANGAN <span className="text-brand-gold-dark">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-grey-muted pointer-events-none" />
                    <select
                      id="time-select"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-[#1c140e] border border-transparent focus:border-brand-gold-dark/40 rounded-full py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>-- Pilih Jam --</option>
                      {["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"].map((t) => (
                        <option key={t} value={t}>{t} WIB</option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className={`w-full py-4.5 rounded-full font-display font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                    isSuccess
                      ? "bg-emerald-500 text-white"
                      : "bg-brand-gold hover:bg-brand-gold-light text-brand-bg shadow-lg"
                  }`}
                  id="booking-submit-btn"
                >
                  {isSuccess ? (
                    <>
                      <span>Booking Terstruktur Terkirim!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>KIRIM JADWAL VIA WHATSAPP</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
