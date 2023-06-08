import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {

  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes('error')
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <div className="min-h-[100vh]">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
