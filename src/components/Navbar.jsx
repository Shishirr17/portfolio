import React, { useState } from "react";
import {BsTwitterX } from "react-icons/bs";
import { FaGithub} from "react-icons/fa";
import { SiGmail, SiLinkedin } from "react-icons/si";


const Navbar = () => {

    return (
        <div className="flex items-center w-full h-20 text-white fixed backdrop-blur-sm">
            <div>
                <h1 className="text-3xl font-bold ml-5">Shishir<text className=" text-cyan-300">.dev</text></h1>
            </div> 
            <div className="hidden md:flex space-x-4 ml-auto mr-20 gap-3">
                <a href="https://twitter.com/Shishirr17" target="_blank" className="" ><BsTwitterX size={20}/></a>
                <a href="https://github.com/Shishirr17"  target="_blank" className="" ><FaGithub size={20}/></a>
                <a href="mailto:shishirsrivastava506@gmail.com" target="_blank" className="" ><SiGmail size={20}/></a>
                <a href="www.linkedin.com/in/shishir64" target="_blank" className="" ><SiLinkedin size={20}/></a>
            </div>
        </div>
    );
};

export default Navbar;