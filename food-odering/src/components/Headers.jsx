 import {Link} from 'react-router-dom'
 import Logo from '../Assets/foody.png'
export const Header =()=>{
    return (
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                  
                   <Link to="/" className='toggleColor text-white no-underline hover:text-pink-600 font-bold text-2xl lg:text-4xl'>
                        <img src={Logo} alt="Logo" className='w-40 h-40 object-cover' />
                   </Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">

                    <Link to='/' className='text-2xl hover:text-pink-600 '>Home </Link>
                    <Link to='#about' className='text-2xl hover:text-pink-600 '>About</Link>
                </div>
                <div className="flex items-center justify-around space-x-7">
                    <Link to='cart' className='text-2xl hover:text-pink-600 '>Cart</Link>
                    <Link to='login' className='text-2xl hover:text-pink-600 '>Log in</Link>
                    <Link to='register' className='text-2xl hover:text-pink-600 '>Sign Up</Link>
                </div>

            </div>
        </nav>
    )
}