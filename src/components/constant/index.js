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
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Data structure & Algorithm",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "DC InfoTech Pvt.Ltd",
    icon: "/dc.png",
    iconBg: "#383E56",
    date: "December 2024 - March 2025",
    points: [
      "Assisting in the development of responsive and user-friendly web applications using React.js and Tailwind CSS ,Collaborating with the team to implement design elements and ensure seamless user experiences , Participating in code reviews and gaining hands-on experience with front-end technologies Actively learning about modern development workflows and tools to contribute effectively to the team's goals, ",
    ],
  },
  // make more if required
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Shivam",
    designation: "Mit muzaffarpur student",
    company: "441",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQHVlqdJuMAIqw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1736580873361?e=1739638800&v=beta&t=Y82zWn-txKT2f-HZ2NVCgcel0dx1Ys4T9vF-RNhXz8E",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Prince",
    designation: "Mit muzaffarpur student",
    company: "138",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQEpPk6zRdXGdg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1664094954080?e=1744243200&v=beta&t=jXLSfde5Wpae3rAXbEhFsm6DZTwrMJ6_K3Y5x5z9lvU",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Nitish",
    designation: "Mit muzaffarpur student",
    company: "420",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQG7Dx598k81mA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1649917801657?e=1744243200&v=beta&t=G8Qgfr5nkECoyXG575cLFDTuEA6xbmqilgn-jE6X3Xg",
  },
];

const projects = [
  {
    name: "Swiggy Functional Clone with Real-Time Features",
    description:
      "Designed a scalable and reusable architecture utilizing React components for enhanced maintainability . implemented advanced state management using Context API and Redux Toolkit to streamline data handling and improve performance. Utilized Swiggy API for real-time data integration, enabling dynamic restaurant and menu updates for a seamless user experience. Integrated Google Authentication for secure user login and Razorpay for reliable payment processing, ensuring a secure and trustworthy payment experience. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      
    ],
    image: "/swiggy.png",
    source_code_link: "https://github.com/Manoffsteel/swiggy2.0",
  },
  {
    name: "Interactive 3D iPhone 15 Pro Landing Page",
    description:
      "Built an interactive 3D landing page using Three.js.Implemented smooth animations with GSAP and responsive design using Tailwind CSS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: "/iphone.png",
    source_code_link: "https://github.com/Manoffsteel/iphone-mordern-3d-website",
  },
 
];

export { services, technologies, experiences, testimonials, projects };
