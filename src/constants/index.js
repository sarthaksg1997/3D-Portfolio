import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  angular,
  git,
  figma,
  deloitte,
  netflix,
  portfolio,
  expense,
  threejs,
  linkedin,
  gmail,
  twitter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "NodeJS Developer",
    icon: mobile,
  },
  {
    title: "Angular Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Deloitte USI",
    icon: deloitte,
    iconBg: "#383E56",
    date: "Jan 2022 - July 2024",
    points: [
      "Developing and maintaining Year planning application using MERN stack and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Leading a frontend team of four developers and successfully migrating authentication systems from ADAL to MSAL.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Angular and .Net Developer",
    company_name: "Deloitte USI",
    icon: deloitte,
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      "Developing and maintaining Audit application using Angular , .Net and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Contributing to the project by leveraging expertise in BLEM JSON templates to support and guide team members in implementation and issue resolution",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Netflix Clone",
    description:
      "🎬 Lights, Camera, React! 🍿 Built a Netflix clone from scratch using React and the TMDB API. Seamlessly integrated with TMDB API to fetch real-time movie and TV show data. Implemented a responsive UI for optimal viewing across devices. 🎥",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TMDB_API",
        color: "green-text-gradient",
      },
      {
        name: "React-youtube",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/sarthaksg1997/Netflix_Clone",
    live_app_link: "https://netflix-clone-31b8f.web.app/",
  },
  {
    name: "Expense Tracker",
    description:
      "📊 Expense Tracker App 📉 MERN stack wizard! Crafted an intuitive UI with React, chart.js, Context-API, and Material-UI for seamless interaction. Securely manage income/expenses with JWT authentication on Node.js, Express, and MongoDB.  💼💰 ",
    tags: [
      {
        name: "MERNStack",
        color: "blue-text-gradient",
      },
      {
        name: "Material-UI",
        color: "green-text-gradient",
      },
      {
        name: "Chart.js",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    source_code_link: "https://github.com/sarthaksg1997/Expense_tracker_deploy",
    live_app_link: "https://prickly-deer-neckerchief.cyclic.app/login",
  },
  {
    name: "3D Portfolio",
    description:
      "🚀 Step into my 3D portfolio world!🌐 Leveraged React, Three.js, framer-motion, and Tailwind CSS to craft an immersive and dynamic showcase. Explore smooth animations, and responsive design for an unforgettable browsing experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/sarthaksg1997/3D-Portfolio",
    live_app_link: "https://3d-portfolio-sarthaksg1997s-projects.vercel.app/",
  },
];

const accounts = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/sarthak-gupta-b008a9180/",
    icon: linkedin,
  },
  {
    name: "Gmail",
    url: "https://mail.google.com/mail/?view=cm&to=sarthakg662@gmail.com",
    icon: gmail,
  },
  {
    name: "Twitter",
    url: "https://x.com/sarthakg26?t=cC3m2beMb2hsWtcLA0krBw&s=08",
    icon: twitter,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  accounts,
};
