import React from 'react';
import errorImg from '../assets/error-404.png'
import Navbar from './Navbar';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="mt-20 flex flex-col items-center space-y-4">
                <img src={errorImg} alt="404 illustration" className="w-80 max-w-xs mb-6" />
                <h1 className="text-4xl font-semibold mt-4">Oops, page not found!</h1>
                <p className="text-[#627382] mt-2 text-xl">
                    The page you are looking for is not available.
                </p>
                <Link
                    to={"/"}
                    className="btn font-semibold hover:from-[#632EE3] hover:to-[#7f31ec]  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-6 py-5"
                >
                    Go Back!
                </Link>
            </div>
        </>

    );
};

export default ErrorPage;