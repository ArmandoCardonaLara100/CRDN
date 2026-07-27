/**
 * All site copy and placeholder data lives here.
 * Replace values in this single file to publish real studio content —
 * no component changes required.
 */

export type Motif =
  | "facade"
  | "arches"
  | "stair"
  | "courtyard"
  | "colonnade"
  | "tower"
  | "plan"
  | "vault"
  | "skylight"
  | "portrait";

export interface PlateSpec {
  /** Placeholder drawing rendered until a real photograph is supplied. */
  motif: Motif;
  caption: string;
  alt: string;
  /** Set to a real image path (e.g. "/images/casa-umbral-01.jpg") to replace the placeholder. */
  src?: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  summary: string;
  description: string[];
  plates: PlateSpec[];
}

export interface GalleryItem extends PlateSpec {
  aspect: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const studio = {
  name: "CRDN",
  tagline: "Architecture & Interiors",
  founded: "2009",
  city: "Mexico City",
  coordinates: "19.4194° N — 99.1602° W",
  address: "León, Guanajuato, México",
  email: "comercial@crdnarquitectura.com",
  phone: "477 408 80 56",
  phoneHref: "tel:+524774088056",
  whatsappHref: "https://wa.me/525542108800",
  instagramHandle: "@crdnarquitectura",
  instagramHref: "https://instagram.com/crdnarquitectura",
  linkedinHref: "https://www.linkedin.com/company/crdn-estudio",
  mapsHref: "https://maps.google.com/?q=Orizaba+42,+Roma+Norte,+Mexico+City",
};

export const nav = [
  { label: "Inicio", href: "#home", id: "home" },
  { label: "Estudio", href: "#about", id: "about" },
  { label: "Insights", href: "#insights", id: "insights" },
  { label: "Proyectos", href: "#projects", id: "projects" },
  { label: "Proceso", href: "#process", id: "process" },
  { label: "Contacto", href: "#contact", id: "contact" },
] as const;

export const hero = {
  eyebrow: "CRDN — Architecture & Interiors",
  est: "Est. 2009 · Mexico City",
  headlineLead: "Tu espacio también",
  headlineEmphasis: "forma parte de tu estrategia de negocio.",
  support:
    "Combinamos arquitectura comercial, interiorismo y visual merchandising para convertir cada metro cuadrado en una herramienta estratégica que fortalece la experiencia del cliente y el valor de tu negocio.",
  primaryCta: { label: "Iniciar Proyecto", href: "#contact" },
  secondaryCta: { label: "Ver Proyectos", href: "#projects" },
  plate: {
    motif: "facade",
    src: "/images/heroimg-hd.png",
    caption: "Casa Umbral — south elevation, Valle de Bravo",
    alt: "Placeholder elevation drawing of Casa Umbral facing the lake",
  } satisfies PlateSpec,
};

export const about = {
  index: "02",
  label: "The studio",
  headingLead: "Architecture is the ",
  headingEmphasis: "slowest of the arts.",
  headingTail: " We treat that as an advantage.",
  bio: [
    "CRDN was founded in Mexico City in 2009 as a deliberately small practice. We accept a handful of commissions each year, so that every site visit, drawing and junction receives the principal's full attention.",
    "The work spans private houses, workplaces and public rooms across Mexico and abroad. What binds it is not a style but a temperament: patience with the site, precision in the detail, and a preference for materials that improve as they age.",
  ],
  philosophy:
    "A building should hold light the way a vessel holds water — simply, and without spillage.",
  portrait: {
    motif: "portrait",
    caption: "Principal architect — portrait placeholder",
    alt: "Placeholder portrait of the principal architect of CRDN",
  } satisfies PlateSpec,
  facts: [
    { label: "Founded", value: "2009" },
    { label: "Based in", value: "Mexico City" },
    { label: "Team", value: "12 people" },
    { label: "Built works", value: "48" },
  ],
  specialties: [
    "Residential architecture",
    "Commercial architecture",
    "Interior design",
    "Renovation & adaptive reuse",
  ],
};

export const insightsSection = {
  index: "03",
  label: "Insights",
  heading: "Ideas sobre espacio, marca y comercio.",
  tagline:
    "Nuestro journal editorial sobre diseño comercial, retail y la relación entre arquitectura y negocio.",
};

export const projectsSection = {
  index: "04",
  label: "Selected work",
  heading: "Six projects, chosen for what they taught us.",
};

export const projects: Project[] = [
  {
    id: "casa-umbral",
    title: "Casa Umbral",
    location: "Valle de Bravo, MX",
    year: "2024",
    category: "Residential",
    summary:
      "A weekend house arranged around a shaded threshold between forest and lake.",
    description: [
      "Casa Umbral takes its name from the deep, shaded threshold that organises the plan: a single covered gap between two stone volumes, through which the lake first appears. Bedrooms and service rooms occupy the quiet volume; kitchen, dining and a long terrace share the other, opening west to the water.",
      "The house is built from local volcanic stone, board-marked concrete and sabino wood — materials chosen to weather rather than to be maintained.",
    ],
    plates: [
      {
        motif: "facade",
        caption: "South elevation — stone volumes toward the lake",
        alt: "Placeholder elevation drawing of two stone volumes",
      },
      {
        motif: "courtyard",
        caption: "Ground floor plan — the covered threshold",
        alt: "Placeholder floor plan drawing with central courtyard",
      },
      {
        motif: "stair",
        caption: "Section — stair to the roof terrace",
        alt: "Placeholder section drawing of an exterior stair",
      },
    ],
  },
  {
    id: "oficinas-reforma",
    title: "Oficinas Reforma",
    location: "Mexico City, MX",
    year: "2023",
    category: "Commercial",
    summary:
      "A workplace for two hundred people that borrows its calm from a cloister.",
    description: [
      "Asked for an office that would help a law firm retain its people, we answered with a cloister: workspace wrapped around a planted court, so that every desk sits within ten metres of a tree.",
      "Circulation is pushed to the perimeter behind a deep concrete colonnade, shading the glass and giving the interior its measured, columned rhythm.",
    ],
    plates: [
      {
        motif: "colonnade",
        caption: "Perimeter colonnade — morning shadow study",
        alt: "Placeholder drawing of a concrete colonnade with long shadows",
      },
      {
        motif: "plan",
        caption: "Typical floor plan — desks around the court",
        alt: "Placeholder floor plan drawing of an office floor",
      },
      {
        motif: "tower",
        caption: "Massing study — floor plates on Reforma",
        alt: "Placeholder massing drawing of stacked floor plates",
      },
    ],
  },
  {
    id: "casa-ladera",
    title: "Casa Ladera",
    location: "Monterrey, MX",
    year: "2022",
    category: "Residential",
    summary:
      "A hillside house that climbs its site in five quiet terraces.",
    description: [
      "On a 28-degree slope facing the Sierra Madre, Casa Ladera refuses the usual podium. Instead the house climbs: five terraced levels, each half a storey above the last, connected by a single top-lit stair that runs like a seam through the section.",
      "Every room keeps its own relationship to the mountain — bedrooms low among the oaks, the living room high in the light.",
    ],
    plates: [
      {
        motif: "stair",
        caption: "Long section — the stair as a seam",
        alt: "Placeholder section drawing of a stepped hillside house",
      },
      {
        motif: "skylight",
        caption: "Light shaft above the central stair",
        alt: "Placeholder drawing of light falling through a roof shaft",
      },
      {
        motif: "facade",
        caption: "East elevation — terraces toward the sierra",
        alt: "Placeholder elevation drawing of terraced volumes",
      },
    ],
  },
  {
    id: "pabellon-mirador",
    title: "Pabellón Mirador",
    location: "Mérida, MX",
    year: "2021",
    category: "Public",
    summary:
      "A limestone arcade where a town meets its evening breeze.",
    description: [
      "Commissioned as a small civic room at the edge of a plaza, the pavilion is little more than an arcade: eleven limestone arches, a deep roof, and shade. It refuses programme on purpose — vendors, musicians and quinceañera photographers have all claimed it since.",
      "The stone was quarried forty kilometres away and left rough on the inner face, so the building sounds like the region when the rain arrives.",
    ],
    plates: [
      {
        motif: "arches",
        caption: "Arcade elevation — eleven bays to the plaza",
        alt: "Placeholder elevation drawing of a stone arcade",
      },
      {
        motif: "vault",
        caption: "Cross section — vaulted shade",
        alt: "Placeholder section drawing of shallow vaults",
      },
      {
        motif: "colonnade",
        caption: "Evening shadow study",
        alt: "Placeholder drawing of columns with long evening shadows",
      },
    ],
  },
  {
    id: "loft-norte-42",
    title: "Loft Norte 42",
    location: "Guadalajara, MX",
    year: "2020",
    category: "Interiors",
    summary:
      "One long room rebuilt around the way its owners actually live.",
    description: [
      "A 1960s industrial floor became a home for two ceramicists by resisting subdivision. The plan is one long room, ordered by three oak 'furniture buildings' — a kitchen, a wardrobe, a studio wall — that hold everything and touch neither floor slab nor ceiling.",
      "Between them, the loft stays what it was: light, air and forty metres of uninterrupted floor.",
    ],
    plates: [
      {
        motif: "plan",
        caption: "Plan — one room, three oak volumes",
        alt: "Placeholder floor plan drawing of a long open loft",
      },
      {
        motif: "vault",
        caption: "Ceiling study — existing shell vaults",
        alt: "Placeholder drawing of existing vaulted ceiling",
      },
      {
        motif: "portrait",
        caption: "The owners' studio wall (placeholder)",
        alt: "Placeholder drawing reserved for an interior photograph",
      },
    ],
  },
  {
    id: "torre-alba",
    title: "Torre Alba",
    location: "Mexico City, MX",
    year: "2019",
    category: "Commercial",
    summary:
      "A slender office tower that earns its skyline the polite way.",
    description: [
      "Torre Alba is deliberately thin. By holding the floor plate to 900 square metres, every workspace sits within seven metres of daylight, and the tower reads on the skyline as a drawn line rather than a block.",
      "The concrete structure is expressed as stacked plates, shading the glass and giving the street a colonnade rather than a lobby wall. It leased ahead of every projection.",
    ],
    plates: [
      {
        motif: "tower",
        caption: "West elevation — stacked plates",
        alt: "Placeholder elevation drawing of a slender tower",
      },
      {
        motif: "facade",
        caption: "Bay study — structure as shading",
        alt: "Placeholder facade bay drawing",
      },
      {
        motif: "plan",
        caption: "Typical plan — 900 m² floor plate",
        alt: "Placeholder plan drawing of a tower floor",
      },
    ],
  },
];

export const gallerySection = {
  index: "05",
  label: "Archive",
  heading: "Studies, models and moments in light.",
};

export const gallery: GalleryItem[] = [
  {
    motif: "arches",
    caption: "Pabellón Mirador — arcade study",
    alt: "Placeholder drawing of a stone arcade study",
    aspect: "aspect-[4/5]",
  },
  {
    motif: "skylight",
    caption: "Casa Ladera — light shaft, 8 a.m.",
    alt: "Placeholder drawing of light falling through a shaft",
    aspect: "aspect-[3/4]",
  },
  {
    motif: "plan",
    caption: "Loft Norte 42 — plan of the long room",
    alt: "Placeholder floor plan drawing",
    aspect: "aspect-square",
  },
  {
    motif: "colonnade",
    caption: "Oficinas Reforma — colonnade at noon",
    alt: "Placeholder drawing of a colonnade at midday",
    aspect: "aspect-[4/5]",
  },
  {
    motif: "stair",
    caption: "Casa Umbral — terrace stair",
    alt: "Placeholder section drawing of a terrace stair",
    aspect: "aspect-[3/4]",
  },
  {
    motif: "vault",
    caption: "Vault study — shade without walls",
    alt: "Placeholder drawing of shallow vaults",
    aspect: "aspect-square",
  },
  {
    motif: "tower",
    caption: "Torre Alba — massing study",
    alt: "Placeholder massing drawing of a tower",
    aspect: "aspect-[3/4]",
  },
  {
    motif: "courtyard",
    caption: "Courtyard plan — house for a garden",
    alt: "Placeholder courtyard plan drawing",
    aspect: "aspect-[4/5]",
  },
];

export const processSection = {
  index: "06",
  label: "Method",
  heading: "METODOLOGÍA.",
  tagline: "Un proceso probado en más de 370 espacios comerciales.",
  closing:
    "Cada proyecto tiene un objetivo común: transformar el espacio en una herramienta estratégica para la marca.",
  steps: [
    {
      n: "01",
      title: "Diagnóstico",
      description:
        "Analizamos el negocio, el usuario y el espacio para identificar oportunidades estratégicas.",
    },
    {
      n: "02",
      title: "Estrategia",
      description:
        "Definimos el concepto que guiará cada decisión del proyecto.",
    },
    {
      n: "03",
      title: "Diseño",
      description:
        "Desarrollamos la propuesta arquitectónica, el interiorismo y la estrategia de visual merchandising.",
    },
    {
      n: "04",
      title: "Proyecto Ejecutivo",
      description:
        "Traducimos el concepto en documentación técnica lista para construirse.",
    },
    {
      n: "05",
      title: "Ejecución",
      description:
        "Coordinamos y supervisamos cada etapa para asegurar que el proyecto se materialice conforme a la estrategia definida.",
    },
    {
      n: "06",
      title: "Entrega Llave en Mano",
      description:
        "Un espacio preparado para operar, conectar con las personas y acompañar el crecimiento del negocio.",
    },
  ],
};

export const stats = [
  { value: 15, suffix: "+", label: "Años de Experiencia" },
  { value: 370, suffix: "+", label: "Espacios Desarrollados" },
  { value: 12, suffix: "+", label: "Sectores Atendidos" },
];

export const testimonialsSection = {
  index: "07",
  label: "Soluciones",
  heading: "Soluciones.",
  tagline: "Diseñamos estrategias para cada etapa de tu negocio.",
  taglineSecondary: "¿Cuál es tu momento?",
};

export const testimonials: Testimonial[] = [
  {
    name: "",
    role: "ABRIR UN NEGOCIO",
    quote:
      "Desarrollamos conceptos comerciales desde cero, integrando arquitectura, identidad de marca y experiencia del cliente para construir espacios listos para crecer.",
  },
  {
    name: "",
    role: "REMODELAR UN ESPACIO",
    quote:
      "Replanteamos la distribución, la imagen y el funcionamiento de tu negocio para responder a nuevas necesidades y mejorar la experiencia de quienes lo visitan.",
  },
  {
    name: "",
    role: "OPTIMIZAR EL DESEMPEÑO COMERCIAL",
    quote:
      "Analizamos cómo las personas recorren e interactúan con tu espacio para identificar oportunidades de mejora en la circulación, exhibición y operación.",
  },
];

export const contactSection = {
  index: "08",
  label: "Contact",
  heading: "Todo gran proyecto comienza con una buena conversación.",
  support:
    "Cuéntanos qué quieres lograr, diseñaremos una estrategia espacial que fortalezca tu marca, conecte con las personas y aporte valor a tu negocio.",
  channels: [
    {
      key: "phone",
      label: "Teléfono",
      value: studio.phone,
      href: studio.phoneHref,
      external: false,
    },
    {
      key: "email",
      label: "Correo",
      value: studio.email,
      href: `mailto:${studio.email}`,
      external: false,
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      value: "Message the studio",
      href: studio.whatsappHref,
      external: true,
    },
    {
      key: "instagram",
      label: "Instagram",
      value: studio.instagramHandle,
      href: studio.instagramHref,
      external: true,
    },
  ],
};

export const footer = {
  note: "Retail, brand & commercial design — diseñamos espacios que trabajan para tu marca desde León, Guanajuato, México.",
  copyright: `© ${new Date().getFullYear()} CRDN. Todos los derechos reservados.`,
};
