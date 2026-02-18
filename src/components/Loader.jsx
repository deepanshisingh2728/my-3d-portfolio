import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="text-white text-xl font-medium bg-black/60 px-4 py-2 rounded-lg">
        {Math.floor(progress)}% loaded
      </div>
    </Html>
  );
};

export default Loader;
