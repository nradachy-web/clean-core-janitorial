/**
 * Clean Core Janitorial — single source of truth for site content.
 * Every fact is verified from the live site, Google Business Profile, or BBB
 * (see /tmp/cleancore_assets/BRIEF.md). CONFIRM items are set to the most
 * defensible value and noted inline. Commercial (B2B) only — no residential.
 */

export const site = {
  name: "Clean Core Janitorial",
  shortName: "Clean Core",
  tagline: "A spotless workplace, handled.",
  phone: "(616) 300-1515",
  phoneHref: "tel:+16163001515",
  email: "office@jocleaningservice.net",
  cityLine: "Grand Rapids, MI",
  region: "West & Central Michigan",
  // owner first name only — surname not on their site (CONFIRM before printing full name)
  owner: "Jovanni",
  domain: "cleancorejanitorial.com",
  social: {
    facebook: "https://www.facebook.com/J.Ocleaningservice10/",
    google: "https://www.google.com/maps/place/?cid=15165970240546442557",
  },
} as const;

/** Short proof points for the trust strip. No star badge — 4.2/5 is thin; we lead
 *  with named clients + verbatim 5-star testimonials and run a review push first. */
export const trustPoints = [
  "Family & Latino-owned",
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
      "Healthcare spaces demand more than a wipe-down. We follow hygiene-critical protocols with medical-grade sanitization and disinfection for exam rooms, waiting areas, restrooms, and high-touch surfaces, so patients and staff stay protected. Trusted by Kent County Clinic and Mitten State Pediatric Therapy.",
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
      "From the dining room to the line, we handle the grease and grime a busy kitchen builds up. Front-of-house detailing, back-of-house degreasing, restrooms, and floors, on a schedule that keeps your health inspector and your guests happy. Trusted by La Familia Jalisco.",
    features: ["Kitchen degreasing", "Dining room detailing", "Restroom sanitizing", "Hard-floor care"],
    photo: "/photos/portrait-2.jpg",
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
    photo: "/photos/portrait-3.jpg",
    icon: "gym",
  },
  {
    slug: "retail",
    name: "Retail Store Cleaning",
    short: "Sales floors that shine",
    blurb:
      "Customized cleaning for sales floors, offices, and restrooms so the shopping experience stays sharp.",
    detail:
      "First impressions sell. We keep sales floors, fitting rooms, offices, and restrooms clean and professional so customers see a store that cares about the details. Trusted by Air-Caire.",
    features: ["Sales floor care", "Glass & entryways", "Restrooms", "Flexible scheduling"],
    photo: "/photos/portrait-4.jpg",
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
    photo: "/photos/portrait-5.jpg",
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
    photo: "/photos/hero-scrubber.jpg",
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
    photo: "/photos/band-wide-2.jpg",
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
    title: "Bilingual, family-owned team",
    desc: "A local, family and Latino-owned crew with bilingual (English/Spanish) communication your team will appreciate.",
  },
];

export type Client = { name: string; vertical: string; note: string };

/** All 7 appear as named case studies on the client's own "Our Work" page. */
export const clients: Client[] = [
  { name: "Master Finish Company", vertical: "Industrial / Office", note: "Two large buildings, multiple offices, restrooms, and break rooms." },
  { name: "Mitten State Pediatric Therapy", vertical: "Pediatric / Medical", note: "A pristine environment for children's therapy spaces." },
  { name: "Kent County Clinic", vertical: "Medical", note: "Comprehensive care to meet a new clinic's cleanliness standards." },
  { name: "La Familia Jalisco", vertical: "Restaurant", note: "Deep clean of a new location with heavy kitchen grease." },
  { name: "Samaritas", vertical: "Nonprofit / Office", note: "Offices, break rooms, and conference areas, cleaned six times a week." },
  { name: "Betten Baker", vertical: "Auto Dealership", note: "Offices, break rooms, and restrooms across the dealership." },
  { name: "Air-Caire", vertical: "Retail / Medical Supply", note: "Regular cleaning of retail spaces, offices, and restrooms." },
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

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/why-us", label: "Why Us" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Get a Quote" },
];
