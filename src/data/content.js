// MONIS SOLUTION — Realistic Content Backbone (India / New Delhi NCR / Gurugram)

const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  heroPrimary:
    "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  heroSecondary:
    "https://images.pexels.com/photos/13722886/pexels-photo-13722886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1400",
  story: img("1618221195710-dd6b41faaea6", 1100),
  storyAlt: img("1616486338812-3dadae4b4ace", 1100),
  beforeImg: img("1600585154340-be6161a56a0c", 1200),
  afterImg: img("1600607687939-ce8a6c25118c", 1200),
  video:
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
  studio1: img("1600210492486-724fe5c67fb0", 900),
  studio2: img("1600566753086-00f18fb6b3ea", 900),
  studio3: img("1493809842364-78817add7ffb", 900),
  studio4: img("1524758631624-e2822e304c36", 900),
  cta: img("1616486338812-3dadae4b4ace", 1600),
};

export const STATS = [
  { value: 480, suffix: "+", label: "Projects Delivered" },
  { value: 12, suffix: "+", label: "Years of Craft" },
  { value: 28, suffix: "", label: "Design Awards" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

export const CLIENT_LOGOS = [
  "DLF Camellias",
  "Oberoi Realty",
  "Lodha Luxury",
  "Taj Hotels",
  "Piramal Estates",
  "Embassy Group",
  "Max Estates",
  "The Halcyon Club",
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery & Brief",
    text: "We immerse ourselves in your lifestyle, aspirations and the architecture of the space to define a singular design intent.",
  },
  {
    step: "02",
    title: "Concept & Mood",
    text: "Curated mood boards, material palettes and spatial narratives translate the brief into a tangible atmosphere.",
  },
  {
    step: "03",
    title: "Design Development",
    text: "Detailed architectural drawings, photoreal 3D visualisations and bespoke furniture specifications bring precision to every millimetre.",
  },
  {
    step: "04",
    title: "Craft & Handover",
    text: "Turnkey project management, artisan sourcing and styling deliver a flawless, move-in-ready space.",
  },
];

export const WHY = [
  {
    title: "Bespoke, Never Templated",
    text: "Every scheme is authored from a blank page — tailored to your rituals, spatial light, and personal collections.",
  },
  {
    title: "Master Artisan Network",
    text: "Access to a hand-picked circle of Italian marble importers, Makrana craftsmen, joiners, and lighting ateliers across India.",
  },
  {
    title: "Single Point of Contact",
    text: "A dedicated lead designer and project director steward your project end-to-end, safeguarding vision and timeline.",
  },
  {
    title: "Turnkey Delivery",
    text: "From civil renovations to the final art placement, we coordinate trades, budgets and styling so you simply arrive home.",
  },
];

export const SERVICES = [
  {
    slug: "residential-interior",
    title: "Residential Interior",
    excerpt:
      "Homes designed around the way you truly live — warm, considered, and quietly luxurious.",
    image: img("1618221195710-dd6b41faaea6"),
    features: ["Space planning", "Custom joinery & wardrobes", "Material & stone curation", "Art & styling"],
    benefits: ["A home that feels authored, not decorated", "Longevity over fleeting trends"],
  },
  {
    slug: "commercial-interior",
    title: "Commercial & Office Interior",
    excerpt:
      "Modern workplaces, corporate offices and retail environments that elevate brand identity and experience.",
    image: img("1497366216548-37526070297c"),
    features: ["Brand-led executive concepts", "Ergonomic workstations", "Acoustic strategy", "Turnkey FF&E procurement"],
    benefits: ["Spaces that impress clients and retain talent", "Operationally efficient layouts"],
  },
  {
    slug: "luxury-villa",
    title: "Luxury Villa & Farmhouse Design",
    excerpt:
      "Ground-up luxury residences where architecture, landscape, and spatial elegance harmonize as one.",
    image: img("1600585154340-be6161a56a0c"),
    features: ["Whole-home concepts", "Bespoke millwork", "Indoor-outdoor wellness suites", "Home automation"],
    benefits: ["Seamless indoor–outdoor living", "Resort living in the privacy of home"],
  },
  {
    slug: "kitchen-design",
    title: "Modular & Sculptural Kitchens",
    excerpt:
      "Ergonomic, hard-working kitchens finished in fine stone, seasoned timber, and warm architectural metals.",
    image: img("1556909212-d5b604d0c90d"),
    features: ["Ergonomic Indian & wet/dry layouts", "Italian stone & acrylics", "Integrated premium appliances", "Pantry organisation"],
    benefits: ["The true heart of the modern home", "Effortless cooking and entertaining"],
  },
  {
    slug: "bedroom-suites",
    title: "Bedroom & Master Suites",
    excerpt:
      "Restful sanctuaries layered in soft textiles, acoustic comfort, dimmable lighting, and quiet detail.",
    image: img("1616594039964-ae9021a400a0"),
    features: ["Layered mood lighting", "Bespoke cushioned headboards", "Walk-in dressing rooms", "Acoustic comfort"],
    benefits: ["Five-star hotel rest at home", "Personal, serene everyday retreat"],
  },
  {
    slug: "hospitality-design",
    title: "Hospitality & Restaurant Design",
    excerpt:
      "Boutique hotels, lounges and fine-dining spaces with signature atmospheres guests remember and return for.",
    image: img("1550966871-3ed3cdb5ed0c"),
    features: ["Immersive guest journey", "Statement lighting fixtures", "Custom contract furniture", "High-durability finishes"],
    benefits: ["Highly shareable, iconic spaces", "Premium positioning & footfall"],
  },
  {
    slug: "lighting-design",
    title: "Architectural Lighting Design",
    excerpt:
      "Architectural and decorative illumination schemes that sculpt mood, warmth, and depth after dusk.",
    image: img("1524758631624-e2822e304c36"),
    features: ["Layered lighting scenes", "Circadian control", "Feature statement fixtures", "Smart automation integration"],
    benefits: ["Ambience on demand", "Energy-conscious visual comfort"],
  },
  {
    slug: "furniture-selection",
    title: "Furniture & Bespoke FF&E",
    excerpt:
      "Curation and custom craftsmanship of furniture, textiles, and decorative elements down to the finest detail.",
    image: img("1567016432779-094069958ea5"),
    features: ["Bespoke artisanal pieces", "Premium fabric curation", "Turnkey procurement", "Quality inspection"],
    benefits: ["Cohesive, collected aesthetic", "Investment-grade durability"],
  },
  {
    slug: "renovation-3d",
    title: "Turnkey Renovation & 3D Renders",
    excerpt:
      "Complete civil & interior renovation management paired with photoreal 3D so you experience your space before build.",
    image: img("1503174971373-b1f69850bded"),
    features: ["Photoreal 3D visualisations", "Civil & structural coordination", "Site supervision & snagging", "Timely handover"],
    benefits: ["No costly on-site surprises", "Absolute clarity before construction"],
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Office",
  "Villa",
  "Hospitality",
];

export const PROJECTS = [
  {
    slug: "the-cloud-penthouse",
    title: "The Camellias Penthouse",
    category: "Living Room",
    style: "Modern Luxury",
    location: "Golf Course Road, Gurugram",
    year: "2024",
    client: "Private Client",
    budget: "₹1.85 Cr",
    duration: "9 months",
    cover: img("1618221195710-dd6b41faaea6"),
    tall: false,
    overview:
      "A sky-high penthouse reimagined as a serene monochrome sanctuary, where full-height glazing frames the skyline and every surface is finished in honed stone and pale teak.",
    challenge:
      "The original developer layout compartmentalised the panoramic city view and relied on cold, glossy finishes that felt impersonal.",
    solution:
      "We opened the plan into a single flowing living volume, introduced a floating island, and layered warm Indian textiles and dimmable lighting to soften the architecture.",
    materials: ["Italian travertine", "Burma teak", "Brushed brass", "Cashmere & linen"],
    gallery: [
      img("1618221195710-dd6b41faaea6", 1400),
      img("1600210492486-724fe5c67fb0", 1400),
      img("1493809842364-78817add7ffb", 1400),
    ],
  },
  {
    slug: "maison-noir",
    title: "The Noir Residence",
    category: "Villa",
    style: "Dark Editorial",
    location: "Chanakyapuri, New Delhi",
    year: "2023",
    client: "Singhania Family",
    budget: "₹4.5 Cr",
    duration: "16 months",
    cover: img("1600585154340-be6161a56a0c"),
    tall: true,
    overview:
      "A dramatic embassy-zone villa clad in charred timber and cast bronze, choreographed around a tranquil courtyard and reflecting pool.",
    challenge:
      "Balancing bold, dark architectural elements with the warmth, comfort, and liveability an extended Indian family demands.",
    solution:
      "Deep tones are grounded by tactile Venetian plaster, aged leather, and a disciplined lighting plan that makes each room glow after dark.",
    materials: ["Charred cedar", "Cast bronze", "Venetian plaster", "Aged leather"],
    gallery: [
      img("1600585154340-be6161a56a0c", 1400),
      img("1600566753086-00f18fb6b3ea", 1400),
      img("1616486338812-3dadae4b4ace", 1400),
    ],
  },
  {
    slug: "halcyon-loft",
    title: "The Heritage Loft",
    category: "Living Room",
    style: "Warm Minimal",
    location: "Sundar Nagar, New Delhi",
    year: "2024",
    client: "The Halcyon Club",
    budget: "₹1.2 Cr",
    duration: "10 months",
    cover: img("1493809842364-78817add7ffb"),
    tall: false,
    overview:
      "A heritage apartment softened into a warm, gallery-like home for an avid collector of modern Indian art and modernist furniture.",
    challenge:
      "Preserving the structural charm while creating intimate, art-forward living and entertaining zones.",
    solution:
      "Freestanding lime-plaster volumes divide the space without touching original cornices, letting natural light and art breathe.",
    materials: ["Micro-cement", "Smoked walnut", "Organic linen", "Blackened steel"],
    gallery: [
      img("1493809842364-78817add7ffb", 1400),
      img("1524758631624-e2822e304c36", 1400),
      img("1618221195710-dd6b41faaea6", 1400),
    ],
  },
  {
    slug: "verde-kitchen",
    title: "Verde Emerald Kitchen",
    category: "Kitchen",
    style: "Organic Modern",
    location: "DLF Phase 5, Gurugram",
    year: "2023",
    client: "Verde Living",
    budget: "₹48 Lakhs",
    duration: "6 months",
    cover: img("1556909212-d5b604d0c90d"),
    tall: true,
    overview:
      "A sculptural culinary space carved from bookmatched green marble, opening onto an expansive outdoor terrace.",
    challenge:
      "Making an intensive, hard-working Indian kitchen feel like a monolithic work of art within an open-concept living area.",
    solution:
      "A monolithic green marble island anchors the room with concealed appliances and a hidden spice pantry that keeps the aesthetic pure.",
    materials: ["Verde Alpi marble", "Smoked oak", "Antique brass", "Lime plaster"],
    gallery: [
      img("1556909212-d5b604d0c90d", 1400),
      img("1600585152220-4ce23d0e0d3c", 1400),
      img("1600607687939-ce8a6c25118c", 1400),
    ],
  },
  {
    slug: "solene-suite",
    title: "The Imperial Suite",
    category: "Bedroom",
    style: "Soft Luxury",
    location: "Aerocity, New Delhi",
    year: "2024",
    client: "Solene Hospitality",
    budget: "₹65 Lakhs",
    duration: "8 months",
    cover: img("1616594039964-ae9021a400a0"),
    tall: false,
    overview:
      "A signature hospitality suite dressed in warm tones, Mulberry silk, and hand-plastered accents for a couture sense of calm.",
    challenge:
      "Delivering commercial-grade durability without sacrificing the warmth and softness of a luxury residence.",
    solution:
      "Bespoke upholstered acoustic headboard walls, layered scenes, and a spa-grade ensuite create a restorative cocoon.",
    materials: ["Mulberry silk", "Warm plaster", "Statuario marble", "Antique bronze"],
    gallery: [
      img("1616594039964-ae9021a400a0", 1400),
      img("1600210492486-724fe5c67fb0", 1400),
      img("1560448204-e02f11c3d0e2", 1400),
    ],
  },
  {
    slug: "atelier-blanc-studio",
    title: "Atelier Design Studio",
    category: "Office",
    style: "Gallery White",
    location: "Cyber City, Gurugram",
    year: "2023",
    client: "Atelier Ventures",
    budget: "₹85 Lakhs",
    duration: "6 months",
    cover: img("1497366216548-37526070297c"),
    tall: true,
    overview:
      "A contemporary corporate studio built as a bright, adaptable canvas — equal parts collaborative workspace and executive showroom.",
    challenge:
      "Housing an expanding executive team while keeping the layout open, acoustically quiet, and brand-forward.",
    solution:
      "Modular oak workstations, acoustic fabric panelling, and flexible glass cabins easily adapt to daily work and board meetings.",
    materials: ["Natural oak", "Acoustic felt", "Terrazzo", "Powder-coated steel"],
    gallery: [
      img("1497366216548-37526070297c", 1400),
      img("1497366811353-6870744d04b2", 1400),
      img("1524758631624-e2822e304c36", 1400),
    ],
  },
  {
    slug: "nordwood-retreat",
    title: "Aravalli Hills Villa",
    category: "Villa",
    style: "Earthy Warmth",
    location: "Sohna Road, Gurugram",
    year: "2024",
    client: "Goel Family",
    budget: "₹3.2 Cr",
    duration: "12 months",
    cover: img("1600566753086-00f18fb6b3ea"),
    tall: false,
    overview:
      "A scenic hillside retreat where natural sandstone, seasoned timber, and expansive glazing dissolve the boundary between indoors and the ridge.",
    challenge:
      "Creating year-round thermal comfort while framing unhindered views of the landscape.",
    solution:
      "Deep overhangs, courtyards for cross-ventilation, and natural stone flooring keep the villa naturally temperate and visually grounded.",
    materials: ["Dholpur stone", "Reclaimed teak", "Handwoven wool", "Weathered iron"],
    gallery: [
      img("1600566753086-00f18fb6b3ea", 1400),
      img("1600585154340-be6161a56a0c", 1400),
      img("1616486338812-3dadae4b4ace", 1400),
    ],
  },
  {
    slug: "casa-lumiere",
    title: "Casa Lumière",
    category: "Living Room",
    style: "Tropical Modern",
    location: "Goa & Alibaug",
    year: "2023",
    client: "Kapoor Family",
    budget: "₹2.4 Cr",
    duration: "10 months",
    cover: img("1600210492486-724fe5c67fb0"),
    tall: true,
    overview:
      "A coastal retreat in lime plaster and reclaimed wood, designed for relaxed indoor-outdoor living.",
    challenge:
      "Capturing relaxed luxury while specifying finishes that endure humid coastal weather gracefully.",
    solution:
      "Hand-troweled lime plaster, local laterite accents, and seasoned teak age beautifully with sun and sea breeze.",
    materials: ["Lime plaster", "Reclaimed teak", "Laterite stone", "Indian marble"],
    gallery: [
      img("1600210492486-724fe5c67fb0", 1400),
      img("1493809842364-78817add7ffb", 1400),
      img("1618221195710-dd6b41faaea6", 1400),
    ],
  },
  {
    slug: "the-halcyon-restaurant",
    title: "The Halcyon Lounge",
    category: "Hospitality",
    style: "Moody Glamour",
    location: "Mehrauli, New Delhi",
    year: "2024",
    client: "Halcyon Hospitality",
    budget: "₹1.6 Cr",
    duration: "8 months",
    cover: img("1550966871-3ed3cdb5ed0c"),
    tall: false,
    overview:
      "An intimate fine-dining destination wrapped in burgundy velvet, fluted timber, and pools of warm ambient light with Qutub views.",
    challenge:
      "Designing a venue that feels electric during busy dinner service yet comfortable and romantic for private dining.",
    solution:
      "Curved banquettes, a backlit onyx bar, and programmable dimmable lighting flex with the evening flow.",
    materials: ["Burgundy velvet", "Fluted walnut", "Backlit onyx", "Antique brass"],
    gallery: [
      img("1550966871-3ed3cdb5ed0c", 1400),
      img("1600607687939-ce8a6c25118c", 1400),
      img("1556909212-d5b604d0c90d", 1400),
    ],
  },
  {
    slug: "aureum-office",
    title: "Aureum Family Office",
    category: "Office",
    style: "Executive Craft",
    location: "Barakhamba Road, New Delhi",
    year: "2023",
    client: "Aureum Group",
    budget: "₹2.8 Cr",
    duration: "11 months",
    cover: img("1497366811353-6870744d04b2"),
    tall: true,
    overview:
      "A private family office balancing boardroom gravitas and hospitality warmth across lounges, executive suites, and a private terrace.",
    challenge:
      "Projecting institutional trust and confidentiality without the cold sterility of a typical corporate fit-out.",
    solution:
      "Warm smoked oak, deep acoustic wall upholstery, and discreet automation create an executive comfort.",
    materials: ["Smoked oak", "Wool felt", "Nero Marquina marble", "Bronze mesh"],
    gallery: [
      img("1497366811353-6870744d04b2", 1400),
      img("1497366216548-37526070297c", 1400),
      img("1524758631624-e2822e304c36", 1400),
    ],
  },
  {
    slug: "the-marble-bath",
    title: "The Statuario Bath Suite",
    category: "Bedroom",
    style: "Spa Luxury",
    location: "Golf Links, New Delhi",
    year: "2024",
    client: "Private Client",
    budget: "₹45 Lakhs",
    duration: "5 months",
    cover: img("1560448204-e02f11c3d0e2"),
    tall: false,
    overview:
      "A master bathroom and dressing suite carved from book-matched Italian marble with a freestanding stone tub at its heart.",
    challenge:
      "Achieving five-star wellness calm within a compact urban footprint.",
    solution:
      "Seamless book-matched slabs, concealed niche lighting, and radiant stone turn everyday routines into a quiet retreat.",
    materials: ["Calacatta Viola", "Burma teak", "Brushed nickel", "Linen"],
    gallery: [
      img("1560448204-e02f11c3d0e2", 1400),
      img("1616594039964-ae9021a400a0", 1400),
      img("1600210492486-724fe5c67fb0", 1400),
    ],
  },
  {
    slug: "solene-lobby",
    title: "Grand Hotel Atrium",
    category: "Hospitality",
    style: "Grand Hospitality",
    location: "Sector 29, Gurugram",
    year: "2023",
    client: "Solene Hotels",
    budget: "₹3.8 Cr",
    duration: "14 months",
    cover: img("1616486338812-3dadae4b4ace"),
    tall: true,
    overview:
      "A grand hotel arrival experience featuring a custom brass chandelier, curved marble reception, and layered conversational lounge vignettes.",
    challenge:
      "Delivering an awe-inspiring first impression while managing heavy daily foot traffic seamlessly.",
    solution:
      "An intuitive arrival axis, custom wayfinding, and durable yet opulent finishes choreograph the guest journey.",
    materials: ["Statuario marble", "Solid brass", "Mohair velvet", "Fluted glass"],
    gallery: [
      img("1616486338812-3dadae4b4ace", 1400),
      img("1550966871-3ed3cdb5ed0c", 1400),
      img("1600566753086-00f18fb6b3ea", 1400),
    ],
  },
];

export const TEAM = [
  {
    name: "Monis Hashmi",
    role: "Founder & Creative Director",
    experience: "16 years",
    image: "https://images.pexels.com/photos/6615203/pexels-photo-6615203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700",
    skills: ["Spatial Architecture", "Art Direction", "Turnkey Strategy"],
    bio: "Monis founded Monis Solution on the belief that meaningful architecture and interior spaces are felt before they are seen.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Architecture",
    experience: "14 years",
    image: "https://images.pexels.com/photos/8469992/pexels-photo-8469992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700",
    skills: ["Space Planning", "Detailing", "3D Architecture"],
    bio: "Priya brings rigorous structural discipline and clean proportion to every luxury villa and penthouse scheme.",
  },
  {
    name: "Rohan Malhotra",
    role: "Senior Interior Architect",
    experience: "11 years",
    image: "https://images.pexels.com/photos/6615203/pexels-photo-6615203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=701",
    skills: ["Residential", "Textiles", "Bespoke Millwork"],
    bio: "Rohan crafts rich, tactile living environments, layering natural stone, wood and artisanal fabrics.",
  },
];

export const TESTIMONIALS = [
  { name: "Vikram & Sunita Singhania", location: "Golf Course Road, Gurugram", rating: 5, text: "Monis Solution transformed our penthouse into something we never thought possible in NCR. Every single detail feels intentional and deeply personal." },
  { name: "Dr. Rajesh Goel", location: "Chanakyapuri, New Delhi", rating: 5, text: "From the initial layout to the final styling, the entire journey was effortless. Our villa stops guests in their tracks every time they visit." },
  { name: "Sanjay Patel", location: "Dubai & Gurugram", rating: 5, text: "Managing our farmhouse build remotely was seamless with Monis Solution. Their 3D renders, site updates and craftsmanship were world-class." },
  { name: "Kabir & Radhika Mehra", location: "DLF Phase 5, Gurugram", rating: 5, text: "Our master suite and open kitchen are stunning. The warmth of the wood and the stone curation reflect true artisanal luxury." },
  { name: "The Halcyon Club", location: "Mehrauli, New Delhi", rating: 5, text: "The restaurant ambiance has generated immense praise. The lighting, acoustics and seating create an unforgettable dining mood." },
  { name: "Ananya Reddy", location: "Jubilee Hills, Hyderabad", rating: 5, text: "Their understanding of Indian light, natural ventilation and contemporary elegance is unmatched. A truly remarkable team." },
  { name: "Priya Mathur", location: "South Extension, New Delhi", rating: 5, text: "A home full of art, natural light and practical utility. Monis Solution listened deeply and executed flawlessly." },
  { name: "Amit Bhardwaj", location: "Cyber City, Gurugram", rating: 5, text: "Our corporate headquarters projects trust and warmth. It has boosted our team's productivity and client impressions immensely." },
  { name: "Rohit & Neha Kapoor", location: "Vasant Vihar, New Delhi", rating: 5, text: "Quiet luxury executed to perfection. The quality of materials and the on-time handover exceeded all our expectations." },
  { name: "Gaurav Tandon", location: "Sector 44, Gurugram", rating: 5, text: "Having their studio right here in Sector 44 made collaboration smooth and fast. Exceptional attention to detail throughout." },
  { name: "Rituja Sen", location: "Bandra West, Mumbai", rating: 5, text: "Bespoke joinery, tailored lighting and zero compromises. Monis Solution is redefining luxury interior design in India." },
  { name: "Tarun Walia", location: "Indiranagar, Bengaluru", rating: 5, text: "Our duplex apartment feels serene, open and timeless. Could not have asked for a better architectural partner." },
];

export const PRICING = [
  {
    name: "Starter",
    price: "₹49,999",
    unit: "per room",
    tagline: "A curated design refresh for a single space.",
    features: ["On-site / virtual design consultation", "Concept mood board & color palette", "Furniture & finish schedule", "Curated shopping list", "2 revision rounds"],
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹1,49,999",
    unit: "per project",
    tagline: "Comprehensive design for a home or key zones.",
    features: ["Everything in Starter", "Detailed 2D spatial layouts", "Photoreal 3D visualisations", "Custom joinery & wardrobe design", "Procurement & vendor guidance", "Periodic on-site check-ins"],
    highlight: true,
  },
  {
    name: "Luxury",
    price: "₹3,49,999",
    unit: "starting",
    tagline: "Whole-home, turnkey architectural design & execution.",
    features: ["Everything in Premium", "Complete turnkey site supervision", "Bespoke artisan furniture commissions", "Trade & contractor coordination", "Full styling, art placement & handover", "12-month post-completion warranty"],
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "on request",
    tagline: "Corporate workspaces, boutique hospitality & villas.",
    features: ["Dedicated principal design team", "Brand-led concept architecture", "Commercial FF&E procurement at scale", "Phased milestone delivery", "Pan-India execution capability", "Priority executive support"],
    highlight: false,
  },
];

export const BLOG_CATEGORIES = ["All", "Interior Tips", "Decor", "Architecture", "Furniture", "Lighting", "Luxury Living"];

export const BLOG_POSTS = [
  {
    slug: "art-of-warm-minimalism",
    title: "The Art of Warm Minimalism in Indian Homes",
    category: "Interior Tips",
    date: "March 12, 2024",
    readTime: "6 min",
    author: "Monis Hashmi",
    image: img("1618221195710-dd6b41faaea6", 1000),
    excerpt: "Minimalism need not be stark. Here is how we layer natural Indian stones, seasoned teak, and soft ambient light to create calm sanctuaries.",
  },
  {
    slug: "choosing-natural-stone",
    title: "A Designer's Guide to Choosing Natural Stone",
    category: "Furniture",
    date: "February 28, 2024",
    readTime: "8 min",
    author: "Vikramaditya Singhal",
    image: img("1556909212-d5b604d0c90d", 1000),
    excerpt: "From Italian travertine to Indian Makrana marble, understanding veining, finish, and porosity is key to stone that lasts lifetimes.",
  },
  {
    slug: "lighting-scenes-that-transform",
    title: "Lighting Scenes That Transform a Room After Dusk",
    category: "Lighting",
    date: "February 10, 2024",
    readTime: "5 min",
    author: "Ananya Verma",
    image: img("1524758631624-e2822e304c36", 1000),
    excerpt: "The most underrated design tool in luxury interiors is a layered lighting plan. How to design lighting transitions from morning to evening.",
  },
  {
    slug: "indoor-outdoor-living",
    title: "Designing for Indoor–Outdoor Living in NCR",
    category: "Architecture",
    date: "January 22, 2024",
    readTime: "7 min",
    author: "Ar. Priya Sharma",
    image: img("1600585154340-be6161a56a0c", 1000),
    excerpt: "Blurring the boundary between living room and verandah is an architectural craft. Principles that keep the transition seamless through Delhi seasons.",
  },
  {
    slug: "colour-that-ages-well",
    title: "Timeless Palettes That Age Gracefully",
    category: "Decor",
    date: "January 8, 2024",
    readTime: "5 min",
    author: "Rohan Malhotra",
    image: img("1600210492486-724fe5c67fb0", 1000),
    excerpt: "Trend-driven palettes fade quickly. We share our tonal, earth-inspired approach to hues that keep spaces elegant across decades.",
  },
  {
    slug: "bespoke-joinery-worth-it",
    title: "Why Bespoke Millwork is Worth the Investment",
    category: "Furniture",
    date: "December 15, 2023",
    readTime: "6 min",
    author: "Sameer Khan",
    image: img("1600566753086-00f18fb6b3ea", 1000),
    excerpt: "Custom cabinetry and wardrobes represent an investment. Where bespoke woodwork earns its keep and where ready solutions suffice.",
  },
  {
    slug: "the-quiet-luxury-home",
    title: "The Quiet Luxury Home: A Feeling, Not a Brand",
    category: "Luxury Living",
    date: "November 30, 2023",
    readTime: "7 min",
    author: "Neha Kapoor",
    image: img("1493809842364-78817add7ffb", 1000),
    excerpt: "True luxury is an experience of ease and proportion. Explore the restrained materials, tactile textures, and craftsmanship that define refined living.",
  },
  {
    slug: "styling-a-coffee-table",
    title: "The Rule of Balance: Styling Living Surfaces",
    category: "Decor",
    date: "November 12, 2023",
    readTime: "4 min",
    author: "Aarav Desai",
    image: img("1550966871-3ed3cdb5ed0c", 1000),
    excerpt: "A curated surface elevates the mood of the entire living room. Our simple architectural framework for coffee tables and console vignettes.",
  },
  {
    slug: "renovating-with-confidence",
    title: "Renovating With Confidence: The 3D Advantage",
    category: "Interior Tips",
    date: "October 25, 2023",
    readTime: "6 min",
    author: "Kabir Sethi",
    image: img("1497366216548-37526070297c", 1000),
    excerpt: "Photoreal 3D rendering removes guesswork from luxury renovation. How experiencing your home in 3D first saves time, money, and regret.",
  },
];

export const FAQS = [
  {
    q: "Where is Monis Solution based, and do you take projects across India?",
    a: "Our studio is located in Sector 44, Gurugram (New Delhi NCR). We deliver luxury residential and commercial projects across New Delhi, Gurugram, Noida, Mumbai, Bengaluru, and other major cities across India with complete design, 3D visualization, and turnkey site execution.",
  },
  {
    q: "How much does a full interior design project cost?",
    a: "Every project is bespoke. Our single-room consultation packages start at ₹49,999, comprehensive home design begins at ₹1,49,999, and full turnkey design & execution starts at ₹3,49,999 onwards. We provide an itemised, transparent cost estimate after our initial discovery discussion.",
  },
  {
    q: "How long does a typical interior project take from start to finish?",
    a: "A room styling refresh usually takes 4–6 weeks, while a full apartment or luxury villa renovation typically runs 4–8 months depending on civil scope, custom joinery, and site readiness.",
  },
  {
    q: "Do you offer complete turnkey execution?",
    a: "Yes. In our turnkey service, we handle everything from space planning and 3D visualisations to civil work, electrical, false ceiling, custom furniture, painting, and final handover.",
  },
  {
    q: "Can you collaborate with our existing architect or builder?",
    a: "Absolutely. We regularly coordinate with client-appointed architects, structural engineers, and contractors, ensuring seamless integration of interior details.",
  },
  {
    q: "What does the design process look like?",
    a: "Four structured phases: Discovery & Briefing, Concept & Mood Boards, Detailed 2D/3D Design Development, and On-Site Execution & Handover. You are always informed at each step.",
  },
  {
    q: "Do you provide photoreal 3D visualisations before execution?",
    a: "Yes. High-resolution 3D renders are included in our Premium and Luxury packages so you can visualize the exact materials, lighting, and finishes before work commences.",
  },
  {
    q: "Will I have a dedicated point of contact?",
    a: "Yes. A dedicated lead designer and project coordinator manage your project from initial concept to handover, ensuring smooth communication.",
  },
  {
    q: "Can you design custom furniture and source imported materials?",
    a: "Yes. We design bespoke sofas, dining tables, consoles, and wardrobes tailored to your dimensions, and source authentic Italian marble, imported veneers, and premium hardware.",
  },
  {
    q: "Do you provide warranty or aftercare service?",
    a: "Our Luxury turnkey projects include a 12-month post-handover warranty and maintenance support for joinery, fittings, and finishes.",
  },
  {
    q: "How do we get started?",
    a: "You can reach out through our contact form or chat with us directly on WhatsApp (+91 98180 83436). We will schedule a complimentary discovery consultation to discuss your space.",
  },
  {
    q: "Is there a fee for the initial discovery consultation?",
    a: "The initial discovery discussion is complimentary. If you decide to proceed, we share a transparent scope of work and fixed design fee before starting.",
  },
];
