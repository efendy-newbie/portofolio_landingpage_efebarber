import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";
import { BARBER_INFO } from "../data/barberData";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltips with subtle stagger
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      "Halo Efe Barbershop! Saya berkunjung ke website Anda dan ingin menanyakan ketersediaan slot hari ini. Terima kasih!"
    );
    window.open(`https://wa.me/${BARBER_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Interactive Hover Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-3 bg-emerald-600 text-white font-sans text-xs font-semibold px-3 py-2 rounded-xl shadow-xl flex items-center gap-1.5 border border-emerald-500/30 relative"
            id="wa-floating-tooltip"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>Ada Pertanyaan? Chat Admin</span>
            {/* Close Tooltip Button */}
            <button
              onClick={() => setShowTooltip(false)}
              className="ml-1 text-white/70 hover:text-white font-bold text-[10px]"
              aria-label="Tutup pesan"
            >
              ✕
            </button>
            {/* Arrow */}
            <div className="absolute bottom-[-5px] right-5 w-2.5 h-2.5 bg-emerald-600 rotate-45 border-r border-b border-emerald-500/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with pulsing borders */}
      <button
        onClick={handleWhatsAppRedirect}
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl relative group transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Hubungi kami melalui WhatsApp"
        id="wa-floating-button"
      >
        {/* Pulsing ring around button */}
        <span className="absolute inset-0 rounded-full border-4 border-emerald-500/30 animate-ping pointer-events-none" />
        
        <MessageCircle className="h-7 w-7 fill-white text-emerald-500 group-hover:scale-110 transition-transform" />
      </button>

    </div>
  );
}
