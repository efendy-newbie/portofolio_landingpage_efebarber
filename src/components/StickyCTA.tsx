import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar } from "lucide-react";

interface StickyCTAProps {
  onOpenBooking: () => void;
}

export default function StickyCTA({ onOpenBooking }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA only when scrolling past hero section (approx 450px)
      setIsVisible(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-brand-bg border-t border-brand-line px-4 py-3 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.8)] lg:hidden"
          id="sticky-mobile-cta"
        >
          <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
            {/* Short Tagline */}
            <div className="flex-1 min-w-0 text-left">
              <p className="text-[10px] font-mono text-brand-gold uppercase tracking-wider font-semibold">EFE BARBERSHOP</p>
              <p className="text-xs font-display font-bold text-white truncate mt-0.5 uppercase">Tampil Ganteng Sekarang</p>
            </div>

            {/* Quick Action Button */}
            <button
              onClick={onOpenBooking}
              className="flex-1 inline-flex items-center justify-center space-x-1.5 bg-brand-gold hover:bg-brand-gold-light text-brand-bg px-4 py-2.5 rounded-lg font-display font-bold text-xs shadow-sm cursor-pointer"
              id="sticky-cta-btn"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>BOOK NOW</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
