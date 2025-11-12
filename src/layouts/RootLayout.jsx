import React from 'react';
import Navbar from '../components/header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;