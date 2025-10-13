import { Github, TwitterIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className='bg-[#0B0B0C] h-[40vh] border-t-1 border-[#1F2937] px-20 py-10 flex flex-col gap-5'>
            <div className='flex flex-row justify-around'>
                <div className='flex flex-col gap-4 w-3/10'>
                    <div>
                        <Link to={'/'}>
                            <div className='flex gap-2 cursor-pointer items-center'>
                                <img
                                    src="https://ik.imagekit.io/wcttbt3fqz/NodePad/Logo.png?updatedAt=1760183122326"
                                    className='w-5 h-5'
                                    alt="NodePad Logo"
                                />
                                <h1 className='text-white text-2xl font-bold '>NodePad</h1>
                            </div>
                        </Link>

                        <p className='text-gray-400 text-wrap'>The collabroative Platform for modern developers and creators.</p>
                    </div>

                </div>

                <div className='flex flex-col gap-4 w-1/5'>
                    <p>Products</p>

                    <div className='flex flex-col gap-2 text-gray-500'>
                        <p className='cursor-pointer'>Features</p>
                        <p className='cursor-pointer'>Pricing</p>
                        <p className='cursor-pointer'>Changelog</p>
                        <p className='cursor-pointer'>Roadmap</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-1/5'>
                    <p>Resources</p>

                    <div className='flex flex-col gap-2 text-gray-500'>
                        <p className='cursor-pointer'>Documentation</p>
                        <p className='cursor-pointer'>API Reference</p>
                        <p className='cursor-pointer'>Community</p>
                        <p className='cursor-pointer'>Support</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-1/5'>
                    <p>Company</p>

                    <div className='flex flex-col gap-2 text-gray-500'>
                        <p className='cursor-pointer'>About</p>
                        <p className='cursor-pointer'>Blog</p>
                        <p className='cursor-pointer'>Careers</p>
                        <p className='cursor-pointer'>Contact</p>
                    </div>
                </div>
            </div>

            <hr className='border-gray-500' />

            <div className='flex flex-row justify-between'>
                <p className='text-gray-400'>@ {year} NodePad. All Rights Reserved.</p>

                <div>
                    <Link to={`https://www.github.com/avidhanorkar/NodePad`}><Github stroke={"#98A1AE"} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer