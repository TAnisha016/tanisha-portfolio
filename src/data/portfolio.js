// Central content store — edit here to update site copy/links.

export const profile = {
  name: 'Tanisha',
  role: 'Building Full-Stack Applications & learning Applied AI',
  tagline:
    "Final-year B.Tech student focused on full-stack development, data structures & algorithms, and AI, with experience building modern web applications and LLM-driven projects."
};

export const about = {
  heading: 'About',
  paragraphs: [
    "Hi, I'm Tanisha an ECE-AI student", 
    
    "My interests currently revolve around full-stack development, data structures & algorithms, and applied AI. Through personal projects, internships, and continuous learning, I'm building the skills needed to become a software engineer who can design, develop, and ship meaningful products.",
    "I'm always curious about new technologies, new challenges, and new opportunities to grow. ",
  ],
};

export const skillGroups = [
  {
    title: "Programming",
    icon: "code",
    description: "Core programming languages I use to solve problems and build software.",
    color: "purple",
    skills: ["C++", "JavaScript"]
  },
  {
    title: "Frontend",
    icon: "monitor",
    description: "Building responsive and interactive user interfaces.",
    color: "blue",
    skills: [
      "React",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS"
    ]
  },
  {
    title: "Backend",
    icon: "server",
    description: "Developing APIs and server-side applications.",
    color: "green",
    skills: [
      "Node.js",
      "Express.js"
    ]
  },
  {
    title: "AI & Tools",
    icon: "brain",
    description: "Exploring modern AI technologies and developer tools.",
    color: "amber",
    skills: [
      "LangChain",
      "Google Gemini",
      "Prompt Engineering"
    ]
  },
  {
    title: "Developer Tools",
    icon: "git",
    description: "Tools I use throughout the development workflow.",
    color: "pink",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman"
    ]
  }
];

export const learning = [
  "Data Structures & Algorithms",
  "System Design",
  "Next.js",
  "TypeScript",
  "LLMs",
  "AWS"
];

export const projects = [
  {
    title: 'SnapNewz',
    subtitle: 'Full-Stack News Aggregator',
    description:
      'A full-stack app that fetches and displays real-time news via NewsAPI, with category filters and pagination for fast browsing.',
    stack: ['React', 'Express.js', 'Node.js', 'NewsAPI', 'Axios'],
    github: 'https://github.com/TAnisha016/SnapNewz',
    demo: 'https://snap-newz.vercel.app/',
  },
  {
    title: 'TeachForGood',
    subtitle: 'Volunteer–NGO Matching Platform',
    description:
      'Connects volunteers with NGOs for skill-based education. Matches volunteers to NGOs by location and availability, with secure registration via Firebase Auth.',
    stack: ['React', 'Firebase Auth', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/TAnisha016/TeachForGood',
    demo: 'https://sohi07.github.io/TeachForGood/',
  },
  {
    title: 'MySaathi',
    subtitle: 'AI Learning Companion — Solo Hackathon Build',
    description:
      'Converted Figma designs into a live, mobile-first React + TypeScript app within a hackathon timeframe, with accessible UI components on a scalable architecture.',
    stack: ['React 18', 'TypeScript', 'Figma', 'Vercel'],
    github: 'https://github.com/TAnisha016/MySaathi',
    demo: 'https://my-saathi-rx24.vercel.app/',
  },
];

export const experience = [
  {
    type: 'experience',
    title: 'Infosys Springboard Internship 6.0',
    period: 'Aug 2025 – Oct 2025',
    description:
      'Contributing to "Open Deep Researcher" — an agentic LLM research framework — exploring applications of Generative AI for research automation, and supporting framework design under senior Data Scientists.',
  },
  {
    type: 'program',
    title: 'Pragati: Path to Future — Cohort 2',
    period: '12-week program',
    description:
      'Selected participant focused on Digital Dexterity, Python, Generative AI, and professional development. Built foundational skills in Python, GenAI, and DSA alongside leadership and career readiness.',
  },
];

export const certifications = [
  {
    title: 'The Web Developer Bootcamp 2024',
    issuer: 'Udemy',
    detail:
      '74-hour course covering HTML, CSS, JS, Node.js & React — building responsive UIs, dynamic forms, and server-side apps.',
  },
  {
    title: 'Artificial Intelligence Certification',
    issuer: 'Infosys Springboard',
  },
  {
    title: 'UI/UX Design Training',
    issuer: 'Internshala',
  },
];

export const achievements = [
  {
    title: 'Top 4,000 — AlgoUniversity Tech Fellowship',
    detail:
      'Ranked among the top 4,000 of 20,000 participants in Round 1, which included solving DSA problems under timed conditions.',
  },
];

export const leadership = [
  {
    role: 'Head Coordinator',
    org: 'Taarangana — Cultural Society, IGDTUW',
  },
  {
    role: 'Executive Member',
    org: 'BHAV Debating Society, IGDTUW',
  },
];

export const education = {
  degree: 'B.Tech — Electronics & Communication Engineering (AI)',
  school: 'Indira Gandhi Delhi Technical University for Women',
  period: '2023 – 2027',
};
