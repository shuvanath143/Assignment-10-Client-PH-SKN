import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((err) => console.log(err));
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
      <div className="card bg-base-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200 ">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn text-white mt-4 rounded-full btn-primary">
                Login
              </button>
            </fieldset>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white rounded-full text-black border-[#e5e5e5]"
          >
            <FaGoogle />
            Login with Google
          </button>
          <p className="text-center">
            New to our website? Please{" "}
            <Link
              className="text-blue-500 hover:text-blue-800"
              to="../register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
