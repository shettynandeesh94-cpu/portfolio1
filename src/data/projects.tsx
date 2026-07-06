import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

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
};

export type Project = {
  id: string;
  category: string;
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
    title: "Real-Time Chat Application",
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
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sockerio,
        PROJECT_SKILLS.jwt,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A full-stack real-time messaging application built with the MERN
            stack and WebSocket communication.
          </TypographyP>
          <TypographyP className="font-mono ">
            Built a complete real-time chat application using MongoDB,
            Express.js, React.js, and Node.js (MERN) with WebSocket
            communication powered by Socket.io. The application supports
            seamless one-to-one messaging with instant delivery.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Real-Time Communication
          </TypographyH3>
          <p className="font-mono mb-2">
            Implemented WebSocket-based real-time messaging using Socket.io,
            enabling instant message delivery between users without page
            refreshes. The system supports online/offline status indicators so
            users can see who is currently active.
          </p>

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            The application includes typing indicators that show when the other
            person is composing a message, message timestamps for conversation
            context, and JWT-based authentication for secure user sessions. The
            clean, responsive UI ensures a smooth experience across all devices.
          </p>

          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            MongoDB for data persistence, Express.js and Node.js for the backend
            API and WebSocket server, React.js for the frontend interface,
            Socket.io for real-time bidirectional communication, and JWT for
            secure authentication.
          </p>
        </div>
      );
    },
  },
  {
    id: "event-management",
    category: "Web Application",
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
    live: "#",
    github: "#",
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

          <TypographyH3 className="my-4 mt-8">
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
    title: "CineREC – DBMS Project",
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
            — adding new movies, editing existing entries, managing user reviews,
            and monitoring platform activity. Built with PHP sessions for
            authentication and prepared statements for SQL injection prevention.
          </p>
        </div>
      );
    },
  },
];
export default projects;
