export interface Hairstyle {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  difficulty: "Mudah" | "Sedang" | "Tinggi";
  hairType: "straight" | "wavy" | "curly" | "all";
  faceShape: "oval" | "round" | "square" | "all";
  vibe: "casual" | "professional" | "edgy" | "all";
}

export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  duration: string;
  description: string;
  benefits: string[];
  isPopular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  age: number;
  occupation: string;
  rating: number;
  text: string;
  beforeStyle: string;
  afterStyle: string;
  avatar: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlightText?: string;
}

export interface ProblemItem {
  id: string;
  painPoint: string;
  efeSolution: string;
}
