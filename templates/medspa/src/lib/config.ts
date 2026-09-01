import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Pavan's Test MedSpa",
    tagline: "Elevating beauty through medical science.",
    phone: "(415) 606-0079",
    phoneHref: "tel:+14156060079",
    email: "pavan.harati@gmail.com",
    address: "123 Test St",
    city: "San Francisco",
    serviceAreas: ["San Francisco"],
    since: "2018",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "slate",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Botox Injections", desc: "Smooths dynamic wrinkles for a refreshed, youthful appearance.", urgent: false },
    { icon: "heart", title: "Dermal Fillers", desc: "Restores facial volume and contours for a natural, lifted look.", urgent: false },
    { icon: "zap", title: "Laser Hair Removal", desc: "Achieves permanently smooth, hair-free skin with advanced laser technology.", urgent: false },
    { icon: "droplets", title: "Chemical Peels", desc: "Reveals brighter, more even-toned skin by exfoliating damaged layers.", urgent: false },
    { icon: "shield-check", title: "Microneedling", desc: "Stimulates natural collagen production for firmer, smoother skin texture.", urgent: false },
    { icon: "thermometer", title: "CoolSculpting", desc: "Eliminates stubborn fat cells non-invasively by freezing them away.", urgent: false }
  ],

  testimonials: [
    { name: "Jessica L.", location: "San Francisco, CA", stars: 5, text: "I was nervous about getting Botox for the first time, but the team at Pavan's made me feel so comfortable. The injector was incredibly knowledgeable and explained everything. My forehead lines are gone, and the result is so natural. I feel more confident than I have in years!" },
    { name: "Michael P.", location: "San Francisco, CA", stars: 5, text: "After my consultation, I decided on dermal fillers for my cheeks. The procedure was quick, and the results were immediate. It's a subtle change that makes a huge difference. I look refreshed and less tired. The professionalism and care here are top-notch. Highly recommend their services." },
    { name: "Sarah K.", location: "San Francisco, CA", stars: 5, text: "I've completed my laser hair removal sessions and I am beyond thrilled with the outcome. No more waxing or shaving! The facility is pristine, and the technicians are true professionals. It was worth every penny for the convenience and confidence it has given me. A fantastic experience." }
  ],

  trustBadges: [
    "Board-Certified Injectors", "FDA-Approved Treatments", "Free Consultations", "Medical-Grade Products"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 200, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 6, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award",       title: "Board-Certified Injectors",  desc: "Our team consists of highly trained and certified medical professionals." },
    { icon: "shield-check",title: "FDA-Approved Treatments",    desc: "We use only the safest and most effective treatments approved by the FDA." },
    { icon: "phone",       title: "Free Consultations",         desc: "Discuss your goals with an expert to create a plan tailored just for you." },
    { icon: "dollar-sign", title: "Financing Available",        desc: "Achieve your aesthetic goals with flexible and accessible payment options." },
    { icon: "heart",       title: "Medical-Grade Products",     desc: "We utilize premium, clinically-proven products for superior, lasting results." },
    { icon: "sparkles",    title: "Personalized Treatment Plans", desc: "Every treatment is customized to your unique anatomy and desired outcome." }
  ],

  formServiceOptions: ["Botox Injections", "Dermal Fillers", "Laser Hair Removal", "Chemical Peels", "Microneedling", "CoolSculpting"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges