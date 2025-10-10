import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen absolute top-[64px] left-0 right-0 bottom-0 flex items-center justify-center bg-white z-40">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#632EE3]"></div>
        </div>
    );
};

export default Loading;