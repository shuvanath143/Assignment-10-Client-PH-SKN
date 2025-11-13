import React from "react";
import errorImg from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <div>
        <img src={errorImg} alt="404notfound" />
      </div>
      <Link
        to="/"
        className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] px-4 py-2 font-medium text-white"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
