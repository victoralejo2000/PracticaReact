import { useState } from "react";
import Header from "./Header";
import MovieList from "./MovieList";


const HeroSection = () => {
  const [bannerImage, setBannerImage] = useState(
    "https://i0.wp.com/dmtalkies.com/wp-content/uploads/2021/03/ezgif-2-5452f5694b1f-compressed.jpg"
  );

  return (
    <>
      <div className="absolute z-[-1] m-auto ">
        <img src={bannerImage} className="h-screen object-cover w-screen" />
      </div>
      <div className="h-48 absolute  w-screen z-[-1]  bg-gradient-to-b from-gray-900"></div>
      <div className="h-48 absolute bottom-0 w-screen z-[-1] bg-gradient-to-t mb-[-20px] from-gray-900"></div>

      <Header />

      <div className="p-10">
        <p className="text-[40px] font-bold text-white w-[300px]">
          RAYA Y EL ULTIMO DRAGON
        </p>
        <p className="text-white font-thin mt-6">Una Pelicula Original de Disney</p>

        <p className=" mt-5 bg-purple-500 hover:scale-125
       text-white p-2 px-10 rounded-full w-[140px] text-center
       cursor-pointer hover:font-bold transition-all duration-300"
        >Reproducir</p>
      </div>
      <MovieList />

    </>
  );
};

export default HeroSection;
