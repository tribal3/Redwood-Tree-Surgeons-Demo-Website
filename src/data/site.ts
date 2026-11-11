export const business = {
  name: "Redwood Tree Surgeons",
  tagline: "Professional Tree Care. Reliable Service. A Spotless Finish.",
  phoneDisplay: "+44 7930 554211",
  phoneHref: "tel:+447930554211",
  address: {
    line1: "19 Bridge Farm Drive",
    line2: "Maghull, Liverpool",
    line3: "L31 9AL",
    country: "United Kingdom",
  },
  facebook: "https://www.facebook.com/Redwoodtreesurgeons",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Redwood+Tree+Surgeons+19+Bridge+Farm+Drive+Maghull+Liverpool+L31+9AL",
  reviewsSearch:
    "https://www.google.com/maps/search/?api=1&query=Redwood+Tree+Surgeons+Maghull+Liverpool",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    id: "tree-removal",
    title: "Tree Removal",
    description:
      "Professional removal of unwanted, damaged or unsuitable trees, carried out carefully and with respect for your property.",
    image: "/images/service-tree-removal.jpg",
    alt: "A large uprooted tree being cleared from a residential area",
  },
  {
    id: "tree-felling",
    title: "Tree Felling",
    description:
      "Controlled tree felling and removal carried out with appropriate care, planning and attention to the surrounding space.",
    image: "/images/service-tree-felling.jpg",
    alt: "Close-up of a chainsaw cutting through a tree trunk during felling work",
  },
  {
    id: "tree-pruning",
    title: "Tree Pruning & Maintenance",
    description:
      "Improve tree structure, appearance and ongoing health through appropriate, considered pruning and maintenance.",
    image: "/images/service-pruning.jpg",
    alt: "Tree surgeon using a pole saw to prune branches",
  },
  {
    id: "crown-reduction",
    title: "Crown Reduction & Thinning",
    description:
      "Manage tree size and canopy density while maintaining a natural shape and the character of the tree.",
    image: "/images/service-crown-reduction.jpg",
    alt: "Professional arborist working high in the crown of a mature tree",
  },
  {
    id: "stump-grinding",
    title: "Stump Grinding",
    description:
      "Remove remaining tree stumps and help restore usable, attractive garden space after tree work is complete.",
    image: "/images/service-stump-grinding.jpg",
    alt: "Large tree stump in a residential garden ready for grinding",
  },
  {
    id: "hedge-cutting",
    title: "Hedge Cutting & Reduction",
    description:
      "Maintain neat, attractive hedges through professional trimming, shaping and reduction throughout the year.",
    image: "/images/service-hedge-cutting.jpg",
    alt: "Gardener trimming a hedge with a hedge trimmer in a sunny garden",
  },
];

export const serviceOptions = [
  ...services.map((service) => service.title),
  "Tree survey / advice",
  "Other / not sure",
];

export type Benefit = {
  title: string;
  description: string;
  icon: "clock" | "leaf" | "heart" | "shield" | "sparkles" | "star";
};

export const benefits: Benefit[] = [
  {
    title: "Reliable & Punctual",
    description:
      "A professional team that respects your time and turns up when expected.",
    icon: "clock",
  },
  {
    title: "Clean & Tidy Finish",
    description:
      "Branches, foliage and garden waste are cleared appropriately, leaving your property neat.",
    icon: "sparkles",
  },
  {
    title: "Friendly Local Service",
    description:
      "Approachable professionals who listen and understand what you need from your garden.",
    icon: "heart",
  },
  {
    title: "Professional Workmanship",
    description:
      "Careful working practices and attention to detail on every tree and every visit.",
    icon: "leaf",
  },
  {
    title: "Fully Insured",
    description:
      "Publicly reported as fully insured, giving you confidence from the first conversation.",
    icon: "shield",
  },
  {
    title: "Customer Satisfaction",
    description:
      "A strong local reputation built on positive feedback from customers across the area.",
    icon: "star",
  },
];

export type GalleryCategory =
  | "All"
  | "Tree Removal"
  | "Pruning"
  | "Hedge Work"
  | "Stump Grinding";

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Tree Removal",
  "Pruning",
  "Hedge Work",
  "Stump Grinding",
];

export type GalleryItem = {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  image: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Controlled tree removal",
    category: "Tree Removal",
    image: "/images/hero-arborist.jpg",
    alt: "Tree surgeon cutting through a mature tree trunk with sawdust flying",
  },
  {
    id: 2,
    title: "Large tree cleared",
    category: "Tree Removal",
    image: "/images/gallery-02.jpg",
    alt: "Cut branches and sections of a large tree cleared from a garden",
  },
  {
    id: 3,
    title: "Winter pruning",
    category: "Pruning",
    image: "/images/gallery-03.jpg",
    alt: "Arborist working high in the branches of a tall tree during winter",
  },
  {
    id: 4,
    title: "Detail pruning",
    category: "Pruning",
    image: "/images/gallery-04.jpg",
    alt: "Garden shears cutting green branches during a pruning job",
  },
  {
    id: 5,
    title: "Hedge reduction",
    category: "Hedge Work",
    image: "/images/gallery-05.jpg",
    alt: "Gardener reducing a large hedge with a hedge trimmer",
  },
  {
    id: 6,
    title: "Neat hedge finish",
    category: "Hedge Work",
    image: "/images/gallery-06.jpg",
    alt: "Close view of a hedge being trimmed to a neat finish",
  },
  {
    id: 7,
    title: "Stump grinding",
    category: "Stump Grinding",
    image: "/images/gallery-07.jpg",
    alt: "Tree stump cut low with fresh sawdust around it after grinding",
  },
  {
    id: 8,
    title: "Garden cleared",
    category: "Tree Removal",
    image: "/images/gallery-08.jpg",
    alt: "A neat, well-kept garden with a lawn and mature trees after clearance work",
  },
  {
    id: 9,
    title: "Branches removed",
    category: "Tree Removal",
    image: "/images/gallery-09.jpg",
    alt: "Tree branches being loaded into a wood chipper at a residential property",
  },
];

export type ReviewTheme = {
  title: string;
  description: string;
};

export const reviewThemes: ReviewTheme[] = [
  {
    title: "Friendly & professional",
    description:
      "Customers consistently describe the team as friendly, approachable and professional to deal with.",
  },
  {
    title: "Punctual & reliable",
    description:
      "Feedback regularly highlights the team arriving on time and carrying out the work as agreed.",
  },
  {
    title: "Excellent tree removal",
    description:
      "Tree removal work is repeatedly praised for being completed carefully and professionally.",
  },
  {
    title: "Thorough cleanup",
    description:
      "Branches, foliage and garden waste are cleared away, leaving the garden neat and tidy.",
  },
  {
    title: "A spotless finish",
    description:
      "A clean, tidy finish is one of the things customers mention most often after a visit.",
  },
  {
    title: "Local & trusted",
    description:
      "A family-run team with a strong local reputation in Maghull and the surrounding area.",
  },
];

export const ratings = [
  {
    source: "Google",
    score: "4.9",
    count: "30 Google reviews",
    href: business.reviewsSearch,
  },
  {
    source: "Yell",
    score: "5.0",
    count: "32 Yell ratings",
    href: "https://www.yell.com/",
  },
] as const;
