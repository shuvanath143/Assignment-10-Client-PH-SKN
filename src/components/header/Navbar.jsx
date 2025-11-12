import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {

    const { user, logout } = use(AuthContext)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleLogOut = () => {
        logout()
        .then(() => alert('Logout successfully'))
        .catch(err => console.log(err.message))
    }

    const links = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/allCars">Our Cars</NavLink>
        </li>
        <li>
          <NavLink to="/addCar">Add a Car</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        {user && (
          <>
            <li>
              <NavLink to="/myCars">My Cars</NavLink>
            </li>
            <li>
              <NavLink to="/myBookings">My Bookings</NavLink>
            </li>
          </>
        )}
      </>
    );

    return (
      <div className="navbar shadow-sm bg-[#07233B] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            RentalWheels{" "}
            <span className="text-primary">A Car Rent Platform</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end relative">
          {user ? (
            <div className="relative">
              <div
                className="avatar cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/2FsfXqM/default-avatar.png"
                    }
                    alt="user avatar"
                  />
                </div>
              </div>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-base-100 rounded-xl shadow-lg p-3 z-50 border border-base-200">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <img
                      src={
                        user.photoURL ||
                        "https://i.ibb.co/2FsfXqM/default-avatar.png"
                      }
                      alt="avatar"
                      className="w-16 h-16 rounded-full mb-2"
                    />
                    <h3 className="font-semibold">
                      {user.displayName || "Anonymous User"}
                    </h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm btn-error mt-3 text-white"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/register" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;