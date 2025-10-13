const Code = () => {
    return (
        <div className='w-fit h-fit bg-[#1A1A1A] flex flex-col p-7 rounded-lg shadow-2xl shadow-[#1D2343]'>

            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-4'>
                    <div className='bg-[#EF4444] h-3 w-3 rounded-full'></div>
                    <div className='bg-[#EBB305] h-3 w-3 rounded-full'></div>
                    <div className='bg-[#22C55D] h-3 w-3 rounded-full'></div>
                </div>
                <div>
                    <p className='text-gray-500'>3 Collaborators</p>
                </div>
            </div>

            <div className='mt-4 mr-40'>
                <p>app.py</p>
                <div className='mt-1'>
                    <p className='text-gray-500'># Real time Collaborative Demo</p>
                    <p><span className='text-green-500'>print</span>(<span className='text-yellow-500'>'Hello World!'</span>)</p>
                    <p><span className='text-green-500'>for</span> i <span className='text-green-500'>in</span> <span className='text-yellow-500'>range</span>(5):</p>
                    <p className='ml-5'><span className='text-green-500'>print</span>(i)</p>
                </div>
            </div>

            <div className='mt-4 flex justify-end items-center gap-2'>
                <img src='/images/Ai.svg' className="p-[0.1px] bg-gray-400 rounded-md"/>
                <p className='text-gray-400'>AI Suggestions</p>
            </div>
        </div>
    )
}

export default Code