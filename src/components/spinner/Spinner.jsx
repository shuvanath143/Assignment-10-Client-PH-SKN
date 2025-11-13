import React from "react";
import logoImage from "../../assets/logo.png";

const Spinner = () => {
  return (
    <div className="min-h-screen w-11/12 mx-auto flex justify-center items-center bg-[#ffffff]/10 font-laila">
      <p className="text-5xl text-blue-400 font-semibold tracking-wider">L</p>
      <div>
        <img src={logoImage} alt="" className="animate-spin h-10 w-12" />
      </div>
      <p className="text-5xl text-blue-400 font-semibold tracking-widest">
        ADING
      </p>
    </div>
  );
};

export default Spinner;
