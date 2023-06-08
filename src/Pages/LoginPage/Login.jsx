import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
        <Helmet>
            <title>Easy to learn music school | Login page</title>
        </Helmet>
      <div className="hero min-h-screen bg-base-200 px-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
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
                <i className="absolute top-14 left-72"><FaEyeSlash/></i>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <h3>Create an new account? <Link to='/sign-up'><span className="font-bold text-[#c25934]">Sign up</span></Link></h3>
              <div className="form-control mt-6">
                <button className="btn bg-[#c25934] text-white font-bold hover:text-black">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
