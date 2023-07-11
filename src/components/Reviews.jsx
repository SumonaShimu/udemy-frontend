import { FaAngleDown, FaRegStar, FaStar, FaStarHalf, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Reviews = () => {
    return (
        <div className="min-h-[70vh] ">
            <h1 className="text-3xl font-semibold my-3">Student feedback</h1>
            {/* course rating */}
            <div className='w-full flex gap-2'>

                <div>
                    <h1 className="text-7xl font-bold text-green">3.7</h1>
                    <div className="flex gap-1 mx-auto my-3">
                        <FaStar className="text-gold" />
                        <FaStar className="text-gold" />
                        <FaStar className="text-gold" />
                        <FaStarHalfAlt className="text-gold" />
                        <FaRegStar className="text-gold" />
                    </div>
                    <h1>Course Rating</h1>
                </div>
                <div className="flex flex-col gap-y-1 w-full">
                    <div className="flex items-center gap-2">
                        <progress className="progress progress-accent w-3/4 bg-slate-500/50" value={35} max="100"></progress>
                        <div className="flex gap-1">
                            <FaStar className="text-gold" />
                            <FaStar className="text-gold" />
                            <FaStar className="text-gold" />
                            <FaStar className="text-gold" />
                            <FaStar className="text-gold" />
                        </div>
                        <span className="inline">35%</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <progress className="progress progress-accent w-3/4 bg-slate-500/50" value={18} max="100"></progress>
                        <div className="flex gap-1">
                            <FaStar className="text-gold" />
                            <FaStar className="text-gold" />
                            <FaStar className="text-gold" />
                            <FaStar className="text-gold" />
                            <FaRegStar className="text-gold" />
                        </div>
                        <span className="inline">18%</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <progress className="progress progress-accent w-3/4 bg-slate-500/50" value={6} max="100"></progress>
                        <div className="flex gap-1">
                            <FaStar className="text-gold" />
                            <FaStar className="text-gold" />
                            <FaStar className="text-gold" />
                            <FaRegStar className="text-gold" />
                            <FaRegStar className="text-gold" />
                        </div>
                        <span className="inline">6%</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <progress className="progress progress-accent w-3/4 bg-slate-500/50" value={12} max="100"></progress>
                        <div className="flex gap-1">
                            <FaStar className="text-gold" />
                            <FaStar className="text-gold" />
                            <FaRegStar className="text-gold" />
                            <FaRegStar className="text-gold" />
                            <FaRegStar className="text-gold" />

                        </div>
                        <span className="inline">12%</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <progress className="progress progress-accent w-3/4 bg-slate-500/50" value={29} max="100"></progress>
                        <div className="flex gap-1">
                            <FaStar className="text-gold" />
                            <FaRegStar className="text-gold" />
                            <FaRegStar className="text-gold" />
                            <FaRegStar className="text-gold" />
                            <FaRegStar className="text-gold" />
                        </div>
                        <span className="inline">29%</span>
                    </div>

                </div>
            </div>
            {/* rating  */}
            <h1 className="text-3xl font-semibold my-3">Ratings</h1>
            <div className="">
                <input type="text" placeholder="give your review" className="border w-1/2 p-2 bg-transparent" />
                <details className="dropdown ms-3">
                    <summary className="btn rounded-none">Give Rating<FaAngleDown className="inline" /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] w-52">
                        <li><a>5 Star</a></li>
                        <li><a>4 Star</a></li>
                        <li><a>3 Star</a></li>
                        <li><a>2 Star</a></li>
                        <li><a>1 Star</a></li>
                    </ul>
                </details>
            </div>
        </div>
    );
};

export default Reviews;