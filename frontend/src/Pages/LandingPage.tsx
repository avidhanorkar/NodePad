import Code from "@/Components/LandingPage/Code"
import Hero from "@/Components/LandingPage/Hero"
import Features from "@/Components/LandingPage/Features"

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center mt-30 min-h-screen gap-30 mx-20">
            <div className="flex items-center justify-center h-full ">
                <div className="w-1/2 flex items-center justify-center flex-col" >
                    <Hero />
                </div>
                <div className="w-1/2 flex justify-center">
                    <Code />
                </div>
            </div>
            <Features />
        </div>
    )
}

export default LandingPage