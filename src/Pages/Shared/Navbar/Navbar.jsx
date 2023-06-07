import { Link } from "react-router-dom";
import logo from "../../../assets/imags/website logo/beyoglu-sanat-animated.gif";

const Navbar = () => {
  const navOptions = (
    <>
      <li className="font-bold text-base hover:text-[#c25934]">
        <Link to='/'><a>Home</a></Link>
      </li>
      <li className="font-bold text-base hover:text-[#c25934]">
        <Link to='/instructors'><a>Instructors</a></Link>
      </li>
      <li className="font-bold text-base hover:text-[#c25934]">
        <Link to='/classes'><a>Classes</a></Link>
      </li>
      <li className="font-bold text-base hover:text-[#c25934]">
        <Link to='/'><a>Dashboard</a></Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-24 lg:w-28 bg-slate-400" src={logo} alt="" />
          <p>
            <span className=" text-2xl lg:text-3xl font-extrabold text-[#efcf4f]">
              Easy to
            </span>{" "}
            <span className="text-2xl lg:text-3xl font-bold text-[#c25934]">
              learn
            </span>
            <br />
            <span className="text-md font-extrabold">Music school</span>
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
