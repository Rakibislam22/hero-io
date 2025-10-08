import React, { use } from 'react';
import Sapp from './Sapp';

const Apps = ({trendingPromise}) => {
    const trendingData = use(trendingPromise);
    
    return (
        <div>
            <h1 className='text-[#001931] text-4xl text-center font-bold py-5'>Trending Apps</h1>
            <p className='text-xl text-[#627382] text-center pb-9'>Explore All Trending Apps on the Market developed by us</p>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5'>
                {
                    trendingData.map( data => <Sapp key={data.id} data={data} ></Sapp>)
                }
                
            </div>
        </div>
    );
};

export default Apps;