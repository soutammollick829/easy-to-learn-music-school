import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <Helmet>
        <title>Easy to learn music school | Sign-up page</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 px-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="flex gap-2">
                <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">First name</span>
                </label>
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                  placeholder="First name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Last name</span>
                </label>
                <input
                  type="text"
                  {...register("lastName", { required: true })}
                  placeholder="Last name"
                  className="input input-bordered"
                />
              </div>
                </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  type="photo"
                  {...register("photo", { required: true })}
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
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
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Confirm password</span>
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
              </div>
              <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
              <h3>
                Already have an account?
                <Link to="/login">
                  <span className="font-bold text-[#c25934]"> Sign in</span>
                </Link>
              </h3>
              <div className="form-control mt-6">
                <button className="btn bg-[#c25934] text-white font-bold hover:bg-[#0c4b65]">
                  sign up
                </button>
              </div>
            </form>
            <div className="divider">Login with google</div>
            <div className="mx-auto mb-5">
                <FaGoogle className="text-3xl border-2 border-[#efcf4f] rounded-full hover:border-4"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
