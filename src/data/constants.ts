// Skills and experience data for Nandeesh Shetty
export enum SkillNames {
  C = "c",
  CPP = "cpp",
  JAVA = "java",
  JS = "js",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  BOOTSTRAP = "bootstrap",
  NODEJS = "nodejs",
  EXPRESS = "express",
  SPRINGBOOT = "springboot",
  PHP = "php",
  MONGODB = "mongodb",
  MYSQL = "mysql",
  GIT = "git",
  GITHUB = "github",
  NPM = "npm",
  SOCKETIO = "socketio",
  JWT = "jwt",
  VSCODE = "vscode",
  LINUX = "linux",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.C]: {
    id: 1,
    name: "c",
    label: "C",
    shortDescription: "The OG language that started it all! 💪🔥",
    color: "#A8B9CC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  [SkillNames.CPP]: {
    id: 2,
    name: "cpp",
    label: "C++",
    shortDescription: "C but with classes and extra power! 🚀💯",
    color: "#00599C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.JAVA]: {
    id: 3,
    name: "java",
    label: "Java",
    shortDescription: "Write once, run everywhere — the enterprise beast! ☕🔥",
    color: "#007396",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.JS]: {
    id: 4,
    name: "js",
    label: "JavaScript",
    shortDescription: "Making the web interactive since '95! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 5,
    name: "html",
    label: "HTML5",
    shortDescription: "The backbone of every webpage! 🌐🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 6,
    name: "css",
    label: "CSS3",
    shortDescription: "Styling with the ultimate drip! 💁‍♂️🎨",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 7,
    name: "react",
    label: "React.js",
    shortDescription: "Components, hooks, and virtual DOM magic! ⚛️✨",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.BOOTSTRAP]: {
    id: 8,
    name: "bootstrap",
    label: "Bootstrap",
    shortDescription: "Responsive design made easy and beautiful! 🎯💜",
    color: "#7952b3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript on the server side! 🔙💚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express.js",
    shortDescription: "Fast and minimalist web framework for Node! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.SPRINGBOOT]: {
    id: 11,
    name: "springboot",
    label: "Spring Boot",
    shortDescription: "Java's powerhouse for backend applications! 🍃🚀",
    color: "#6DB33F",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  [SkillNames.PHP]: {
    id: 12,
    name: "php",
    label: "PHP",
    shortDescription: "Server-side scripting that powers the web! 🐘💪",
    color: "#777BB4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 13,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL flexibility for modern applications! 🍃💪",
    color: "#47A248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 14,
    name: "mysql",
    label: "MySQL",
    shortDescription: "The world's most popular relational database! 🐬📊",
    color: "#4479A1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.GIT]: {
    id: 15,
    name: "git",
    label: "Git",
    shortDescription: "Version control like a pro! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 16,
    name: "github",
    label: "GitHub",
    shortDescription: "Where code lives and collaboration happens! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.NPM]: {
    id: 17,
    name: "npm",
    label: "NPM",
    shortDescription: "Package manager for the JavaScript ecosystem! 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.SOCKETIO]: {
    id: 18,
    name: "socketio",
    label: "Socket.io",
    shortDescription: "Real-time bidirectional communication! ⚡🔌",
    color: "#010101",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  [SkillNames.JWT]: {
    id: 19,
    name: "jwt",
    label: "JWT",
    shortDescription: "Secure token-based authentication! 🔐🛡️",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: 20,
    name: "vscode",
    label: "VS Code",
    shortDescription: "The code editor that developers love! 💙🛠️",
    color: "#007ACC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 21,
    name: "linux",
    label: "Linux",
    shortDescription: "The open-source OS for real developers! 🐧🔓",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 2,
    startDate: "July 2026",
    endDate: "Present",
    title: "Full-Stack Web Developer Intern",
    company: "Zephyr Technologies & Solutions",
    description: [
      "Assisting in the design and development of responsive full-stack web applications using modern web frameworks.",
      "Collaborating with development teams to build dynamic frontend user interfaces and integrate them with backend API endpoints.",
      "Writing clean, modular, and optimized code for server-side logic and database operations.",
      "Participating in version control practices and code review processes to maintain code quality and follow best practices.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.JS,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
  {
    id: 1,
    startDate: "2024",
    endDate: "2024",
    title: "Research & Field Survey - Organic Farming",
    company: "Field Research | Agriculture & Sustainability",
    description: [
      "Conducted on-ground field visits to organic farms to study sustainable agricultural practices and crop management methods.",
      "Interviewed and surveyed local farmers to understand traditional and modern organic farming techniques, pest control, and soil management.",
      "Analyzed findings to identify patterns in yield improvement, cost reduction, and environmental impact of organic over conventional farming.",
      "Compiled research observations into a structured report highlighting key benefits of organic methods for small-scale farmers.",
    ],
    skills: [],
  },
];

export type Education = {
  id: number;
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
  grade: string;
  gradeLabel: string;
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology - Computer Science & Engineering",
    institution: "N.M.A.M. Institute of Technology",
    startYear: "2023",
    endYear: "2027",
    grade: "8.27",
    gradeLabel: "CGPA (Up to 6th Semester)",
  },
  {
    id: 2,
    degree: "Pre-University (PCMB)",
    institution: "BSRNSV PU College",
    startYear: "2021",
    endYear: "2023",
    grade: "84.5%",
    gradeLabel: "Percentage",
  },
];

export type Certification = {
  id: number;
  title: string;
  issuer: string;
  year: string;
  file: string;
  description: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    file: "/certificates/oracle.pdf",
    description:
      "Oracle certification covering generative AI concepts, OCI AI services, prompt engineering, large language model use cases, and responsible AI practices.",
  },
  {
    id: 2,
    title: "Full Stack Development",
    issuer: "Udemy",
    year: "2024",
    file: "/certificates/fullstack1.pdf",
    description:
      "Full-stack development certificate focused on building web applications across frontend, backend, database integration, and deployment fundamentals.",
  },
  {
    id: 3,
    title: "AINNOVATION 2025 AI & Azure Learning Challenges",
    issuer: "Microsoft Learn",
    year: "2025",
    file: "/certificates/microsoft-ai-learning-challenges.pdf",
    description:
      "Microsoft Learn achievements for the AINNOVATION 2025 Applied AI, Microsoft AI, and Microsoft Azure Learning Challenges, covering practical AI and Azure learning paths.",
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
