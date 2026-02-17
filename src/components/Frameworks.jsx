import { OrbitingCircles } from "./OrbitingCircles";

// Import all logos
import css3 from "../assets/logos/css3.svg";
import html5 from "../assets/logos/html5.svg";
import javascript from "../assets/logos/javascript.svg";
import react from "../assets/logos/react.svg";
import tailwindcss from "../assets/logos/tailwindcss.svg";
import vitejs from "../assets/logos/vitejs.svg";
import github from "../assets/logos/github.png";
import threejs from "../assets/logos/threejs.png";
import excel from "../assets/logos/excel.png";
import powerpoint from "../assets/logos/powerpoint.png";
import word from "../assets/logos/word.png";
import canva from "../assets/logos/canva.jpg";
import vscode from "../assets/logos/visualstudiocode.svg";

// Map skill name → image
const logos = {
  css3,
  html5,
  javascript,
  react,
  tailwindcss,
  vitejs,
  github,
  threejs,
  excel,
  powerpoint,
  word,
  canva,
  visualstudiocode: vscode,
};

export function Frameworks() {
  const skills = [
    "css3",
    "html5",
    "javascript",
    "react",
    "tailwindcss",
    "vitejs",
    "github",
    "threejs",
    "excel",
    "powerpoint",
    "word",
    "canva",
    "visualstudiocode",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={logos[skill]} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} src={logos[skill]} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={src}
    className="duration-200 rounded-sm hover:scale-110"
    draggable="false"
  />
);
