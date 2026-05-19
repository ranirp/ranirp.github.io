import { Code, Server, Database, Cloud, Layers } from 'lucide-react';

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
    logo: "/epapa.jpeg",
    title: "Backend Engineer & Technical Delivery Contributor",
    company: "Epapa",
    timeline: "Sep 2024 - Dec 2024",
    location: "Berlin, Germany (Remote)",
    "About the Role:": "Contributed to backend development and deployment workflows for a production mobile application, working across API design, PostgreSQL optimization, Docker-based environments, and CI/CD processes. Collaborated with cross-functional teams in Agile delivery workflows.",
    "Skills & Technologies": [
      "Node.js",
      "Express.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "PostgreSQL",
      "Docker",
      "Azure",
      "CI/CD",
      "REST APIs",
      "AI Integration",
      "Swagger"
    ],
  },
  {
    id: 2,
    logo: "/freelance.svg",
    title: "Technical Evaluation & AI Quality Analyst",
    company: "Alignerr",
    timeline: "Jan 2025 – Present",
    location: "Remote",
    "About the Role:": "Worked on AI-integrated application workflows involving GPT and Gemini-based systems, contributing to response evaluation, workflow optimization, testing, documentation, and iterative improvement processes within distributed Agile teams.",
    "Skills & Technologies": [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "LangChain",
      "OpenAI API",
      "Google Gemini API",
      "Vector Databases",
      "LLM Fine-tuning",
      "Agile Development"
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
    id: "backend-engineering",
    category: "Backend & Full-Stack Engineering",
    icon: Code,
    title: "Backend & Full-Stack Engineering",
    technologies: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Express.js",
      "React",
      "Next.js",
      "Python",
      "Flask"
    ],
    description: "Developing scalable web applications and backend services for production environments",
    span: "md:col-span-4"
  },
  {
    id: "api-system-design",
    category: "APIs & System Design",
    icon: Server,
    title: "APIs & System Design",
    technologies: [
      "REST APIs",
      "OpenAPI / Swagger",
      "OAuth 2.0",
      "JWT",
      "FastAPI",
      "Postman"
    ],
    description: "Designing secure APIs, structured workflows, and maintainable backend systems",
    span: "md:col-span-4"
  },
  {
    id: "databases-cloud",
    category: "Databases & Cloud",
    icon: Database,
    title: "Databases & Cloud",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Azure",
      "Docker",
      "Firebase"
    ],
    description: "Working with cloud infrastructure, database optimization, and deployment environments",
    span: "md:col-span-4"
  },
  {
    id: "delivery-devops",
    category: "Delivery & DevOps",
    icon: Cloud,
    title: "Delivery & DevOps",
    technologies: [
      "CI/CD",
      "GitHub Actions",
      "Docker",
      "Kubernetes (basic)",
      "Git",
      "GitLab"
    ],
    description: "Supporting deployment workflows, automation, and collaborative delivery processes",
    span: "md:col-span-6"
  },
  {
    id: "architecture-collaboration",
    category: "Architecture & Collaboration",
    icon: Layers,
    title: "Architecture & Collaboration",
    technologies: [
      "Modular Architecture",
      "SOLID Principles",
      "Progressive Web Apps",
      "Agile / Scrum",
      "Jira",
      "Technical Documentation"
    ],
    description: "Contributing to scalable system design and cross-functional Agile workflows",
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
