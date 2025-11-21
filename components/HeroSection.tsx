"use client";
import React, { useRef, useState } from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isVisible, setIsVisible] = useState(true);

    const handleEnded = () => {
        // fade out
        setIsVisible(false);

        // after fade duration, rewind and play again with fade-in
        setTimeout(() => {
            if (videoRef.current) {
                try {
                    videoRef.current.currentTime = 0;
                    // play may return a promise; ignore failures (autoplay policy)
                    void videoRef.current.play();
                } catch (e) {
                    // ignore
                }
            }
            setIsVisible(true);
        }, 300); // match transition duration
    };

    return (
        <div id="home" className="relative h-screen p-1 sm:p-2 md:p-4 lg:p-6 xl:p-8">
            <div className="absolute inset-1 sm:inset-2 md:inset-4 lg:inset-6 xl:inset-8 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl overflow-hidden shadow-2xl">
                {/* navbar inside rounded container so corners are clipped */}
                <div className="absolute top-0 left-0 w-full z-[300]">
                    <Navbar />
                </div>

                <video
                    ref={videoRef}
                    className={`w-full h-full object-cover transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    src="/assets/hero_video.mp4"
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleEnded}
                />

                <div className={`absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/70 z-20 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
            <div className="relative z-40 flex flex-col items-center justify-center h-full text-white text-center px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 sm:mb-4 md:mb-6 leading-tight bg-clip-text text-transparent bg-linear-to-r from-white via-sky-100 to-blue-200 drop-shadow-2xl px-2">
                        Your Oasis, Our Expertise
                    </h1>
                    <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-sky-50 font-medium tracking-wide drop-shadow-lg px-2">
                        Crystal Clear Pools & Stunning Landscapes
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
                        <a 
                            href="/services/pool-construction"
                            className="w-full sm:w-auto bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-full text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            Discover More
                        </a>
                        <a 
                            href="/contactUs"
                            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-full text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;