import { Button } from '@/Components/ui/button'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='h-screen w-screen text-white flex flex-col justify-center items-center'>
            <p className='text-5xl'>Page Not Found</p>
            <Link to={'/'}>
                <Button className='bg-[#135BEB] rounded-md px-3 py-2 hover:bg[#0B0B0C]'>
                    Return Home
                </Button>
            </Link>
        </div>
    )
}

export default NotFound