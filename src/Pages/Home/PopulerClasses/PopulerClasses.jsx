
import useClassesData from "../../../components/Hooks/useClassesData";



const PopulerClasses = () => {
    const [classes] =useClassesData();
    console.log(classes);
  return (
    <>
      <div className="text-center">
        <h4>Our Classes</h4>
        <h1>Most Popular Classes</h1>
        <p>
          Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
          euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
          ligula.
        </p>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default PopulerClasses;
