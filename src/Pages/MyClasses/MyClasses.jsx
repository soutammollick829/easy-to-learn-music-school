import ClassCart from "../../components/ClsssCart/ClassCart";
import useClassesData from "../../components/Hooks/useClassesData";

const MyClasses = () => {
    const [classes] = useClassesData();
    console.log(classes);
  return (
    <>
      <div className="text-center mt-16">
        <h4 className="font-bold text-2xl text-[#c25934]">Our Classes</h4>
        <h1 className="font-extrabold text-5xl text-[#0c4b65]">
          Choose Your Class
        </h1>
        <div className="mt-10">
            {
                classes?.map(item => <ClassCart
                key={item._id}
                item={item}
                ></ClassCart>)
            }
        </div>
      </div>
    </>
  );
};

export default MyClasses;
