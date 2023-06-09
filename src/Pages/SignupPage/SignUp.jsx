import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/imags/Login/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-w.jpg";
import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();


  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.firstName, data.photo)
        .then(() => {
          console.log("user profile update");
          reset();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Sign up successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/');
        })
        .catch((error) => console.log(error));
      
    });
  };

  return (
    <div>
      <Helmet>
        <title>Easy to learn music school | Sign-up page</title>
      </Helmet>
      <div className="hero min-h-screen px-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="h-[740px] w-full" src={loginImg} alt="" />
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
                  {errors.firstName && (
                    <span className="text-red-600 mt-2">
                      First name is required.
                    </span>
                  )}
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Last name</span>
                  </label>
                  <input
                    type="text"
                    {...register("lastName")}
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
                  {...register("photo")}
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
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600 mt-2">
                    Email is required. please fill out this field
                  </span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[a-z])(?!.*[A-Z])(?!.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d).{6,}/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600 mt-2">
                    Password is required.
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert" className="text-red-600 mt-2">
                    Password must me 6 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert" className="text-red-600 mt-2">
                    Do not have a capital latter, do not have a special
                    characters, At last 1 small latter
                  </p>
                )}
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
                  {...register("Confirm", { required: true, maxLength: 20 })}
                  placeholder="Confirm password"
                  className="input input-bordered"
                />
                {errors.Confirm && (
                  <span className="text-red-600 mt-2">
                    Check your confirm password
                  </span>
                )}
                <i className="absolute top-14 left-72">
                  <FaEyeSlash />
                </i>
              </div>
              <input
                type="file"
                {...register("file")}
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              />
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
              <FaGoogle className="text-3xl border-2 border-[#efcf4f] rounded-full hover:border-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
