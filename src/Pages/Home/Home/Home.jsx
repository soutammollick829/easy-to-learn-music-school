import { Helmet } from "react-helmet";
import AboutSchool from "../AboutSchool/AboutSchool";
import BannarCarusel from "../BannarCarusel/BannarCarusel";
import PopulerClasses from "../PopulerClasses/PopulerClasses";
import Instructors from "../instructors/Instructors";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Easy to learn music school | Home page</title>
      </Helmet>
      <BannarCarusel />
      <PopulerClasses/>
      <AboutSchool />
      <Instructors/>
    </div>
  );
};

export default Home;
