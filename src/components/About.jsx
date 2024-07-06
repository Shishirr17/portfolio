import React from "react";
import about from '../assets/about.png'

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen  text-white"
        >
            <div className=" max-w-screen-lg p-4 mx-auto w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                        Know Who <text className=" text-cyan-300">I'm</text>
                    </p>
                </div>
                <div className="flex-col  justify-center ">
                    <img src={about} className="w-4/3  float-left " />


                    <p className="text-xl absolute-right py-20 ">
                        Hi Everyone, I am <b>Shishir Srivastava</b> from <b> Lucknow,India.</b><br /><br />
                        I am a 3rd year undergraduate at BBD University,Lucknow .My field of Interest's are building new Web Products and learning new technologies. I am a tech geek and always learn and explore things related to Technology and Softwares.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;