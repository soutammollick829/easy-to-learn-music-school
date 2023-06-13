import { useContext } from "react";
import { FaBook, FaBookReader, FaChessKing, FaHome, FaUserGraduate, FaUserTie, FaUsers, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";
import useAdmin from "../../components/Hooks/useAdmin";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin();
// const isAdmin = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <div className="w-28 ml-10 mb-10">
            <img className="rounded-full border-4 border-[#efcf4f]" src={user?.photoURL} alt="" />
            <span className="text-2xl uppercase font-bold font-serif text-[#c25934]">{user?.displayName}</span>
          </div>
          {/* Sidebar content here */}
          {
            isAdmin ? <>
            <li className="font-bold hover:text-[#c25934]">
            <Link to="/dashboard">
              <FaChessKing />
              Admin Home
            </Link>
          </li>
            <li className="font-bold hover:text-[#c25934]">
            <Link to="/dashboard/students">
              <FaBook />
              Selected Class
            </Link>
          </li>
          <li className="font-bold hover:text-[#c25934]">
            <Link to="/dashboard">
              <FaWallet /> Payments History
            </Link>
          </li>
          <li className="font-bold hover:text-[#c25934]">
            <Link to="/dashboard/manage-class">
              <FaChessKing /> Manage Booking
            </Link>
          </li>
          <li className="font-bold hover:text-[#c25934]">
            <Link to="/dashboard/allStudents">
              <FaUserGraduate /> Manage User
            </Link>
          </li>
            </> : <>
            <li className="font-bold hover:text-[#c25934]">
            <Link to="/dashboard/students">
              <FaUserGraduate />
              Students Dashboard
            </Link>
          </li>
          <li className="font-bold hover:text-[#c25934]">
            <Link to="/dashboard/instructors">
              <FaUserTie /> Instructors Dashboard
            </Link>
          </li>
          <li className="font-bold hover:text-[#c25934]">
            <Link to="/dashboard/students">
              <FaBook />
              Selected Class
            </Link>
          </li>
            </>
          }

          <div className="divider">OR</div>

          <li className="font-bold hover:text-[#c25934]">
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li className="font-bold hover:text-[#c25934]">
            <Link to="/instructors">
              <FaUsers /> Instructors
            </Link>
          </li>
          <li className="font-bold hover:text-[#c25934]">
            <Link to="/classes">
              <FaBookReader /> Classes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
