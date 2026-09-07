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
    title: "PricePulse: E-Commerce Tracking Application",
    des: "An automated price-tracking application that continuously collects product data, maintains historical price records, and sends alerts for price changes, drops, and restocks.",
    img: "/Pricepulse.png",
    technologies: [
      { name: "Next.js", icon: "/nextjs.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tailwindcss.svg" },
      { name: "Headless UI", icon: "/headlessui.svg" },
      { name: "Cheerio", icon: "/cheerio.svg" },
      { name: "MongoDB", icon: "/mongodb.svg" },
      { name: "Mongoose", icon: "/mongoose.svg" },
    ],
    demonstrate: "Automation · Data Collection · Scheduling · Backend Architecture · Monitoring",
    link: "",
    github: "https://github.com/ranirp/pricepulse-ecommerce-tracker",
  },
  {
    id: 2,
    title: "AI Article Summarizer",
    des: "A web application that summarizes long-form articles using AI, with an intuitive interface and integrated backend/API workflow.",
    img: "/aiarticle.png",
    technologies: [
      { name: "React", icon: "/react.svg" },
      { name: "Node.js", icon: "/nodejs.png" },
      { name: "OpenAI", icon: "/OpenAI.png" },
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "RapidAPI", icon: "/rapid.png" },
    ],
    demonstrate: "AI Integration · API Development · Product Thinking",
    link: "https://ranirp.github.io/ai-article-summarizer/",
    github: "https://github.com/ranirp/ai-article-summarizer",
  },
  {
    id: 3,
    title: "PlantPal - Plant Sharing Community",
    des: "A progressive web application for sharing plants and care tips, with real-time communication and offline functionality.",
    img: "/plantpal.png",
    technologies: [
      { name: "Node.js", icon: "/nodejs.png" },
      { name: "Express.js", icon: "/expressjs.png" },
      { name: "MongoDB", icon: "/mongodb.svg" },
      { name: "Socket.IO", icon: "/socketio.svg" },
      { name: "PWA", icon: "/pwa.png" },
      { name: "IndexedDB", icon: "/indexeddb.png" },
    ],
    demonstrate: "Full - Stack Development · PWA · Offline Architecture · Real-Time Systems",
    link: "",
    github: "https://github.com/ranirp/plantpal",
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
