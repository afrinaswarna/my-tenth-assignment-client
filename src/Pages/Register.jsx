// import React, { use } from 'react';
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { use } from "react";

const googleProvider = new GoogleAuthProvider();
const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleUserSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);
    const regEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regEx.test(password)) {
      toast.error(
        "Password must be at least 6 characters and mush have an uppercase letter and a lowercase letter"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("you successfully signup");
        navigate("/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleSignup = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
        toast.success("Google signin successful");
        navigate("/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="hero min-h-screen my-10">
      <div className="hero-content flex-col lg:flex-row-reverse w-[800px]">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Join Us Today!</h1>

          <p className="py-6 max-w-md">
            Create an account to unlock your personalized experience.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 border-gray-300">
          <div className="card-body shadow-2xl rounded-xl p-8">
            <form onSubmit={handleUserSignUp}>
              <fieldset className="fieldset">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>

                <input
                  name="name"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Your Name"
                  required
                />

                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Your Email"
                  required
                />

                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>

                <input
                  name="photo"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Your Photo URL (Optional)"
                />

                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  name="password"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Password"
                  required
                />

                <button
                  className="w-full py-3 font-semibold text-white rounded-lg 
 bg-linear-to-r from-[#FF6B6B] via-[#FF8E8E] to-[#E05297] 
 hover:from-[#E05297] hover:to-[#FF6B6B] transition duration-500 ease-in-out mt-6"
                >
                  Register
                </button>
                <div className="divider">OR</div>

                <button
                  onClick={handleGoogleSignup}
                  className="btn w-full bg-white text-gray-700 border-2 border-[#FF6B6B] hover:border-[#E05297] hover:bg-gray-50 transition duration-300 ease-in-out"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      {" "}
                      <path d="m0 0H512V512H0" fill="#fff"></path>             
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>{" "}
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Sign Up with Google
                </button>

                <div className="pt-4 text-center text-sm text-gray-500">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-[#E05297] hover:underline ml-1 font-semibold"
                  >
                    Login
                  </Link>{" "}
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
