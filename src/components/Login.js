import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let URL = "http://127.0.0.1:5000/v1/users/login";
    const Options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    console.log(data);
    fetch(URL, Options)
      .then((res) => console.log(res))
      .then((data) => console.log(data));
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-blue-300">
      <div className="w-96 border text-center px-6 py-6 rounded bg-white">
        <h1 className="text-2xl text-gray-500 py-4">Member Login</h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            className="w-full  p-2 mb-4 bg-gray-100 rounded text-center focus:outline-blue-500"
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full  p-2 mb-4 bg-gray-100 rounded text-center focus:outline-blue-500"
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />

          <button
            className="bg-blue-500 w-full p-2 mb-6 text-white rounded hover:bg-blue-800"
            onClick={() => navigate("/bookslist")}
          >
            LOGIN
          </button>
        </form>
        <p
          className="text-red-500 mb-4 hover:text-blue-500"
          onClick={() => navigate("/signup")}
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default Login;
