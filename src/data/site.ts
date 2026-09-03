import heroImg from "@/assets/hero.jpg";
import musicImg from "@/assets/music.jpg";
import playImg from "@/assets/play.jpg";
import cultureImg from "@/assets/culture.jpg";
import foodImg from "@/assets/food.jpg";
import communityImg from "@/assets/community.jpg";
import nextEditionImg from "@/assets/next-edition.jpg";
import finalCtaImg from "@/assets/final-cta.jpg";

/**
 * Content models — designed to be swapped for a CMS / database later.
 * Every section of the site reads from this module only.
 */

export const brand = {
  name: "DIMANCHE ZEN",
  signature: "Le dimanche, autrement.",
  pillars: "Art · Music · Food · Games · Community",
  city: "Pointe-Noire · Congo",
  email: "hello@dimanchezen.com",
  instagram: "https://instagram.com",
  tiktok: "https://tiktok.com",
  whatsapp: "https://wa.me/",
};

export const images = {
  hero: heroImg,
  music: musicImg,
  play: playImg,
  culture: cultureImg,
  food: foodImg,
  community: communityImg,
  nextEdition: nextEditionImg,
  finalCta: finalCtaImg,
};

export type Venue = { name: string; city: string; country: string };

export type TicketType = {
  id: string;
  name: string;
  price: string;
  perks: string[];
};

export type ZenEvent = {
  slug: string;
  edition: string;
  title: string;
  date: string; // ISO
  dateLabel: string;
  day: string;
  month: string;
  time: string;
  venue: Venue;
  image: string;
  excerpt: string;
  lineup: string[];
  tickets: TicketType[];
  status: "upcoming" | "past";
};

export const events: ZenEvent[] = [
  {
    slug: "zen-12-pointe-noire",
    edition: "ÉDITION 12",
    title: "Dimanche ZEN — Édition 12",
    date: "2026-09-27T14:00:00+01:00",
    dateLabel: "27 septembre 2026",
    day: "27",
    month: "SEP",
    time: "14:00 — 22:00",
    venue: { name: "Jardin de la Côte", city: "Pointe-Noire", country: "Congo" },
    image: nextEditionImg,
    excerpt:
      "Une journée en bord de mer : sunset sets, food corners, challenges et la communauté au grand complet.",
    lineup: ["DJ Bilanga", "Ntesa Live", "Collectif Mbote", "Zen Dance Floor"],
    tickets: [
      { id: "zen", name: "ZEN PASS", price: "10 000 FCFA", perks: ["Accès journée", "Zone lounge", "Games & challenges"] },
      { id: "duo", name: "DUO PASS", price: "18 000 FCFA", perks: ["2 accès journée", "Zone lounge", "1 welcome drink"] },
      { id: "vip", name: "VIP ZEN", price: "35 000 FCFA", perks: ["Accès prioritaire", "Carré VIP", "Table & service", "Food voucher"] },
    ],
    status: "upcoming",
  },
  {
    slug: "zen-13-brazzaville",
    edition: "ÉDITION 13",
    title: "Dimanche ZEN — Édition 13",
    date: "2026-10-25T14:00:00+01:00",
    dateLabel: "25 octobre 2026",
    day: "25",
    month: "OCT",
    time: "14:00 — 22:00",
    venue: { name: "Rooftop Kintélé", city: "Brazzaville", country: "Congo" },
    image: musicImg,
    excerpt: "Le ZEN monte sur les toits de Brazzaville pour une édition rooftop.",
    lineup: ["Selecta Nzila", "Kin Groove", "Live Band ZEN"],
    tickets: [
      { id: "zen", name: "ZEN PASS", price: "10 000 FCFA", perks: ["Accès journée", "Rooftop"] },
    ],
    status: "upcoming",
  },
  {
    slug: "zen-14-plage",
    edition: "ÉDITION 14",
    title: "Dimanche ZEN — Édition 14",
    date: "2026-11-29T14:00:00+01:00",
    dateLabel: "29 novembre 2026",
    day: "29",
    month: "NOV",
    time: "13:00 — 22:00",
    venue: { name: "Baie de Loango", city: "Pointe-Noire", country: "Congo" },
    image: cultureImg,
    excerpt: "Édition plage : danse, mode, art et coucher de soleil sur l'Atlantique.",
    lineup: ["Sunset Collective", "Afro Dance Battle", "Marché des créateurs"],
    tickets: [
      { id: "zen", name: "ZEN PASS", price: "12 000 FCFA", perks: ["Accès journée", "Beach lounge"] },
    ],
    status: "upcoming",
  },
];

export const nextEvent = events[0];

export type Experience = {
  key: string;
  title: string;
  text: string;
  image: string;
};

export const experiences: Experience[] = [
  { key: "music", title: "MUSIC", text: "DJ sets, performances live et artistes.", image: musicImg },
  { key: "play", title: "PLAY", text: "Jeux, challenges et compétitions.", image: playImg },
  { key: "culture", title: "CULTURE", text: "Danse, art, mode et talents locaux.", image: cultureImg },
  { key: "food", title: "FOOD", text: "Food corners, découvertes culinaires et expériences gastronomiques.", image: foodImg },
  { key: "community", title: "COMMUNITY", text: "Rencontres, connexions et moments de partage.", image: communityImg },
];

export const dna = [
  { num: "01", title: "RENCONTRER", text: "Des visages, des histoires, une communauté qui grandit chaque dimanche." },
  { num: "02", title: "DÉCOUVRIR", text: "Des talents, des saveurs, des créateurs et des sons nouveaux." },
  { num: "03", title: "VIBRER", text: "La musique, la danse, l'énergie d'un after-noon qui ne retombe jamais." },
  { num: "04", title: "PARTAGER", text: "Une table, un pas de danse, un souvenir. Le reste suit." },
];

// Placeholder figures — remplacer par les données réelles.
export const stats = [
  { value: 45, suffix: "K+", label: "Communauté", placeholder: false },
  { value: 11, suffix: "", label: "Éditions", placeholder: false },
  { value: 24, suffix: "K+", label: "Participants", placeholder: true },
  { value: 3, suffix: "", label: "Villes", placeholder: true },
];

export type GalleryItem = { id: string; image: string; edition: string; alt: string; span: "tall" | "wide" | "square" };

export const galleryItems: GalleryItem[] = [
  { id: "g1", image: heroImg, edition: "ZEN #11", alt: "Foule dansant au coucher du soleil", span: "wide" },
  { id: "g2", image: musicImg, edition: "ZEN #11", alt: "DJ en plein set", span: "tall" },
  { id: "g3", image: foodImg, edition: "ZEN #10", alt: "Food corner du ZEN", span: "square" },
  { id: "g4", image: culture(), edition: "ZEN #10", alt: "Danseuse sur le dancefloor", span: "tall" },
  { id: "g5", image: communityImg, edition: "ZEN #09", alt: "Amis réunis au ZEN", span: "wide" },
  { id: "g6", image: playImg, edition: "ZEN #09", alt: "Jeux et challenges", span: "square" },
  { id: "g7", image: finalCtaImg, edition: "ZEN #11", alt: "Public le soir", span: "wide" },
  { id: "g8", image: nextEditionImg, edition: "ZEN #10", alt: "Lieu du ZEN avant ouverture", span: "square" },
];

function culture() {
  return cultureImg;
}

export const galleryFilters = ["ALL", "ZEN #11", "ZEN #10", "ZEN #09"];

export type JournalPost = {
  slug: string;
  category: "RECAP" | "PEOPLE" | "CULTURE" | "MANIFESTO" | "INTERVIEW";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  body: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "recap-zen-11",
    category: "RECAP",
    title: "Retour sur le dernier Dimanche ZEN",
    excerpt: "Sept heures de musique, deux battles de danse et un coucher de soleil qui a tout emporté.",
    date: "24 août 2026",
    readTime: "4 min",
    image: heroImg,
    body: [
      "On avait promis un dimanche différent. À 14h, les premières basses ont commencé à cogner et le jardin s'est rempli en moins d'une heure.",
      "Le reste appartient à ceux qui étaient là : les challenges, la file devant les food corners, la battle improvisée près du bar, et ce moment où tout le monde a chanté en même temps.",
    ],
  },
  {
    slug: "talents-a-decouvrir",
    category: "PEOPLE",
    title: "Les talents à découvrir",
    excerpt: "Cinq artistes de Pointe-Noire et Brazzaville que la scène ZEN met en lumière cette saison.",
    date: "12 août 2026",
    readTime: "6 min",
    image: cultureImg,
    body: [
      "Chaque édition ouvre sa scène à des artistes qui n'ont pas encore eu leur moment. Voici ceux que nous suivons de près.",
      "Danse, chant, stand-up, production : le talent ne manque pas, seulement les plateformes. Le ZEN en est une.",
    ],
  },
  {
    slug: "la-culture-qui-nous-rassemble",
    category: "CULTURE",
    title: "La culture qui nous rassemble",
    excerpt: "Mode, art, cuisine : comment un dimanche devient un terrain d'expression collective.",
    date: "2 août 2026",
    readTime: "5 min",
    image: communityImg,
    body: [
      "Le ZEN n'est pas seulement une fête. C'est un espace où la création locale se montre, se vend, se transmet.",
      "Des créateurs de mode aux cuisiniers de quartier, chaque édition est une petite ville temporaire.",
    ],
  },
  {
    slug: "manifesto-zen",
    category: "MANIFESTO",
    title: "Ce que nous croyons",
    excerpt: "Le dimanche mérite mieux. Notre manifeste en quelques lignes.",
    date: "18 juillet 2026",
    readTime: "3 min",
    image: playImg,
    body: [
      "Une envie simple : faire du dimanche un moment où l'on se retrouve, où l'on découvre, où l'on partage et où l'on profite.",
      "Pas de formule magique. De la musique choisie, de la bonne nourriture, de l'espace, et des gens qui ont envie d'être là.",
    ],
  },
];

export const journalFilters = ["ALL", "RECAP", "PEOPLE", "CULTURE", "MANIFESTO", "INTERVIEW"];

export type Partner = { name: string; category: string };

export const partners: Partner[] = [
  { name: "ATLANTIC SOUND", category: "Audio" },
  { name: "MAISON LOANGO", category: "Lifestyle" },
  { name: "KOSSA DRINKS", category: "Boissons" },
  { name: "STUDIO 242", category: "Média" },
  { name: "BAOBAB TELECOM", category: "Télécom" },
  { name: "NGOLA MOTORS", category: "Mobilité" },
];

export const partnerBenefits = [
  { title: "VISIBILITÉ", text: "Présence sur site, dispositifs signalétiques et communication digitale." },
  { title: "ACTIVATION", text: "Un espace de marque pensé comme une expérience, pas comme un stand." },
  { title: "EXPÉRIENCE", text: "Rencontre directe avec une communauté urbaine engagée." },
  { title: "CONTENU", text: "Photos, vidéos et formats éditoriaux produits par notre studio." },
];

export const vendorCategories = ["Food", "Drinks", "Fashion", "Art", "Beauty", "Lifestyle", "Services"];
