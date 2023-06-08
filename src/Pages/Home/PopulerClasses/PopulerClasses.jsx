import useClassesData from "../../../components/Hooks/useClassesData";
import PopulerClassCard from "../../../components/PopulerClassCard/PopulerClassCard";

const PopulerClasses = () => {
  const [classes] = useClassesData();
  console.log(classes);
  return (
    <>
      <div className="text-center mt-20">
        <h4 className="font-bold text-2xl text-[#c25934]">Our Classes</h4>
        <h1 className="font-extrabold text-5xl text-[#0c4b65]">
          Most Popular Classes
        </h1>
        <p className="font-semibold mt-4">
          Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
          euismod. In id tempus metus. <br /> Donec eu volutpat nibh, in maximus
          ligula.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-10 gap-7 mt-10">
        {classes?.map((popular) => (
          <PopulerClassCard
            key={popular._id}
            popular={popular}
          ></PopulerClassCard>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn font-bold text-white bg-[#c25934] hover:bg-[#0c4b65]">view all</button>
      </div>
    </>
  );
};

export default PopulerClasses;
