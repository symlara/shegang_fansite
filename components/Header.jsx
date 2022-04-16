import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import image1 from '../public/her-returns-to-form-on-her-debut-album-back-of-my-mind.jpg';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-15 mb-8">
      <div className="border-b w-full inline-block py-8">
        <div className="md:float-left block shegang">
          <Link href="/">
            <h1 className="cursor-pointer font-bold text-4xl text-white">SheGang FanSite</h1>
          </Link>
        </div>
      
        
        { <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer categories">{category.name}</span></Link>
          ))}
        </div> } 
        <nav className="nav categories">
                <Link href="/updates/h.e.r-updates"><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer categories">H.E.R Updates</span></Link>
                <Link href="/videos/videos"><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer categories">Videos</span></Link>
                {/* <Link href="/dashboard/dashboard"><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">Dashboard</span></Link> */}
               <Link href="/samples/samples"><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer categories">Samples</span></Link>
               <Link href="/albums/album"><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer categories">Albums</span></Link>
        </nav>

            {/* <div className="header"> 
              <Image src={image1} alt="back-of-my-mind-album" />
              </div> */}
       

      </div>
        <div className="description">
          <p className="text-white text-center text-base font-semibold">A place for all H.E.R fans to find all things H.E.R. , SHE GANG activities school, and career resources, also a sense of community!</p>
        </div>
     
    </div>

  );
};

export default Header;