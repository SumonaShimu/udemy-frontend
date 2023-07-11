import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import Accordion from './Accordion';
import Overview from './Overview';
import Notes from './Notes';
import Announcements from './Announcements';
import Reviews from './Reviews';
import Tools from './Tools';
const Tab = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="w-[80%] mx-auto mt-10">
            <div className="flex border-b">
                <button
                    className={`px-4 py-2 focus:outline-none ${activeTab === 1 ? 'active-tab' : 'text-green/50'
                        }`}
                    onClick={() => handleTabClick(1)}
                >
                    <BsSearch/>
                </button>
                <button
                    className={`px-4 py-2 focus:outline-none ${activeTab === 2 ? 'active-tab' : 'text-green/50'
                        }`}
                    onClick={() => handleTabClick(2)}
                >
                    Cource content
                </button>
                <button
                    className={`px-4 py-2 focus:outline-none ${activeTab === 3 ? 'active-tab' : 'text-green/50'
                        }`}
                    onClick={() => handleTabClick(3)}
                >
                    Overview
                </button>
                <button
                    className={`px-4 py-2 focus:outline-none ${activeTab === 4 ? 'active-tab' : 'text-green/50'
                        }`}
                    onClick={() => handleTabClick(4)}
                >
                    Notes
                </button>
                <button
                    className={`px-4 py-2 focus:outline-none ${activeTab === 5 ? 'active-tab' : 'text-green/50'
                        }`}
                    onClick={() => handleTabClick(5)}
                >
                    Announcements
                </button>
                <button
                    className={`px-4 py-2 focus:outline-none ${activeTab === 6 ? 'active-tab' : 'text-green/50'
                        }`}
                    onClick={() => handleTabClick(6)}
                >
                    Reviews
                </button>
                <button
                    className={`px-4 py-2 focus:outline-none ${activeTab === 7 ? 'active-tab' : 'text-green/50'
                        }`}
                    onClick={() => handleTabClick(7)}
                >
                    Learning Tools
                </button>
            </div>

            <div className="p-4">
                {activeTab === 1 && <p>Content for Option 1</p>}
                {activeTab === 2 && <Accordion/>}
                {activeTab === 3 && <Overview/>}
                {activeTab === 4 && <Notes/>}
                {activeTab === 5 && <Announcements/>}
                {activeTab === 6 && <Reviews/>}
                {activeTab === 7 && <Tools/>}
            </div>
        </div>
    );
};

export default Tab;
