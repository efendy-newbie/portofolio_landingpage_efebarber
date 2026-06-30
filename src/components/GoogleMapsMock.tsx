import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Navigation, Copy, Check, Clock, Compass, Map } from "lucide-react";
import { BARBER_INFO } from "../data/barberData";

export default function GoogleMapsMock() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BARBER_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenDirections = () => {
    window.open(`https://maps.google.com/?q=${encodeURIComponent(BARBER_INFO.address)}`, "_blank");
  };

  return (
    <section id="lokasi" className="py-36 bg-brand-bg relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-brand-gold-dark/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-gold-dark/10 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-brand-gold-dark uppercase mb-6">
            <span>LOKASI & AKSES</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Sangat Mudah Ditemukan <br />
            <span className="text-brand-gold italic">di Jantung Kota Depok!</span>
          </h2>
          
          <p className="text-brand-grey-muted mt-6 text-sm leading-relaxed max-w-2xl mx-auto font-sans">
            Terletak sangat strategis di Margonda Raya, dekat dengan lingkungan kampus UI dan Gunadarma. Akses mudah dari stasiun KRL, tol, maupun kendaraan umum.
          </p>
        </div>

        {/* Map Panel Box (Sleek organic design) */}
        <div className="max-w-4xl mx-auto bg-[#130d09] rounded-3xl overflow-hidden shadow-2xl border border-brand-gold-dark/5">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left/Main Column: Stylized Dark Vector Map Mockup */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[320px] bg-[#0c101b] flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-brand-line/10">
              
              {/* Dark Map Vector Texture/Mockup */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px]" />
              
              {/* Intersecting Road Lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div className="absolute left-[30%] top-0 bottom-0 w-8 bg-brand-line/30 rotate-12" />
                <div className="absolute left-0 right-0 top-[40%] h-8 bg-brand-line/30 -rotate-6" />
                <div className="absolute right-[20%] top-0 bottom-0 w-6 bg-brand-line/30 -rotate-12" />
              </div>

              {/* Glowing Barber Shop Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="absolute -inset-4 bg-brand-gold/25 rounded-full blur-md animate-pulse" />
                <div className="w-12 h-12 rounded-2xl bg-brand-gold text-brand-bg flex items-center justify-center shadow-md relative border border-brand-gold-dark/20">
                  <MapPin className="h-6 w-6 animate-bounce text-brand-bg" />
                </div>
                <div className="mt-4 bg-brand-bg/90 border border-brand-gold-dark/20 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold text-white tracking-widest uppercase">
                  EFE BARBERSHOP
                </div>
              </div>

              {/* Maps Coordinates HUD */}
              <div className="absolute bottom-4 left-4 bg-brand-bg/95 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold text-brand-gold-dark flex items-center gap-1.5 border border-brand-line/10">
                <Compass className="h-3.5 w-3.5 text-brand-gold-dark animate-spin-slow" />
                <span>6.3725° S, 106.8314° E</span>
              </div>
            </div>

            {/* Right Column: Direction / Location details */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-[#130d09]">
              
              <div className="space-y-6 text-left">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold text-brand-gold-dark uppercase tracking-widest">ALAMAT FISIK</span>
                  <p className="text-sm font-sans font-semibold text-white leading-relaxed">
                    {BARBER_INFO.address}
                  </p>
                </div>

                <div className="h-px bg-brand-line/10" />

                {/* Opening hours & accessibility */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-sm text-brand-grey-text">
                    <Clock className="h-5 w-5 text-brand-gold-dark shrink-0" />
                    <div>
                      <span className="block font-display font-bold text-white text-xs">JAM BUKA KAMI</span>
                      <span className="block text-xs text-brand-grey-muted mt-0.5 font-mono">{BARBER_INFO.openingHours}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-sm text-brand-grey-text">
                    <Navigation className="h-5 w-5 text-brand-gold-dark shrink-0" />
                    <div>
                      <span className="block font-display font-bold text-white text-xs">AKSESIBILITAS</span>
                      <span className="block text-xs text-brand-grey-muted mt-0.5 leading-relaxed">3 Menit dari Kampus UI Depok, 5 Menit dari Stasiun Pondok Cina.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direction Buttons */}
              <div className="pt-6 border-t border-brand-line/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleOpenDirections}
                  className="flex-1 inline-flex items-center justify-center space-x-2 bg-brand-gold hover:bg-brand-gold-light text-brand-bg py-3.5 px-5 rounded-full font-display font-bold text-[10px] tracking-widest uppercase transition-all duration-300 cursor-pointer"
                >
                  <Navigation className="h-4 w-4" />
                  <span>PETUNJUK ARAH</span>
                </button>

                <button
                  onClick={handleCopyAddress}
                  className="flex-1 inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-brand-gold text-brand-gold hover:text-brand-bg border border-brand-gold-dark/30 hover:border-brand-gold py-3.5 px-5 rounded-full font-display font-bold text-[10px] tracking-widest uppercase transition-all duration-300 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-brand-gold" />
                      <span className="text-brand-gold">TERALIN!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-brand-gold-dark" />
                      <span>SALIN ALAMAT</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
