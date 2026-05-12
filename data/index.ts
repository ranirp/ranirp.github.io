import { Code, Server, Smartphone, Database, Cloud, Layers, GitBranch, Workflow, Wrench } from 'lucide-react';

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
    title: "Backend Developer Intern",
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
    title: "Full-Stack & AI Integration Engineer",
    company: "Freelance",
    timeline: "Jan 2025 – Present",
    location: "Remote",
    "About the Role:": "Worked on AI-integrated application workflows involving GPT- and Gemini-based systems, contributing to response evaluation, workflow optimization, testing, documentation, and iterative improvement processes within distributed Agile teams.",
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
    id: "programming-frameworks",
    category: "Programming & Frameworks",
    icon: Code,
    title: "Programming & Frameworks",
    technologies: [
      "Java",
      "Python",
      "JavaScript (ES6+)",
      "TypeScript",
      "Node.js",
      "Express",
      "React",
      "Next.js",
      "Flask",
      "Tailwind CSS"
    ],
    description: "Full-stack development with strong backend focus and modern frontend frameworks",
    span: "md:col-span-4"
  },
  {
    id: "apis-security",
    category: "APIs & Security",
    icon: Server,
    title: "APIs & Security",
    technologies: [
      "REST APIs",
      "FastAPI",
      "OAuth 2.0",
      "JWT",
      "Swagger / OpenAPI",
      "Postman"
    ],
    description: "Designing secure, well-documented APIs for production systems",
    span: "md:col-span-4"
  },
  {
    id: "databases",
    category: "Databases",
    icon: Database,
    title: "Databases",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQLite"
    ],
    description: "Schema design, query optimization, and data modeling",
    span: "md:col-span-4"
  },
  {
    id: "cloud-devops",
    category: "Cloud & DevOps",
    icon: Cloud,
    title: "Cloud & DevOps",
    technologies: [
      "Azure",
      "Docker",
      "Kubernetes (basic)",
      "CI/CD",
      "GitHub Actions",
      "Firebase"
    ],
    description: "Cloud deployment, containerization, and automated delivery pipelines",
    span: "md:col-span-4"
  },
  {
    id: "architecture-practices",
    category: "Architecture & Practices",
    icon: Layers,
    title: "Architecture & Practices",
    technologies: [
      "Progressive Web Apps (PWAs)",
      "Modular Architecture",
      "SOLID Principles",
      "Clean Code (KISS, DRY, YAGNI)"
    ],
    description: "Maintainable and scalable system design following best practices",
    span: "md:col-span-4"
  },
  {
    id: "workflow-tools",
    category: "Workflow & Tools",
    icon: Workflow,
    title: "Workflow & Tools",
    technologies: [
      "Agile / Scrum",
      "Git",
      "GitHub",
      "GitLab",
      "Test-Driven Development (TDD)",
      "Jira"
    ],
    description: "Collaborative development using Agile workflows and version control",
    span: "md:col-span-4"
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
