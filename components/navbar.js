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
                <a href='#about'>about</a>
                <a href='#projects'>projects</a>
                <Link href="/resume">
                    <div className='py-1 px-3 rounded-lg bg-[#8054fc] hover:bg-[#6944D0]'>
                        resume
                    </div>
                </Link>
            </section>


        </div>
    );

}

export default Navbar;