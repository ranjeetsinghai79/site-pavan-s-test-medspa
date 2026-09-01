import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Pavan's Test MedSpa",
    tagline: "Refining beauty through medical science.",
    phone: "(415) 606-0079",
    phoneHref: "tel:+14156060079",
    email: "pavan.harati@gmail.com",
    address: "123 Test St, San Francisco, CA",
    city: "San Francisco",
    serviceAreas: ["San Francisco"],
    since: "2019",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "slate",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Botox Injections", desc: "Smooth fine lines and wrinkles for a refreshed, youthful appearance.", urgent: false },
    { icon: "heart", title: "Dermal Fillers", desc: "Restore volume and enhance facial contours for a naturally sculpted look.", urgent: false },
    { icon: "droplets", title: "HydraFacial Treatment", desc: "Deeply cleanse, exfoliate, and hydrate your skin for an instant glow.", urgent: false },
    { icon: "zap", title: "Laser Hair Removal", desc: "Achieve permanently smooth, hair-free skin with our advanced laser technology.", urgent: false },
    { icon: "shield-check", title: "Microneedling", desc: "Stimulate collagen production to improve skin texture, tone, and firmness.", urgent: false },
    { icon: "star", title: "CoolSculpting", desc: "Eliminate stubborn fat cells non-invasively with this body contouring treatment.", urgent: false }
  ],

  testimonials: [
    { name: "Jessica L.", location: "San Francisco", stars: 5, text: "I was so nervous about getting Botox for the first time, but the team here was incredibly professional and reassuring. They explained the entire process, and the results are so natural. My forehead lines have vanished, and I just feel more confident. I can't believe I waited this long!" },
    { name: "Samantha R.", location: "San Francisco", stars: 5, text: "My skin has never felt this clean! The HydraFacial treatment was a game-changer for my pre-event prep. The entire experience was relaxing, and the results were immediate. My face was glowing for days afterward. It's worth every penny for that level of deep clean and hydration." },
    { name: "Emily C.", location: "San Francisco", stars: 5, text: "After two kids, I had some stubborn belly fat that just wouldn't budge. I decided to try CoolSculpting here, and I am absolutely thrilled. The procedure was comfortable, and over a few months, I saw a noticeable reduction. It's given me my confidence back in a swimsuit." }
  ],

  trustBadges: [
    "Board-Certified Injectors", "FDA-Approved Treatments", "Free Consultations", "Medical-Grade Products", "Licensed & Insured"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Procedures Performed", suffix: "+", decimals: 0 },
    { value: 10, label: "Yrs Combined Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award",       title: "Board-Certified Injectors", desc: "Our team consists of highly trained, board-certified medical professionals dedicated to your safety and results." },
    { icon: "shield-check",title: "FDA-Approved Treatments",  desc: "We exclusively use treatments and products that are rigorously tested and approved by the FDA for safety and efficacy." },
    { icon: "dollar-sign", title: "Free Consultations",       desc: "Begin your journey with a complimentary, no-obligation consultation to discuss your aesthetic goals with an expert." },
    { icon: "heart",       title: "Personalized Plans",       desc: "We create a unique treatment plan tailored to your specific anatomy, concerns, and desired outcomes." },
    { icon: "sparkles",    title: "Medical-Grade Products",   desc: "Achieve superior results with our curated selection of powerful, medical-grade skincare and treatment products." },
    { icon: "briefcase",   title: "State-of-the-Art Facility",desc: "Our clinic is equipped with the latest technology in a modern, sterile, and comfortable environment." }
  ],

  formServiceOptions: ["Botox Injections", "Dermal Fillers", "HydraFacial Treatment", "Laser Hair Removal", "Microneedling", "CoolSculpting"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges