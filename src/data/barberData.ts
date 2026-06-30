import { Hairstyle, ServiceItem, TestimonialItem, BenefitItem, FeatureItem, ProblemItem } from "../types";

export const BARBER_INFO = {
  name: "efe barbershop",
  tagline: "Ganteng Maksimal, Dompet Tetap Aman.",
  subTagline: "Tempat pangkas rambut modern khusus untuk remaja akhir & pekerja muda. Hasil cukuran super presisi, tempat adem dan nyaman, dengan harga yang ramah di kantong mahasiswa.",
  usp: [
    "Hasil cukuran presisi & kekinian (Comma hair, fade, crop)",
    "Konsultasi bentuk wajah gratis dengan barber komunikatif",
    "Tempat ber-AC, wangi, santai, & free cold drink",
    "Harga terjangkau dengan standar pelayanan premium"
  ],
  whatsappNumber: "6281234567890", // Mock WhatsApp business number
  address: "Jl. Margonda Raya No. 45, Pondok Cina, Beji, Kota Depok (Dekat Kampus UI & Gunadarma)",
  openingHours: "Setiap Hari: 10.00 - 21.00 WIB",
  mapsLink: "https://maps.google.com"
};

export const PROBLEMS: ProblemItem[] = [
  {
    id: "prob-1",
    painPoint: "Asal potong tanpa merhatiin bentuk wajah, hasilnya kaku atau kependekan.",
    efeSolution: "Barber kami bakal diskusi & menganalisis bentuk wajah kamu buat dapet gaya rambut paling ideal."
  },
  {
    id: "prob-2",
    painPoint: "Barbernya cuek, nggak ramah, atau buru-buru pengen cepet kelar.",
    efeSolution: "Pelayanan ramah & santai. Satu customer satu slot waktu khusus agar detail pangkas sempurna."
  },
  {
    id: "prob-3",
    painPoint: "Tempat sempit, panas, bau rokok, bikin gerah dan males nunggu.",
    efeSolution: "Ruangan bersih, full AC, wangi, musik asik, free Wi-Fi, plus free mineral water/teh dingin."
  },
  {
    id: "prob-4",
    painPoint: "Tarif barbershop premium mahal banget, bikin kantong mahasiswa jebol.",
    efeSolution: "Kualitas & kenyamanan barbershop premium, tapi harganya bersahabat khusus buat pelajar & pekerja muda."
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "ben-1",
    title: "100% Custom Style",
    description: "Nggak ada istilah 'salah potong'. Gaya rambut kamu disesuaikan dengan struktur tengkorak, jenis rambut, dan arah tumbuh rambut.",
    iconName: "Scissors"
  },
  {
    id: "ben-2",
    title: "Barber Komunikatif & Up-to-Date",
    description: "Barber kami selalu update tren gaya rambut terbaru (mulai dari Comma Hair ala Korea, French Crop, Two Block, hingga Buzz Cut).",
    iconName: "MessageSquareText"
  },
  {
    id: "ben-3",
    title: "Comfort Zone Terbaik",
    description: "Sambil nunggu antrean atau dicukur, nikmati ruangan super dingin, kursi pangkas ergonomis, free Wi-Fi, dan free softdrink.",
    iconName: "Sparkles"
  },
  {
    id: "ben-4",
    title: "Budget-Friendly Premium",
    description: "Kamu dapet pelayanan kelas VIP (pangkas, keramas, pijat, cold towel, hair tonic, pomade) dengan harga yang sangat ramah.",
    iconName: "Wallet"
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: "feat-1",
    title: "Analisis Bentuk Wajah & Rambut",
    description: "Sebelum pisau cukur menyentuh rambutmu, barber akan memberikan konsultasi gratis untuk memilih model rambut terbaik.",
    iconName: "UserCheck",
    highlightText: "Gratis"
  },
  {
    id: "feat-2",
    title: "Premium Hair Wash & Scalp Massage",
    description: "Dilengkapi bilasan air hangat/dingin serta pijatan kepala rileks yang meredakan stres setelah seharian kuliah atau kerja.",
    iconName: "Waves",
    highlightText: "Rileks"
  },
  {
    id: "feat-3",
    title: "Cold Towel & Premium Hair Tonic",
    description: "Penyegaran dahi dengan handuk dingin steril dan aplikasi tonic berkualitas tinggi agar kulit kepala sehat & segar seharian.",
    iconName: "Wind",
    highlightText: "Fresh"
  },
  {
    id: "feat-4",
    title: "Premium Styling & Matte Pomade/Clay",
    description: "Sentuhan akhir menggunakan pomade, clay, atau hair powder premium sesuai gaya yang kamu inginkan, siap langsung nongkrong.",
    iconName: "Gem",
    highlightText: "Stylish"
  }
];

export const HAIRSTYLES: Hairstyle[] = [
  {
    id: "style-1",
    name: "Korean Comma Hair",
    description: "Gaya rambut paling hits di kalangan anak muda saat ini. Poni melengkung membentuk tanda koma di satu sisi, memberikan kesan smart, modern, dan sangat modis.",
    image: "/src/assets/images/style_comma_1782822618686.jpg",
    tags: ["Korea", "Volume", "Trend"],
    difficulty: "Sedang",
    hairType: "wavy",
    faceShape: "oval",
    vibe: "casual"
  },
  {
    id: "style-2",
    name: "Textured Crop Fade",
    description: "Sangat cocok untuk remaja aktif yang menyukai kepraktisan. Bagian atas penuh tekstur berantakan yang keren, dipadukan dengan taper fade super bersih di sisi samping.",
    image: "/src/assets/images/style_textured_1782822630964.jpg",
    tags: ["Short", "Sporty", "Low Maintenance"],
    difficulty: "Mudah",
    hairType: "straight",
    faceShape: "round",
    vibe: "edgy"
  },
  {
    id: "style-3",
    name: "Modern Pompadour Undercut",
    description: "Gaya rambut klasik bervolume tinggi yang dipadukan dengan undercut tajam. Memberikan kesan maskulin, percaya diri, elegan, dan sangat cocok untuk acara formal maupun nongkrong.",
    image: "/src/assets/images/style_pompadour_1782822641881.jpg",
    tags: ["Classic", "Volume", "Gentleman"],
    difficulty: "Tinggi",
    hairType: "straight",
    faceShape: "square",
    vibe: "professional"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rian Hidayat",
    age: 21,
    occupation: "Mahasiswa UI Depok",
    rating: 5,
    text: "Sumpah puas banget! Biasanya kalau ke barbershop biasa suka takut salah potong pas minta Comma Hair. Di efe barbershop, barber-nya malah ngasih saran ketebalan poni yang pas buat dahi gue yang agak lebar. Hasilnya rapi parah, tempatnya adem, dapet minum gratis lagi. Rekomendasi banget buat mahasiswa!",
    beforeStyle: "Rambut Gondrong Kusam",
    afterStyle: "Korean Comma Hair + Tonic",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-2",
    name: "Dika Pratama",
    age: 24,
    occupation: "Junior UI/UX Designer",
    rating: 5,
    text: "Sebagai pekerja kreatif muda, penampilan itu penting pas meeting sama klien. Gue nyoba French Crop di sini dan gila sih rapi banget gradasi fade-nya. Pelayanannya top, dapet pijatan kepala yang bikin relax banget setelah seharian depan laptop. Dan harganya? Murah banget buat treatment se-lengkap ini!",
    beforeStyle: "Rambut Tebal Tak Beraturan",
    afterStyle: "Textured Crop Fade + Clay Styling",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-3",
    name: "Fadel Rahman",
    age: 19,
    occupation: "Anak Band & Mahasiswa",
    rating: 5,
    text: "Tempatnya asik parah, playlist musiknya kekinian. Barbershop-nya wangi dan bersih banget, alat-alatnya steril. Potongannya sesuai ekspektasi, barber-nya asik diajak ngobrol soal gaya rambut. Nggak canggung sama sekali. Harga mahasiswa banget tapi service-nya kayak barbershop mall bintang 5.",
    beforeStyle: "Mullet Berantakan",
    afterStyle: "Modern Undercut Pompadour",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "serv-1",
    name: "Student Cut (Mahasiswa & Pelajar)",
    price: "IDR 35.000",
    originalPrice: "IDR 45.000",
    duration: "35 Menit",
    description: "Promo khusus pelajar dan mahasiswa dengan menunjukkan kartu pelajar/mahasiswa aktif. Tetap dapet service lengkap!",
    benefits: [
      "Konsultasi Gaya Rambut & Face Shape",
      "Pangkas Rambut Presisi & Detail",
      "Bilas Keramas Air Hangat/Dingin",
      "Premium Styling dengan Powder/Clay",
      "Free Air Mineral Dingin"
    ]
  },
  {
    id: "serv-2",
    name: "Efe Signature Haircut (Best Seller)",
    price: "IDR 45.000",
    duration: "45 Menit",
    description: "Paket lengkap potongan rambut kustom yang paling digemari. Kembalikan kesegaran rambut dan rasa percaya dirimu.",
    benefits: [
      "Konsultasi Gaya Rambut Detail",
      "Premium Haircut & Razor Shave Bulu Halus",
      "Relaxing Hair Wash & Scalp Massage (Pijat)",
      "Cold Towel Treatment yang super segar",
      "Premium Tonic Aplikasi (Nutrisi Kulit Kepala)",
      "Professional Styling Pomade / Clay / Powder",
      "Free Soft Drink (Teh Manis / Cold Water)"
    ],
    isPopular: true
  },
  {
    id: "serv-3",
    name: "The Executive Grooming Package",
    price: "IDR 75.000",
    originalPrice: "IDR 90.000",
    duration: "60 Menit",
    description: "Treatment maksimal buat kamu yang ingin tampil super fresh dan rapi dari rambut hingga perawatan wajah.",
    benefits: [
      "Semua benefit Efe Signature Haircut",
      "Nose Hair Grooming (Cukur Bulu Hidung)",
      "Face Scrub (Pembersihan Komedo & Kulit Mati)",
      "Black Mask Charcoal Treatment (Masker Wajah)",
      "Extra Massage Bahu & Leher",
      "Premium Product Styling",
      "Free Premium Hot Coffee / Cold Drink"
    ]
  }
];
