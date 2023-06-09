import { FaArrowLeft } from "react-icons/fa";
import ClassCart from "../../components/ClsssCart/ClassCart";
import useClassesData from "../../components/Hooks/useClassesData";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const [classes] = useClassesData();

  return (
    <>
      <Helmet>
        <title>Easy to learn music school | classes page</title>
      </Helmet>
      <div className="text-center mt-16">
        <h4 className="font-bold text-2xl text-[#c25934]">Our Classes</h4>
        <h1 className="font-extrabold text-5xl text-[#0c4b65]">
          Choose Your Class
        </h1>
        <div className="mt-10">
          {classes?.map((item) => (
            <ClassCart key={item._id} item={item}></ClassCart>
          ))}
        </div>
        <div className="mt-10">
          <Link to='/'>
            <button className="btn btn-sm text-white bg-[#c25934] hover:bg-[#0c4b65]">
              <FaArrowLeft /> back to home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyClasses;
