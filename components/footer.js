import { Caveat } from 'next/font/google'
import Link from 'next/link';

const caveat = Caveat({ subsets: ['latin'] })

const Footer = () => {
    return(
        <div className="bg-[#111013] text-white pt-16 text-center">
            <div className={`${caveat.className} text-7xl`}>Nam Truong</div>
            <div className='text-sm text-neutral-400 mt-8'>Software Engineer</div>
            <div className='text-sm text-neutral-400'>Based in Dallas, Texas</div>
            <div className='flex justify-center font-light space-x-3 > * + * text-sm mt-8'>
                <Link href="https://www.linkedin.com/in/namtruongcs/" target="_blank" rel="noreferrer">LINKEDIN</Link>
                <p className='text-neutral-400'>/</p>
                <Link href="https://github.com/nam-t24" target="_blank" rel="noreferrer">GITHUB</Link>
                <p className='text-neutral-400'>/</p>
                <Link href="mailto:namtruong831@gmail.com" target="_blank" rel="noopener noreferrer">EMAIL</Link>


            </div>
            <div className="lg:w-1/2 w-3/5 border-t-[1px] border-neutral-400 mx-auto text-center p-2 mt-16">© 2022 Nam Truong</div>
        </div>
    );
}

export default Footer;