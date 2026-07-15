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
    <section id="home" className="relative w-full overflow-hidden">
      <video
        className="w-full h-[300px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
        ref={videoRef}
        key={currentIndex}
        src={videoPlaylist[currentIndex]}
        autoPlay
        muted
        onEnded={handleVideo}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 text-white">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            AI Summit Janakpur 2026
          </h1>

          <p className="mt-4 sm:mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-100 leading-relaxed">
            Empowering the next generation through Artificial Intelligence
          </p>

          <p className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-slate-300">
            25 July 2026 · Janakpurdham
          </p>

          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col xs:flex-row gap-3 sm:gap-4">
            <a
              href="https://luma.com/kav3l6sb"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
            >
              Register Now
            </a>

            <Link
              to="/aisummit/sponsor"
              className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white hover:bg-white/20 hover:shadow-lg transition duration-300 w-full sm:w-auto text-center"
            >
              Sponsor Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
