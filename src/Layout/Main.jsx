import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="min-h-[100vh]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
