import React, { Suspense } from 'react';
import hero from '../assets/hero.png';
import Apps from './Pages/Apps';
import { Link } from 'react-router';
import Loading from './Pages/Loading';

const trendingPromise = fetch("/trendingData.json").then(res => res.json());

const Home = () => {
    return (
        <>
            <div className='space-y-6 text-center py-12 px-3 max-w-[1280px] mx-auto'>
                <h1 className='lg:text-6xl text-4xl font-bold'>We Build <br /><span className='bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inline-block'>Productive</span> Apps</h1>
                <p className='text-[#627382] lg:text-xl pb-5'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className="flex justify-center gap-4 mt-6">

                    <a
                        href="https://play.google.com/store/apps"
                        target="_blank"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"

                            className="h-12 hover:scale-105 transition-transform duration-300"
                        />
                    </a>

                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                    >
                        <img
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="Download on the App Store"
                            className="h-12 hover:scale-105 transition-transform duration-300"
                        />
                    </a>
                </div>
            </div>
            <div className='flex justify-center items-center px-3'>
                <img src={hero} alt="" />
            </div>
            <div className='px-3  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-center pt-20 '>
                <h1 className='lg:text-5xl text-3xl font-bold text-white'>Trusted by Millions, Built for You</h1>
                <div className='text-white flex justify-center items-center lg:gap-50 gap-8 py-20'>
                    <div className='space-y-3'>
                        <p>Total Downloads</p>
                        <h1 className='lg:text-6xl text-4xl font-bold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='space-y-3'>
                        <p>Total Reviews</p>
                        <h1 className='lg:text-6xl text-4xl font-bold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='space-y-3'>
                        <p>Active Apps</p>
                        <h1 className='lg:text-6xl text-4xl font-bold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>

            <div className='px-3 max-w-[1280px] mx-auto py-10 space-y-10'>
                <Suspense fallback={<Loading></Loading>}>
                    <Apps trendingPromise={trendingPromise}></Apps>
                </Suspense>
                <div className='flex justify-center items-center'>
                    <Link to={"/apps"}>
                        <button className='btn font-semibold hover:from-[#632EE3] hover:to-[#7f31ec]  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-8 py-5 '>Show All</button>
                    </Link>
                </div>

            </div>
        </>

    );
};

export default Home;