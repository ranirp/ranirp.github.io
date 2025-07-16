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
    title: "Backend Developer Intern",
    company: "Epapa",
    timeline: "Sep 2024 - Dec 2024",
    location: "Berlin, Germany",
    "About the Role:": "Sole backend developer responsible for architecting and managing complete backend infrastructure from development to production. Designed RESTful APIs with AI integrations and successfully deployed mobile application to Google Play Store.",
    "Skills & Technologies": [
      "Node.js",
      "Express.js",
      "TypeScript",
      "JavaScript",
      "React Native",
      "CI/CD",
      "PostgreSQL",
      "Docker",
      "Azure",
      "REST APIs",
      "AI Integration",
      "Swagger"
    ],
  },
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
    id: "frontend",
    category: "Frontend",
    icon: Code,
    title: "Front-end Development",
    technologies: ["Java", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux Toolkit"],
    description: "Built responsive SPAs with component-driven design",
    span: "md:col-span-4"
  },
  {
    id: "backend",
    category: "Backend",
    icon: Server,
    title: "Back-end and APIs",
    technologies: ["Node.js", "Express", "Flask", "Python", "FastAPI", "Postman", "OAuth/JWT authentication", "Swagger"],
    description: "RESTful API design with comprehensive testing and documentation",
    span: "md:col-span-4"
  },
  {
    id: "mobile",
    category: "Mobile",
    icon: Smartphone,
    title: "Mobile and Real-Time",
    technologies: ["React Native", "Android Studio", "Socket.IO"],
    description: "Cross-platform mobile development with live features",
    span: "md:col-span-4"
  },
  {
    id: "database",
    category: "Database",
    icon: Database,
    title: "Databases",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
    description: "Schema design and performance tuning",
    span: "md:col-span-4"
  },
  {
    id: "cloud",
    category: "Cloud",
    icon: Cloud,
    title: "Cloud and DevOps",
    technologies: ["Azure", "Firebase", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins"],
    description: "Cloud deployment with containerization and automated pipelines",
    span: "md:col-span-4"
  },
  {
    id: "development-practices",
    category: "Development Practices",
    icon: Workflow,
    title: "Development Practices",
    technologies: ["Agile", "Git", "GitHub", "GitLab", "Jira", "Test-Driven Development (TDD)"],
    description: "Agile methodologies with version control and testing",
    span: "md:col-span-4"
  },
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
