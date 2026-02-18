import { useRef } from "react";
import codingPov from "../assets/coding-pov.png";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef(null);

  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* ================= GRID 1 ================= */}
        <div className="relative flex items-end grid-default-color grid-1 overflow-hidden">
          <img
            src={codingPov}
            alt="Coding POV"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] 
                       md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />

          <div className="z-10">
            <p>Hi, I'm Deepanshi</p>
            <p>
              I'm a BCA student and web developer who loves building fast, clean,
              and user-friendly websites. From React-based apps to full
              e-commerce platforms, I turn ideas into digital products that
              people enjoy using. With both technical and entrepreneurial
              experience, I bring a problem-solving mindset and a strong focus
              on design, performance, and usability.
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo" />
        </div>

        {/* ================= GRID 2 ================= */}
        <div ref={grid2Container} className="relative grid-default-color grid-2 overflow-hidden">
          <p className="absolute top-4 left-4 text-5xl text-gray-500">
            CODE IS CRAFT
          </p>

          <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="HTML5" containerRef={grid2Container} />
          <Card style={{ rotate: "-30deg", top: "80%", left: "45%" }} text="CSS3" containerRef={grid2Container} />
          <Card style={{ rotate: "60deg", bottom: "30%", left: "70%" }} text="JAVASCRIPT" containerRef={grid2Container} />
          <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="REACT" containerRef={grid2Container} />
          <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="THREE.JS" containerRef={grid2Container} />
          <Card style={{ rotate: "55deg", top: "30%", left: "20%" }} text="TAILWIND CSS" containerRef={grid2Container} />
          <Card style={{ rotate: "-30deg", top: "50%", left: "45%" }} text="NODE.JS" containerRef={grid2Container} />
        </div>

        {/* ================= GRID 3 ================= */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">TIME ZONE</p>
            <p className="subtext">
              I'm Based in India, open to remote internships and global web projects.
              </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe/>
          </figure>
        </div>
        {/* ================= GRID 4 ================= */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton/>
          </div>
        </div>

        {/* ================= GRID 5 ================= */}
        <div className="grid-default-color grid-5">
        <div className="z-10 w-[50%]">
          <p className="headtext">Teck Stack</p>
          <p className="subtext">I work with a diverse set of technologies that allow me to create high-performance and visually engaging digital experiences</p>
        </div>
        <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
        <Frameworks/>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
