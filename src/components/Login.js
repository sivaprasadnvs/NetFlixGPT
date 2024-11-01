import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignForm, setIsSignInForm] = useState(true);

  const toggleSingInForm = () => {
    setIsSignInForm(!isSignForm);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_small.jpg"
          alt="netflix-logo"
        ></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignForm &&
          <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-2 w-full bg-gray-500 text-white"
        ></input>
        }
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-500 text-white"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-500 text-white"
        ></input>
        <button className="p-4 my-4 bg-red-600 w-full rounded-lg">
          {isSignForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-4 cursor-pointer underline" onClick={toggleSingInForm}>
          {isSignForm
            ? "New to Netflix? Sign up Now"
            : "Already register? Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;
