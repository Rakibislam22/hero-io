import React, { use, useState } from 'react';
import Sapp from './Sapp';
import NotFound from './NotFound';


const AllApps = ({ dataPromise }) => {

    const allData = use(dataPromise);
    const [searchText, setSearchText] = useState("");
    const [filterData, setFilteredData] = useState(allData);
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        const value = e.target.value;
        setSearchText(value);
        setLoading(true);

        const newFiltered = allData.filter(data =>
            data.title.toLowerCase().includes(value.toLowerCase())
        );

        setTimeout(() => {
            setFilteredData(newFiltered);
            setLoading(false); 
        }, 500); 
    };

    return (
        <div className='max-w-7xl mx-auto px-6 py-12'>
            <h1 className='text-4xl text-[#001931] font-bold text-center'>Our All Applications</h1>
            <p className='text-xl text-[#627382] py-4 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex max-sm:flex-col-reverse justify-between items-center'>
                <div>
                    <p className='text-2xl text-[#001931] font-semibold py-5'>({filterData.length}) Apps Found</p>
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
                    <input type="search" required placeholder="Search" value={searchText}
                        onChange={handleChange}
                        className="outline-none" />
                </label>

            </div>


            {loading && (
                <div className="flex items-center justify-center my-10 p-40 lg:p-60 bg-[#f5f5f5] z-40">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#632EE3]"></div>
                </div>
            )}
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5'>
                {
                    !loading && filterData.map(data => <Sapp key={data.id} data={data}></Sapp>)
                }
            </div>
            <div>
                {!loading && filterData.length === 0 && <NotFound></NotFound>}
            </div>
            
        </div>
    );
};

export default AllApps;