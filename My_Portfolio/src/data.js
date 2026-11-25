import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaLaravel,
  FaDatabase,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiVite,
  SiPostman,
  SiJira,
  SiFastapi,
  SiCloudinary,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

export const profile = {
  name: "Mohamed Sihan",
  firstName: "Sihan",
  roles: [
    "Full-Stack Developer",
    "MERN Stack Engineer",
    "React & Node.js Specialist",
    "API & Database Designer",
  ],
  tagline:
    "I build fast, secure and beautiful web applications – from responsive React interfaces to scalable Node.js APIs and well-designed databases.",
  email: "sihanthedeveloper@gmail.com",
  phone: "+94 75 440 9047 | +971 58 218 8407",
  location: "Sri Lanka",
  availability: "Open to opportunities in Dubai, UAE",
  linkedin: "http://www.linkedin.com/in/mohamed-sihan-dev",
  github: "https://github.com/MSihan-Dev",
  photo: "/sihan.jpg",
  cv: "/Mohamed_Sihan_CV.pdf",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const socials = [
  { name: "GitHub", href: profile.github, icon: FaGithub },
  { name: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { name: "Email", href: `mailto:${profile.email}`, icon: FaEnvelope },
];

export const stats = [
  { value: 9, suffix: "+", label: "Months professional experience" },
  { value: 4, suffix: "", label: "Key projects delivered" },
  { value: 25, suffix: "+", label: "Resume templates built" },
  { value: 1000, suffix: "+", label: "Resumes secured with JWT" },
];

export const about = [
  "I am a Full-Stack Software Engineer with hands-on experience building and maintaining production web applications using the MERN stack, along with C#/.NET, Java and SQL.",
  "I have delivered RESTful APIs, JWT authentication, role-based access control and database-driven features for clients and development teams, and I enjoy debugging, optimising performance and shipping clean, maintainable code.",
  "I hold a BEng (Hons) in Software Engineering and I am looking for a Software Engineer / Full-Stack Developer role in Dubai, UAE.",
];

export const highlights = [
  {
    icon: FaReact,
    title: "Modern Front-End",
    text: "Responsive, accessible React interfaces.",
  },
  {
    icon: FaNodeJs,
    title: "Robust Back-End",
    text: "REST APIs, auth and role-based access.",
  },
  {
    icon: FaDatabase,
    title: "Solid Databases",
    text: "MongoDB and SQL schema design.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Laravel", icon: FaLaravel },
      { name: ".NET", icon: SiDotnet },
      { name: "OpenAI API", icon: RiOpenaiFill },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MS SQL Server", icon: DiMsqlServer },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Languages & Tools",
    items: [
      { name: "C#", icon: TbBrandCSharp },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "PHP", icon: FaPhp },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Jira", icon: SiJira },
      { name: "Cloudinary", icon: SiCloudinary },
    ],
  },
];

export const experience = [
  {
    role: "Web Developer (MERN Stack)",
    company: "HeyMilo",
    period: "Jan 2025 – Aug 2026",
    points: [
      "Designed, developed, tested and maintained web applications using the MERN stack.",
      "Built responsive React.js interfaces and RESTful APIs with Node.js and Express.js.",
      "Managed MongoDB database operations and integrated backend services with application features.",
      "Resolved bugs and technical issues, improving performance and reliability across the SDLC with Git.",
    ],
  },
  {
    role: "Data Entry",
    company: "Super Market",
    period: "Jan 2024 – Dec 2024",
    points: [
      "Maintained and updated product records, including product names, codes, prices, quantities, and other inventory details.",
      "Entered and verified product information, pricing, MRP, barcode details, and stock records in the system.",
      "Assisted with inventory updates, stock adjustments, product registration, and price changes.",
      "Supported POS operations by ensuring accurate product and pricing information.",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "Self-Employed",
    period: "2023 – 2024",
    points: [
      "Delivered full-stack web and desktop applications using Node.js, .NET and SQL databases.",
      "Developed REST APIs, authentication systems, role-based access control and database-driven features.",
      "Worked directly with clients to gather requirements and deliver production-ready applications.",
    ],
  },
];

export const projects = [
  {
    title: "EnglishSpeakPro",
    type: "Client Project · Live",
    description:
      "A responsive English-learning platform with user authentication, learning modules and an admin dashboard, deployed and maintained for the client.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "FastAPI",
      "OpenAI",
      "JWT",
      "Cloudinary",
    ],
    live: "http://englishspeakpro.com/",
    featured: true,
  },
  {
    title: "AI Resume Builder",
    type: "Final Year Project",
    description:
      "Resume builder with 25+ templates, an OpenAI-powered scoring system that matches resumes to job descriptions, secure PDF export and JWT-secured accounts for 1,000+ resumes.",
    tags: ["React", "Node.js", "MongoDB", "FastAPI", "OpenAI API", "JWT"],
    highlights: ["50% faster resume creation", "95% offline download adoption"],
    featured: true,
  },
  {
    title: "EShift Management System",
    type: "Windows Desktop Application",
    description:
      "Logistics system automating household goods shifting for 500+ shipments a year, with role-based access, audit logs, payments with PDF receipts and a real-time admin dashboard.",
    tags: ["C#", ".NET Framework", "Windows Forms", "MS SQL Server"],
    highlights: ["80% fewer entry errors", "40% faster queries"],
  },
  {
    title: "Bus Seat Reservation System",
    type: "Data Structures & Algorithms",
    description:
      "Console reservation system handling 200+ bookings with FIFO waitlists, stack-based undo/redo and HashMap search, built with modular OOP and SOLID principles.",
    tags: ["Java", "Queue", "Stack", "HashMap", "Sorting"],
    highlights: ["80% faster lookups", "30% less complexity"],
  },
];

export const education = [
  {
    degree: "BEng (Hons) Software Engineering",
    school: "London Metropolitan University (via ESOFT Metro Campus)",
    period: "2025 – 2026",
  },
  {
    degree: "HND in Computing (Software Engineering)",
    school: "Pearson BTEC (via ESOFT Metro Campus)",
    period: "Jun 2023 – Dec 2025",
  },
];

export const languages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
  { name: "Malayalam", level: "Basic" },
];

export const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: `${profile.location} · ${profile.availability}`,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "mohamed-sihan-dev",
    href: profile.linkedin,
  },
];
