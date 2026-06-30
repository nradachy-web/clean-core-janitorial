/**
 * Clean Core Janitorial — single source of truth for site content.
 * Verified from the live site, GBP, or BBB. Per client request (2026-06-30):
 * no "family owned" claims, no named client list, no old J.O-branded photos.
 * Commercial (B2B) only — no residential.
 */

export const site = {
  name: "Clean Core Janitorial",
  shortName: "Clean Core",
  tagline: "A spotless workplace, handled.",
  phone: "(616) 300-1515",
  phoneHref: "tel:+16163001515",
  email: "jovanni@cleancorejanitorial.com",
  cityLine: "Grand Rapids, MI",
  region: "West & Central Michigan",
  owner: "Jovanni",
  domain: "cleancorejanitorial.com",
  social: {
    facebook: "https://www.facebook.com/J.Ocleaningservice10/",
    google: "https://www.google.com/maps/place/?cid=15165970240546442557",
  },
} as const;

/** Short proof points for the trust strip. */
export const trustPoints = [
  "Locally & Latino-owned",
  "Bilingual team (EN/ES)",
  "Trained, vetted & insured",
  "100% satisfaction guarantee",
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  blurb: string;
  detail: string;
  features: string[];
  photo: string;
  icon: string; // key consumed by <ServiceIcon />
};

export const services: Service[] = [
  {
    slug: "office",
    name: "Office & Corporate Cleaning",
    short: "Recurring janitorial for workplaces",
    blurb:
      "Reliable, after-hours cleaning for office buildings, workstations, restrooms, break rooms, and common areas.",
    detail:
      "We take cleaning off your team's plate with dependable recurring janitorial service, scheduled around your operations. Workstations, restrooms, break rooms, glass, and common areas, handled by a vetted crew so your people walk into a fresh workplace every morning.",
    features: ["Workstations & common areas", "Restrooms & break rooms", "After-hours scheduling", "Recurring contracts"],
    photo: "/photos/office-1.jpg",
    icon: "office",
  },
  {
    slug: "medical",
    name: "Medical & Dental Office Cleaning",
    short: "Hygiene-critical sanitization",
    blurb:
      "Medical-grade cleaning and disinfection for clinics and practices, keeping patient and staff areas safe.",
    detail:
      "Healthcare spaces demand more than a wipe-down. We follow hygiene-critical protocols with medical-grade sanitization and disinfection for exam rooms, waiting areas, restrooms, and high-touch surfaces, so patients and staff stay protected.",
    features: ["Medical-grade disinfection", "High-touch surface focus", "Exam & waiting rooms", "Compliant protocols"],
    photo: "/photos/medical-room.jpg",
    icon: "medical",
  },
  {
    slug: "restaurant",
    name: "Restaurant & Kitchen Cleaning",
    short: "Front and back of house",
    blurb:
      "Degreasing and deep cleaning for dining rooms and kitchens that take a beating every service.",
    detail:
      "From the dining room to the line, we handle the grease and grime a busy kitchen builds up. Front-of-house detailing, back-of-house degreasing, restrooms, and floors, on a schedule that keeps your health inspector and your guests happy.",
    features: ["Kitchen degreasing", "Dining room detailing", "Restroom sanitizing", "Hard-floor care"],
    photo: "/photos/band-wide-5.jpg",
    icon: "restaurant",
  },
  {
    slug: "gym",
    name: "Gym & Fitness Cleaning",
    short: "High-touch sanitizing",
    blurb:
      "Sanitized equipment and shared spaces that keep members coming back instead of churning.",
    detail:
      "A clean gym keeps members. We sanitize equipment, mats, locker rooms, and shared surfaces with the high-touch attention fitness spaces need, knocking out the odor and grime that quietly drive cancellations.",
    features: ["Equipment sanitizing", "Locker rooms & showers", "High-touch surfaces", "Odor control"],
    photo: "/photos/band-wide-1.jpg",
    icon: "gym",
  },
  {
    slug: "retail",
    name: "Retail Store Cleaning",
    short: "Sales floors that shine",
    blurb:
      "Customized cleaning for sales floors, offices, and restrooms so the shopping experience stays sharp.",
    detail:
      "First impressions sell. We keep sales floors, fitting rooms, offices, and restrooms clean and professional so customers see a store that cares about the details.",
    features: ["Sales floor care", "Glass & entryways", "Restrooms", "Flexible scheduling"],
    photo: "/photos/portrait-5.jpg",
    icon: "retail",
  },
  {
    slug: "school",
    name: "School & Educational Cleaning",
    short: "Healthy learning spaces",
    blurb:
      "Cleaning for high-traffic classrooms and facilities where messes pile up fast through the day.",
    detail:
      "Classrooms, hallways, cafeterias, and restrooms take heavy traffic every single day. We keep learning environments healthy and presentable with thorough, consistent cleaning and disinfection of the surfaces students and staff touch most.",
    features: ["Classrooms & hallways", "Cafeteria & restrooms", "Disinfection", "Daily or nightly service"],
    photo: "/photos/band-wide-4.jpg",
    icon: "school",
  },
  {
    slug: "industrial",
    name: "Industrial & Facility Cleaning",
    short: "Manufacturing & warehouses",
    blurb:
      "Heavier soils, larger square footage, and safety-aware cleaning for industrial job sites.",
    detail:
      "Manufacturing and warehouse floors come with bigger square footage, heavier soils, and real safety considerations. We bring the right equipment and a trained crew to keep your facility clean, safe, and presentable without slowing your operation.",
    features: ["Warehouse floor care", "Heavy-soil cleaning", "Safety-aware crews", "Large square footage"],
    photo: "/photos/office-2.jpg",
    icon: "industrial",
  },
  {
    slug: "municipal",
    name: "Municipal & Government Cleaning",
    short: "Public buildings",
    blurb:
      "Dependable cleaning for town halls and public buildings under constant foot traffic.",
    detail:
      "Public buildings see nonstop foot traffic, and the public notices a clean one. We provide steady, accountable janitorial service for municipal offices, town halls, and government facilities, with the reliability a public contract requires.",
    features: ["High-traffic lobbies", "Public restrooms", "Offices & meeting rooms", "Accountable service"],
    photo: "/photos/band-wide-3.jpg",
    icon: "municipal",
  },
];

/** Task-based capabilities surfaced from their quote form (safe to list). */
export const capabilities = [
  "Floor & carpet care",
  "Strip & wax",
  "Window cleaning",
  "Restroom sanitizing",
  "Trash collection & removal",
  "Dusting & detailing",
  "Kitchen & appliance cleaning",
  "Disinfection services",
  "Day porter service",
];

export const whyUs = [
  {
    title: "100% Satisfaction Guarantee",
    desc: "We don't stop until you're completely satisfied. If something's missed, we make it right.",
  },
  {
    title: "Trained, vetted & insured",
    desc: "Every cleaner is thoroughly vetted for experience and reliability, and trained on current methods and safety.",
  },
  {
    title: "Eco-friendly & enzyme-based",
    desc: "We use environmentally responsible, enzyme-based cleaning agents that are tough on grime, easy on your space.",
  },
  {
    title: "Bilingual, locally owned team",
    desc: "A local, Latino-owned crew with bilingual (English/Spanish) communication your team will appreciate.",
  },
];

export type Review = { name: string; text: string; when: string };

/** Verbatim, all 5-star, verified from the live Google profile. */
export const reviews: Review[] = [
  {
    name: "Richard Marshall",
    when: "Office cleaning",
    text:
      "Jovanni and team made the transition easy and performed swiftly. Having a bilingual team put my employees at ease, knowing communication of needs was strong. We're happy to have a new relationship and our work areas are much cleaner than with previous vendors.",
  },
  {
    name: "Katelinne Leonard",
    when: "Recurring service",
    text:
      "Jovanni is awesome to deal with and does a great job. His service is such a great value, and he really goes the extra mile taking care of your business. Give Clean Core a chance to clean your business and you'll never choose another cleaning company again.",
  },
  {
    name: "Brenda Martinez",
    when: "Office detail clean",
    text:
      "Jovanni did such an amazing job cleaning my office and bathroom areas. I needed some detailed cleaning and he delivered. He took his time and made everything look spotless. I'll definitely be hiring them again.",
  },
];

export const serviceArea = {
  cities: ["Grand Rapids", "Lansing", "Jackson", "Flint", "Midland", "Ann Arbor"],
  blurb:
    "Commercial cleaning across West and Central Michigan, with crews serving the greater Grand Rapids, Lansing, Jackson, Flint, Midland, and Ann Arbor areas.",
};

/** Brand-neutral photos of real spaces we maintain (no people / no old branding). */
export const gallery = [
  { src: "/photos/band-wide-2.jpg", alt: "Freshly cleaned corporate office with workstations" },
  { src: "/photos/band-wide-4.jpg", alt: "Bright, spotless office corridor" },
  { src: "/photos/medical-room.jpg", alt: "Sanitized medical exam room" },
  { src: "/photos/office-1.jpg", alt: "Clean office hallway with polished floors" },
  { src: "/photos/portrait-1.jpg", alt: "Tidy open office workspace" },
  { src: "/photos/portrait-4.jpg", alt: "Spotless commercial restroom" },
  { src: "/photos/portrait-5.jpg", alt: "Clean retail reception area" },
  { src: "/photos/band-wide-1.jpg", alt: "Maintained aquatic and fitness facility" },
  { src: "/photos/band-wide-3.jpg", alt: "Clean conference room" },
  { src: "/photos/band-wide-5.jpg", alt: "Conference room cleaned and reset" },
  { src: "/photos/office-2.jpg", alt: "Clean locker and facility area" },
  { src: "/photos/portrait-2.jpg", alt: "Sanitized office hallway" },
  { src: "/photos/portrait-3.jpg", alt: "Clean meeting room" },
];

/** Careers form options. */
export const shiftOptions = ["Day", "Evening", "Overnight", "Weekends", "Flexible"];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/why-us", label: "Why Us" },
  { href: "/service-area", label: "Service Area" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Get a Quote" },
];
