import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-green-300">
      <div className="w-96 border text-center px-6 py-6 rounded bg-white">
        <h1 className="text-2xl text-gray-500 py-4">Register</h1>
        <form className="w-full">
          <input
            type="text"
            placeholder="Username"
            className="w-full  p-2 mb-4 bg-gray-100 rounded text-center focus:outline-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full  p-2 mb-4 bg-gray-100 rounded text-center focus:outline-blue-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full  p-2 mb-4 bg-gray-100 rounded text-center focus:outline-blue-500"
          />

          <button className="bg-blue-500 w-full p-2 mb-6 text-white rounded hover:bg-blue-800">
            Register
          </button>
        </form>
        <p
          className="text-red-500 mb-4 hover:text-blue-500"
          onClick={() => navigate("/")}
        >
          Login
        </p>
      </div>
    </div>
  );
};

export default Signup;
