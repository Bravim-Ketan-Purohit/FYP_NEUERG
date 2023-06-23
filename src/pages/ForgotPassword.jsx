import React, { useState } from "react";
import { Link } from "react-router-dom";
import Oauth from "../components/Oauth";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  // --------------------------------
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth,email)
      toast.success("email was sent")
    } catch (error) {
      toast.error("cannot send resend password, Try again!")
    }
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        {/* //this div for image 👇 */}
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        {/* //this div for the form 👇 */}
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="Email address"
            />

            <div className="flex justify-between whitespace-nowrap text-small sm:text-lg ">
              <p className="mb-6 ">
                Dont have an account?
                <Link
                  to={"/Signup"}
                  className="text-red-500 hover:text-red-700 transition duration-200 ease-in-out"
                >
                  {" "}
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to={"/Signin"}
                  className="text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Send Reset Password
            </button>
            <div className="my-6">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <Oauth />
          </form>
        </div>
      </div>
    </section>
  );
};
export default ForgotPassword;