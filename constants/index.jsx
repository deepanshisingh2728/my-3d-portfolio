// ===== PROJECT IMAGES =====
import blogImg from "../assets/logos/blog.png";
import weatherImg from "../assets/logos/weather.png";
import portfolioImg from "../assets/logos/portfolio.png";
import quizImg from "../assets/logos/quiz.jpg";
import auraaImg from "../assets/logos/auraa.png";
import cynthiaImg from "../assets/logos/cynthia.png";

// ===== LOGOS =====
import reactLogo from "../assets/logos/react.svg";
import viteLogo from "../assets/logos/vitejs.svg";
import jsLogo from "../assets/logos/javascript.svg";
import htmlLogo from "../assets/logos/html5.svg";
import cssLogo from "../assets/logos/css3.svg";
import githubLogo from "../assets/logos/github.png";
import linkedinLogo from "../assets/logos/linkedin.svg";
import vscodeLogo from "../assets/logos/visualstudiocode.svg";


// ===================== SOCIAL LINKS =====================

export const mySocials = [
  {
    name: "linkedin",
    href: "http://linkedin.com/in/deepanshi-singh-81376738a",
    icon: linkedinLogo,
  },
  {
    name: "gitHub",
    href: "https://github.com/deepanshisingh2728",
    icon: githubLogo,
  },
];


// ===================== PROJECTS =====================

export const myProjects = [
  {
    id: 1,
    title: "Blog App",
    description:
      "A responsive blog application where users can read, create, and manage blog posts with smooth navigation and modern UI.",
    subDescription: [
      "Built using React and Vite for fast performance",
      "Responsive design for mobile and desktop",
      "Clean and minimal UI for easy reading",
      "Optimized routing and user experience",
    ],
    href: "https://blog-website-ebon-six.vercel.app/",
    image: blogImg,
    tags: [
      { id: 1, name: "React", path: reactLogo },
      { id: 2, name: "Vite", path: viteLogo },
      { id: 3, name: "JavaScript", path: jsLogo },
      { id: 4, name: "HTML5", path: htmlLogo },
    ],
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A real-time weather application that shows accurate weather data using live API and location-based search.",
    subDescription: [
      "Integrated Weather API for live updates",
      "Search weather by city",
      "Fast and lightweight UI",
      "Fully responsive layout",
    ],
    href: "https://deepanshi-project.vercel.app/",
    image: weatherImg,
    tags: [
      { id: 1, name: "JavaScript", path: jsLogo },
      { id: 2, name: "HTML5", path: htmlLogo },
      { id: 3, name: "CSS3", path: cssLogo },
    ],
  },
  {
    id: 3,
    title: "Portfolio & Blog Website",
    description:
      "A personal portfolio website showcasing projects, skills, and blogs to build a professional online presence.",
    subDescription: [
      "Personal branding focused layout",
      "Project showcase section",
      "Responsive design",
      "Clean and professional UI",
    ],
    href: "https://blog-website-cdzc.vercel.app/",
    image: portfolioImg,
    tags: [
      { id: 1, name: "HTML5", path: htmlLogo },
      { id: 2, name: "CSS3", path: cssLogo },
    ],
  },
  {
    id: 4,
    title: "Quiz App",
    description:
      "An interactive quiz application with real-time scoring and engaging multiple-choice questions.",
    subDescription: [
      "MCQ based quiz system",
      "Real-time score calculation",
      "Smooth and interactive UI",
      "Optimized user experience",
    ],
    href: "https://quiz-web-six-wheat.vercel.app/",
    image: quizImg,
    tags: [
      { id: 1, name: "JavaScript", path: jsLogo },
      { id: 2, name: "GitHub", path: githubLogo },
      { id: 3, name: "VS Code", path: vscodeLogo },
    ],
  },
  {
    id: 5,
    title: "Auraa Virtual Assistant",
    description:
      "A web-based virtual assistant that interacts with users through text commands for a smart experience.",
    subDescription: [
      "Interactive assistant interface",
      "Fast response handling",
      "User-friendly UI",
      "Lightweight and responsive",
    ],
    href: "https://auraa-rho.vercel.app/",
    image: auraaImg,
    tags: [
      { id: 1, name: "JavaScript", path: jsLogo },
      { id: 2, name: "HTML5", path: htmlLogo },
      { id: 3, name: "CSS3", path: cssLogo },
    ],
  },
  {
    id: 6,
    title: "Cynthia Ugwu Website Clone",
    description:
      "A visually rich animated website inspired by Cynthiao.com, built with modern UI and smooth animations.",
    subDescription: [
      "Smooth scrolling animations",
      "Modern layout design",
      "Fully responsive",
      "High-quality UI recreation",
    ],
    href: "https://cynthia-ugwu-clone-eight.vercel.app/",
    image: cynthiaImg,
    tags: [
      { id: 1, name: "HTML5", path: htmlLogo },
      { id: 2, name: "CSS3", path: cssLogo },
      { id: 3, name: "JavaScript", path: jsLogo },
    ],
  },
];




// ===================== EXPERIENCES (FOR TIMELINE) =====================

export const experiences = [
  {
    title: "Co-Founder",
    content: (
      <div className="text-neutral-300 space-y-4">
        <p className="text-xl text-white font-semibold">
          Auraa – Premium Jewellery Brand
        </p>
        <p className="text-sm text-neutral-400">2024 - Present</p>

        <ul className="list-disc ml-5 space-y-2">
          <li>Co-founded Auraa, a premium jewellery brand focused on creating elegant, long-lasting, and tarnish-resistant pieces.</li>
          <li>Led the development of modern jewellery collections that combine timeless aesthetics with contemporary design trends.</li>
          <li>Ensured high-quality craftsmanship and material selection to deliver durable and shine-retaining jewellery.</li>
          <li>Built a brand identity centered on trust, elegance, and celebrating special moments with confidence.</li>
          <li>Worked on strategic planning, product design, and brand growth to establish Auraa in the premium jewellery market.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    content: (
      <div className="text-neutral-300 space-y-4">
        <p className="text-xl text-white font-semibold">
          Maharshi Dayanand University (MDU)
        </p>
        <p className="text-sm text-neutral-400">2023 - 2026</p>

        <ul className="list-disc ml-5 space-y-2">
          <li>Currently pursuing a Bachelor of Computer Applications with a strong academic focus on software development and modern web technologies.</li>
          <li>Actively learning and applying full-stack development concepts including React, Node.js, Tailwind CSS, and Three.js.</li>
          <li>Built multiple real-world projects such as a healthcare management platform, virtual assistant, quiz application, and a full-stack business website.</li>
          <li>Gained hands-on experience in UI/UX design, responsive layouts, API integration, and deployment of live web applications.</li>
          <li>Continuously improving problem-solving skills, coding practices, and understanding of scalable application architecture.</li>
        </ul>
      </div>
    ),
  },
 {
  title: "Senior Secondary Education (12th – Arts)",
  content: (
    <div className="text-neutral-300 space-y-4">
      <p className="text-xl text-white font-semibold">CBSE Board</p>
      <p className="text-sm text-neutral-400">2022</p>

      <ul className="list-disc ml-5 space-y-2">
        <li>
          Completed Senior Secondary Education under the CBSE board with Arts
          stream, building a strong foundation in analytical thinking,
          communication, and critical reasoning.
        </li>
        <li>
          Studied core subjects including English Core, History, Political
          Science, and Economics, gaining a deep understanding of social,
          political, and economic systems.
        </li>
        <li>
          Developed strong reading, writing, and interpretation skills through
          English Core, improving clarity of expression and professional
          communication.
        </li>
        <li>
          Strengthened research, analysis, and structured argumentation through
          humanities-based coursework and academic projects.
        </li>
        <li>
          The Arts background supported creative thinking, user-centric
          perspectives, and strategic problem analysis, which now complements
          technology and design-driven projects.
        </li>
      </ul>
    </div>
  ),
},

  {
  title: "Secondary Education (10th)",
  content: (
    <div className="text-neutral-300 space-y-4">
      <p className="text-xl text-white font-semibold">CBSE Board</p>
      <p className="text-sm text-neutral-400">2020</p>

      <ul className="list-disc ml-5 space-y-2">
        <li>
          Completed Secondary Education under the CBSE board with a strong
          academic foundation across core subjects.
        </li>
        <li>
          Studied English Language & Literature, Mathematics, Science, Social
          Science, and Information Technology, developing balanced skills in
          communication, logic, and technology.
        </li>
        <li>
          Built analytical and problem-solving abilities through Mathematics and
          Science, while strengthening written and verbal communication through
          English.
        </li>
        <li>
          Gained early exposure to computers, digital tools, and basic IT
          concepts, which sparked interest in software and technology-driven
          learning.
        </li>
        <li>
          Developed discipline, time management, and consistency, laying a
          strong foundation for higher studies in computer applications and web
          development.
        </li>
        
      </ul>
    </div>
  ),
},
]
