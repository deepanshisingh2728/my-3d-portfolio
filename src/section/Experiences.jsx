import { Timeline } from "../components/Timeline";
import { experiences } from "../constants/index.jsx";
import { mySocials } from "../constants";

const Experiences = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;


