import Code from "@/Components/LandingPage/Code"
import Hero from "@/Components/LandingPage/Hero"
import Features from "@/Components/LandingPage/Features"
import CTA from "@/Components/LandingPage/CTA"
const LandingPage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen" >
            <div className="flex flex-col flex-grow items-center justify-center py-20 w-full h-full gap-10 bg-[#0D0F16]">
                <p className='text-center text-gray-600'>Welcome to <span className="text-gray-400">Nodepad</span></p>
                <div className="flex flex-row gap-10 h-3/4 w-full items-center justify-center">
                    <div className="w-2/5 flex justify-center flex-col" >
                        <Hero />
                    </div>
                    <div className="w-2/5 flex justify-center">
                        <Code />
                    </div>
                </div>
                <div className='flex flex-row gap-10'>
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
            <Features />
            <CTA />
        </div>
    )
}

export default LandingPage