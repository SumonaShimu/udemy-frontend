import { Link } from "react-router-dom";
import { BsMenuDown, BsTelephone, BsThreeDotsVertical } from "react-icons/bs";
import { TbProgress } from "react-icons/tb";
import { FaAngleDown, FaShare } from "react-icons/fa6";
const NavBar = () => {

    const navOptions = <>
        
    </>
    return (
        <>
            <div className="navbar hidden md:flex text-black bg-dark border-b-2 shadow-sm text-sm text-white">
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