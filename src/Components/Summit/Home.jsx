import React, { useEffect, useRef, useState } from "react";
import hackathonvideo from "../../videos/hackathonvideo.mp4";
import awsworkshop from "../../videos/awsworkshop.mp4";
import video1 from "../../videos/video1.mp4";
import video2 from "../../videos/video2.mp4";
import video3 from "../../videos/video3.mp4";
import video4 from "../../videos/video4.mp4";
import { Link } from "react-router-dom";

const videoPlaylist = [
  awsworkshop,
  video1,
  // video2,
  hackathonvideo,
  video3,
  video4,
];

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  }, [currentIndex]);

  const handleVideo = () => {
    if (currentIndex < videoPlaylist.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <section id="home" className="w-full h-full relative overflow-hidden">
      <video
        className="w-full h-[600px] object-cover"
        ref={videoRef}
        key={currentIndex}
        src={videoPlaylist[currentIndex]}
        autoPlay
        muted
        onEnded={handleVideo}
      />
      <div className="absolute inset-0 bg-black/70 flex flex-col justify-center p-6 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl">
          AI Summit Janakpur 2026
        </h1>

        <p className="text-2xl sm:text-3xl font-semibold mt-6 max-w-3xl">
          Empowering the next generation through Artificial Intelligence
        </p>
        <p className="mt-5 text-lg sm:text-xl max-w-2xl text-slate-200">
          25 July 2026 · Janakpurdham ·
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div  className="inline-flex items-center justify-center rounded-full bg-blue-900 px-7 py-4 text-xl font-semibold text-white hover:border-white hover:border-2  hover:bg-white/10 transition-x-duration-300">
          <a
            href="https://luma.com/kav3l6sb"
           
          >
            Register Now
          </a>
          </div>
          <Link to = "/aisummit/sponsor"
          
            className="inline-flex items-center justify-center rounded-full border border-white bg-white/10 px-7 py-4 text-xl font-semibold text-white   hover:bg-blue-900 hover:border-white/50 transition-x-300"
          >
            
            Sponsor Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

