import Image from "next/image";
//icons
import CPP from '../public/assets/icons/c++.svg';
import Java from '../public/assets/icons/java.png';
import Ruby from '../public/assets/icons/ruby.png';
import JS from '../public/assets/icons/javascript.png';
import TS from '../public/assets/icons/typescript.png';
import HTML from '../public/assets/icons/html.png';
import CSS from '../public/assets/icons/css.png';
import SQL from '../public/assets/icons/sql.png';
import react from '../public/assets/icons/react.png';
import NextJS from '../public/assets/icons/NextJs.png';
import Rails from '../public/assets/icons/rails.png';
import Git from '../public/assets/icons/git.png';
import VSCode from '../public/assets/icons/vscode.png';
import Terminal from '../public/assets/icons/terminal.png';
import Firebase from '../public/assets/icons/firebase.png';
import Python from '../public/assets/icons/python.png'
import Terraform from '../public/assets/icons/terraform.png'
import AWS from '../public/assets/icons/aws.png'

const About = () =>{
    return(
        <div className="bg-[#FCFBFF] py-12 2xl:px-56 xl:px-44 lg:px-32 md:px-16 px-8">
            <h1 id="about" className="text-7xl font-semibold text-center md:mb-12 mb-8 md:pt-12 pt-4 text-neutral-800">Howdy</h1>
            <div className="2xl:w-4/5 min-[1900px]:w-3/5 2xl:mx-auto mx-auto relative md:mt-20 mt-12">
                <div className="z-10 mx-auto bg-[#F5F2FD] lg:py-16 md:py-10 py-6 md:px-24 px-8 rounded-xl">
                    <h1 className="2xl:text-5xl md:text-4xl text-3xl font-semibold xl:mb-6 mb-3 md:text-center text-left text-neutral-800">About Me</h1>
                    <p className="font-light xl:text-xl sm:text-lg text-base text-slate-800">
                        My name is Nam Truong and I am a fourth year student at the University of Texas
                        at Dallas studying computer science and finance. I created this site to not only
                        highlight my work and accomplishments but to exhibit my
                        growth within computer science.
                        <br />
                        <br />
                        Currently, I am involved in the{" "}
                        <a href="https://www.acmutd.co/index.html" className="underline" target="-blank">
                        Association for Computing Machinery
                        </a>
                        , having participated in its{" "}
                        <a href="https://www.acmutd.co/projects" className="underline" target="-blank">
                        projects
                        </a>{" "}
                        division, and now part of the{" "}
                        <a href="https://www.hackutd.co/" className="underline" target="-blank">
                        HackUTD
                        </a>{" "}
                        division. After participating in my first hackathon, I became a
                        technical officer for HackUTD to help organize and enrich the experience
                        of the many new students who decide to partake in HackUTD in the future.
                    </p>
                </div>
                <div className="flex lg:flex-row flex-col w-full mt-3 gap-3">
                    <div className="relative lg:order-last order-first basis-2/5 bg-[#F5F2FD] rounded-xl md:py-10 py-6 md:px-12 px-8">
                        {/* Content */}
                        <h1 className="2xl:text-5xl lg:text-4xl text-3xl font-semibold xl:mb-6 mb-3 text-neutral-800">Interests</h1>
                        <div className="font-light xl:text-xl sm:text-lg text-basee text-slate-800">
                            When I&#39;m not busy, I enjoy weight training, playing guitar and volleyball,
                            hiking, and creating latte art. I also really love matcha now :)
                            <br/>
                            Some music genres I like to listen to are folk and a little bit of country.
                        </div>
                    </div>
                    <div className="lg:order-first order-last basis-3/5 bg-[#F5F2FD] rounded-xl md:py-10 py-6 md:px-12 px-8">
                        {/* Content */}
                        <h1 className="2xl:text-5xl lg:text-4xl text-3xl font-semibold xl:mb-6 mb-3 text-neutral-800">Hiking Bucket List</h1>
                        <ul className="list-disc list-inside font-light xl:text-xl sm:text-lg text-base lg:pr-2 text-slate-800">
                            <li className=''>The Narrows - Zion Nat. Park, Utah</li>
                            <li className=''>Angel&#39;s Landing - Zion Nat. Park, Utah</li>
                            <li className=''>Devil&#39;s Garden - Arches Nat. Park, Utah</li>
                            <li className=''>Navajo Loop - Bryce Canyon Nat. Park, Utah</li>
                            <li className=''>Grinnell Glacier - Glacier Nat. Park, Montana</li>
                            <li className=''>Sky Pond - Rocky Mt. Nat. Park, Colorado</li>
                            <li className=''>High Dune - Great Sand Dunes Nat. Park, Colorado</li>
                            <li className=''>Garfield Peak - Crater Lake Nat. Park, Oregon</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-[1px] border-violet-500 group hover:border-purple-400 transition ease-in-out duration-300 2xl:mt-36 xl:mt-30 md:mt-20 sm:mt-16 mt-10 rounded-2xl sm:p-16 p-12 2xl:w-4/5 min-[1900px]:w-3/5 2xl:mx-auto">
                <h1 className="md:text-5xl text-4xl font-semibold mb-10 text-center text-neutral-800 group-hover:text-purple-500 transition ease-in-out duration-500">Technologies</h1>
                <div className="flex flex-row flex-wrap justify-around">
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={Python} alt="Python" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={Java} alt="Java" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={JS} alt="Javascript" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={TS} alt="Typescript" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={CPP} alt="c++priority={true} " fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={Ruby} alt="Ruby" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={HTML} alt="HTML" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={CSS} alt="CSS" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={react} alt="react" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-20 sm:w-16 w-12 lg:h-16 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={NextJS} alt="NextJS" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-20 sm:w-16 w-12 lg:h-16 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={Rails} alt="RubyOnRails" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={Firebase} alt="Firebase" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={SQL} alt="SQL" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={Terraform} alt="Terraform" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={AWS} alt="AWS" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={Git} alt="Git" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={VSCode} alt="VSCode" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                    <div className="relative lg:w-14 sm:w-12 w-10 lg:h-14 sm:h-12 h-10 lg:mx-8 sm:mx-6 mx-4 sm:my-6 my-4"><Image src={Terminal} alt="Terminal" priority={true} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/></div>
                </div>
            </div>
        </div>
    );
}

export default About