// Central data source for KK Group website.
// Update names/descriptions here when real business names are confirmed.

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/companies", label: "Our Businesses" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const companies = [
  {
    id: "jewellery",
    num: "01",
    name: "karan Kothari Jewellers",
    href: "/companies#jewellery",
    website: "https://www.karankotharijewellers.com/",
    sector: "Fine Jewellery",
    headline: "Where Craftsmanship Meets Heritage",
    description:
      "For over two decades, KK Jewellery has crafted fine ornaments, diamond collections, and bespoke pieces that celebrate life's precious moments.",
    facts: ["Custom Designs", "Diamond Certified", "Heritage Collections"],
    capabilities: [
      "Custom Jewellery Design",
      "Diamond & Gemstone Collections",
      "Bridal Jewellery",
      "Gold Jewellery",
      "Repair & Restoration",
    ],
    metrics: [
      { value: "25+", label: "Years" },
      { value: "10,000+", label: "Designs" },
      { value: "50+", label: "Artisans" },
    ],
    image: "/hero/hero-1.jpg",
  },
  {
    id: "warehousing",
    num: "02",
    name: "True value Spaces",
    href: "/companies#warehousing",
    website: "", // add URL when available
    sector: "Industrial Logistics",
    headline: "Industrial-Grade Storage at Scale",
    description:
      "Strategically located, modern warehousing facilities equipped for cold chain, bulk storage, and last-mile logistics operations across India.",
    facts: ["Multi-city Presence", "Cold Chain Capable", "24/7 Operations"],
    capabilities: [
      "Multi-tenant Industrial Warehouses",
      "Cold Chain Storage",
      "Bonded Warehousing",
      "24/7 Security & Monitoring",
      "Loading Dock Infrastructure",
    ],
    metrics: [
      { value: "5+", label: "Locations" },
      { value: "500K+", label: "Sq Ft" },
      { value: "99.8%", label: "Uptime" },
    ],
    image: "/hero/hero-2.jpg",
  },
  {
    id: "business-parks",
    num: "03",
    name: "Karan Kothari Business Parks",
    href: "/companies#business-parks",
    website: "https://www.kkbusinesspark.com/",
    sector: "Commercial Real Estate",
    headline: "Premium Workspaces for India's Growth Story",
    description:
      "World-class business parks and commercial complexes designed for the enterprise businesses of today and tomorrow.",
    facts: ["Grade-A Offices", "Modern Amenities", "Sustainable Design"],
    capabilities: [
      "Grade-A Office Spaces",
      "Mixed-Use Commercial Complexes",
      "Corporate Campuses",
      "Retail High Streets",
      "Managed Workspaces",
    ],
    metrics: [
      { value: "3", label: "Parks" },
      { value: "1M+", label: "Sq Ft" },
      { value: "200+", label: "Tenants" },
    ],
    image: "/hero/hero-1.jpg",
  },
];

export const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "3", label: "Business Verticals" },
  { value: "5000+", label: "Happy Clients" },
  { value: "2000+", label: "Team Members" },
];

export const values = [
  {
    title: "Integrity",
    description: "Every decision is rooted in transparency and ethical conduct.",
  },
  {
    title: "Excellence",
    description:
      "We set high standards and relentlessly pursue them across all businesses.",
  },
  {
    title: "Long-term Vision",
    description: "We build for generations, not quarters.",
  },
  {
    title: "People First",
    description:
      "Our teams, partners, and communities are at the heart of what we do.",
  },
];

export const footerLinks = {
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
  Businesses: [
    { href: "/companies#jewellery", label: "KK Jewellery" },
    { href: "/companies#warehousing", label: "KK Warehousing" },
    { href: "/companies#business-parks", label: "KK Business Parks" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
};
