import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user")); 
    if (input.email === loggedUser.email && input.password === loggedUser.password) {
      localStorage.setItem("Loggedin", true);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const redirectTOsignup = () => {
    navigate("/signup");
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="min-h-screen flex flex-wrap items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-2 gap-4">
        <div className='pr-22'> 
          <img className=" mx-auto md:w-auto w-full" src="https://res.cloudinary.com/dvgieawnp/image/upload/v1695989200/emancipation-abstract-concept-illustration-businessman-ambition-motivation-work-office-success_335657-639_esdima.avif" alt="Illustration"/>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleLogin}>
            <input type="hidden" name="remember" value="true"/>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="">Email address</label>
                <input name="email" value={input.email} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Email Address" />
              </div>
              <div>
                <label htmlFor="password" className="">Password</label>
                <div className="relative">
                  <input name="password" type={showPassword ? "text" : "password"} value={input.password} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Password"/>
                  <button type="button" onClick={toggleShowPassword} className="absolute inset-y-0 right-0 px-3 flex items-center text-sm leading-5 focus:outline-none">
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-700 text-xl" />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign in
              </button>
              <button type="button" onClick={redirectTOsignup} className="group relative w-full flex justify-center mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Create new account?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
