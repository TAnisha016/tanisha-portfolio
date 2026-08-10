// all the data is here,  edit here to update site copy/links.

import snapnewzImage from '../assets/SN.PNG';
import teachforgoodImage from '../assets/TFG.PNG';
import mysaathiImage from '../assets/MS.PNG';
export const profile = {
  name: 'Tanisha',
  role: 'Building Full-Stack Applications & learning  AI',
  tagline:
    "Final-year B.Tech student focused on full-stack development, data structures & algorithms, and AI, with experience building modern web applications and LLM-driven projects."
};

export const about = {
  heading: 'About Me ?',
  paragraphs: [
    "Helloo!, I'm Tanisha, Final Year B.Tech Student at IGDTUW", 
    
    "Currently exploring full-stack development, DSA, cloud, and AI ,from React and Node.js to AWS, LLMs, RAG, and APIs. I love learning by building, breaking things, and figuring out how to make them work better.",

    "Outside tech, I'm all about people, events, debates, and books. I've been organizing my college's annual cultural fest for three years, debating through school and college, and reading whenever I can. My bookshelf has no particular genre loyalty so political non-fiction and fiction happily coexist ",
  ],
};



export const projects = [
  {
    title: 'SnapNewz',
    subtitle: 'Full-Stack News Aggregator',
    description:
      'A full-stack app that fetches and displays real-time news via NewsAPI, with category filters, infinite scroll and Sentiment Analysis of the News.',
    stack: ['React', 'Express.js', 'Node.js', 'NewsAPI', 'Axios'],
    image: snapnewzImage,
    github: 'https://github.com/TAnisha016/SnapNewz',
    demo: 'https://snap-newz.vercel.app/',
  },
  {
    title: 'TeachForGood',
    subtitle: 'Volunteer–NGO Matching Platform',
    description:
      'Connects volunteers with NGOs for skill-based education. Matches volunteers to NGOs by location and availability, with secure registration via Firebase Authentication.',
    stack: ['React', 'Firebase Auth', 'HTML', 'CSS', 'JavaScript'],
    image: teachforgoodImage,
    github: 'https://github.com/TAnisha016/TeachForGood',
    demo: 'https://sohi07.github.io/TeachForGood/',
  },
  {
    title: 'MySaathi',
    subtitle: 'AI Learning Companion — Solo Hackathon Build',
    description:
      'Converted Figma designs into a live, mobile-first React + TypeScript app within a hackathon timeframe, with accessible UI components on a scalable architecture.',
    stack: ['React 18', 'TypeScript', 'Figma', 'Vercel'],
    image : mysaathiImage,
    github: 'https://github.com/TAnisha016/MySaathi',
    demo: 'https://my-saathi-rx24.vercel.app/',
  },
];

export const experience = [
  {
    type: 'experience',
    title: 'Infosys Springboard Internship',
    period: 'Aug 2025 – Oct 2025',
    description:
      'Contributed to "Open Deep Researcher", an agentic LLM research framework. Exploring applications of Generative AI for research automation, and supporting framework design under senior Data Scientists.',
  },
  {
    type: 'program',
    title: 'Pragati: Path to Future',
    period: '12-week program',
    description:
      'Selected participant focused on Digital Dexterity, Python, Generative AI, and professional development. Built foundational skills in Python, GenAI, and DSA alongside leadership and career readiness.',
  },
];

export const certifications = [
  {
    title: 'The Web Developer Bootcamp',
    issuer: 'Udemy',
    detail:
      '74-hour course covering HTML, CSS, JS, Node.js & React and building responsive UIs, dynamic forms, & server-side apps.',
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
    title: 'Top 4,000 : AlgoUniversity Tech Fellowship',
    detail:
      'Ranked among the top 4,000 of 20,000 participants in Round 1, which included solving DSA problems under timed conditions.',
  },
];

export const leadership = [
  {
    role: 'Head Coordinator',
    org: 'Taarangana : The Cultural Society of IGDTUW',
  },
  {
    role: 'Executive Member',
    org: 'BHAV Debating Society, IGDTUW',
  },
];

export const education = {
  degree: 'B.Tech - Electronics & Communication Engineering (AI)',
  school: 'Indira Gandhi Delhi Technical University for Women',
  period: '2023 – 2027',
};
