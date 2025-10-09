import React from 'react';
import downImg from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";

const Installation = () => {
    return (

        <div className='py-15 max-w-7xl mx-auto px-3 '>
            <div className='space-y-4'>
                <h1 className='text-4xl text-[#001931] font-bold text-center '>Your Installed Apps</h1>
                <p className='text-[#627382] text-xl text-center'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex justify-between items-center'>
                    <p className='text-2xl text-[#001931] font-semibold '>
                        1 Apps Found
                    </p>
                    <div>
                        <select defaultValue="Sort By Size" className="select">
                            <option disabled={true}>Sort By Size</option>
                            <option>High-Low</option>
                            <option>Low-High</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='my-4 flex items-center justify-between p-4 gap-5 bg-white rounded-sm'>
                <div className='flex items-center gap-5'>
                    <div>
                        <img className='w-20 rounded-lg' src="https://play-lh.googleusercontent.com/sAGShCwPaqv32C3iaenxqM0GkbRpkX-n436HRHlvzHcZYY5H_rWXKilMsdOk85Jb9Hk=w240-h480-rw" alt="" />
                    </div>
                    <div c>
                        <h1 className='text-[#001931] text-xl font-semibold py-2'>Forest: Focus for Productivity</h1>
                        <div className='flex items-center gap-5'>
                            <div className='flex justify-center items-center text-[#00D390] gap-1'>
                                <img className='w-5' src={downImg} alt="" />
                                <p>9M</p>
                            </div>
                            <div className='flex justify-center items-center gap-1 text-[#FF8811]'>
                                <img className='w-5' src={ratingsImg} alt="" />
                                <p>5</p>
                            </div>
                            <div>
                                <p className='text-[#627382]'>258 MB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='btn bg-[#00D390] hover:bg-[#01a772] text-white px-6 py-2 rounded-sm'>Uninstall</button>
            </div>
            <div className='my-4 flex items-center justify-between p-4 gap-5 bg-white rounded-sm'>
                <div className='flex items-center gap-5'>
                    <div>
                        <img className='w-20 rounded-lg' src="https://play-lh.googleusercontent.com/sAGShCwPaqv32C3iaenxqM0GkbRpkX-n436HRHlvzHcZYY5H_rWXKilMsdOk85Jb9Hk=w240-h480-rw" alt="" />
                    </div>
                    <div c>
                        <h1 className='text-[#001931] text-xl font-semibold py-2'>Forest: Focus for Productivity</h1>
                        <div className='flex items-center gap-5'>
                            <div className='flex justify-center items-center text-[#00D390] gap-1'>
                                <img className='w-5' src={downImg} alt="" />
                                <p>9M</p>
                            </div>
                            <div className='flex justify-center items-center gap-1 text-[#FF8811]'>
                                <img className='w-5' src={ratingsImg} alt="" />
                                <p>5</p>
                            </div>
                            <div>
                                <p className='text-[#627382]'>258 MB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='btn bg-[#00D390] hover:bg-[#01a772] text-white px-6 py-2 rounded-sm'>Uninstall</button>
            </div>
        </div>

    );
};

export default Installation;