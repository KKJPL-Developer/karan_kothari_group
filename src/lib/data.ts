export type BusinessContact = {
  phone: string;
  email: string;
};

export type Photo = {
  src: string;
  alt: string;
};

export type Business = {
  slug: string;
  /** Internal Group-site route, e.g. /ventures/jewellery */
  detailPath: string;
  name: string;
  category: string;
  heroLabel: string;
  statement: string;
  description: string;
  /** The business's own public website. */
  href: string;
  image: string;
  imageAlt: string;
  gallery: Photo[];
  contact: BusinessContact;
  locations: string[];
};

export const businesses: Business[] = [
  {
    slug: "jewellery",
    detailPath: "/ventures/jewellery",
    name: "Karan Kothari Jewellers",
    category: "Jewellery",
    heroLabel: "Jewellery",
    statement: "Where craftsmanship, trust and timeless design come together.",
    description:
      "A jewellery house built on transparency and an enduring relationship with every customer — gold, diamonds, silver and platinum shaped with an eye for the timeless rather than the trending.",
    href: "https://karankotharijewellers.com/",
    image: "/images/jewellery.jpg",
    imageAlt: "Traditional gold necklace set with rubies, laid on black",
    gallery: [
      {
        src: "/images/jewellery-fresh.jpg",
        alt: "Gold bangles set with rubies, reflected on a dark surface",
      },
      { src: "/images/jewellery-detail.jpg", alt: "Close-up of a diamond halo ring" },
      { src: "/images/legacy.jpg", alt: "Pearl necklace resting in a jewellery box" },
    ],
    contact: { phone: "1800 210 7776", email: "info@kkjpl.com" },
    locations: ["Nagpur", "Chandrapur", "Mumbai", "Yavatmal", "Amravati"],
  },
  {
    slug: "business-park",
    detailPath: "/ventures/business-park",
    name: "Karan Kothari Business Park",
    category: "Commercial Real Estate",
    heroLabel: "Business Park",
    statement: "Creating spaces designed for business, visibility and growth.",
    description:
      "A modern commercial destination in Nagpur, planned around connectivity and accessibility — infrastructure built for businesses that intend to stay and grow.",
    href: "https://www.kkbusinesspark.com/",
    image: "/images/businesspark.jpg",
    imageAlt: "Modern glass commercial towers viewed from below",
    gallery: [
      {
        src: "/images/businesspark-fresh.jpg",
        alt: "Bright modern office interior with navy cabinetry and wood accents",
      },
      { src: "/images/office.jpg", alt: "Modern office corridor with clean architectural lines" },
      {
        src: "/images/journey-present.jpg",
        alt: "Warm-lit commercial interior with open circulation space",
      },
    ],
    contact: { phone: "+91-776-899-1133", email: "sales@kkbp.in" },
    locations: ["Nagpur"],
  },
  {
    slug: "warehousing",
    detailPath: "/ventures/warehousing",
    name: "True Value Spaces",
    category: "Warehousing & Logistics Infrastructure",
    heroLabel: "Warehousing",
    statement: "Modern infrastructure built for dependable business operations.",
    description:
      "Warehouse parks and storage infrastructure engineered for scale and reliability — from general warehousing to cold-chain readiness, supported end to end.",
    href: "https://truevalue.space/",
    image: "/images/warehouse.jpg",
    imageAlt: "Warehouse aisle lined with tall racking, fully stocked",
    gallery: [
      {
        src: "/images/warehouse-fresh.jpg",
        alt: "Symmetrical warehouse aisle lined with wrapped pallets",
      },
      {
        src: "/images/warehouse2.jpg",
        alt: "Upward view of warehouse racking stacked with wrapped pallets",
      },
    ],
    contact: { phone: "+91 9371661575", email: "info@truevalue.space" },
    locations: [
      "Nagpur",
      "Ketapar",
      "Karli",
      "Chinchbhavan",
      "Mathani",
      "Waddhamna",
      "Sambhaji Nagar",
    ],
  },
];

export const groupImages = {
  about: "/images/about.jpg",
  aboutAlt: "Minimal gallery interior with framed artwork",
};

export type PrincipleIcon = "trust" | "quality" | "growth" | "people" | "generations";

export type Principle = {
  title: string;
  text: string;
  icon: PrincipleIcon;
};

export const principles: Principle[] = [
  {
    title: "Trust over transactions",
    text: "Every business under the Group is built on relationships that are meant to outlast a single sale.",
    icon: "trust",
  },
  {
    title: "Quality over shortcuts",
    text: "Materials, spaces and infrastructure are chosen for how they hold up over years, not how they photograph on day one.",
    icon: "quality",
  },
  {
    title: "Growth with responsibility",
    text: "New ventures are added deliberately — each one expected to stand on the same foundation as the last.",
    icon: "growth",
  },
  {
    title: "People at the centre",
    text: "Customers, tenants, partners and teams are treated as the reason the Group exists, not a means to an end.",
    icon: "people",
  },
  {
    title: "Built for generations",
    text: "Decisions are made with the next decade in mind, not the next quarter.",
    icon: "generations",
  },
];

export type Milestone = {
  period: "Past" | "Present" | "Future";
  label: string;
  text: string;
  image: string;
  imageAlt: string;
};

export const milestones: Milestone[] = [
  {
    period: "Past",
    label: "A foundation in trust",
    text: "The Karan Kothari story began in jewellery — an industry where reputation is earned one relationship at a time.",
    image: "/images/legacy.jpg",
    imageAlt: "Pearl necklace resting in a jewellery box",
  },
  {
    period: "Present",
    label: "A growing portfolio",
    text: "That foundation now supports a wider portfolio — commercial real estate and warehousing infrastructure built with the same long-term view.",
    image: "/images/journey-present.jpg",
    imageAlt: "Warm-lit modern commercial interior with clean architectural depth",
  },
  {
    period: "Future",
    label: "What comes next",
    text: "The Group continues to explore businesses and infrastructure that create lasting value in the communities it operates in.",
    image: "/images/journey-future.jpg",
    imageAlt: "Wide architectural horizon at dawn",
  },
];

export type FamilyMember = {
  name: string;
  image: string;
  tier: "founder" | "legacy" | "director";
  /** CSS object-position, for photos where the face isn't centered. */
  focus?: string;
};

export const family: FamilyMember[] = [
  {
    name: "Maganmal Ji Kothari",
    image: "/images/Shri Maganmal Ji Kothari - Founder KKJPL.jpg",
    tier: "founder",
    focus: "center 38%",
  },
  { name: "Narendra Kothari", image: "/images/Narendra Kothari.jpg", tier: "legacy" },
  { name: "Suresh Kothari", image: "/images/Suresh kothari.jpg", tier: "legacy" },
  {
    name: "Mahesh Kothari",
    image: "/images/Mahesh kothari.jpg",
    tier: "legacy",
    focus: "center 20%",
  },
  {
    name: "Chandra Kothari",
    image: "/images/ChandraKothari-cropped.jpg",
    tier: "legacy",
  },
  { name: "Karan Kothari", image: "/images/Karan kothari.JPG", tier: "director" },
  { name: "Nitin Kothari", image: "/images/Nitin kothari.jpg", tier: "director" },
  {
    name: "Pradeep Kothari",
    image: "/images/Pradeep kothari.jpg",
    tier: "director",
    focus: "center 25%",
  },
  {
    name: "Ushabh Kothari",
    image: "/images/Ushabh kothari.JPG",
    tier: "director",
    focus: "center 12%",
  },
];

export const presence = {
  headquarters: "Nagpur",
  region: "Maharashtra",
  text: "The Group is headquartered in Nagpur and its businesses now reach across Maharashtra — from jewellery showrooms to warehousing infrastructure.",
};

export const generalEnquiries = {
  label: "General Enquiries",
  email: "info@kkjpl.com",
  phone: "+91 6357585960",
  address: "1st Floor, Nikalas Mandir Rd, Itwari, Nagpur, Maharashtra - 440002",
};
