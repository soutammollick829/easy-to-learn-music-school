import aboutschoolImg from "../../../assets/imags/images.jpg";
import { Fade, Slide } from "react-awesome-reveal";

const AboutSchool = () => {
  const styles = {
    backgroundImage: 'url("https://i.ibb.co/vXx3H4g/Class-3-768x512.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="mt-20">
      <div className="hero min-h-screen" style={styles}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="lg:hero-content mx-10 text-neutral-content">
          <div className="w-1/2">
            <Slide>
              <h4 className="font-bold text-3xl text-[#efcf4f] mb-2">
                Our Classes
              </h4>
              <h1 className="mb-5 text-5xl font-extrabold">About School</h1>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1}>
              <h4 className="font-bold text-xl text-[#efcf4f]">
                Integer in justo euismod nulla feugiat lacinia non porta velit.
                Vestibulum vulputate purus sit amet vestibulum ultrices mauris
                malesuada.
              </h4>
              <br />
              <p className="mb-5 font-semibold">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </Fade>

            <button className="btn text-white border-0 hover:text-black bg-[#c25934]">
              view all
            </button>
          </div>
          <div className="w-1/2 ml-36 lg:ml-16">
            <img
              className="w-full lg:w-72 rounded-2xl  border-e-8 border-b-8 border-[#efcf4f]"
              src={aboutschoolImg}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="h-52 bg-[#efcf4f] flex justify-around items-center text-center">
        <div>
          <h1 className="text-white text-2xl lg:text-5xl font-extrabold">27</h1>
          <h3 className="font-bold lg:text-2xl mt-4">
            <span className="text-[#0c4b65]">Professional</span>
            <br />
            <span className="text-[#c25934]">teachers</span>
          </h3>
        </div>
        <div>
          <h1 className="text-white text-2xl lg:text-5xl  font-extrabold">54</h1>
          <h3 className="font-bold lg:text-2xl mt-4">
            <span className="text-[#0c4b65]">Learning</span>
            <br />
            <span className="text-[#c25934]">groups</span>
          </h3>
        </div>
        <div>
          <h1 className="text-white text-2xl lg:text-5xl  font-extrabold">590</h1>
          <h3 className="font-bold lg:text-2xl mt-4">
            <span className="text-[#0c4b65]">Happy</span>
            <br />
            <span className="text-[#c25934]">students</span>
          </h3>
        </div>
        <div>
          <h1 className="text-white text-2xl lg:text-5xl  font-extrabold">8</h1>
          <h3 className="font-bold lg:text-2xl mt-4">
            <span className="text-[#0c4b65]">Music</span>
            <br />
            <span className="text-[#c25934]">classes</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutSchool;
