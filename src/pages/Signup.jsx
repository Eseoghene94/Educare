import React from "react";

function Signup() {
  return (
    <div className="hero ">
      <section className="flex justify-center items-center">
        <div className="bg-clr-txt-primary p-8 rounded-2xl shadow-lg max-w-3xl w-full my-2 mx-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Hello there!</h2>
            <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-lg flex items-center hover:bg-blue-100">
              Cancel{" "}
              <img src="./cancel.svg" alt="cancel-icon" className="w-5 h-5" />
            </button>
          </div>
          <h3 className="text-xl font-semibold mt-4">Create your Account</h3>
          <p className="text-gray-500 text-sm">
            Fill in your details to explore to get started with EduCARE.
          </p>

          <form class="mt-6">
            <label className="block mb-2 text-sm font-medium">Enter name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2"
            />

            <label className="block mt-4 mb-2 text-sm font-medium">
              Enter email address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2"
            />

            <label class="block mt-4 mb-2 text-sm font-medium">
              Enter password
            </label>
            <div class="relative">
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg p-2 pr-10"
              />
              <span className="absolute right-3 top-3 cursor-pointer">
                <img src="./eye-open-icon.png" alt="eye-icon" />
              </span>
            </div>

            <label className="block mt-4 mb-2 text-sm font-medium">
              Confirm password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg p-2 pr-10"
              />
              <span className="absolute right-3 top-3 cursor-pointer">
                <img src="./eye-open-icon.png" alt="eye-icon" />
              </span>
            </div>

            <button className="w-full bg-clr-primary text-white text-lg font-semibold py-3 mt-6 rounded-lg hover:bg-blue-700">
              Create Account
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span class="mx-3 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-between max-md:flex-wrap max-md:space-y-2">
            <button className=" w-full border border-gray-300 p-3 rounded-lg flex items-center space-x-2">
              <img src="./google-icon.png" alt="Google" class="w-5 h-5" />
              <span>Login with Google</span>
            </button>
            <button className="w-full border border-gray-300 p-3 rounded-lg flex items-center space-x-2">
              <img src="./facebook-icon.png" alt="Facebook" class="w-5 h-5" />
              <span>Login with Facebook</span>
            </button>
            <button className=" w-full border border-gray-300 p-3 rounded-lg flex items-center space-x-2">
              <img src="./apple-icon.png" alt="Apple" class="w-5 h-5" />
              <span>Login with Apple</span>
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="#" class="text-blue-500 font-semibold">
              Sign in!
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Signup;
