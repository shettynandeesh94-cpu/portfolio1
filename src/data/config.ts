const config = {
  title: "Nandeesh Shetty | Full-Stack Web Developer",
  description: {
    long: "Explore the portfolio of Nandeesh Shetty, a full-stack web developer and Computer Science undergraduate specializing in MERN stack, Java Spring Boot, and modern web technologies. Discover my latest projects including real-time chat apps, event management systems, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Nandeesh Shetty, a full-stack web developer creating innovative web applications and projects.",
  },
  keywords: [
    "Nandeesh Shetty",
    "portfolio",
    "full-stack developer",
    "web development",
    "MERN stack",
    "React",
    "Node.js",
    "Java",
    "Spring Boot",
    "MongoDB",
    "MySQL",
    "Socket.io",
    "PHP",
    "JavaScript",
    "computer science",
  ],
  author: "Nandeesh Shetty",
  email: "shettynandeesh94@gmail.com",
  site: "https://nandeesh-shetty.vercel.app",

  // for github stars button
  githubUsername: "nandeesh-shetty",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/nandeesh-shetty/",
    github: "https://github.com/nandeesh-shetty",
  },
};
export { config };
