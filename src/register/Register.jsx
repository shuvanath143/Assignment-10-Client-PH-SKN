import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { LuEyeClosed } from "react-icons/lu";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
    //   showErrorToast("Name should be more then 5 character");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user);
        // showToast("Registered Successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error)
        // showErrorToast(error.code, ": Registration Failed. Try Again");
      });
  };
  return (
    <div className="relative min-h-screen overflow-hidden flex justify-center items-center">
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center opacity-80 animate-opacityChange"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
        }}
      ></div>

      {/* Overlay for dark effect */}
      <div className="fixed inset-0 bg-black/40 -z-10"></div>
      
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-3xl font-bold text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <div className="relative">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input peer w-full border-b-2 focus:outline-none bg-transparent"
                placeholder="Name"
                required
              />
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-800 peer-hover:w-full"></span>
            </div>
            {nameError && <p className="text-xs text-error">{nameError}</p>}

            {/* Photo URl  */}
            <div className="relative">
              <label className="label">Photo URl </label>
              <input
                name="photo"
                type="text"
                className="input peer w-full border-b-2 focus:outline-none bg-transparent"
                placeholder="Photo URl"
                required
              />
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-800 peer-hover:w-full"></span>
            </div>
            {/* email  */}
            <div className="relative">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input peer w-full border-b-2 focus:outline-none bg-transparent"
                placeholder="Email"
                required
              />
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-800 peer-hover:w-full"></span>
            </div>
            {/* password  */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                name="password"
                type={isEyeOpen ? "text" : "password"}
                className="input peer w-full border-b-2 focus:outline-none bg-transparent"
                placeholder="Password"
                required
              />
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-800 peer-hover:w-full"></span>
              <div
                className="absolute top-7 right-3 text-base cursor-pointer z-5"
                onClick={() => setIsEyeOpen(!isEyeOpen)}
              >
                {isEyeOpen ? <LuEyeClosed /> : <FaEye />}
              </div>
            </div>
            <button
              type="submit"
              className="btn text-white mt-4 w-full btn-primary"
            >
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="../login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
