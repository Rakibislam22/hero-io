import React from 'react';
import downImg from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";

const SingleCardForIns = ({ appData, handleLocalStorageData }) => {
    const {image, title, size, ratingAvg, downloads, id} = appData;

    return (
        <div className='my-4 flex items-center justify-between p-4 gap-5 bg-white rounded-sm'>
            <div className='flex items-center gap-5'>
                <div>
                    <img className='w-20 rounded-lg' src={image} alt="" />
                </div>
                <div c>
                    <h1 className='text-[#001931] text-xl font-semibold py-2'>{title}</h1>
                    <div className='flex items-center gap-5'>
                        <div className='flex justify-center items-center text-[#00D390] gap-1'>
                            <img className='w-5' src={downImg} alt="" />
                            <p>{(downloads > 1000) ? (downloads/1000 > 1000) ? downloads/1000000 +"M" : downloads/1000 +"K" : downloads }</p>
                        </div>
                        <div className='flex justify-center items-center gap-1 text-[#FF8811]'>
                            <img className='w-5' src={ratingsImg} alt="" />
                            <p>{ratingAvg}</p>
                        </div>
                        <div>
                            <p className='text-[#627382]'>{size} MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => handleLocalStorageData(id)} className='btn bg-[#00D390] hover:bg-[#01a772] text-white px-6 py-2 rounded-sm'>Uninstall</button>
        </div>
    );
};

export default SingleCardForIns;