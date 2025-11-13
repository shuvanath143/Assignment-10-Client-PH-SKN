import React from "react";
import Navbar from "../components/header/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto min-w-[320px]">
      <header className="mx-auto">
        <Navbar />
      </header>
      <main className="mx-auto">
        <Outlet></Outlet>
      </main>
      <footer className="mx-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
