import React from "react";
import Carrent from '../assets/portfolio/Carrent.png'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const portfolios = [
        {
            id: 1,
            src: Carrent,
        },
        {
            id: 2,
            src: Carrent,
        },
        {
            id: 3,
            src: Carrent,
        },
        {
            id: 4,
            src: Carrent,
        },
        {
            id: 5,
            src: Carrent,
        },
        {
            id: 6,
            src: Carrent,
        },
    ];

    return (
        <div
            name="projects"
            className=" flex w-full text-white md:h-full"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500  ">My Recent<text className=" text-cyan-300"> Works</text>
                    </p>
                    <p className="py-6">Here are a few projects i've worked on recently.</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <p className="text-center font-bold mt-2">Car Renting Website</p>
                            <p className=" font-light *:mt-1 text-center px-3 mt-2">Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.</p>
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md">
                                    Demo
                                    <FaExternalLinkAlt className="inline-block ml-2  " size={18} />
                                </button>

                                <button className="w-1/2 px-6 py-3 m-4  duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md">
                                    Code
                                    < FaGithub className='inline-block ml-2' size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;