import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { singIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handelGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true });
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    singIn(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire(
        "Login successful!",
        "Welcome easy to learn music school",
        "success"
      );
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <Helmet>
        <title>Easy to learn music school | Login page</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 px-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign in</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true, maxLength: 20 })}
                  placeholder="password"
                  className="input input-bordered"
                />
                <i className="absolute top-14 left-72">
                  <FaEyeSlash />
                </i>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <h3>
                Create an new account?{" "}
                <Link to="/sign-up">
                  <span className="font-bold text-[#c25934]">Sign up</span>
                </Link>
              </h3>
              <div className="form-control mt-6">
                <button className="btn bg-[#c25934] hover:bg-[#0c4b65] text-white font-bold hover:bg-bg-[#0c4b65]">
                  Sign in
                </button>
              </div>
            </form>
            <div className="divider">Login with google</div>
            <div className="mx-auto mb-5">
              <button onClick={handelGoogleSignIn}>
                <FaGoogle className="text-3xl border-2 border-[#efcf4f] rounded-full hover:border-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
