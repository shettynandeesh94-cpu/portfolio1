const config = {
  title: "Nandeesh Shetty | Full-Stack Web Developer",
  description: {
    long: "Explore the portfolio of Nandeesh Shetty, a full-stack web developer and Computer Science undergraduate specializing in MERN stack, Java Spring Boot, and modern web technologies. Discover my latest projects including real-time chat apps, event management systems, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Nandeesh Shetty, a full-stack web developer creating innovative web applications and projects.",
  },
  objective:
    "Motivated Computer Science undergraduate with hands-on experience in full-stack web development and a strong foundation in problem-solving. Eager to contribute to innovative tech projects while continuously growing my skills in software engineering and modern web technologies.",
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
  phone: "+91 9916112293",
  site: "https://nandeesh-shetty.vercel.app",

  // for github stars button — set repo to empty to hide the button
  githubUsername: "shettynandeesh94-cpu",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/nandeesh-shetty/",
    github: "https://github.com/shettynandeesh94-cpu",
  },
};
export { config };
