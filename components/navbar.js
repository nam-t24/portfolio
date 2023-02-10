import Logo from '../public/assets/N_white.png'
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    return(
        <div className="h-[5rem] flex items-center py-3 lg:px-20 md:px-16 sm:px-8 px-4 text-white justify-between z-50 relative">
            <Link href="/">
                <Image src={Logo} alt="Logo" width={40} height="auto" priority={true}></Image>
            </Link>
            {/* Links */}
            <section className='2xl:text-3xl md:text-2xl sm:text-xl text-base md:font-medium font-light flex items-center xl:space-x-12 > * + * md:space-x-8 > * + * space-x-4 > * + *'>
                <a href='#about'>
                    <p className='navbarHover'>about</p>
                </a>
                <a href='#projects'>
                    <p className='navbarHover'>projects</p>
                </a>
                <Link href="/resume">
                    <div className='md:py-1 md:px-3 px-2 rounded-lg resumeButton'>
                        resume
                    </div>
                </Link>
            </section>


        </div>
    );

}

export default Navbar;