import { BsAlarm } from "react-icons/bs";
const Overview = () => {
    return (
        <div className="min-h-[70vh]">
            <div className="flex gap-4 border p-2">
                <BsAlarm className="text-4xl font-semibold" />
                <div className="">
                    <h1 className="text-xl font-semibold">Schedule learning time</h1>
                    <p className="text-sm font-thin max-w-3xl my-5">Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
                    <button className="btn bg-green me-4 rounded-none">Get started</button>
                    <button className="btn btn-ghost">Dismiss</button>
                </div>
            </div>
            <div className="my-5 border-b">
                <h1 className="text-xl font-semibold">About this course</h1>
                <p className="text-sm font-thin max-w-3xl my-5">Learning a little each day adds up. </p>
            </div>
            <div className="my-5 border-b">
            <div className="flex justify-between p-2 max-w-4xl">
                <div>
                    By the numbers
                </div>
                <div className="">
                    Skill level: All Levels<br/>
                    Students: 3477<br/>
                    Languages: English<br/>
                    Captions: Yes<br/>
                </div>
                <div>
                    Lectures: 22<br/>
                    Video: 1.5 total hours
                </div>
            </div>
            </div>
        </div>

    );
};

export default Overview;