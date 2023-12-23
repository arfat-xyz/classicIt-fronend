"use client";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../redux/user/userSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { useAppDispatch, useAppSelector } from "../redux/hook";
// import { createUser } from "../redux/user/userSlice";
const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    console.log(data);
    const { email, password, confirmPassword } = data;
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          toast.success("Login successfull");
          dispatch(
            login({
              email: res.user.email,
              uid: res.user.uid,
              displayName: res.user.displayName,
              photoUrl: res.user.photoURL,
            })
          );
          reset();
          navigate("/");
        })
        .catch((e) => {
          toast.error(e.message);
        });
    } else {
      toast.error("Password didn't match");
    }
  };
  //   if (user.user?.email) {
  //     navigate("/");
  //   }
  return (
    <>
      <section className="  bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <Link
            to={"/"}
            className="flex items-center mb-6 text-2xl font-semibold   text-white"
          >
            <LazyLoadImage
              alt={"logo"}
              src={`https://classicit.com.bd/assets/image/logo.png`}
              // width={image.width}
              className="w-80 h-auto mr-2"
            />
          </Link>
          <div className="w-full  rounded-lg shadow   border md:mt-0 sm:max-w-md xl:p-0   bg-gray-800   border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl   text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium   text-white"
                  >
                    Your email
                  </label>
                  <input
                    {...register("email", { required: "Email is required" })}
                    type="email"
                    name="email"
                    id="email"
                    className="border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   bg-gray-700   border-gray-600   placeholder-gray-400   text-white   focus:ring-blue-500   focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <span className="text-red-700">{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium    text-white"
                  >
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   bg-gray-700   border-gray-600   placeholder-gray-400   text-white   focus:ring-blue-500   focus:border-blue-500"
                  />
                  {errors.password && (
                    <span className="text-red-700">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium    text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    {...register("confirmPassword", {
                      required: "Confirm password is required",
                    })}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   bg-gray-700   border-gray-600   placeholder-gray-400   text-white   focus:ring-blue-500   focus:border-blue-500"
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-700">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full border-2 hover:border-stone-500 transition-all ease-in-out text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   bg-primary-600   hover:bg-primary-700   focus:ring-primary-800"
                >
                  Sign up
                </button>
                {/* {user.error && (
                  <span className="text-red-600">{user.error}</span>
                )} */}
                <p className="text-sm font-light   text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={"/signin"}
                    className="font-medium text-primary-600 hover:underline   text-primary-500"
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
