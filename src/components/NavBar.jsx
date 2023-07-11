
import {BsThreeDotsVertical } from "react-icons/bs";
import { TbProgress } from "react-icons/tb";
import { FaAngleDown, FaShare } from "react-icons/fa6";
const NavBar = () => {

    const navOptions = <>
        
    </>
    return (
        <>
            <div className="navbar md:flex bg-dark/80 border-b text-sm text-white backdrop-blur-xl shadow-xl 
            fixed top-0 left-0 right-0 z-10">
                <div className="navbar-start flex gap-2">

                    <a className="normal-case"><img src="logo.png" className="w-32" /></a>
                    {navOptions}

                   
                </div>
                <div className="navbar-center flex justify-center items-center">

                Python Coding Projects Build a Web App Directory Discovery


                </div>
                <div className="navbar-end flex gap-3">
                    <a href="#" className=""><TbProgress className="inline text-slate-700 text-4xl"/>Your progress <FaAngleDown className="inline"/></a>
                    <a href="#" className="btn btn-outline text-white">Share <FaShare/></a>
                    <a href="#" className="btn btn-outline text-white"><BsThreeDotsVertical/></a>
                </div>
            </div>
        </>
    );
};

export default NavBar;