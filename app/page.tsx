"use client";

import { useState, useEffect, useRef } from "react";

export default function Page() {
    const [hydrated, setHydrated] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const aboutMeRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        setHydrated(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!hydrated) {
        return (
            <div className="bg-[#344E41] text-[#DAD7CD] min-h-screen flex justify-center items-center">
                Loading...
            </div>
        );
    }

    const handleButtonClick = () => {
        aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            {/* Fixed Header with Icons Only */}
            <header
                className={`fixed top-0 left-1/2 transform -translate-x-1/2 py-3 flex justify-center items-center px-8 z-50 shadow-md w-full max-w-4xl mt-8 rounded-lg transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[#344E41] bg-opacity-20 backdrop-blur-md' : 'bg-transparent backdrop-blur-none'} border-2 border-[#DAD7CD] ${isScrolled ? 'border-opacity-30' : 'border-opacity-100'}`}
            >
                <div className="space-x-4 flex">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/instagram-icon.png" alt="Instagram" className="w-6 h-6 filter invert brightness-0" />
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-28 flex flex-col items-center justify-center min-h-screen bg-[#344E41] text-[#DAD7CD] font-poppins">
                <h1 className="text-6xl font-bold mt-36 sm:mt-36 text-center">Hello!</h1>

                <p className="mt-4 text-[#DAD7CD] text-center max-w-2xl px-4 sm:px-6">
                    I am John Harold, a first-year BSINFOTECH student from LSPU-SPCC.
                </p>

                <button
                    onClick={handleButtonClick}
                    className="mt-8 mb-20 px-6 py-2 border-2 border-[#DAD7CD] text-[#DAD7CD] font-semibold rounded-md transition-all duration-300 hover:bg-[#DAD7CD] hover:text-[#344E41]"
                >
                    Who am i?
                </button>

                {/* About Me Section */}
                <section
                    ref={aboutMeRef}
                    className="relative w-full mt-64 sm:mt-72"
                >
                    {/* About Me Content */}
                    <h1 className="text-9xl font-bold text-[#DAD7CD] text-center relative top-20 drop-shadow-2xl">
                        hi there! i'm
                    </h1>

                    <div
                        className="bg-[#DAD7CD] rounded-t-[30px] rounded-b-[30px] shadow-lg w-full relative z-10 mt-28"
                        style={{ minHeight: '100vh', top: '-24px' }}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                            {/* About Me Content (Inside White Area) */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-x-6 mb-16 bg-[#DAD7CD] p-8 rounded-lg shadow-lg w-full">
                                {/* Image on the left */}
                                <div className="flex-shrink-0">
                                    <img
                                        src="/images/me.jpg"
                                        alt="John Harold Beladas"
                                        className="w-72 h-72 object-cover shadow-md rounded-lg"
                                    />
                                </div>

                                {/* Text on the right */}
                                <div className="flex-1 sm:text-left mt-6 sm:mt-0">
                                    <p className="text-[#3A5A40] font-extralight text-sm sm:text-sm">About Me</p>
                                    <p className="text-[#344E41] text-xl sm:text-4xl font-bold mt-2"> John Harold Beladas, 18</p>
                                    <p className="text-[#344E41] text-sm sm:text-base font-normal mt-1"> from San Cristobal, San Pablo City, Laguna.</p>
                                    <p className="text-[#3A5A40] font-extralight text-sm sm:text-sm mt-4">School</p>
                                    <p className="text-[#344E41] text-sm sm:text-lg font-normal mt-1">
                                        I'm currently taking the BSINFOTECH program at the Laguna State Polytechnic University - San Pablo Campus.
                                    </p>
                                    <p className="text-[#3A5A40] font-extralight text-sm sm:text-sm mt-4">Interests</p>
                                    <p className="text-[#344E41] text-sm sm:text-base font-semibold mt-1"> loves: food, music, and my woman</p>
                                    <p className="text-[#344E41] text-sm sm:text-base font-semibold mt-1"> hates: loud noises, medicine, summer temperatures sa pinas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hobbies Section */}
                    <div className="mt-36 bg-[#DAD7CD] rounded-3xl p-8 shadow-lg">
                        <h1 className="text-9xl font-bold text-[#344E41] text-center relative drop-shadow-2xl">
                            Hobbies
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Hobby 1 */}
                            <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl hover:translate-y-[-0.5rem] transition-all duration-300 ease-in-out">
                                <div className="relative">
                                    <video className="w-full h-56 sm:h-64 object-cover rounded-lg" preload="auto" muted autoPlay loop controls={false}>
                                        <source src="/videos/hobby1.mp4" type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 flex justify-center items-center text-center">
                                        <span className="text-white font-bold text-xl inline-block rounded-lg hover:border-[#344E41] hover:bg-white hover:text-[#344E41] px-2 py-1 transition-all duration-300">
                                            Gaming
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Hobby 2 */}
                            <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl hover:translate-y-[-0.5rem] transition-all duration-300 ease-in-out">
                                <div className="relative">
                                    <video className="w-full h-56 sm:h-64 object-cover rounded-lg" preload="auto" muted autoPlay loop controls={false}>
                                        <source src="/videos/hobby2.mp4" type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 flex justify-center items-center text-center">
                                        <span className="text-white font-bold text-xl inline-block rounded-lg hover:border-[#344E41] hover:bg-white hover:text-[#344E41] px-2 py-1 transition-all duration-300">
                                           Binge Watching
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Hobby 3 */}
                            <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl hover:translate-y-[-0.5rem] transition-all duration-300 ease-in-out">
                                <div className="relative">
                                    <video className="w-full h-56 sm:h-64 object-cover rounded-lg" preload="auto" muted autoPlay loop controls={false}>
                                        <source src="/videos/hobby3.mp4" type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 flex justify-center items-center text-center">
                                        <span className="text-white font-bold text-xl inline-block rounded-lg hover:border-[#344E41] hover:bg-white hover:text-[#344E41] px-2 py-1 transition-all duration-300">
                                            Sleeping
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Hobby 4 */}
                            <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl hover:translate-y-[-0.5rem] transition-all duration-300 ease-in-out">
                                <div className="relative">
                                    <video className="w-full h-56 sm:h-64 object-cover rounded-lg" preload="auto" muted autoPlay loop controls={false}>
                                        <source src="/videos/hobby4.mp4" type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 flex justify-center items-center text-center">
                                        <span className="text-white font-bold text-xl inline-block rounded-lg hover:border-[#344E41] hover:bg-white hover:text-[#344E41] px-2 py-1 transition-all duration-300">
                                            Writing
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Smaller text */}
                        <p className="text-center text-[#344E41] text-base sm:text-base mt-2">
                            These are the fun hobbies I mostly do these days to entertain myself and when I have free time. I have a lot of hobbies
                            that I enjoy, but I chose these particular hobbies since I think they are my favorite ones!
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
