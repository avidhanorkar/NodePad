import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'

const Hero = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-7xl text-white font-bold'>
                    <span className='bg-linear-to-r from-cyan-500 to-[#135BEB] bg-clip-text text-transparent'>Think. Code.</span><br />
                    Collaborate.
                </h1>
                <p className='text-gray-400 font-sans text-lg'>
                    Welcome to <span className='text-white font-semibold '>NodePad</span>— a cloud based collaborative
                    in browser IDE <br /> with real time coding, AI assistance,
                    and seamless deployment.
                </p>
            </div>

            <div className='flex flex-row items-center gap-8'>
                <Button className='font-bold text-lg cursor-pointer bg-linear-to-r from-cyan-500 to-[#135BEB] shadow-none hover:shadow-md hover:scale-101 shadow-[#135beb] rounded-md text-white px-10 py-2'>
                    Get Started
                </Button>
                <Link to={`https://github.com/avidhanorkar/NodePad`}>
                    <Button className='font-bold text-lg cursor-pointer border border-gray-500 rounded-md text-white px-10 py-2 shadow-none hover:shadow-md hover:scale-101 shadow-[#135beb]'>
                        <Github />
                        Source Code
                    </Button>
                </Link>
            </div>


        </div>
    )
}

export default Hero