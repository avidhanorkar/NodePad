
interface CardProp {
  svg: React.ReactElement,
  title: string,
  desc: string,
}

const Card: React.FC<CardProp> = ({ svg, title, desc }) => {
  return (
    <div className='h-50 w-[25vw] bg-[#1a1a1a] rounded-lg flex flex-col p-8 gap-3 hover:scale-101 shadow-none hover:shadow-2xl shadow-[#0D0F16] transition-all duration-300'>
      {svg}

      <div>
        <p className='text-white text-2xl font-semibold'>{title}</p>
        <p className='text-gray-400'>{desc}</p>
      </div>
    </div>
  )
}

export default Card