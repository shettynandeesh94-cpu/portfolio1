import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { LiveDemoEmbed } from "@/components/live-demo-embed";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  jwt: {
    title: "JWT",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">JWT</span>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">☕</span>,
  },
  springboot: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">🍃</span>,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">HTML</span>,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">CSS</span>,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">SQL</span>,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">PHP</span>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">B</span>,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">🐍</span>,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">🎈</span>,
  },
  nlp: {
    title: "NLP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">NLP</span>,
  },
};

export type Project = {
  id: string;
  category: string;
  date: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "realtime-chat",
    category: "Full-Stack Application",
    date: "2025",
    title: "Chat Analyzer",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.streamlit,
        PROJECT_SKILLS.nlp,
      ],
    },
    live: "https://chat-analyzer-1-prom.onrender.com/",
    github: "https://github.com/shettynandeesh94-cpu/chat-analyzer",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A full-stack real-time chat analysis tool that extracts deep
            insights from WhatsApp and messaging exports.
          </TypographyP>
          <TypographyP className="font-mono ">
            Built with Python and Streamlit, this chat analyzer parses exported
            chat files and generates detailed analytics — from message frequency
            heatmaps to sentiment analysis and word clouds — giving you an
            unprecedented view into your conversations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          {/* ── LIVE DEMO ── */}
          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live Demo
          </TypographyH3>
          <p className="font-mono mb-4 text-sm text-muted-foreground">
            Try it right here — upload a WhatsApp chat export and explore the
            analytics instantly.
          </p>
          <LiveDemoEmbed
            url="https://chat-analyzer-1-prom.onrender.com/"
            title="Chat Analyzer"
          />

          <TypographyH3 className="my-4 mt-10">
            Chat Insights & Analytics
          </TypographyH3>
          <p className="font-mono mb-2">
            Analyzes exported chat files to surface message volume over time,
            most-active hours, top senders, emoji usage, word frequency, and
            more — all visualised as interactive charts.
          </p>

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            The application includes NLP-powered sentiment analysis to gauge the
            tone of conversations, word clouds highlighting recurring themes, an
            activity heatmap, media-share statistics, and exportable reports —
            all rendered in a clean, responsive Streamlit interface.
          </p>

          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Python for data processing and NLP, Streamlit for the interactive
            web interface, Pandas for data wrangling, Matplotlib / Plotly for
            visualisations, and deployed live on Render for zero-config hosting.
          </p>
        </div>
      );
    },
  },
  {
    id: "event-management",
    category: "Web Application",
    date: "Sept 2025",
    title: "College Event Management System",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.mysql,
      ],
    },
    live: "https://event-registration-system-a5l5.onrender.com/",
    github: "https://github.com/shettynandeesh94-cpu/college-event-register",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A web application to manage college events including registration,
            scheduling, and participant tracking.
          </TypographyP>
          <TypographyP className="font-mono ">
            Developed a comprehensive web application for managing college
            events, built with Java and Spring Boot on the backend with MySQL
            for data storage. The system streamlines the entire event lifecycle
            from creation to completion.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          {/* ── LIVE DEMO ── */}
          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live Demo
          </TypographyH3>
          <p className="font-mono mb-4 text-sm text-muted-foreground">
            Interact with the live event registration system — browse upcoming
            events and register directly from here.
          </p>
          <LiveDemoEmbed
            url="https://event-registration-system-a5l5.onrender.com/"
            title="College Event Management"
          />

          <TypographyH3 className="my-4 mt-10">
            Event Management
          </TypographyH3>
          <p className="font-mono mb-2">
            The platform enables administrators to create, schedule, and manage
            college events with full CRUD operations. Event organizers can set
            event details, dates, venues, and capacity limits while participants
            can browse and register for upcoming events.
          </p>

          <TypographyH3 className="my-4 mt-8">
            User Authentication & Database
          </TypographyH3>
          <p className="font-mono mb-2">
            Implemented user authentication and role-based access control using
            Spring Boot security. The MySQL database handles all data
            persistence including user profiles, event details, registrations,
            and participant tracking with proper relational schema design.
          </p>
        </div>
      );
    },
  },
  {
    id: "cinerec",
    category: "Database Project",
    date: "Jan 2025",
    title: "CineREC - DBMS Project",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A dynamic movie information platform with a secure admin panel for
            content management.
          </TypographyP>
          <TypographyP className="font-mono ">
            Designed and built a movie information platform using PHP and MySQL
            with a Bootstrap-powered responsive frontend. The platform allows
            users to browse, search, and explore detailed information about
            films, while administrators manage content through a secure admin
            panel.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Movie Database & Search
          </TypographyH3>
          <p className="font-mono mb-2">
            Built an optimized database schema for efficient retrieval of film
            data and user interactions. Users can search and filter movies by
            various criteria, view detailed information including cast, genre,
            ratings, and reviews with fast query performance.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Admin Panel & Content Management
          </TypographyH3>
          <p className="font-mono mb-2">
            The secure admin panel provides full content management capabilities
            - adding new movies, editing existing entries, managing user reviews,
            and monitoring platform activity. Built with PHP sessions for
            authentication and prepared statements for SQL injection prevention.
          </p>
        </div>
      );
    },
  },
];
export default projects;
