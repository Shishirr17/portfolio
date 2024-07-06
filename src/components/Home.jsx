import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl  sm:text-7xl font-bold text-white">
                        I'm a Full Stack <text className="bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text">Developer</text>
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I have experience of  building and desgining Web Applications.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Node Js and Next Js.
                    </p>

                    <div>
                        <a href="./src/assets/Shishir's Resume.pdf" download={true} className="group text-white w-fit px-6 py-3 my-2 flex items-center 
                        rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Resume
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </a>
                    </div>
                </div>

                <div>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-full w-3/4 md:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;