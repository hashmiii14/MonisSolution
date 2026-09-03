// LUXE INTERIORS — realistic content backbone

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
  { value: 18, suffix: "", label: "Years of Craft" },
  { value: 32, suffix: "", label: "Design Awards" },
  { value: 96, suffix: "%", label: "Client Retention" },
];

export const CLIENT_LOGOS = [
  "Aureum Group",
  "Maison Noir",
  "The Halcyon",
  "Verde Estates",
  "Solene Hotels",
  "Atelier Blanc",
  "Nordwood",
  "Casa Lumière",
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
    text: "Detailed drawings, 3D visualisations and bespoke furniture design bring precision to every millimetre.",
  },
  {
    step: "04",
    title: "Craft & Handover",
    text: "White-glove project management, artisan sourcing and styling deliver a flawless, move-in-ready home.",
  },
];

export const WHY = [
  {
    title: "Bespoke, Never Templated",
    text: "Every scheme is authored from a blank page — tailored to your rituals, collections and light.",
  },
  {
    title: "Artisan Network",
    text: "Access to a hand-picked circle of joiners, marble houses, weavers and lighting ateliers across Europe.",
  },
  {
    title: "Single Point of Contact",
    text: "A dedicated lead designer stewards your project end-to-end, protecting vision and timeline.",
  },
  {
    title: "Turnkey Delivery",
    text: "From demolition to the last cushion, we manage trades, budgets and styling so you simply arrive home.",
  },
];

export const SERVICES = [
  {
    slug: "residential-interior",
    title: "Residential Interior",
    excerpt:
      "Homes designed around the way you truly live — warm, considered and quietly luxurious.",
    image: img("1618221195710-dd6b41faaea6"),
    features: ["Space planning", "Custom joinery", "Material curation", "Art & styling"],
    benefits: ["A home that feels authored, not decorated", "Longevity over trend"],
  },
  {
    slug: "commercial-interior",
    title: "Commercial Interior",
    excerpt:
      "Workplaces and retail environments that express brand and elevate everyday experience.",
    image: img("1497366216548-37526070297c"),
    features: ["Brand-led concepts", "Wayfinding", "Acoustic strategy", "FF&E procurement"],
    benefits: ["Spaces that convert and retain", "Operationally efficient layouts"],
  },
  {
    slug: "luxury-villa",
    title: "Luxury Villa Design",
    excerpt:
      "Ground-up villa interiors where architecture, landscape and light move as one.",
    image: img("1600585154340-be6161a56a0c"),
    features: ["Whole-home concept", "Bespoke millwork", "Wellness suites", "Smart integration"],
    benefits: ["Seamless indoor–outdoor living", "Resort living at home"],
  },
  {
    slug: "kitchen-design",
    title: "Kitchen Design",
    excerpt:
      "Sculptural, hard-working kitchens finished in stone, timber and warm metals.",
    image: img("1556909212-d5b604d0c90d"),
    features: ["Ergonomic layouts", "Stone & timber", "Integrated appliances", "Pantry design"],
    benefits: ["The true heart of the home", "Effortless entertaining"],
  },
  {
    slug: "bedroom-suites",
    title: "Bedroom & Suites",
    excerpt:
      "Restful sanctuaries layered in soft textiles, dimmable light and quiet detail.",
    image: img("1616594039964-ae9021a400a0"),
    features: ["Layered lighting", "Bespoke headboards", "Dressing rooms", "Acoustic comfort"],
    benefits: ["Hotel-grade rest at home", "Personal, serene retreat"],
  },
  {
    slug: "hospitality-design",
    title: "Hospitality Design",
    excerpt:
      "Hotels and restaurants with a signature atmosphere guests remember and return for.",
    image: img("1550966871-3ed3cdb5ed0c"),
    features: ["Guest journey", "Statement lighting", "Custom furniture", "Material durability"],
    benefits: ["Instagrammable moments", "Premium ADR positioning"],
  },
  {
    slug: "lighting-design",
    title: "Lighting Design",
    excerpt:
      "Architectural and decorative lighting schemes that sculpt mood after dusk.",
    image: img("1524758631624-e2822e304c36"),
    features: ["Layered scenes", "Circadian control", "Feature fixtures", "DALI integration"],
    benefits: ["Ambience on demand", "Energy-considered comfort"],
  },
  {
    slug: "furniture-selection",
    title: "Furniture & FF&E",
    excerpt:
      "Curation and custom design of furniture, fixtures and equipment down to the last detail.",
    image: img("1567016432779-094069958ea5"),
    features: ["Bespoke pieces", "Global sourcing", "Textile curation", "Procurement"],
    benefits: ["Coherent, collected look", "Investment-grade pieces"],
  },
  {
    slug: "renovation-3d",
    title: "Renovation & 3D",
    excerpt:
      "Full renovation management paired with photoreal 3D so you see it before you build it.",
    image: img("1503174971373-b1f69850bded"),
    features: ["Photoreal 3D", "Structural coordination", "Trade management", "Snagging"],
    benefits: ["No costly surprises", "Confidence before commitment"],
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
    title: "The Cloud Penthouse",
    category: "Living Room",
    style: "Modern Luxury",
    location: "Chelsea, London",
    year: "2024",
    client: "Private Client",
    budget: "£420,000",
    duration: "9 months",
    cover: img("1618221195710-dd6b41faaea6"),
    tall: false,
    overview:
      "A sky-high penthouse reimagined as a serene monochrome sanctuary, where full-height glazing frames the city skyline and every surface is finished in honed stone and pale oak.",
    challenge:
      "The original layout carved the panoramic view into small, compartmentalised rooms and relied on cold, glossy finishes that felt corporate rather than residential.",
    solution:
      "We opened the plan into a single flowing living volume, introduced a floating oak island for the kitchen, and layered warm textiles and dimmable light to soften the architecture without competing with the view.",
    materials: ["Honed travertine", "Pale European oak", "Brushed brass", "Bouclé & wool"],
    gallery: [
      img("1618221195710-dd6b41faaea6", 1400),
      img("1600210492486-724fe5c67fb0", 1400),
      img("1493809842364-78817add7ffb", 1400),
    ],
  },
  {
    slug: "maison-noir",
    title: "Maison Noir",
    category: "Villa",
    style: "Dark Editorial",
    location: "Beverly Hills, USA",
    year: "2023",
    client: "Maison Noir Estates",
    budget: "$1.6M",
    duration: "16 months",
    cover: img("1600585154340-be6161a56a0c"),
    tall: true,
    overview:
      "A dramatic hillside villa clad in charred timber and bronze, choreographed around a central courtyard and an infinity edge that dissolves into the horizon.",
    challenge:
      "Balancing bold, dark architecture with the warmth and liveability a family home demands.",
    solution:
      "Deep tones are grounded by tactile plaster, aged leather and a disciplined lighting plan that makes each room glow after dark.",
    materials: ["Charred cedar", "Bronze", "Venetian plaster", "Aged leather"],
    gallery: [
      img("1600585154340-be6161a56a0c", 1400),
      img("1600566753086-00f18fb6b3ea", 1400),
      img("1616486338812-3dadae4b4ace", 1400),
    ],
  },
  {
    slug: "halcyon-loft",
    title: "Halcyon Loft",
    category: "Living Room",
    style: "Warm Minimal",
    location: "Tribeca, New York",
    year: "2024",
    client: "The Halcyon",
    budget: "$680,000",
    duration: "11 months",
    cover: img("1493809842364-78817add7ffb"),
    tall: false,
    overview:
      "A cast-iron loft softened into a warm, gallery-like home for a collector of mid-century furniture and contemporary art.",
    challenge:
      "Preserving the raw industrial shell while creating intimate, art-forward living zones.",
    solution:
      "Freestanding plaster volumes divide the space without touching the original columns, letting light and art breathe.",
    materials: ["Micro-cement", "Walnut", "Linen", "Blackened steel"],
    gallery: [
      img("1493809842364-78817add7ffb", 1400),
      img("1524758631624-e2822e304c36", 1400),
      img("1618221195710-dd6b41faaea6", 1400),
    ],
  },
  {
    slug: "verde-kitchen",
    title: "Verde Kitchen",
    category: "Kitchen",
    style: "Organic Modern",
    location: "Lake Como, Italy",
    year: "2023",
    client: "Verde Estates",
    budget: "€240,000",
    duration: "7 months",
    cover: img("1556909212-d5b604d0c90d"),
    tall: true,
    overview:
      "A sculptural kitchen carved from a single vein of green marble, opening onto a terraced garden above the lake.",
    challenge:
      "Making a hard-working chef's kitchen feel like a piece of sculpture in an open living space.",
    solution:
      "A monolithic island anchors the room while integrated appliances and a concealed pantry keep the composition serene.",
    materials: ["Verde Alpi marble", "Smoked oak", "Antique brass", "Lime plaster"],
    gallery: [
      img("1556909212-d5b604d0c90d", 1400),
      img("1600585152220-4ce23d0e0d3c", 1400),
      img("1600607687939-ce8a6c25118c", 1400),
    ],
  },
  {
    slug: "solene-suite",
    title: "Solène Suite",
    category: "Bedroom",
    style: "Soft Luxury",
    location: "Paris, France",
    year: "2024",
    client: "Solene Hotels",
    budget: "€310,000",
    duration: "8 months",
    cover: img("1616594039964-ae9021a400a0"),
    tall: false,
    overview:
      "A signature hotel suite dressed in warm neutrals, silk and hand-plastered walls for a couture sense of calm.",
    challenge:
      "Delivering hotel durability without sacrificing the intimacy of a private residence.",
    solution:
      "Bespoke upholstered walls, layered lighting scenes and a spa-grade bathroom create a restorative cocoon.",
    materials: ["Silk", "Rosé plaster", "Statuario marble", "Antique bronze"],
    gallery: [
      img("1616594039964-ae9021a400a0", 1400),
      img("1600210492486-724fe5c67fb0", 1400),
      img("1560448204-e02f11c3d0e2", 1400),
    ],
  },
  {
    slug: "atelier-blanc-studio",
    title: "Atelier Blanc Studio",
    category: "Office",
    style: "Gallery White",
    location: "Copenhagen, Denmark",
    year: "2023",
    client: "Atelier Blanc",
    budget: "€180,000",
    duration: "6 months",
    cover: img("1497366216548-37526070297c"),
    tall: true,
    overview:
      "A creative studio built as a bright, adaptable canvas — part workspace, part showroom.",
    challenge:
      "Housing a growing team while keeping the space feeling open, quiet and brand-led.",
    solution:
      "Modular oak workstations, acoustic felt ceilings and a flexible central gallery adapt to work and events alike.",
    materials: ["Oak", "Acoustic felt", "Terrazzo", "Powder-coated steel"],
    gallery: [
      img("1497366216548-37526070297c", 1400),
      img("1497366811353-6870744d04b2", 1400),
      img("1524758631624-e2822e304c36", 1400),
    ],
  },
  {
    slug: "nordwood-retreat",
    title: "Nordwood Retreat",
    category: "Villa",
    style: "Scandi Warmth",
    location: "Oslo, Norway",
    year: "2024",
    client: "Nordwood",
    budget: "€520,000",
    duration: "12 months",
    cover: img("1600566753086-00f18fb6b3ea"),
    tall: false,
    overview:
      "A forest retreat where blond timber, stone hearths and expansive glazing dissolve the line between inside and landscape.",
    challenge:
      "Creating year-round warmth in a remote, light-scarce northern climate.",
    solution:
      "A layered lighting strategy and radiant stone surfaces keep the home glowing through the long winters.",
    materials: ["Blond ash", "Basalt", "Wool", "Blackened iron"],
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
    style: "Mediterranean",
    location: "Ibiza, Spain",
    year: "2023",
    client: "Casa Lumière",
    budget: "€390,000",
    duration: "10 months",
    cover: img("1600210492486-724fe5c67fb0"),
    tall: true,
    overview:
      "A sun-washed island residence in lime plaster and reclaimed timber, built for slow, barefoot summers.",
    challenge:
      "Capturing relaxed Mediterranean living while withstanding coastal wear.",
    solution:
      "Hand-troweled plaster, tadelakt bathrooms and durable natural stone age gracefully with salt and sun.",
    materials: ["Lime plaster", "Reclaimed pine", "Tadelakt", "Travertine"],
    gallery: [
      img("1600210492486-724fe5c67fb0", 1400),
      img("1493809842364-78817add7ffb", 1400),
      img("1618221195710-dd6b41faaea6", 1400),
    ],
  },
  {
    slug: "the-halcyon-restaurant",
    title: "The Halcyon Restaurant",
    category: "Hospitality",
    style: "Moody Glamour",
    location: "Milan, Italy",
    year: "2024",
    client: "The Halcyon",
    budget: "€460,000",
    duration: "9 months",
    cover: img("1550966871-3ed3cdb5ed0c"),
    tall: false,
    overview:
      "An intimate fine-dining room wrapped in burgundy velvet, fluted timber and pools of warm candlelight.",
    challenge:
      "Designing a room that feels electric when full and romantic when quiet.",
    solution:
      "Layered banquettes, a sculptural bar and dimmable feature lighting flex to the rhythm of service.",
    materials: ["Velvet", "Fluted walnut", "Onyx", "Antique brass"],
    gallery: [
      img("1550966871-3ed3cdb5ed0c", 1400),
      img("1600607687939-ce8a6c25118c", 1400),
      img("1556909212-d5b604d0c90d", 1400),
    ],
  },
  {
    slug: "aureum-office",
    title: "Aureum HQ",
    category: "Office",
    style: "Corporate Craft",
    location: "Zurich, Switzerland",
    year: "2023",
    client: "Aureum Group",
    budget: "CHF 720,000",
    duration: "13 months",
    cover: img("1497366811353-6870744d04b2"),
    tall: true,
    overview:
      "A private wealth headquarters balancing gravitas and warmth across boardrooms, lounges and a rooftop terrace.",
    challenge:
      "Projecting institutional trust without the coldness of a typical corporate fit-out.",
    solution:
      "Warm timber, deep upholstery and discreet technology create a residential ease within a high-security envelope.",
    materials: ["Smoked oak", "Wool felt", "Nero marble", "Bronze mesh"],
    gallery: [
      img("1497366811353-6870744d04b2", 1400),
      img("1497366216548-37526070297c", 1400),
      img("1524758631624-e2822e304c36", 1400),
    ],
  },
  {
    slug: "the-marble-bath",
    title: "The Marble Bath",
    category: "Bedroom",
    style: "Spa Luxury",
    location: "Geneva, Switzerland",
    year: "2024",
    client: "Private Client",
    budget: "CHF 210,000",
    duration: "6 months",
    cover: img("1560448204-e02f11c3d0e2"),
    tall: false,
    overview:
      "A primary suite and spa bathroom carved from book-matched marble with a freestanding stone tub at its heart.",
    challenge:
      "Achieving a wellness-retreat calm within a compact urban footprint.",
    solution:
      "Book-matched slabs, warm underfloor stone and concealed lighting turn a daily ritual into an escape.",
    materials: ["Calacatta Viola", "Teak", "Brushed nickel", "Linen"],
    gallery: [
      img("1560448204-e02f11c3d0e2", 1400),
      img("1616594039964-ae9021a400a0", 1400),
      img("1600210492486-724fe5c67fb0", 1400),
    ],
  },
  {
    slug: "solene-lobby",
    title: "Solène Grand Lobby",
    category: "Hospitality",
    style: "Grand Hotel",
    location: "Vienna, Austria",
    year: "2023",
    client: "Solene Hotels",
    budget: "€980,000",
    duration: "15 months",
    cover: img("1616486338812-3dadae4b4ace"),
    tall: true,
    overview:
      "A grand hotel arrival experience reimagined with a sculptural chandelier, curved marble reception and layered lounge vignettes.",
    challenge:
      "Delivering a memorable arrival that handles high footfall gracefully.",
    solution:
      "A generous central axis, intuitive wayfinding and durable-yet-opulent finishes choreograph the guest journey.",
    materials: ["Statuario marble", "Brass", "Mohair velvet", "Smoked glass"],
    gallery: [
      img("1616486338812-3dadae4b4ace", 1400),
      img("1550966871-3ed3cdb5ed0c", 1400),
      img("1600566753086-00f18fb6b3ea", 1400),
    ],
  },
];

export const TEAM = [
  {
    name: "Isabella Moreau",
    role: "Founder & Creative Director",
    experience: "22 years",
    image: "https://images.pexels.com/photos/8469992/pexels-photo-8469992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700",
    skills: ["Concept", "Art Direction", "Material"],
    bio: "Isabella founded LUXE INTERIORS on a belief that great design is felt before it is seen.",
  },
  {
    name: "Julian Wexford",
    role: "Head of Architecture",
    experience: "18 years",
    image: "https://images.pexels.com/photos/6615203/pexels-photo-6615203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700",
    skills: ["Space Planning", "Detailing", "3D"],
    bio: "Julian brings architectural rigour to every scheme, obsessing over proportion and light.",
  },
  {
    name: "Amara Okafor",
    role: "Senior Interior Designer",
    experience: "12 years",
    image: "https://images.pexels.com/photos/8469992/pexels-photo-8469992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=701",
    skills: ["Residential", "Textiles", "Styling"],
    bio: "Amara is our storyteller of texture, layering fabrics and finishes into rich, liveable interiors.",
  },
  {
    name: "Theo Lindqvist",
    role: "Lighting Designer",
    experience: "14 years",
    image: "https://images.pexels.com/photos/6615203/pexels-photo-6615203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=701",
    skills: ["Lighting", "Smart Home", "Mood"],
    bio: "Theo sculpts atmosphere with light, designing scenes that transform a room from dawn to dusk.",
  },
  {
    name: "Clara Bianchi",
    role: "FF&E & Procurement Lead",
    experience: "11 years",
    image: "https://images.pexels.com/photos/8469992/pexels-photo-8469992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=702",
    skills: ["Sourcing", "Bespoke", "Budgeting"],
    bio: "Clara curates our artisan network, sourcing rare pieces and commissioning bespoke furniture.",
  },
  {
    name: "Marcus Hale",
    role: "Project Director",
    experience: "16 years",
    image: "https://images.pexels.com/photos/6615203/pexels-photo-6615203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=702",
    skills: ["Delivery", "Trades", "Timeline"],
    bio: "Marcus safeguards every timeline and budget, orchestrating trades with quiet precision.",
  },
  {
    name: "Sofia Reyes",
    role: "3D Visualisation Artist",
    experience: "9 years",
    image: "https://images.pexels.com/photos/8469992/pexels-photo-8469992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=703",
    skills: ["3D", "Rendering", "VR"],
    bio: "Sofia brings unbuilt spaces to life in photoreal detail, so clients see before they commit.",
  },
  {
    name: "Elias Novak",
    role: "Sustainability & Materials",
    experience: "10 years",
    image: "https://images.pexels.com/photos/6615203/pexels-photo-6615203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=703",
    skills: ["Sustainable", "Research", "Sourcing"],
    bio: "Elias champions responsible luxury, tracing every material to its ethical source.",
  },
];

export const TESTIMONIALS = [
  { name: "Eleanor V.", location: "London, UK", rating: 5, text: "LUXE transformed our penthouse into something we never imagined possible. Every detail feels intentional and utterly us." },
  { name: "David & Marie L.", location: "Paris, FR", rating: 5, text: "From the first mood board to the final cushion, the process was seamless. The result is a home that stops guests in their tracks." },
  { name: "Sanjay P.", location: "Dubai, UAE", rating: 5, text: "The team managed a complex villa build across time zones without a single dropped ball. Extraordinary craftsmanship." },
  { name: "Isabelle R.", location: "Geneva, CH", rating: 5, text: "Our spa bathroom is now the reason I wake up early. It feels like a five-star retreat in my own home." },
  { name: "The Halcyon Group", location: "Milan, IT", rating: 5, text: "Our restaurant has never been busier. The room does half the marketing for us — guests photograph everything." },
  { name: "Anders K.", location: "Oslo, NO", rating: 5, text: "They understood the northern light better than we did. The house glows all winter. Truly remarkable." },
  { name: "Priya M.", location: "New York, US", rating: 5, text: "A loft full of art and light, and not one compromise on function. LUXE reads their clients perfectly." },
  { name: "Carlos & Ana", location: "Ibiza, ES", rating: 5, text: "Barefoot luxury, exactly as promised. The materials only get more beautiful with the sun and salt." },
  { name: "Aureum Group", location: "Zurich, CH", rating: 5, text: "Our headquarters projects the trust our clients expect while feeling genuinely warm. A rare balance." },
  { name: "Helena T.", location: "Vienna, AT", rating: 5, text: "The lobby has become a landmark. Guests arrive and immediately know they are somewhere special." },
  { name: "Rebecca S.", location: "Los Angeles, US", rating: 5, text: "Bold, dark and impossibly warm. Maison Noir is everything we hoped and more." },
  { name: "Thomas W.", location: "Copenhagen, DK", rating: 5, text: "Our studio flexes from focused work to full gallery events effortlessly. Thoughtful design at every turn." },
];

export const PRICING = [
  {
    name: "Starter",
    price: "₹49,999",
    unit: "per room",
    tagline: "A curated refresh for a single space.",
    features: ["Design consultation", "Concept mood board", "Furniture & finish schedule", "Shopping list", "2 revision rounds"],
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹1,49,999",
    unit: "per project",
    tagline: "Full design for a home or key spaces.",
    features: ["Everything in Starter", "Full space planning", "3D visualisations", "Custom joinery design", "Procurement support", "On-site check-ins"],
    highlight: true,
  },
  {
    name: "Luxury",
    price: "₹3,49,999",
    unit: "starting",
    tagline: "Whole-home, turnkey design & build.",
    features: ["Everything in Premium", "End-to-end project management", "Bespoke furniture commissions", "Trade & artisan coordination", "Full styling & handover", "12-month aftercare"],
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    unit: "on request",
    tagline: "Hospitality, commercial & multi-unit.",
    features: ["Dedicated design team", "Brand-led concepting", "FF&E at scale", "Phased delivery", "Global sourcing", "Priority support"],
    highlight: false,
  },
];

export const BLOG_CATEGORIES = ["All", "Interior Tips", "Decor", "Architecture", "Furniture", "Lighting", "Luxury Living"];

export const BLOG_POSTS = [
  {
    slug: "art-of-warm-minimalism",
    title: "The Art of Warm Minimalism",
    category: "Interior Tips",
    date: "March 12, 2024",
    readTime: "6 min",
    author: "Isabella Moreau",
    image: img("1618221195710-dd6b41faaea6", 1000),
    excerpt: "Minimalism need not be cold. Here is how we layer texture, tone and light to create calm interiors that still feel deeply human.",
  },
  {
    slug: "choosing-natural-stone",
    title: "A Designer's Guide to Choosing Natural Stone",
    category: "Furniture",
    date: "February 28, 2024",
    readTime: "8 min",
    author: "Clara Bianchi",
    image: img("1556909212-d5b604d0c90d", 1000),
    excerpt: "From Calacatta to Verde Alpi, understanding veining, finish and provenance is the key to specifying stone that lasts a lifetime.",
  },
  {
    slug: "lighting-scenes-that-transform",
    title: "Lighting Scenes That Transform a Room",
    category: "Lighting",
    date: "February 10, 2024",
    readTime: "5 min",
    author: "Theo Lindqvist",
    image: img("1524758631624-e2822e304c36", 1000),
    excerpt: "The single most underrated tool in luxury interiors is a layered lighting plan. Here is how we design mood from dawn to dusk.",
  },
  {
    slug: "indoor-outdoor-living",
    title: "Designing for Indoor–Outdoor Living",
    category: "Architecture",
    date: "January 22, 2024",
    readTime: "7 min",
    author: "Julian Wexford",
    image: img("1600585154340-be6161a56a0c", 1000),
    excerpt: "Blurring the threshold between home and landscape is an architectural craft. These principles keep the transition seamless.",
  },
  {
    slug: "colour-that-ages-well",
    title: "Colour That Ages Well",
    category: "Decor",
    date: "January 8, 2024",
    readTime: "5 min",
    author: "Amara Okafor",
    image: img("1600210492486-724fe5c67fb0", 1000),
    excerpt: "Trend palettes date quickly. We share the timeless, tonal approach to colour that keeps interiors relevant for decades.",
  },
  {
    slug: "bespoke-joinery-worth-it",
    title: "Is Bespoke Joinery Worth It?",
    category: "Furniture",
    date: "December 15, 2023",
    readTime: "6 min",
    author: "Marcus Hale",
    image: img("1600566753086-00f18fb6b3ea", 1000),
    excerpt: "Custom cabinetry is a significant investment. We break down where bespoke joinery earns its keep — and where it may not.",
  },
  {
    slug: "the-quiet-luxury-home",
    title: "The Quiet Luxury Home",
    category: "Luxury Living",
    date: "November 30, 2023",
    readTime: "7 min",
    author: "Isabella Moreau",
    image: img("1493809842364-78817add7ffb", 1000),
    excerpt: "Quiet luxury is a feeling, not a logo. Explore the restrained materials and details that define truly refined living.",
  },
  {
    slug: "styling-a-coffee-table",
    title: "The Rule of Three: Styling a Coffee Table",
    category: "Decor",
    date: "November 12, 2023",
    readTime: "4 min",
    author: "Amara Okafor",
    image: img("1550966871-3ed3cdb5ed0c", 1000),
    excerpt: "A beautifully styled surface can lift an entire room. Our simple framework brings balance to any tabletop vignette.",
  },
  {
    slug: "renovating-with-confidence",
    title: "Renovating With Confidence: The 3D Advantage",
    category: "Interior Tips",
    date: "October 25, 2023",
    readTime: "6 min",
    author: "Sofia Reyes",
    image: img("1497366216548-37526070297c", 1000),
    excerpt: "Photoreal visualisation removes the guesswork from renovation. Here is how seeing it first saves time, money and regret.",
  },
];

export const FAQS = [
  { q: "Where is LUXE INTERIORS based, and do you work internationally?", a: "Our studio is based in London, but we deliver projects worldwide. Roughly half of our commissions are international, and we manage remote projects with photoreal 3D, regular video reviews and trusted local trades." },
  { q: "How much does a full interior design project cost?", a: "Every project is bespoke, but our Signature package starts at £14,900 for design, and full turnkey projects begin around £38,000 excluding construction and furniture. We provide a detailed proposal after our discovery call." },
  { q: "How long does a typical project take?", a: "A single-room refresh may take 6–10 weeks, while a full home renovation typically runs 9–16 months from brief to handover, depending on scope and construction complexity." },
  { q: "Do you only take on large, high-budget projects?", a: "Not at all. Our Essential package is designed for single-room commissions, and we love a well-considered brief at any scale." },
  { q: "Can you work with my architect or contractor?", a: "Absolutely. We collaborate seamlessly with your existing team, or we can introduce our own vetted network of architects, contractors and artisans." },
  { q: "What does the design process look like?", a: "Four clear stages: Discovery & Brief, Concept & Mood, Design Development, and Craft & Handover. You'll always know exactly where your project stands." },
  { q: "Do you offer 3D visualisations?", a: "Yes. Photoreal 3D renders are included in our Signature and Bespoke packages, so you can experience your space before a single item is ordered." },
  { q: "Will I have a single point of contact?", a: "Yes. A dedicated lead designer stewards your project from first call to final styling, so nothing is lost in translation." },
  { q: "Can you source furniture and manage procurement?", a: "We handle end-to-end FF&E procurement, from global sourcing to bespoke commissions, tracking every order, lead time and delivery." },
  { q: "Do you offer aftercare once the project is complete?", a: "Our Bespoke package includes 12 months of aftercare. We remain on hand for adjustments, additional pieces and future phases." },
  { q: "How do I get started?", a: "Simply reach out through our contact page or WhatsApp. We'll schedule a discovery call to understand your space, style and aspirations." },
  { q: "Is there a fee for the initial consultation?", a: "The first discovery call is complimentary. Should you proceed, its focus is agreeing scope and a fixed design fee — no hidden costs." },
];
