import { useState } from 'react';
import { MdOndemandVideo } from "react-icons/md";
const Accordion = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };

    return (
        <div className="w-full p-2 min-h-[70vh]">
            <div className="border rounded-md">
                <div className="border-b bg-sky/10">
                    <button
                        className="w-full flex items-center justify-between px-4 py-3 focus:outline-none"
                        onClick={toggleAccordion1}
                    >
                        <h1 className="text-lg">Section 1: Learn Python from scrach
                            <span className='text-xs font-thin block'>0/20 | 1hour 19min</span>
                        </h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className={`h-6 w-6 transform ${isOpen1 ? 'rotate-180' : 'rotate-0'}`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                {isOpen1 && (
                    <div className="px-4 py-3">
                        <div className="overflow-hidden">
                            <table className="table">

                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className="font-bold">Install pyhon</div>
                                                    <div className="text-sm opacity-50"><MdOndemandVideo className='inline' /> 4 min</div>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className="font-bold">Data type</div>
                                                    <div className="text-sm opacity-50"><MdOndemandVideo className='inline' /> 3 min</div>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                    {/* row 3*/}
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className="font-bold">Numbers</div>
                                                    <div className="text-sm opacity-50"><MdOndemandVideo className='inline' /> 4 min</div>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>

                                </tbody>

                            </table>
                        </div>
                    </div>
                )}
            </div>

            <div className="border rounded-md mt-4">
                <div className="border-b bg-sky/10">
                    <button
                        className="text-left w-full flex items-center justify-between px-4 py-3 focus:outline-none"
                        onClick={toggleAccordion2}
                    >
                        <h1 className="text-lg">Section 2: Python project
                            <span className='text-xs font-thin block'>0/20 | 1hour 19min</span>
                        </h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className={`h-6 w-6 transform ${isOpen2 ? 'rotate-180' : 'rotate-0'}`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                {isOpen2 && (
                    <div className="px-4 py-3">
                        <div className="overflow-hidden">
                            <table className="table">

                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className="font-bold">Class 1</div>
                                                    <div className="text-sm opacity-50"><MdOndemandVideo className='inline' /> 4 min</div>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className="font-bold">Class 2</div>
                                                    <div className="text-sm opacity-50"><MdOndemandVideo className='inline' /> 3 min</div>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                    {/* row 3*/}
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <div className="font-bold">Numbers</div>
                                                    <div className="text-sm opacity-50"><MdOndemandVideo className='inline' /> 4 min</div>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>

                                </tbody>

                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
