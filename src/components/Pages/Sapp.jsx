import React from 'react';
import downImg from '../../assets/icon-downloads.png'
import starImg from '../../assets/icon-ratings.png'

const Sapp = ({data}) => {
    const {image, title, downloads, ratingAvg } = data;
    return (
        <div className=' p-4 space-y-6 bg-white rounded-lg'>
            <div className='flex justify-center items-center'>
                <img className='rounded-xl' src={image} alt="" />
            </div>
            
            <p className='text-xl text-[#001931] font-medium'>{title}</p>
            <div className='flex justify-between items-center font-medium'>
                <div className='text-[#00D390] flex justify-center items-center gap-3 py-2 px-3 rounded-sm bg-[#F1F5E8]'>
                    <img className='w-5' src={downImg} alt="" />
                    <p>{downloads}</p>
                </div>
                <div className='text-[#FF8811] flex justify-center items-center gap-3 py-2 px-3 rounded-sm bg-[#FFF0E1]'>
                    <img className='w-5' src={starImg} alt="" />
                    <p>{ratingAvg}</p>
                </div>
            </div>
        </div>
    );
};

export default Sapp;