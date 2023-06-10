import { Link } from "react-router-dom";
import useInstructors from "../../../components/Hooks/useInstructors";
import InstructorsCard from "../../../components/InstructorsCard/InstructorsCard";

const Instructors = () => {
  const [instructors] = useInstructors();

  return (
    <div>
      <div className="text-center mt-20">
        <h4 className="font-bold text-2xl text-[#c25934]">Our Team</h4>
        <h1 className="font-extrabold text-5xl text-[#0c4b65]">
          Meet Our Teachers
        </h1>
        <p className="font-semibold mt-4">
          Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
          euismod. In id tempus metus. <br /> Donec eu volutpat nibh, in maximus
          ligula.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-10 gap-5">
        {instructors?.slice(0, 4).map((instructor) => (
          <InstructorsCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorsCard>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/instructors">
          <button className="btn font-bold text-white bg-[#c25934] hover:bg-[#0c4b65]">
            view all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Instructors;
