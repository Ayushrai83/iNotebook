import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState } from "react";

const Signup = (props) => {
  let history = useHistory();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      //Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
      props.showAlert("Account created Successfully" , "success")
    } else {
      props.showAlert("Invalid Credentials" , "danger")
    }
  };

  const onChange = (e) => {
    setCredentials({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="flex items-center justify-center h-full">
        <form
          onSubmit={handleSubmit}
          action="#"
          method="POST"
          className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
        >
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sign Up
          </h2>
          onChange = {onChange}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 dark:focus:ring-gray-600 focus:outline-none"
              required=""
            />
          </div>
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
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 dark:focus:ring-gray-600 focus:outline-none"
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
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 dark:focus:ring-gray-600 focus:outline-none"
              minLength={5}
              required=""
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
