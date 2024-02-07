import { Caveat } from 'next/font/google'
import Link from 'next/link';

const caveat = Caveat({ subsets: ['latin'] })

const Footer = () => {
    return(
        <div className="bg-[#1C1B20] text-white sm:pt-16 pt-10 text-center">
            <div className={`${caveat.className} text-7xl`}>Nam Truong</div>
            <div className='text-sm text-neutral-400 md:mt-8 mt-6'>Software Engineer</div>
            <div className='text-sm text-neutral-400'>Based in Dallas, Texas</div>
            <div className='flex justify-center font-light space-x-3 > * + * text-sm mt-8 tracking-wider'>
                <Link href="https://www.linkedin.com/in/namtruongcs/" target="_blank" rel="noreferrer" className='hover:underline'>LINKEDIN</Link>
                <p className='text-neutral-400'>/</p>
                <Link href="https://github.com/nam-t24" target="_blank" rel="noreferrer" className='hover:underline'>GITHUB</Link>
                <p className='text-neutral-400'>/</p>
                <Link href="mailto:namtruong831@gmail.com" target="_blank" rel="noopener noreferrer" className='hover:underline'>EMAIL</Link>


            </div>
            <div className="lg:w-1/2 w-3/5 border-t-[1px] border-neutral-400 mx-auto text-center p-2 mt-16">Made with ♡ by Nam</div>
        </div>
    );
}

export default Footer;