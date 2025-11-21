export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  titleImage?: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  benefits: string[];
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  gallery: string[];
  detailedSection: {
    description: string;
    benefits: string[];
    specificHeading: string;
    specificDetail: string;
    galleryImages: string[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const servicesData: Record<string, ServiceData> = {
  "pool-construction": {
    id: "pool-construction",
    slug: "pool-construction",
    title: "Pool Construction",
    titleImage: "/assets/construction/construction_4.jpeg",
    subtitle: "Build Your Dream Pool",
    description: "",
    heroImage: "/assets/pool-construction-hero.jpg",
    features: [],
    benefits: [],
    process: [],
    gallery: [],
    detailedSection: {
      description: "Our expert team in Dubai specializes in designing and building custom swimming pools tailored to your specifications. We handle every aspect from site assessment to final installation, ensuring your pool is built to the highest standards with premium materials and quality craftsmanship.",
      benefits: [
        "Custom design solutions tailored to your space and preferences",
        "Compliance with Dubai building codes and regulations",
        "Professional project management from start to finish",
        "Warranty on all construction work and materials"
      ],
      specificHeading: "Construction Methods",
      specificDetail: "We use advanced construction techniques including fiber glass pools, concrete pools, and vinyl liner systems. Each method is selected based on your soil conditions, climate requirements, and budget. Our team ensures proper drainage, structural integrity, and optimal water circulation for long-lasting performance.",
      galleryImages: ["/assets/construction/construction_1.jpeg", "/assets/construction/construction_2.jpeg", "/assets/construction/construction_3.jpeg", "/assets/construction/construction_4.jpeg"]
    },
    cta: {
      title: "Ready to Build Your Pool?",
      description: "Get started with your dream pool today",
      buttonText: "Contact Us",
    },
    faqs: [
      {
        question: "How long does pool construction take?",
        answer: "Most residential pools take 4-8 weeks to complete, depending on size, complexity, and weather conditions. We'll provide a specific timeline during the initial consultation."
      },
      {
        question: "What is included in the construction service?",
        answer: "Our service includes site assessment, design consultation, excavation, structural construction, plumbing installation, equipment setup, and final inspection and testing."
      },
      {
        question: "Do you handle all permits and approvals?",
        answer: "Yes, we handle all Dubai municipality permits and inspections. We're fully licensed and ensure your pool meets all local building codes and regulations."
      },
      {
        question: "What pool types can you construct?",
        answer: "We construct fiberglass pools, concrete pools, vinyl liner pools, and saltwater systems. We recommend the best option based on your soil, climate, and budget."
      }
    ]
  },
  "pool-renovation": {
    id: "pool-renovation",
    slug: "pool-renovation",
    title: "Pool Renovation",
    titleImage: "/assets/renovation/renovation_1.jpeg",
    subtitle: "Transform Your Existing Pool",
    description: "",
    heroImage: "/assets/pool-renovation-hero.jpg",
    features: [],
    benefits: [],
    process: [],
    gallery: [],
    detailedSection: {
      description: "Transform your aging pool into a stunning modern oasis with our comprehensive renovation services in Dubai. Whether your pool needs updating, repairs, or a complete aesthetic overhaul, our skilled team can restore it to like-new condition while improving functionality and energy efficiency.",
      benefits: [
        "Enhanced pool aesthetics and modern design upgrades",
        "Improved energy efficiency and reduced operating costs",
        "Updated filtration and circulation systems",
        "Extended pool lifespan with structural improvements"
      ],
      specificHeading: "Renovation Options",
      specificDetail: "We offer various renovation packages including resurfacing, equipment upgrades, plumbing updates, tile replacement, and structural repairs. Each project is customized based on your pool's current condition, your budget, and your vision for the final result.",
      galleryImages: ["/assets/renovation/renovation_1.jpeg", "/assets/renovation/renovation_2.jpeg", "/assets/renovation/renovation_3.jpeg", "/assets/renovation/renovation_4.jpeg"]
    },
    cta: {
      title: "Ready to Renovate Your Pool?",
      description: "Give your pool a new life",
      buttonText: "Contact Us",
    },
    faqs: [
      {
        question: "How do I know if my pool needs renovation?",
        answer: "Signs include cracked tiles, visible leaks, algae despite regular cleaning, outdated equipment, or structural damage. We can assess your pool and recommend needed upgrades."
      },
      {
        question: "Can I renovate without draining the pool?",
        answer: "Some renovations can be done with water present, but major work typically requires draining. We'll discuss options during your consultation."
      },
      {
        question: "How long will renovation take?",
        answer: "Renovation timelines vary from 2-6 weeks depending on the scope. Simple upgrades are faster than complete overhauls."
      },
      {
        question: "Will renovation reduce my pool's operating costs?",
        answer: "Yes! Modern equipment, updated filtration systems, and proper insulation can significantly reduce energy and water bills."
      }
    ]
  },
  "pool-demolition": {
    id: "pool-demolition",
    slug: "pool-demolition",
    title: "Pool Demolition / Removal",
    titleImage: "/assets/demolish/demolish.jpeg",
    subtitle: "Professional Pool Removal Services",
    description: "",
    heroImage: "/assets/pool-demolition-hero.jpg",
    features: [],
    benefits: [],
    process: [],
    gallery: [],
    detailedSection: {
      description: "Our professional pool demolition and removal service handles the complete process of safely removing your pool in Dubai. Whether you're making space for new construction or eliminating maintenance costs, we ensure a clean, efficient removal with proper disposal of all materials.",
      benefits: [
        "Safe and controlled demolition process",
        "Complete debris removal and site cleanup",
        "Proper recycling and disposal of pool materials",
        "Land preparation for future development"
      ],
      specificHeading: "Demolition Process",
      specificDetail: "Our process includes draining the pool, breaking up concrete structures, removing all equipment and plumbing, and hauling away debris. We handle all necessary permits and ensure your site is left clean and level for whatever comes next.",
      galleryImages: ["/assets/demolish/demolish.jpeg", "/assets/demolish/demolish_2.jpeg", "/assets/demolish/demolish_3.jpeg", "/assets/demolish/demolish_4.jpeg"]
    },
    cta: {
      title: "Need Pool Demolition?",
      description: "We handle the removal professionally and safely",
      buttonText: "Contact Us",
    },
    faqs: [
      {
        question: "How much does pool demolition cost?",
        answer: "Cost depends on pool size, location, and what needs to be done with the land afterward. We provide free quotes after site inspection."
      },
      {
        question: "What happens to the demolished pool materials?",
        answer: "We responsibly recycle and dispose of all materials. Concrete, steel, and other materials are recycled appropriately."
      },
      {
        question: "How long does demolition take?",
        answer: "Most residential pool demolitions take 3-5 days. We'll provide an exact timeline after assessing your pool."
      },
      {
        question: "Do you handle all permits for demolition?",
        answer: "Yes, we handle all required Dubai permits and inspections for safe and legal pool removal."
      }
    ]
  },
  "pool-cleaning": {
    id: "pool-cleaning",
    slug: "pool-cleaning",
    title: "Pool Cleaning",
    titleImage: "/assets/cleaning/pool_cleaning_2.jpeg",
    subtitle: "Keep Your Pool Sparkling Clean",
    description: "",
    heroImage: "/assets/pool-cleaning-hero.jpg",
    features: [],
    benefits: [],
    process: [],
    gallery: [],
    detailedSection: {
      description: "Keep your Dubai pool crystal clear and healthy with our comprehensive cleaning services. We provide thorough cleaning of all pool surfaces, water circulation systems, and equipment to maintain optimal water quality and extend your pool's lifespan.",
      benefits: [
        "Crystal clear water and sparkling surfaces",
        "Balanced pH and chemical levels",
        "Prevention of algae and bacteria growth",
        "Improved filtration system performance"
      ],
      specificHeading: "Cleaning Options",
      specificDetail: "We offer one-time deep cleaning, regular maintenance cleaning schedules, and seasonal opening/closing services. Our team uses professional-grade equipment and eco-friendly cleaning solutions to ensure your pool is safe for family and guests.",
      galleryImages: ["/assets/cleaning/pool_cleaning_1.jpeg", "/assets/cleaning/pool_cleaning_3.jpeg", "/assets/cleaning/pool_cleaning_4.jpeg"]
    },
    cta: {
      title: "Schedule Your Pool Cleaning",
      description: "Professional cleaning services for pristine pools",
      buttonText: "Contact Us",
    },
    faqs: [
      {
        question: "How often should I have my pool professionally cleaned?",
        answer: "We recommend monthly deep cleaning for residential pools and weekly for heavily-used commercial pools. Regular cleaning prevents expensive repairs."
      },
      {
        question: "What does professional cleaning include?",
        answer: "Our service includes brushing walls and floor, skimming surface, vacuuming, cleaning filters, testing chemical levels, and equipment inspection."
      },
      {
        question: "Will cleaning damage my pool?",
        answer: "No, our professional team uses gentle techniques and appropriate tools to clean your pool safely without causing damage."
      },
      {
        question: "How long does a cleaning take?",
        answer: "A typical cleaning takes 1-2 hours depending on pool size and condition. We can schedule around your schedule."
      }
    ]
  },
  "pool-maintenance": {
    id: "pool-maintenance",
    slug: "pool-maintenance",
    title: "Pool Maintenance (Weekly / Monthly)",
    titleImage: "/assets/cleaning/pool_cleaning_5.jpeg",
    subtitle: "Regular Maintenance Plans",
    description: "",
    heroImage: "/assets/pool-maintenance-hero.jpg",
    features: [],
    benefits: [],
    process: [],
    gallery: [],
    detailedSection: {
      description: "Protect your investment with our reliable weekly and monthly pool maintenance plans in Dubai. Our trained technicians ensure your pool remains in perfect condition year-round with consistent care, inspections, and preventive maintenance.",
      benefits: [
        "Consistent water quality and chemical balance",
        "Early detection of potential problems",
        "Extended equipment lifespan",
        "Peace of mind with professional care"
      ],
      specificHeading: "Maintenance Plans",
      specificDetail: "Choose between weekly visits for heavily-used pools or monthly maintenance for residential pools. Each visit includes water testing, chemical adjustment, equipment inspection, cleaning, and detailed reporting of pool condition.",
      galleryImages: ["/assets/cleaning/pool_cleaning_1.jpeg", "/assets/cleaning/pool_cleaning_3.jpeg", "/assets/cleaning/pool_cleaning_4.jpeg", "/assets/cleaning/pool_cleaning_5.jpeg"]
    },
    cta: {
      title: "Get Maintenance Plan",
      description: "Choose weekly or monthly maintenance plans",
      buttonText: "Contact Us",
    },
    faqs: [
      {
        question: "What's the difference between weekly and monthly maintenance?",
        answer: "Weekly maintenance is ideal for pools with heavy use or commercial settings. Monthly is suitable for residential pools with moderate use."
      },
      {
        question: "Can I switch between maintenance plans?",
        answer: "Yes, you can upgrade or downgrade your plan anytime. We offer flexible scheduling to meet your changing needs."
      },
      {
        question: "What is included in maintenance visits?",
        answer: "Each visit includes water testing, chemical adjustment, equipment inspection, filter cleaning, brushing, and a detailed condition report."
      },
      {
        question: "Will maintenance prevent expensive repairs?",
        answer: "Absolutely. Regular maintenance catches problems early and extends equipment life, saving you thousands in repair costs."
      }
    ]
  },
  "pool-leak": {
    id: "pool-leak",
    slug: "pool-leak",
    title: "Pool Leak Detection & Repair",
    titleImage: "/assets/leakage/leakage_1.jpeg",
    subtitle: "Find and Fix Leaks Quickly",
    description: "",
    heroImage: "/assets/pool-leak-hero.jpg",
    features: [],
    benefits: [],
    process: [],
    gallery: [],
    detailedSection: {
      description: "Identify and fix pool leaks quickly with our advanced detection and repair services in Dubai. Using state-of-the-art equipment, our experts pinpoint even the smallest leaks and provide efficient repairs to save water and reduce your maintenance costs.",
      benefits: [
        "Accurate leak detection using advanced technology",
        "Prevent water loss and inflated utility bills",
        "Quick and professional repair solutions",
        "Protect pool structure from water damage"
      ],
      specificHeading: "Detection & Repair Methods",
      specificDetail: "We use pressure testing, dye tracing, and acoustic detection to locate leaks in pipes, concrete, or liners. Once identified, we repair leaks using appropriate methods such as patch kits, pipe replacement, or structural sealing depending on the leak location and severity.",
      galleryImages: ["/assets/leakage/leakage_1.jpeg", "/assets/leakage/leakage_2.jpeg", "/assets/leakage/leakage_3.jpeg", "/assets/leakage/leakage_4.jpeg"]
    },
    cta: {
      title: "Detect Pool Leaks",
      description: "Professional leak detection and repair",
      buttonText: "Contact Us",
    },
    faqs: [
      {
        question: "How do I know if my pool has a leak?",
        answer: "Signs include rapid water loss (more than 1/4 inch per day), visible cracks, rising water bills, or wet spots in the surrounding area."
      },
      {
        question: "How long does leak detection take?",
        answer: "Most leak detections take 1-2 hours using our advanced equipment. We can typically identify and locate the leak on the same day."
      },
      {
        question: "Are your leak detection methods invasive?",
        answer: "No, we use non-invasive methods including dye tracing, pressure testing, and acoustic detection to find leaks without damaging your pool."
      },
      {
        question: "Can you repair all types of leaks?",
        answer: "Yes, we repair pipe leaks, concrete cracks, liner punctures, and joint leaks. We recommend the most cost-effective repair solution for your situation."
      }
    ]
  },
  "pool-tile": {
    id: "pool-tile",
    slug: "pool-tile",
    title: "Pool Tile Repair & Re-Grouting",
    titleImage: "/assets/tiles/tile_1.jpeg",
    subtitle: "Restore Your Pool's Appearance",
    description: "",
    heroImage: "/assets/pool-tile-hero.jpg",
    features: [],
    benefits: [],
    process: [],
    gallery: [],
    detailedSection: {
      description: "Restore your pool's beauty with professional tile repair and re-grouting services in Dubai. Our experienced team addresses cracked, loose, or deteriorated tiles and refreshes grout lines to give your pool a fresh, well-maintained appearance.",
      benefits: [
        "Enhanced pool appearance and aesthetic appeal",
        "Improved safety with secure tile placement",
        "Prevention of water infiltration and damage",
        "Long-lasting durability with quality materials"
      ],
      specificHeading: "Tile & Grouting Services",
      specificDetail: "We repair individual damaged tiles, replace sections of tiles when needed, and provide comprehensive re-grouting to seal and protect tile joints. Our services include tile cleaning, sealing, and color matching to ensure a seamless finish.",
      galleryImages: ["/assets/tiles/tile_1.jpeg", "/assets/tiles/tile_2.jpeg", "/assets/tiles/tile_3.jpeg", "/assets/tiles/tile_4.jpeg"]
    },
    cta: {
      title: "Repair Your Pool Tiles",
      description: "Professional tile repair and re-grouting services",
      buttonText: "Contact Us",
    },
    faqs: [
      {
        question: "Why is tile repair important?",
        answer: "Damaged tiles expose underlying surfaces to water infiltration, leading to structural damage and costly repairs. Regular tile maintenance prevents this."
      },
      {
        question: "Can you match my existing tiles?",
        answer: "We work with various tile styles and can match most existing tiles. If exact matches aren't available, we'll find the closest alternative."
      },
      {
        question: "How long does tile repair take?",
        answer: "Small repairs take 1-2 days, while larger tile sections may take 3-5 days depending on the scope of work."
      },
      {
        question: "What is re-grouting and why is it needed?",
        answer: "Re-grouting refreshes the material between tiles, preventing water seepage and improving pool safety. It typically lasts 5-10 years."
      }
    ]
  },
  "pool-lighting": {
    id: "pool-lighting",
    slug: "pool-lighting",
    title: "Pool Lighting Installation",
    titleImage: "/assets/lights/light_1.jpeg",
    subtitle: "Illuminate Your Pool",
    description: "",
    heroImage: "/assets/pool-lighting-hero.jpg",
    features: [],
    benefits: [],
    process: [],
    gallery: [],
    detailedSection: {
      description: "Transform your pool into a stunning nighttime focal point with our professional lighting installation services in Dubai. We design and install modern LED lighting systems that enhance safety, ambiance, and the overall beauty of your pool area.",
      benefits: [
        "Enhanced safety and visibility for nighttime use",
        "Energy-efficient LED lighting technology",
        "Customizable color and brightness options",
        "Professional installation with ongoing support"
      ],
      specificHeading: "Lighting Options",
      specificDetail: "We offer various lighting solutions including underwater LED lights, deck lighting, accent lighting, and decorative fountains with lighting. All systems are installed with proper wiring, controls, and transformers for safe operation.",
      galleryImages: ["/assets/lights/light_1.jpeg", "/assets/lights/light_2.jpeg", "/assets/lights/light_3.jpeg", "/assets/lights/light_4.jpeg"]
    },
    cta: {
      title: "Install Pool Lighting",
      description: "Modern lighting solutions for your pool",
      buttonText: "Contact Us",
    },
    faqs: [
      {
        question: "Are LED lights energy efficient?",
        answer: "Yes, LED lights use 75% less energy than traditional lighting and last 25 times longer, saving you money over time."
      },
      {
        question: "Can I control the lighting remotely?",
        answer: "Yes, most modern pool lighting systems include remote controls or smart home integration for convenient color and brightness adjustments."
      },
      {
        question: "Is pool lighting safe?",
        answer: "Absolutely. All our lighting installations meet Dubai safety standards with proper wiring, transformers, and grounding for safe operation."
      },
      {
        question: "Can I install lighting on an existing pool?",
        answer: "Yes, we can retrofit most existing pools with modern LED lighting systems. We'll assess your pool to determine the best installation approach."
      }
    ]
  },
};

export function getServiceBySlug(slug: string): ServiceData | null {
  return servicesData[slug] || null;
}

export function getAllServices(): ServiceData[] {
  return Object.values(servicesData);
}
