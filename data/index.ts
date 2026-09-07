import {
  Blocks,
  BrainCircuit,
  Cloud,
  Code,
  Database,
  GitBranch,
  Network,
  Server,
} from 'lucide-react';

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Publications", link: "#publications" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "AI Article Summarizer",
    des: "A modern web app that generates concise summaries of long‑form articles with a single click using OpenAI’s language model, featuring a clean UI and seamless API integration.",
    img: "/aiarticle.png",
    iconLists: [
      "/react.svg",
      "/javascript.svg",
      "/tailwindcss.svg",
      "/redux.svg",
      "/vite.svg",
      "/rapid.png",
    ],
    link: "https://ranirp.github.io/ai-article-summarizer/",
    github: "https://github.com/ranirp/ai-article-summarizer",
  },
  {
    id: 2,
    title: "PlantPal - Plant Sharing Community",
    des: "A Progressive Web App (PWA) for sharing plants and care tips with your local community. Built with Node.js, Express, MongoDB, Socket.IO, and IndexedDB for full offline functionality.",
    img: "/plantpal.png",
    iconLists: [
      '/nodejs.png',
      '/javascript.svg',
      '/expressjs.png',
      '/mongodb.svg',
      '/tailwindcss.svg',
      '/pwa.png'
    ],
    link: "",
    github: "https://github.com/ranirp/plantpal",
  },
  {
    id: 3,
    title: "PricePulse: E-Commerce Tracking Application",
    des: "Implemented continuous web scraping with proxy rotation to monitor product pages, maintained historical price data, scheduled automated cron jobs for 24/7 checks, and integrated email alerts for price drops and restocks.",
    img: "/Pricepulse.png",
    iconLists: [
      '/nextjs.svg',
      '/typescript.svg',
      '/tailwindcss.svg',
      '/headlessui.svg',
      '/cheerio.svg',
      '/mongodb.svg',
      '/mongoose.svg',
    ],
    link: "",
    github: "https://github.com/ranirp/pricepulse-ecommerce-tracker",
  },

];

export const workExperience = [
  {
    id: 1,
    logo: "/freelance.svg",
    title: "Technical Evaluation & AI Quality Analyst",
    company: "Alignerr",
    timeline: "Jan 2025 – Present",
    location: "Remote",
    "About the Role:": [
      "Worked on AI evaluation and quality workflows, assessing AI-generated outputs against task-specific requirements and quality criteria. Contributed to testing, documentation, workflow improvement, and iterative evaluation processes within distributed Agile teams."
    ],
    "Key Areas": [
      "AI Evaluation & Quality Analysis",
      "Requirements & Quality Criteria",
      "Testing & Validation",
      "Workflow Improvement",
      "Technical Documentation",
      "Agile Collaboration",
    ],
  },
  {
    id: 2,
    logo: "/epapa.jpeg",
    title: "Backend Engineer & Technical Delivery Contributor",
    company: "Epapa",
    timeline: "Sep 2024 - Dec 2024",
    location: "Berlin, Germany (Remote)",
    "About the Role:": "Contributed to backend development and technical delivery for a production mobile application, translating product requirements into backend solutions across API design, PostgreSQL optimization, Docker-based environments, and CI/CD workflows. Worked with cross-functional teams across development, testing, deployment, documentation, and Agile delivery processes.",
    "Key Areas": [
      "Requirements Translation & Technical Analysis",
      "Backend Development & API Design",
      "Testing & Deployment",
      "PostgreSQL & Database Optimization",
      "Docker & CI/CD Workflows",
      "Technical Documentation",
      "Cross-Functional Collaboration",
      "Agile Delivery Processes",
    ],
  }
];

export const dockLinks = [
  {
    title: "LinkedIn",
    icon: "IconBrandLinkedin",
    href: "https://www.linkedin.com/in/ranikumari/",
  },
  {
    title: "GitHub",
    icon: "IconBrandGithub",
    href: "https://github.com/ranirp",
  },
  {
    title: "Contact",
    icon: "IconMail",
    href: "mailto:ranipurohit30@gmail.com",
  },
  {
    title: "Twitter",
    icon: "IconBrandTwitter",
    href: "https://x.com/ranipurohit30",
  }
];

export const skills = [
  {
    id: "technical-delivery-collaboration",
    category: "Technical Delivery & Collaboration",
    icon: GitBranch,
    title: "Technical Delivery & Collaboration",
    description: "Translating requirements into technical tasks and supporting structured software delivery",
    technologies: [
      "Requirements Analysis",
      "Technical Documentation",
      "Agile / Scrum",
      "Jira",
      "Cross-Functional Collaboration",
      "Software Development Lifecycle",
    ],
    span: "md:col-span-6"
  },
  {
    id: "backend-fullstack-engineering",
    category: "Backend & Full-Stack Engineering",
    icon: Server,
    title: "Backend & Full-Stack Engineering",
    description: "Building backend services and production web applications",
    technologies: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Express.js",
      "Next.js",
      "React",
      "Python",
      "Flask",
    ],
    span: "md:col-span-6"
  },
  {
    id: "apis-system-design",
    category: "APIs & System Design",
    icon: Network,
    title: "APIs & System Design",
    description: "Designing structured APIs and maintainable backend systems",
    technologies: [
      "RESTful APIs",
      "OpenAPI / Swagger",
      "OAuth 2.0",
      "JWT Authentication",
      "FastAPI",
      "Postman",
    ],
    span: "md:col-span-6"
  },
  {
    id: "databases-cloud",
    category: "Databases & Cloud",
    icon: Cloud,
    title: "Databases & Cloud",
    description: "Working with databases, cloud platforms, and deployment environments",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Microsoft Azure",
      "Firebase",
      "Docker",
    ],
    span: "md:col-span-6"
  },
  {
    id: "devops-delivery",
    category: "DevOps & Delivery",
    icon: GitBranch,
    title: "DevOps & Delivery",
    description: "Supporting automation, deployment, and development workflows",
    technologies: [
      "CI/CD Pipelines",
      "GitHub Actions",
      "Kubernetes",
      "Git",
      "GitLab",
    ],
    span: "md:col-span-6"
  },
  {
    id: "architecture-engineering-practices",
    category: "Architecture & Engineering Practices",
    icon: Blocks,
    title: "Architecture & Engineering Practices",
    description: "Applying maintainable design principles and scalable development practices",
    technologies: [
      "Modular Architecture",
      "SOLID Principles",
      "Progressive Web Apps (PWA)",
      "Technical Documentation",
      "Agile / Scrum",
    ],
    span: "md:col-span-6"
  },
  {
    id: "ai-emerging-technologies",
    category: "AI & Emerging Technologies",
    icon: BrainCircuit,
    title: "AI & Emerging Technologies",
    description: "Working with AI-integrated applications and AI evaluation workflows",
    technologies: [
      "OpenAI API",
      "Google Gemini API",
      "LangChain",
      "AI Integration Workflows",
      "LLM Evaluation & Quality Analysis",
      "Vector Databases",
    ],
    span: "md:col-span-6"
  }
];

export const Publications = [
  {
    id: "Patent",
    title: "Quick Fill Using Sky Locker and Digital Storage",
    description: "A smart system to quickly and securely fill and retrieve data using a cloud-integrated (sky locker) and digital storage infrastructure for optimized communication workflows with secure SSO authentication for enhanced productivity.",
    Role: "Co-Inventor",
    "Patent Office": "India",
    "Application Number": "202231031977",
    "Publication Date": "08-07-2022",
    Status: "Published",
    "Field of Invention": "Communication",
    Link: "Complete Specification.pdf",
  },
  {
    id: "Paper",
    title: "Spypark: The Innovative Mobile Application for Online Parking System ",
    description: "Discusses the design and impact of a mobile app that revolutionizes urban parking by offering real-time updates and reservation management.",
    Role: "Co-Author",
    "Publication": "IEEE Xplore",
    "Publication Date": "27-06-2024",
    Status: "Published",
    "Published In": "2023 IEEE Fifth International Conference on Advances in Electronics, Computers and Communications (ICAECC)",
    Link: "https://ieeexplore.ieee.org/document/10560130",
  },
];
