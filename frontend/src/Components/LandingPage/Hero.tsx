import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Hero = () => {
    return (
        <div className='flex flex-col gap-6'>
            <div>
                <h1 className='text-6xl text-white font-bold'>
                    <span className='bg-linear-to-r from-cyan-500 to-[#135BEB] bg-clip-text text-transparent'>Think. Code.</span><br />
                    Collaborate.
                </h1>
                <p className='text-gray-400 font-sans text-lg'>
                    Welcome to NodePad — a cloud based collaborative <br />
                    in browser IDE with real time coding, AI assistance, <br />
                    and seamless deployment.
                </p>
            </div>

            <div className='flex flex-row items-center gap-8'>
                <Button className='font-bold text-lg cursor-pointer bg-linear-to-r from-cyan-500 to-[#135BEB] shadow-none hover:shadow-md hover:scale-101 shadow-[#135beb] rounded-md text-white px-10 py-2'>
                    Get Started
                </Button>
                <Link to={`https://github.com/avidhanorkar/NodePad`}>
                    <Button className='font-bold text-lg cursor-pointer border border-gray-500 rounded-md text-white px-10 py-2'>
                        <img src="/images/Github.svg" className='h-5 w-5' />
                        Source Code
                    </Button>
                </Link>
            </div>

            <div className='flex flex-row gap-5'>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='h-2 w-2 bg-[#0AD6A1] rounded-full'></div>
                    <p className='text-gray-300'>Multiple Languages</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='h-2 w-2 bg-[#3C82F6] rounded-full'></div>
                    <p className='text-gray-300'>Real Time Collaboration</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='h-2 w-2 bg-[#8B5CF6] rounded-full'></div>
                    <p className='text-gray-300'>AI Powered</p>
                </div>
            </div>
        </div>
    )
}

export default Hero