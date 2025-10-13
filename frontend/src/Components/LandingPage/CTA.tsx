import { Book, Rocket } from "lucide-react"
import { Button } from "../ui/button"

const CTA = () => {
    return (
        <div className='h-[60vh] w-screen bg-linear-to-r from-[#101622] to-[#171222] flex items-center justify-center flex-col gap-8'>
            <div className="flex flex-col gap-3">
                <p className="text-5xl font-bold text-white text-center font-sans">Ready to Transform<br />Your Devlopment Flow</p>
                <p className="text-gray-400 font-sans font-semibold">Join Thousands of developers who are already buidling the future with NodePad.</p>
            </div>

            <div className="flex gap-8">
                <Button className="bg-linear-to-r from-cyan-500 to-[#135BEB] border-1 border-[#4B5563] hover:bg-inherit hover:scale-101 hover:shadow-[#010101] shadow-nonoe hover:shadow-lg duration-300 transition-all text-lg font-semibold"><Rocket stroke="white" />Start Building Now</Button>
                <Button className="bg-inherit border-1 border-[#4B5563] hover:bg-inherit hover:scale-101 hover:shadow-[#010101] shadow-nonoe hover:shadow-lg duration-300 transition-all text-lg"><Book strokeWidth={3}/>View Documentation</Button>
            </div>
        </div>
    )
}

export default CTA