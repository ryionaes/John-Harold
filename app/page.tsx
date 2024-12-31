"use client";

import { useState, useEffect, useRef } from "react";

export default function Page() {
    const [hydrated, setHydrated] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const aboutMeRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        setHydrated(true);
    }, []);

    useEffect(() => {
        // Delay setting hydrated to true for 30 seconds
        const timeout = setTimeout(() => {
            setHydrated(true);
        }, 10000); // 30000ms = 30 seconds

        return () => clearTimeout(timeout); // Clean up the timeout on unmount
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

    const songs = [
        {
            title: "Segundo, Siguro",
            artist: "Arthur Nery",
            image: "/images/song1.jpg", // Replace with your song images
            quote: "\"Sa kahel na kalangitan, Ako ba ang uuwian mo?\"",
            spotify: "https://open.spotify.com/track/01r5Imd2Zq78PKzx4vgul7?si=e560dc614ba4481c",
            youtube: "https://music.youtube.com/watch?v=SbuqOWg3dww&si=69ENEekkdEcG3TUI",
            apple: "https://music.apple.com/us/album/segundo-siguro/1736993672?i=1736993683"
        },
        {
            title: "The Only Exception",
            artist: "Paramore",
            image: "/images/song2.jpg",
            quote: "\"But darling, you are the only exception\"",
            spotify: "https://open.spotify.com/track/7JIuqL4ZqkpfGKQhYlrirs?si=732aede2d6a24141",
            youtube: "https://music.youtube.com/watch?v=ChXcD6Z4uvQ&si=Z9s9hfYKedmlrPRR",
            apple: "https://music.apple.com/us/album/the-only-exception/604800411?i=604800419"
        },
        {
            title: "Dark Red",
            artist: "Steve Lacy",
            image: "/images/song3.jpg",
            quote: "\"What if she's fine? It's my mind that's wrong, And I just let bad thoughts linger for far too long\"",
            spotify: "https://open.spotify.com/track/3EaJDYHA0KnX88JvDhL9oa?si=4c548f2be3bd40c1",
            youtube: "https://music.youtube.com/watch?v=Q6FarZpy67M&si=1NEL8PKz5O569Ir_",
            apple: "https://music.apple.com/us/album/dark-red/1208244166?i=1208244205"
        },
        {
            title: "Ikot",
            artist: "Over October",
            image: "/images/song4.jpg",
            quote: "\"Ikaw lang at ikaw ang sinisigaw ng puso kong 'di mapakali\"",
            spotify: "https://open.spotify.com/track/55eWkBMyr3bAHVVE1SLmDE?si=2c0fa6a200a34bc0",
            youtube: "https://music.youtube.com/watch?v=LkUlV1Ct6w0&si=q-jnqaWtoEy-8yWj",
            apple: "https://music.apple.com/us/album/ikot/1737756906?i=1737756914"
        },
    ];

    const nextSong = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
    };

    const prevSong = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    };

    const handleButtonClick = () => {
        if (aboutMeRef.current) {
            aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!hydrated) {
        return (
            <div className="bg-[#344E41] text-[#DAD7CD] min-h-screen flex justify-center items-center">
                Loading...
            </div>
        );
    }

    const Footer = () => {
        return (
            <div className="w-full bg-[#344e41]"> {/* Green container */}
                <footer
                    className="w-full bg-[#0d0e11] text-[#eee] py-2 sm:py-3 md:py-4 rounded-t-3xl border-t-2 border-l-2 border-r-2 border-b-0 border-[#aaa]">
                    {/* Footer section with smaller padding */}
                    <div className="w-full p-4 sm:p-5 md:p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            {/* Copyright text with responsive text size */}
                            <p className="text-xs sm:text-sm md:text-base text-center sm:text-left mb-4 sm:mb-0 sm:mr-16">
                                &copy; 2024 John Harold Beladas. All rights reserved.
                            </p>

                            {/* Social media icons with responsive sizes */}
                            <div className="flex items-center space-x-4 mt-4 sm:mt-0 text-[#DAD7CD]">
                                <a
                                    href="https://www.facebook.com/harold.beladas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-75 transition-opacity duration-300"
                                >
                                    <img
                                        src="/images/facebook-icon.png"
                                        alt="Facebook"
                                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 filter invert brightness-0"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/harkives_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-75 transition-opacity duration-300"
                                >
                                    <img
                                        src="/images/instagram-icon.png"
                                        alt="Instagram"
                                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 filter invert brightness-0"
                                    />
                                </a>
                                <a
                                    href="https://github.com/ryionaes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-75 transition-opacity duration-300"
                                >
                                    <img
                                        src="/images/github-icon.png"
                                        alt="GitHub"
                                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-[#DAD7CD] filter invert brightness-0"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        );
    };


    return (
        <>
        {/* Main Section */}
            <main className="flex flex-col items-center justify-center bg-[#344E41] text-[#DAD7CD] font-poppins">
                {/* Video Background Section */}
                <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                    {/* Video Container */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        {/* GIF */}
                        <img
                            src="/images/forest.gif"
                            alt="Forest Animation"
                            className="absolute top-0 left-0 min-w-full min-h-full object-cover"
                        />
                    </div>


                    {/* Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[#000] opacity-70 z-1"></div>

                    {/* Header */}
                    <div className="absolute top-0 w-full z-50">
                        <header
                            className={`fixed top-3 right-4 sm:right-8 md:right-16 lg:right-24 py-1 sm:py-2 md:py-2 lg:py-1 px-4 z-50 shadow-md w-auto sm:w-32 md:w-36 lg:w-32 xl:w-36 mt-4 rounded-lg transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[#344E41] bg-opacity-20 backdrop-blur-md' : 'bg-transparent backdrop-blur-none'} border-2 border-[#DAD7CD] ${isScrolled ? 'border-opacity-30' : 'border-opacity-100'}`}
                        >
                            <div className="flex space-x-2 sm:space-x-2 md:space-x-3 lg:space-x-4 justify-center">
                                <a href="https://www.facebook.com/harold.beladas" target="_blank"
                                   rel="noopener noreferrer">
                                    <img src="/images/facebook-icon.png" alt="Facebook"
                                         className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-5 lg:h-5 xl:w-6 xl:h-6 filter invert brightness-0"/>
                                </a>
                                <a href="https://www.instagram.com/harkives_/" target="_blank"
                                   rel="noopener noreferrer">
                                    <img src="/images/instagram-icon.png" alt="Instagram"
                                         className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-5 lg:h-5 xl:w-6 xl:h-6 filter invert brightness-0"/>
                                </a>
                                <a href="https://github.com/ryionaes" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/github-icon.png" alt="GitHub"
                                         className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-[#DAD7CD] filter invert brightness-0"/>
                                </a>
                            </div>
                        </header>
                    </div>

                    {/* Content Over Video */}
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4 sm:px-6 lg:px-8">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold whitespace-nowrap">
                            Hello!
                        </h1>
                        <p className="mt-4 text-[#DAD7CD] max-w-md sm:max-w-lg lg:max-w-2xl px-4 sm:px-6 text-xs sm:text-sm md:text-base lg:text-lg">
                            I am John Harold, a first-year BSINFOTECH student from LSPU-SPCC.
                        </p>
                        <button
                            onClick={handleButtonClick}
                            className="mt-8 px-4 sm:px-6 lg:px-8 py-2 border-2 border-[#DAD7CD] text-[#DAD7CD] font-semibold rounded-md transition-all duration-300 hover:bg-[#DAD7CD] hover:text-[#344E41] text-sm sm:text-lg lg:text-xl"
                        >
                            Who am I?
                        </button>
                    </div>
                </div>


                {/* Green Floating Container */}
                <div
                    className="absolute -bottom-2 left-0 right-0 bg-[#344E41] rounded-t-[30px] w-full z-20 mt-10 sm:mt-16 md:mt-20 lg:mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="text-center text-[#DAD7CD]">
                            {/* Content for the container */}
                        </div>
                    </div>
                </div>


                <section ref={aboutMeRef} className="relative w-full mt-16 sm:mt-1">
                    <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-[#DAD7CD] text-center relative top-20 drop-shadow-2xl">
                        Hi there! I am
                    </h1>


                    <div
                        className="bg-[#DAD7CD] rounded-t-[30px] rounded-b-[30px] shadow-lg w-full max-w-7xl mx-auto relative z-10 mt-28">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                            <div
                                className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-x-6 mb-16 bg-[#DAD7CD] p-8 rounded-lg shadow-lg w-full">
                                <div className="flex-shrink-0">
                                    <img
                                        src="/images/me.jpg"
                                        alt="John Harold Beladas"
                                        className="w-52 sm:w-72 h-52 sm:h-72 object-cover shadow-md rounded-lg"
                                    />
                                </div>

                                <div className="flex-1 sm:text-left mt-6 sm:mt-0">
                                    <p className="text-[#3A5A40] font-extralight text-sm sm:text-sm">About Me</p>
                                    <p className="text-[#344E41] text-lg sm:text-xl lg:text-4xl font-bold mt-2">John
                                        Harold Beladas, 18</p>
                                    <p className="text-[#344E41] text-sm sm:text-base font-normal mt-1">from San
                                        Cristobal, San Pablo City, Laguna.</p>
                                    <p className="text-[#3A5A40] font-extralight text-sm sm:text-sm mt-4">School</p>
                                    <p className="text-[#344E41] text-sm sm:text-lg font-normal mt-1">I am currently
                                        taking the BSINFOTECH program at the Laguna State Polytechnic University - San
                                        Pablo Campus.</p>
                                    <p className="text-[#3A5A40] font-extralight text-sm sm:text-sm mt-4">Interests</p>
                                    <p className="text-[#344E41] text-sm sm:text-base font-semibold mt-1">Loves: food,
                                        music, and my woman</p>
                                    <p className="text-[#344E41] text-sm sm:text-base font-semibold mt-1">Hates: loud
                                        noises, medicine, summer temperatures sa Pinas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mt-36 w-full flex justify-center pb-12 relative">
                    {/* Contacts Text Above the Calling Card */}
                    <div
                        className="absolute top-0 left-0 w-full text-center text-6xl font-bold text-[#dad7cd] drop-shadow-2xl -mt-14">
                        Contacts
                    </div>

                    {/* Outer container with rounded corners and padding */}
                    <div
                        className="bg-[#DAD7CD] h-auto w-full sm:w-3/4 lg:w-2/3 rounded-lg p-6 shadow-lg flex flex-col sm:flex-row justify-center items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
                        {/* Left section: Socials and Email */}
                        <div className="flex flex-col items-start space-y-4 text-[#344E41] w-full sm:w-1/2">
                            {/* Socials Section */}
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold">SOCIALS</h2>
                                <div className="space-y-2 mt-2">
                                    <p>Facebook: @harold.beladas</p>
                                    <p>Instagram: @harkives_</p>
                                    <p>GitHub: @ryionaes</p>
                                </div>
                            </div>

                            {/* Email Section */}
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8">Email</h2>
                                <p>harrybeladas0@gmail.com</p>
                            </div>
                        </div>

                        {/* Right section: Image */}
                        <div className="w-full sm:w-1/3 flex justify-center sm:justify-start mt-6 sm:mt-0">
                            <img
                                src="/images/my.png"
                                alt="Your Picture"
                                className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full border-4 border-[#344E41]"/>
                        </div>
                    </div>

                </div>

                <div className="mt-16 bg-[#DAD7CD] rounded-3xl p-8 shadow-lg mx-auto max-w-7xl">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#344E41] text-center relative drop-shadow-2xl">
                        Hobbies!
                    </h1>
                    <h1 className="mb-5 text-xl sm:text-2xl font-thin text-[#344E41] text-center relative drop-shadow-2xl">
                        Some of my fav hobbies :P
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* GIF 1: Gaming */}
                        <div
                            className="group bg-white shadow-lg rounded-lg p-4 hover:shadow-xl hover:translate-y-[-0.5rem] transition-all duration-300 ease-in-out flex flex-col justify-between">
                            <div className="relative">
                                <img className="w-full h-48 sm:h-56 object-cover rounded-lg" src="/gifs/hobby1.gif"
                                     alt="Gaming"/>
                                <div className="absolute inset-0 flex justify-center items-center text-center">
                    <span
                        className="text-white font-bold text-xl inline-block rounded-lg hover:border-[#344E41] hover:bg-white hover:text-[#344E41] px-2 py-1 transition-all duration-300">
                        Gaming
                    </span>
                                </div>
                                <div
                                    className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Credits to: @VALORANT
                                </div>
                            </div>
                        </div>

                        {/* GIF 2: Binge Watching */}
                        <div
                            className="group bg-white shadow-lg rounded-lg p-4 hover:shadow-xl hover:translate-y-[-0.5rem] transition-all duration-300 ease-in-out flex flex-col justify-between">
                            <div className="relative">
                                <img className="w-full h-48 sm:h-56 object-cover rounded-lg" src="/gifs/hobby2.gif"
                                     alt="Binge Watching"/>
                                <div className="absolute inset-0 flex justify-center items-center text-center">
                    <span
                        className="text-white font-bold text-xl inline-block rounded-lg hover:border-[#344E41] hover:bg-white hover:text-[#344E41] px-2 py-1 transition-all duration-300">
                        Binge Watching
                    </span>
                                </div>
                                <div
                                    className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Credits to: @Netflix
                                </div>
                            </div>
                        </div>

                        {/* GIF 3: Sleeping */}
                        <div
                            className="group bg-white shadow-lg rounded-lg p-4 hover:shadow-xl hover:translate-y-[-0.5rem] transition-all duration-300 ease-in-out flex flex-col justify-between">
                            <div className="relative">
                                <img className="w-full h-48 sm:h-56 object-cover rounded-lg" src="/gifs/hobby3.gif"
                                     alt="Sleeping"/>
                                <div className="absolute inset-0 flex justify-center items-center text-center">
                    <span
                        className="text-white font-bold text-xl inline-block rounded-lg hover:border-[#344E41] hover:bg-white hover:text-[#344E41] px-2 py-1 transition-all duration-300">
                        Sleeping
                    </span>
                                </div>
                                <div
                                    className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Credits to: @PoggyWoggyClips
                                </div>
                            </div>
                        </div>

                        {/* GIF 4: Writing */}
                        <div
                            className="group bg-white shadow-lg rounded-lg p-4 hover:shadow-xl hover:translate-y-[-0.5rem] transition-all duration-300 ease-in-out flex flex-col justify-between">
                            <div className="relative">
                                <img className="w-full h-48 sm:h-56 object-cover rounded-lg" src="/gifs/hobby4.gif"
                                     alt="Writing"/>
                                <div className="absolute inset-0 flex justify-center items-center text-center">
                    <span
                        className="text-white font-bold text-xl inline-block rounded-lg hover:border-[#344E41] hover:bg-white hover:text-[#344E41] px-2 py-1 transition-all duration-300">
                        Writing
                    </span>
                                </div>
                                <div
                                    className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Credits to: @PeakTiktokMemes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-1 w-full flex flex-col sm:flex-row justify-center items-center pb-24">
                    <div className="flex flex-col items-start mt-4 sm:mt-0 sm:ml-8 order-1 sm:order-none">
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[#FFF]">my</h1>
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[#FFF]">favorite</h1>
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[#FFF]">songs</h1>
                    </div>

                    <div
                        className="flex flex-col items-start text-left space-y-4 w-full sm:w-1/2 order-2 sm:order-none sm:ml-8">
                        <div
                            className="bg-[#DAD7CD] rounded-t-[30px] rounded-b-[30px] shadow-lg w-full relative z-20 mt-20">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                                <div
                                    className="flex flex-col items-start mt-20 space-y-6 sm:space-x-6 mb-16 bg-[#DAD7CD] p-8 rounded-lg shadow-lg w-full">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={songs[currentIndex].image}
                                            alt="Song Cover"
                                            className="w-52 sm:w-72 h-52 sm:h-72 object-cover shadow-md rounded-lg"
                                        />
                                    </div>

                                    <div className="flex-1 sm:text-left mt-6 sm:mt-0">
                                        <p className="text-[#3A5A40] font-extralight text-sm sm:text-sm">Song</p>
                                        <p className="text-[#344E41] text-lg sm:text-xl lg:text-4xl font-bold mt-2">{songs[currentIndex].title}</p>
                                        <p className="text-[#344E41] text-sm sm:text-base font-normal mt-1">by {songs[currentIndex].artist}</p>
                                        <p className="text-[#344E41] text-xl sm:text-2xl font-semibold mt-4">{songs[currentIndex].quote}</p>
                                        <p className="text-[#3A5A40] font-extralight mt-4 text-sm sm:text-sm">LISTEN
                                            NOW</p>
                                        <div className="mt-3 flex space-x-3">
                                            <a href={songs[currentIndex].spotify} target="_blank"
                                               rel="noopener noreferrer">
                                                <img
                                                    src="/images/spotify-icon.png"
                                                    alt="Spotify"
                                                    className="w-10 h-10"
                                                />
                                            </a>
                                            <a href={songs[currentIndex].youtube} target="_blank"
                                               rel="noopener noreferrer">
                                                <img
                                                    src="/images/youtube-music-icon.png"
                                                    alt="YouTube Music"
                                                    className="w-10 h-10"
                                                />
                                            </a>
                                            <a href={songs[currentIndex].apple} target="_blank"
                                               rel="noopener noreferrer">
                                                <img
                                                    src="/images/apple-music-icon.png"
                                                    alt="Apple Music"
                                                    className="w-10 h-10"
                                                />
                                            </a>

                                        </div>
                                    </div>
                                </div>

                                <div className="flex space-x-4 justify-between">
                                    <button
                                        onClick={prevSong}
                                        className="bg-[#DAD7CD] text-[#344E41] px-4 py-2 rounded-md shadow-md hover:bg-[#3A5A40] hover:text-[#DAD7CD] transition-all duration-300"
                                    >
                                        Prev
                                    </button>
                                    <button
                                        onClick={nextSong}
                                        className="bg-[#DAD7CD] text-[#344E41] px-4 py-2 rounded-md shadow-md hover:bg-[#3A5A40] hover:text-[#DAD7CD] transition-all duration-300"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>

            <Footer/>
        </>
    );
}
