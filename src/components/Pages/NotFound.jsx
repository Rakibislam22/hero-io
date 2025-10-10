import React from 'react';
import noFound from '../../assets/App-Error.png'

const NotFound = () => {
    return (
        <div className="mt-20 flex flex-col items-center space-y-4">
            <img src={noFound} alt="404 illustration" className="w-80 max-w-xs mb-6" />
            <h1 className="text-4xl font-semibold mt-4">OPPS!! APP NOT FOUND</h1>
            <p className="text-[#627382] mt-2 text-xl">
                The App you are requesting is not found on our system.  please try another apps
            </p>
            <a
                 href="/apps"
                className="btn font-semibold hover:from-[#632EE3] hover:to-[#7f31ec]  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-6 py-5"
            >
                Go Back!
            </a>
        </div>
    );
};

export default NotFound;