import React, { use } from 'react';
import Sapp from './Sapp';

const allDataPromise = fetch('/allData.json').then(res => res.json());

const AllApps = () => {
       const allData = use(allDataPromise);
    return (
        <div className='max-w-7xl mx-auto px-6 py-12'>
            <h1 className='text-4xl text-[#001931] font-bold text-center'>Our All Applications</h1>
            <p className='text-xl text-[#627382] py-4 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex  justify-between items-center'>
                <div>
                    <p className='text-2xl text-[#001931] font-semibold py-5'>({allData.length}) Apps Found</p>
                </div>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>

            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5'>
                    {
                        allData.map(data => <Sapp key={data.id} data={data}></Sapp>)     
                    }
                </div>
        </div>
    );
};

export default AllApps;