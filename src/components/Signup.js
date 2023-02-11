import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let URL = "http://127.0.0.1:5000/v1/users/signup";
    const Options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(URL, Options)
      .then((response) => console.log(response))
      .then((data) => console.log(data));
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-green-300">
      <div className="w-96 border text-center px-6 py-6 rounded bg-white">
        <h1 className="text-2xl text-gray-500 py-4">Register</h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            value={data.email}
            className="w-full  p-2 mb-4 bg-gray-100 rounded text-center focus:outline-blue-500"
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            className="w-full  p-2 mb-4 bg-gray-100 rounded text-center focus:outline-blue-500"
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full  p-2 mb-4 bg-gray-100 rounded text-center focus:outline-blue-500"
          />

          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 w-full p-2 mb-6 text-white rounded hover:bg-blue-800"
          >
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
