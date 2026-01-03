import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { LuEyeClosed } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Register = () => {
  const { createUser, updateUserProfile } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const navigate = useNavigate();
  const axiosInstance = useAxios()
  const axiosSecure = useAxiosSecure()

  const handleRegister = async (e) => {
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
    // const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const profileImage = form.photo.files[0]
    // console.log({ name, photo, email, password });
    const res = await axiosInstance.get(`/checkUsers/${email}`)
    console.log(res)
    if (res.data) {
      Swal.fire("You are already registered. Please login!");
      navigate('/login')
      return
    } 
    
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // 1. store the image in form data
        const formData = new FormData();
        formData.append("image", profileImage);

        // 2. send the photo to store and get url
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host
        }`;
        axiosInstance
          .post(image_API_URL, formData)
          .then((res) => {
            // console.log("After Image Upload", res, res.data.data.url);

            // Create user profile in database
            const photoURL = res.data.data.url;
            const userInfo = {
              email: email,
              displayName: name,
              photoURL: photoURL,
            };
            axiosSecure.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user created in db");
              }
            });

            // 3. update user profile
            const userProfile = {
              displayName: name,
              photoURL: photoURL,
            };
            updateUserProfile(userProfile)
              .then(() => {
                // console.log('User Profile Updated')
                navigate(location?.state || "/");
              })
              .catch((e) => console.log(e));
          })
          .catch((e) => console.log(e.message));
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
                type="file"
                accept="image/*"
                className="input peer w-full border-b-2 focus:outline-none bg-transparent"
                placeholder="Photo URL"
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
