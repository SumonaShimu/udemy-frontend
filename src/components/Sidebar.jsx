
import Accordion from "./Accordion";
import { AiOutlineMenuFold } from "react-icons/ai";
import Tab from "./Tab";
import Video from "./Video";
const Sidebar = () => {

    return (
        <div className="drawer drawer-end ">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-dark/50 w-full">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button absolute right-0 top-0 inline-flex items-center justify-center 
                p-4 px-10 py-3 m-2 me-0 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border 
                shadow-md group ">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-green 
                    duration-300 -translate-x-full bg-dark/50 group-hover:translate-x-0 ease">
                        Show Details
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all 
                    duration-300 transform group-hover:translate-x-full ease">
                        <AiOutlineMenuFold className="text-3xl text-white inline" /></span>
                    <span className="relative invisible"><AiOutlineMenuFold className="text-3xl text-white inline" /></span>

                </label>


                <Video />
                <Tab />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-dark text-green">
                    {/* Sidebar content here */}
                    <Accordion />
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;