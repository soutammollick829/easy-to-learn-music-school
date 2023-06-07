import logo from "../../../assets/imags/website logo/beyoglu-sanat-animated.gif";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative mt-96">
      <div className="bg-[#efcf4f] text-white lg:flex items-center justify-around h-32 w-[330px] lg:w-[800px] mx-10 absolute lg:left-16 -top-24 rounded-lg">
        <h1 className="p-5">
          <span className="text-xl font-semibold ">Want to know last news?</span>{" "}
          <br />
          <span className="text-4xl font-bold text-slate-600">Subscribe</span>
        </h1>
        <div className="form-control">
          <label className="input-group">
            <input
              type="text"
              placeholder="Your email address"
              className="input input-bordered"
            />
            <span className="uppercase bg-[#c25934]">Subscribe</span>
          </label>
        </div>
      </div>
      <footer className="footer p-10 bg-[#0c4b65] text-white lg:flex justify-between items-center w-full">
        <div className=" pt-10">
          <img className="w-28 bg-slate-400" src={logo} alt="" />
          <p>
            <span className="text-2xl font-bold text-[#efcf4f]">Easy to</span>{" "}
            <span className="text-2xl font-bold text-[#c25934]">learn</span>
            <br />
            <span className="text-md font-bold">Music school</span>
          </p>
          <p>
            Quisque quis dignissim elit. Aliquam et<br></br> augue aliquet orci
            maximus convallis id <br></br>vitae augue. Phasellus elementum
            commodo aliquet.
          </p>
          <div className="flex gap-8 text-3xl mt-5">
            <FaFacebook className="text-blue-500 hover:text-yellow-600" />
            <FaTwitter className="text-sky-500 hover:text-yellow-600" />
            <FaYoutube className="text-red-500 hover:text-yellow-600" />
            <FaInstagram className="text-red-800 hover:text-yellow-600" />
          </div>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#efcf4f]">Contact Us</span>
          <a className="link link-hover inline-flex gap-3 hover:text-[#efcf4f]">
            <FaMapMarkerAlt />
            04360, NewYork, 33 Matehouse str., 12/4
          </a>
          <a className="link link-hover inline-flex gap-3 hover:text-[#efcf4f]">
            <FaPhoneAlt />
            803-33-5644-99
          </a>
          <a className="link link-hover inline-flex gap-3 hover:text-[#efcf4f]">
            <FaEnvelope /> admin@easytolarenmusicschool.net
          </a>
        </div>
        <div>
          <span className="text-2xl font-bold text-[#efcf4f]">Instagram</span>
          <a className="link link-hover">
            Instagram has returned invalid data.
          </a>
        </div>
      </footer>
      <footer className="footer text-white p-4 bg-[#0a3f55]">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
