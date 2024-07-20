import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      //Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/")
    } else {
      alert("Invalid Credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="flex items-center justify-center h-full">
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Log in to your account
          </h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:focus:ring-blue-600 dark:focus:ring-opacity-50"
              placeholder="Your email"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:focus:ring-blue-600 dark:focus:ring-opacity-50"
              placeholder="Your password"
              required=""
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:focus:ring-blue-600 dark:focus:ring-opacity-50"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
