import React from "react";
import { motion } from "motion/react";
import eventPhotoImg from "../assets/images/barber_event_photo_1782824861149.jpg";

export default function EventBanner() {
  return (
    <section className="relative h-[60vh] sm:h-[75vh] w-full overflow-hidden flex items-end pb-16 sm:pb-24">
      {/* Background Event Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={eventPhotoImg}
          alt="Efe Barbershop Event and Team"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep, sophisticated dark brown/black gradients on top and bottom to seamlessly fuse with background */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/30 to-brand-bg/90" />
      </div>

      {/* Caption Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 w-full text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-2xl text-left"
        >
          <span className="text-[10px] font-mono tracking-widest text-brand-gold-dark uppercase bg-brand-gold-dark/10 px-3.5 py-1.5 rounded-full font-bold">
            EFE COMMUNITY & STYLE
          </span>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight pt-2 leading-none">
            Gaya Klasik untuk <span className="text-brand-gold italic">Generasi Modern</span>
          </h3>
          <p className="text-sm text-brand-grey-muted leading-relaxed font-sans max-w-xl">
            Kami rutin berpartisipasi dan menyelenggarakan workshop gaya rambut serta pelayanan sosial pangkas gratis. Setiap langkah kami didedikasikan untuk membawa standar pangkas rambut terbaik ke Kota Depok.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
