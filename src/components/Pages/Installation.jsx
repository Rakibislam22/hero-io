import React, { useState } from 'react';
import SingleCardForIns from './SingleCardForIns';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const Installation = () => {

    const arr = localStorage.getItem('app');
    const [localStorageData, setLocalStorageData] = useState(JSON.parse(arr));

    const handleLocalStorageData = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Uninstall it!"
        }).then((result) => {
            if (result.isConfirmed) {

                const newLocalStorageData = [...localStorageData.filter(data => data.id != id)];
                setLocalStorageData(newLocalStorageData);
                localStorage.setItem("app", JSON.stringify(newLocalStorageData));

                Swal.fire({
                    title: "Uninstalled!",
                    text: "Your App has been Uninstalled.",
                    icon: "success"
                });
            }
        });
    }


    const handleSortChange = (e) => {
        const order = e.target.value;

        let sortedData = [...localStorageData];
        if (order === "High-Low") {
            sortedData.sort((a, b) => b.size - a.size);
        } else if (order === "Low-High") {
            sortedData.sort((a, b) => a.size - b.size);
        }

        setLocalStorageData(sortedData);
    };

    return (

        <div className='py-15 pb-35 max-w-7xl mx-auto px-3 '>
            <div className='space-y-4 '>
                <h1 className='text-4xl text-[#001931] font-bold text-center '>Your Installed Apps</h1>
                <p className='text-[#627382] text-xl text-center pb-5'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex justify-between items-center'>
                    <p className='text-2xl text-[#001931] font-semibold '>
                        {localStorageData.length} Apps Found
                    </p>
                    <div>
                        <select defaultValue="Sort By Size" onChange={handleSortChange}  className="select">
                            <option disabled={true}>Sort By Size</option>
                            <option>High-Low</option>
                            <option>Low-High</option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
                {
                    localStorageData.map(appData => <SingleCardForIns handleLocalStorageData={handleLocalStorageData} appData={appData}></SingleCardForIns>)
                }
                {
                    localStorageData.length === 0 && (
                        <div className='text-center py-40'>
                            <h1 className='text-2xl text-[#001931] font-semibold '>You didn't installed any app yet!</h1>
                        </div>
                    )
                }

            </div>

        </div>

    );
};

export default Installation;