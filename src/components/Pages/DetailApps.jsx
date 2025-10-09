import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import downImg from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Loading from "./Loading";

const DetailApps = () => {
    const { id } = useParams();
    const [aData, setAData] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("/allData.json")
            .then((res) => res.json())
            .then((allData) => {
                const app = allData.find(d => d.id == id);
                setAData(app);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    // console.log(aData);

    // const data = aData.ratings || [];

    if (loading) return <Loading></Loading>;
    if (!aData) return <div className="text-center py-10">App not found.</div>;

    return (
        <div className="max-w-7xl mx-auto px-3">
            <div className="flex flex-col md:flex-row pt-15 pb-5">
                <div className="flex items-center">
                    <img src={aData.image} alt="" className="rounded-xl w-80" />
                </div>

                <div className=" space-y-4 lg:p-10 py-5">
                    <div className="border-b-1 border-gray-300 lg:w-3xl pb-7">
                        <h1 className="lg:text-3xl text-2xl text-[#001931] font-bold pb-2">{aData.title}</h1>
                        <p className="text-[#627382] lg:text-xl ">
                            Developed by: <span className="font-semibold text-xl text-[#632EE3] ">{aData.companyName}</span>
                        </p>
                    </div>


                    <div className="flex gap-20 items-center py-3">
                        <div className="text-center">
                            <img src={downImg} alt="" className="mx-auto" />
                            <p className="text-sm text-[#627382]">Downloads</p>
                            <h1 className="font-extrabold lg:text-4xl text-2xl text-[#001931]">{(aData.downloads > 1000) ? (aData.downloads / 1000 > 1000) ? aData.downloads / 1000000 + "M" : aData.downloads / 1000 + "K" : aData.downloads}</h1>
                        </div>
                        <div className="text-center">
                            <img src={ratingsImg} alt="" className="mx-auto" />
                            <p className="text-sm text-[#627382]">Avg Rating</p>
                            <h1 className="font-extrabold lg:text-4xl text-2xl text-[#001931]">{aData.ratingAvg}</h1>
                        </div>
                        <div className="text-center">
                            <img src={reviewImg} alt="" className="mx-auto" />
                            <p className="text-sm text-[#627382]">Reviews</p>
                            <h1 className="font-extrabold lg:text-4xl text-2xl text-[#001931]">{(aData.reviews > 1000) ? (aData.reviews / 1000 > 1000) ? aData.reviews / 1000000 + "M" : aData.reviews / 1000 + "K" : aData.reviews}</h1>
                        </div>
                    </div>

                    <button className="bg-[#00D390] hover:bg-[#01a772] text-white px-6 py-2 rounded-md">
                        Install Now ({aData.size} MB)
                    </button>
                </div>
            </div>

            <div className=" border-t-1 border-b-1 border-gray-300 pb-18 pt-2">
                {
                    aData.ratings.length > 0 && (
                        <div className="w-full h-80 ">
                            <p className="text-2xl font-semibold text-[#001931] py-4 ">Ratings</p>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={aData?.ratings || []}
                                    layout="vertical"
                                >
                                    <XAxis type="number" />
                                    <YAxis type="category" dataKey="name" />
                                    <Tooltip />
                                    
                                    <Bar dataKey="count" fill="#FF8811" barSize={30} />
                                </BarChart>

                            </ResponsiveContainer>

                        </div>
                    )}
            </div>

            <div>
                <p className="text-2xl font-semibold text-[#001931] py-8">Description</p>
                <p className="text-[#627382] text-xl pb-15">{aData.description}</p>
            </div>

        </div>

    );
};

export default DetailApps;
