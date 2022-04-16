import React, { useRef, useState, useEffect } from 'react';
import moment from 'moment';
import { PostCard, Categories, PostWidget, Socials}  from '../../components';


// import { submitComment } from '../../services';
import { FeaturedPosts } from '../../sections';

import Image from 'next/image';
import image5 from '../../public/her-returns-to-form-on-her-debut-album-back-of-my-mind.jpg';


const HERUpdates = () => {
    
    return (
        <div className='container'>
            <FeaturedPosts className="mb-8" />
        <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 w-70 mx-auto">
            <div className="relative overflow-hidden shadow-md mb-6">
            <Image className='updates-image' alt="HER self-titled album" src={image5} />        
            </div>
            <div className="px-4 lg:px-0 updates">
                <div className="flex items-center mb-8 w-full">
                    <div className=" md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
                        <p className="text-black">Aaliyah</p>
                    </div>
                    <div className="font-medium text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="align-middle">{moment().format('MMM DD, YYYY')}</span>
                    </div>
                </div>
                <h1 className="mb-8 text-3xl font-semibold">H.E.R Updates</h1>
                <p><a href="https://www.her-official.com/#tour" target="_blank" rel="noreferrer">BOMM Tour Schedule</a></p>
                <p><a href="https://www.coldplay.com/tour/" target="_blank" rel="noreferrer">World Tour w/ Coldplay</a></p>
                <p>Appearances</p>
                <p>Interviews</p>
                <p><a href="https://www.instagram.com/lightsonfest/?hl=en" target="_blank" rel="noreferrer">Festivals</a></p>
                <p>Collaborations</p>
                <p>Projects</p> 
                <p><a href="https://www.hollywoodreporter.com/movies/movie-news/h-e-r-to-make-acting-debut-in-the-color-purple-movie-musical-exclusive-1235004336/" target="_blank" rel="noreferrer">Acting Gigs</a></p>
            </div>
        </div>

        <div className="lg:col-span-4 col-span-1 w-70 mx-auto">
            <div className="lg:sticky relative top-8">
            <PostWidget  />
            <Categories />
            </div>
            </div>
        </div>
    );
}

export default HERUpdates;



 
