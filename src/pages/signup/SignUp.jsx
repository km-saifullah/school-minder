import React from "react";
import { Link } from "react-router-dom";
import InputField from "../../utils/InputField";
import Button from "../../utils/Button";
import Image from "../../utils/Image";
import signUpImg from "../../assets/images/signup_img.jpg";

const SignUp = () => {
  // handle signup user
  const handleSignUP = (e) => {
    console.log("clicked");
    e.preventDefault();
  };
  return (
    <section className="h-[100vh] flex items-center justify-center">
      <div className="max-w-container mx-auto">
        <div className="flex items-center gap-x-[85px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
          <div className="p-4">
            <form className="flex items-center flex-col gap-y-3">
              <div className="flex flex-col gap-y-2 w-[400px]">
                <label
                  htmlFor="id"
                  className="text-lg text-headingColor font-poppins font-medium"
                >
                  ID
                </label>
                <InputField type="text" name="id" placeholder="Enter Your ID" />
              </div>
              <div className="flex flex-col gap-y-2 w-[400px]">
                <label
                  htmlFor="fullname"
                  className="text-lg text-headingColor font-poppins font-medium"
                >
                  Full Name
                </label>
                <InputField
                  type="text"
                  name="fullname"
                  placeholder="Enter Your Fullname"
                />
              </div>
              <div className="flex flex-col gap-y-2 w-[400px]">
                <label
                  htmlFor="email"
                  className="text-lg text-headingColor font-poppins font-medium"
                >
                  Email
                </label>
                <InputField
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="flex flex-col gap-y-2 w-[400px]">
                <label
                  htmlFor="password"
                  className="text-lg text-headingColor font-poppins font-medium"
                >
                  Password
                </label>
                <InputField
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="flex flex-col gap-y-2 w-[400px]">
                <label
                  htmlFor="confirmPassword"
                  className="text-lg text-headingColor font-poppins font-medium"
                >
                  Confirm Password
                </label>
                <InputField
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter Confirm Password"
                />
              </div>
              <div className="flex flex-col gap-y-2 w-[400px]">
                <Button btnTitle="Sign Up" onClick={handleSignUP} />
              </div>
              <div className="flex flex-col items-center gap-y-2 w-[400px]">
                <p>OR</p>
              </div>
              <div className="flex flex-col gap-y-2 w-[400px]">
                <Button btnTitle=" Sign Up With Google" />
              </div>
            </form>
            <div className="w-full mt-4">
              <p className="text-center text-base text-primary font-openSans font-normal">
                Already an User ?{" "}
                <Link
                  to="/signin"
                  className="transition-all ease-linear duration-200 hover:underline hover:font-bold"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
          <div className="rounded-lg">
            <div className="bg-signup-img h-[660px] w-[400px] bg-cover bg-center overflow-hidden flex items-center justify-center rounded-r-lg">
              <h2 className="text-4xl text-white font-poppins font-bold uppercase">
                Sign Up
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
