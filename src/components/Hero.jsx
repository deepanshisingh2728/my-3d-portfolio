import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import HeroText from "./HeroText";
import ParallaxBackground from "./ParallaxBackground";
import { Model } from "./Astronaut";
import Loader from "./Loader";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* 🌌 Background */}
      <ParallaxBackground />

      {/* 🚀 3D Layer */}
      <div className="absolute inset-0 z-10">
        <Canvas
          camera={{ position: [0, 1.5, 8], fov: 35 }}
          gl={{ alpha: true }}
        >
          {/* ✅ LOADER IS HERE */}
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 3, 3]} intensity={1} />

            <Model scale={1.4} />

            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.1}
              enablePan={false}
              target={[-2, 0, 0]}
            />

            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>

      {/* 📝 Text Layer */}
      <div className="relative z-20 min-h-screen flex items-center pointer-events-none">
        <HeroText />
      </div>

    </section>
  );
};

export default Hero;
