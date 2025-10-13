import Card from "./Card"
import { Github, Code, Users, Play, Bot } from "lucide-react";
const Features = () => {

const featureData = [
  {
    svg: <Github color="white" size={32} />,
    title: "Open Source",
    desc: "Nodepad is an open source project. Contribute on GitHub."
  },
  {
    svg: <Code color="white" size={32} />,
    title: "Multi-Language Support",
    desc: "Supports wide range of programming languages like CPP, Java to JS."
  },
  {
    svg: <Bot color="white" size={64} />,
    title: "AI Powered Code Suggestions",
    desc: "Get Intelligent code suggestions and explanation powered by AI."
  },
  {
    svg: <Users color="white" size={32} />,
    title: "Real Time Collaboration",
    desc: "Work together with your team in real-time, see changes real time."
  },
  {
    svg: <Play color="white" size={32} />,
    title: "Instant Code Execution",
    desc: "Run your code directly in the browser without any setup."
  }
];

  return (
    <div className='h-full bg-[#0B0B0B] py-20'>
      <p className='text-white text-4xl text-center'>Features </p>
      <p className='text-gray-400 text-center'>Everything you need to code, collaborate and create in one unified workspace.</p>

      <div className='flex w-screen flex-wrap gap-10 justify-center mt-25'>
        {featureData.map((feat, index) => {
          return <Card {...feat} key={index} />
        })}
      </div>
    </div>
  )
}

export default Features