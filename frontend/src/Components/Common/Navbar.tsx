import { useAuth, SignedIn, SignInButton, UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const { isSignedIn } = useAuth()
    const NavItems = {
        Docs: '/docs',
        About: '/about',
        Features: '/features',
        Community: '/community',
    }
    return (
        <div className='bg-[#0B0B0C] h-15 w-screen border-b-1 border-[#1F2937] flex items-center px-4 justify-between'>

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

            <div className='flex gap-5 text-gray-600'>
                {Object.entries(NavItems).map(([key, value]) => (
                    <Link key={key} to={value}>
                        <p className='hover:text-white duration-200'>{key}</p>
                    </Link>
                ))}


            </div>

            <div className=''>
                {!isSignedIn && <SignInButton />}
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar