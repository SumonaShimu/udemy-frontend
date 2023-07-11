const Search = () => {
    return (
        <div className='min-h-[50vh] w-full flex justify-center items-center'>
            <div className="form-control min-h-max m-5">
                <div className="input-group w-full">
                    <input type="text" placeholder="Search…" className="w-full input input-bordered" />
                    <button className="btn btn-square bg-dark text-green">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>

                <h1 className='text-3xl font-semibold mt-5'>Start a new search</h1>
                <p className='text-sm font-thin my-3'>To find captions, lectures or resources</p>
            </div>
        </div>
    );
};

export default Search;