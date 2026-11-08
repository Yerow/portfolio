export type Project = {
  slug: string;
  title: string;
  kind: "client" | "demo" | "nda";
  meta: string;
  desc: string;
  stack: string[];
  link: string | null;
  /** Couleur propre au projet, utilisée au survol */
  color: string;
  /** Capture affichée au survol (ex. "/previews/sylcup.jpg"). Sans image, un cadre avec le domaine s'affiche. */
  preview?: string;
};

export const projects: Project[] = [
  {
    slug: "sylcup",
    title: "SYL Cup",
    kind: "client",
    meta: "Client · Singapour",
    desc: "Plateforme officielle de la SYL Cup, compétition co-organisée par la Football Association of Singapore et Sport Singapore. Calendrier et classements en temps réel, blog, intégration réseaux sociaux.",
    stack: ["Next.js", "Payload CMS", "PostgreSQL"],
    link: "https://sylcup.syl.sg",
    color: "#0E9F6E",
  },
  {
    slug: "tropicana",
    title: "Tropicana UPgrade",
    kind: "client",
    meta: "Client · Malaisie",
    desc: "Campagne temporaire pour Tropicana Corporation Berhad : mini-jeux mensuels, points et connexion quotidienne, quiz, pièce virtuelle à aménager et 140 000 RM de lots. Hors ligne depuis la fin de la campagne.",
    stack: ["Next.js", "Gamification", "API"],
    link: null,
    color: "#E8851C",
  },
  {
    slug: "flowdeck",
    title: "Flowdeck",
    kind: "demo",
    meta: "Démo · landing SaaS",
    desc: "Landing page pour un outil de gestion de projet fictif. Animations au scroll, mockups d'interface en HTML/CSS, design system complet.",
    stack: ["Astro", "GSAP"],
    link: "https://demo-saas.yupa.dev",
    color: "#4F46E5",
  },
  {
    slug: "aela",
    title: "Aëla Moreau",
    kind: "demo",
    meta: "Démo · portfolio photographe",
    desc: "Portfolio fictif d'une photographe de mode parisienne. Curseur custom, galerie filtrable animée, parallaxe et transitions entre pages.",
    stack: ["Next.js", "Framer Motion"],
    link: "https://demo-photo.yupa.dev",
    color: "#A9845A",
  },
  {
    slug: "nda",
    title: "Projets sous NDA",
    kind: "nda",
    meta: "Confidentiel",
    desc: "Plusieurs projets pour des entreprises en France et à l'international, du fullstack au design d'interface. J'en parle volontiers de vive voix.",
    stack: [],
    link: null,
    color: "#77737C",
  },
];

/** Technos filtrables : celles qui apparaissent dans au moins un projet */
export const projectTechs = Array.from(
  new Set(projects.flatMap((p) => p.stack).filter((s) => !["Gamification", "API"].includes(s)))
);

export const email = "contact@yupa.dev";
