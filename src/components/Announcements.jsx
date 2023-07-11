import { FaFlag, FaNapster } from "react-icons/fa";

const Announcements = () => {
    return (
        <div className='w-full min-h-[70vh] text-white'>
            <div className='flex text-gray-100 items-center gap-2'>
                <FaNapster className="text-4xl text-green bg-dark rounded-full" />
                <p><span className="text-green underline">MMZ</span>
                    <span className="text-white text-xs block">posted an announcement · 11 days ago · <FaFlag className="inline" /></span>
                </p>
            </div>
            <div className="mt-5">

                <h1 className="font-semibold text-xl">Ultimate Jenkins Guide with Interview Preparation</h1>
                Hello every one<br/><br/>
                <p className="font-semibold italic">100% Free</p><br/><br/>

                now our Paid course <span className="font-semibold text-blue ">Ultimate Jenkins Guide with Interview Preparation</span>   is fully Free and Available on our YouTube Channel

                <br/><br/>

                check this Playlist we will upload daily three videos and will be available fully for free on our YouTube

                Ultimate Jenkins Guide with Interview Preparation

                <br/><br/>

                as our motto is Knowledge should be available for every one
                <br/>
                Happy Learning ^^ <br/><br/>
               
                <input type="text" placeholder="give your comment" className="border w-3/4 h-32 p-2 bg-transparent"/>
                <button className="block btn border rounded-none mt-2">Send</button>
              
            </div>
        </div>
    );
};

export default Announcements;