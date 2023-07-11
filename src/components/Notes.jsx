import { FaAngleDown } from "react-icons/fa";
const Notes = () => {
    return (
        <div className="p-2 mt-5 min-h-[70vh]">
            <h1 className='w-full border flex justify-between items-center px-2 mb-5'>
                <p> Create note</p>
                <button className="btn btn-circle btn-outline text-2xl text-white m-2">
                    +
                </button>
            </h1>
            <details className="dropdown mb-32">
                <summary className="m-1 btn rounded-none">All Lectures <FaAngleDown className="inline"/></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
            <details className="dropdown mb-32">
                <summary className="m-1 btn rounded-none">Sort by most recent <FaAngleDown className="inline"/></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
        </div>
    );
};

export default Notes;