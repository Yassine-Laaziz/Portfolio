import {
  backend,
  web,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  shopify,
  threejs,
  xphoria,
  sanity,
  framerMotion,
  next,
  headlessUI,
  experiment3D,
  metaverse,
  nextAuth,
  alexy,
  IP_Tracker,
  tangierHorizons,
  nodemailer,
  portfolio,
  vite,
  arganaya,
  Icon3D,
  CyberSecurity,
  prisma,
  redux,
  stripe,
  postgresql,
  docker,
  k8s,
  devops,
  aws,
  expressjs,
  actions,
} from "./assets";
import { achievementT, experienceT, projectT, softSkillsT } from "../types";

export const navLinks: { id: string; title: string }[] = [
  {
    title: "work",
    id: "contracts",
  },
  {
    title: "Projects",
    id: "projects",
  },
  {
    title: "Tech",
    id: "tech",
  },
  {
    title: "Achievements",
    id: "achievements",
  },
  {
    title: "Contact",
    id: "contact",
  },
];
export const services: { title: string; icon: string }[] = [
  // {
  //   title: "Excellent communication",
  //   icon: web,
  // },
  // {
  //   title: "Excellent perspicacity",
  //   icon: backend,
  // },
];

export const technologies: { name: string; icon: string }[] = [
  { name: "TypeScript", icon: typescript },
  { name: "Shopify", icon: shopify },
  { name: "prisma", icon: prisma },
  { name: "Nodemailer", icon: nodemailer },
  { name: "vite", icon: vite },
  { name: "redux", icon: redux },
  { name: "next Js", icon: next },
  { name: "Three JS", icon: threejs },
  { name: "Headless UI", icon: headlessUI },
  { name: "Framer-motion", icon: framerMotion },
  { name: "Sanity CMS", icon: sanity },
  { name: "stripe", icon: stripe },
  { name: "figma", icon: figma },
  { name: "React JS", icon: reactjs },
  { name: "NextAuth", icon: nextAuth },
  { name: "MongoDB", icon: mongodb },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Postgresql", icon: postgresql },
  { name: "docker", icon: docker },
  { name: "kubernetes", icon: k8s },
  { name: "Amazon web services", icon: aws },
];

export const experiences: experienceT[] = [
  {
    title: "Nextjs Web Developer (fullstack)",
    company_name: "Alexy",
    icon: alexy,
    iconBg: "#383E56",
    date: "Jul 2023 - Dec 2023",
    points: [
      "Developed an Advanced, Cutting-edge, Modern, Ultra-fast and Secure e-commerce Website",
      "Implemented a captivating 3D UI/UX that is controllable by the end user",
      "implemented sessions for Quick Google Authentication through Next-Auth",
      "Implemented a Checkout Gateway using Stripe, and Stripe Webhooks",
    ],
  },
  {
    title: "Nextjs Web Developer (fullstack)",
    company_name: "Xphoria",
    icon: xphoria,
    iconBg: "#383E56",
    date: "Jun 2023 - Present",
    points: [
      "Developed a passwordless email-only JWT authentication system for enhanced security and ease of use.",
      "Designed a captivating and user-friendly UI/UX with customizable product options.",
      "Implemented a checkout gateway using the Shopify package.",
    ],
  },
  {
    title: "Nextjs Web Developer (fullstack)",
    company_name: "Arganaya ",
    icon: arganaya,
    iconBg: "#383E56",
    date: "Jun 2022 - Dec 2022 · 7 mos",
    points: [
      "Created a responsive, High-Quality Company Website according to design.",
      "Implemented signup/login functionalities, an email verification system, and a checkout system (company preferred a “pay as you receive” gateway).",
      'Implemented middleware and protected routes using “Jose” (a lightweight edge "jsonwebtoken") for authorization/authentication.',
      "Made the orders customizable by adding “params” and “option” properties to cart items making the website much more engaging and pleasurable.",
    ],
  },
  {
    title: "Junior Frontend React Web Developer",
    company_name: "Tangier's Horizons Association",
    icon: tangierHorizons,
    iconBg: "#383E56",
    date: "Mar 2022 - Jun 2022 · 4 mos",
    points: [
      "Engineered the Programs' Architecture to be scalable for upcoming updates and developers.",
      "Programmed The Whole Website According to design And all of its Pages using React Router V6.",
      "Transformed a given design into a fully functioning website while respecting responsiveness.",
    ],
  },
];

export const contracts: projectT[] = [
  {
    name: "Xphoria",
    description: `With a passworless email-only JWT authentication system, Xphoria is ensuring an easier and safer option eliminating and steering away from vurnabilities associated with
    user credentials. The project features a unique and captivating UX/UI and product customization guarantiying user satisfaction, the checkout gateway is implemented using the Shopify package.`,
    image: xphoria,
    website_link: "https://xphoria.vercel.app",
    source_code_link: "https://github.com/Yassine-Laaziz/Xphoria",
    tags: [
      {
        name: "Api Routes",
        color: "green-text-gradient",
      },
      {
        name: "CMS",
        color: "pink-text-gradient",
      },
      {
        name: "Serverless (partially)",
        color: "blue-text-gradient",
      },
    ],
    stack: [
      { img: mongodb, alt: "MongoDB" },
      { img: reactjs, alt: "React.js" },
      { img: next, alt: "Next.js" },
      { img: typescript, alt: "Typescript" },
      { img: sanity, alt: "Sanity" },
      { img: nodejs, alt: "Node.js" },
      { img: nodemailer, alt: "Nodemailer" },
      { img: shopify, alt: "Shopify" },
      { img: tailwind, alt: "Tailwind.css" },
      { img: headlessUI, alt: "HeadlessUI" },
      { img: framerMotion, alt: "Framer-Motion" },
    ],
  },
  {
    name: "Alexy",
    description: `Developed an Advanced, Cutting-edge, Modern, Ultra-fast and Secure e-commerce Website
    Implemented a captivating 3D UI/UX that is controllable by the end user
    implemented sessions for Quick Google Authentication through Next-Auth
    Implemented a Checkout Gateway using Stripe, and Stripe Webhooks`,
    image: alexy,
    website_link: "https://alexy.vercel.app",
    source_code_link: "https://github.com/Yassine-Laaziz/Alexy",
    tags: [
      {
        name: "Api Routes",
        color: "green-text-gradient",
      },
      {
        name: "CMS",
        color: "pink-text-gradient",
      },
      {
        name: "Serverless (partially)",
        color: "blue-text-gradient",
      },
    ],
    stack: [
      { img: mongodb, alt: "MongoDB" },
      { img: reactjs, alt: "React.js" },
      { img: next, alt: "Next.js" },
      { img: nextAuth, alt: "NextAuth.js" },
      { img: typescript, alt: "Typescript" },
      { img: sanity, alt: "Sanity" },
      { img: nodejs, alt: "Node.js" },
      { img: stripe, alt: "stripe" },
      { img: tailwind, alt: "Tailwind.css" },
      { img: headlessUI, alt: "HeadlessUI" },
      { img: framerMotion, alt: "Framer-Motion" },
    ],
  },
  {
    name: "Arganaya",
    description: `Arganaya focuses on ensuring user satisfaction through food customization for better health and taste preferences.
    The project includes user authentication through JWT, with nodemailer used for email verification and receiving food orders.`,
    image: arganaya,
    website_link: "https://arganaya.vercel.app",
    source_code_link: "https://github.com/Yassine-Laaziz/Arganaya",
    tags: [
      {
        name: "Api Routes",
        color: "green-text-gradient",
      },
      {
        name: "CMS",
        color: "pink-text-gradient",
      },
      {
        name: "Serverless (partially)",
        color: "blue-text-gradient",
      },
    ],
    stack: [
      { img: mongodb, alt: "MongoDB" },
      { img: reactjs, alt: "React.js" },
      { img: next, alt: "Next.js" },
      { img: sanity, alt: "Sanity" },
      { img: nodejs, alt: "Node.js" },
      { img: nodemailer, alt: "Nodemailer" },
    ],
  },
  {
    name: "Tangier Horizons",
    description: `Tangier Horizons is like a portfolio for an association, this project is simple yet provides a good UX/UI showcasing 
    the achievements, gallery and personalities of the association`,
    image: tangierHorizons,
    website_link: "https://tangierHorizons.netlify.app",
    source_code_link: "https://github.com/Yassine-Laaziz/IP-Tracker",
    stack: [
      { img: reactjs, alt: "React.js" },
      { img: sanity, alt: "Sanity" },
    ],
  },
];

export const projects: projectT[] = [
  {
    name: "devops",
    description: `A scalable back-end application revolving around workflows, CI/CD pipelines, 
    testing, containerization, cyber protection, neon postgresql and drizzle.
    `,
    image: devops,
    source_code_link: "https://github.com/Yassine-Laaziz/devops-app",
    tags: [
      { name: "Workflows and orchestration", color: "text-purple-700" },
      { name: "Back-end", color: "text-yellow-800" },
      { name: "Cybersecurity", color: "text-blue-700" },
      { name: "Cloud", color: "text-orange-800" },
      { name: "Testing and logging", color: "text-blue-400" },
    ],
    stack: [
      { img: docker, alt: "docker" },
      { img: k8s, alt: "kubernetes" },
      { img: postgresql, alt: "postgresql" },
      { img: nodejs, alt: "node.js" },
      { img: aws, alt: "amazon web services" },
      { img: expressjs, alt: "express.js" },
      { img: actions, alt: "github actions" },
    ],
  },
  {
    name: "3D Experiment",
    description: `3D shirt customization. Using advanced cutting-edge web development techniques and tools
    like Three.js and Next.js framework to deliver optimal performance and seamless interactivity, it also
    connects to an api for image generation on the server.`,
    image: experiment3D,
    website_link: "https://3-d-experiment.vercel.app",
    source_code_link: "https://github.com/Yassine-Laaziz/3D-Experiment",
    tags: [
      {
        name: "Api Routes",
        color: "green-text-gradient",
      },
      {
        name: "Serverless (partially)",
        color: "blue-text-gradient",
      },
      {
        name: "3D",
        color: "pink-text-gradient",
      },
    ],
    stack: [
      { img: threejs, alt: "Three.js" },
      { img: reactjs, alt: "React.js" },
      { img: next, alt: "Next.js" },
      { img: typescript, alt: "Typescript" },
      { img: nodejs, alt: "Node.js" },
      { img: tailwind, alt: "Tailwind.css" },
      { img: framerMotion, alt: "Framer-Motion" },
    ],
  },
  {
    name: "Metaverse",
    description: `This is a landing page project, that delivers a captivating user interface and experience, 
    The sleek design and animation is crafted using Tailwind CSS and Framer-Motion.`,
    website_link: "https://metaverse-yl.vercel.app",
    image: metaverse,
    source_code_link: "https://github.com/Yassine-Laaziz/Metaverse",
    stack: [
      { img: next, alt: "Next.js" },
      { img: reactjs, alt: "React.js" },
      { img: tailwind, alt: "Tailwind.css" },
      { img: framerMotion, alt: "Framer-Motion" },
    ],
  },
  {
    name: "Portfolio",
    description: `This is my own portfolio project that ensures a captivating 3D user interface and experience using Three.js,
    showcasing some of my contracts, projects and achievements using a wonderful interface. Also uses a simple 'formSpree' 
    form-action url to send an email to me and 'formspree' and google recaptcha for spam prevention`,
    image: portfolio,
    website_link: "https://yassinelz.vercel.app",
    source_code_link: "https://github.com/Yassine-Laaziz/Arganaya",
    tags: [
      {
        name: "3D",
        color: "pink-text-gradient",
      },
    ],
    stack: [
      { img: reactjs, alt: "React.js" },
      { img: next, alt: "Next.js" },
      { img: threejs, alt: "Three.js" },
      { img: framerMotion, alt: "Framer-Motion" },
      { img: vite, alt: "Vite" },
    ],
  },
  {
    name: "IP Tracker",
    description: `An IP Tracker Built using simple rest api's, user enters IP, website uses api to fetch the ip json,
    display it properly and assign it's latitude and longitude to an api map, if user enters a blank ip the website
    uses another api to get the user's ip first.`,
    image: IP_Tracker,
    website_link: "https://ip-tracker-yl.netlify.app",
    source_code_link: "https://github.com/Yassine-Laaziz/IP-Tracker",
    stack: [{ img: reactjs, alt: "React.js" }],
  },
];

export const achievements: achievementT[] = [
  // {
  //   age: 12,
  //   achievement: "I became a software engineer",
  //   description: `At the age of 12, I embarked on my software engineering journey by diving into Lua programming. Lua allowed me to develop various projects
  //      and sparked my passion for coding. It was during this time that I also began exploring the world of web development.`,
  //   keyPoints: [
  //     "Initiated software engineering journey",
  //     "Developed projects using Lua",
  //     "Started exploring web development",
  //   ],
  // },
  {
    age: 17,
    achievement: "In a journey as an advanced software engineer",
    description: `By the time I turned 17, I had established myself as an advanced software engineer, proficient in both
      frontend and backend development. I specialized in creating captivating, seamless, responsive 3D user interfaces on the frontend,
      while also architecting robust and scalable backend systems. Additionally, I expanded my knowledge in cybersecurity, ensuring the security and integrity of web applications.`,
    keyPoints: [
      "Advanced fullstack web development expertise specializing in client-side",
      "Proficient in building robust and scalable infastractures",
      "Proficient in Dev-Ops, Software Optimization, Scalability, Compatibility, and Reliability",
      "Experience in cybersecurity, web application security, ethical hacking, kali-linux, pentesting..",
    ],
  },
  {
    age: 16,
    achievement: "Awarded multiple prizes in hackathons and related events",
    description: `At the age of 11 I started out in Lua programming. I was a kid and Lua allowed me to develop various projects
       that displayed my spark for the digital world, and Lua therefore allowed me at the ages of 14 & 16 to participate and win prizes in various hackathons`,
    keyPoints: [
      "Won multiple prizes in hackathons",
      "Developed game development projects using Lua",
      "Started exploring web development and cybersecurity",
    ],
  },
];

export const softSkills: softSkillsT[] = [
  {
    skill: "CyberSecurity",
    icon: CyberSecurity,
  },
  {
    skill: "3D Modeling",
    icon: Icon3D,
  },
];
