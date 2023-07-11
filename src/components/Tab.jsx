import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
const Tab = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="w-fullmt-10 p-2">
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
                {activeTab === 2 && <p>Content for Option 2</p>}
                {activeTab === 3 && <p>Content for Option 3</p>}
                {activeTab === 4 && <p>Content for Option 4</p>}
                {activeTab === 5 && <p>Content for Option 5</p>}
                {activeTab === 6 && <p>Content for Option 6</p>}
                {activeTab === 7 && <p>Content for Option 7</p>}
            </div>
        </div>
    );
};

export default Tab;
