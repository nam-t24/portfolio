import { useState } from "react";
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
    const [option, setOption] = useState("0")

    const changeOption = (id) => {
        document.getElementById(option).style.fontWeight = 400;
        document.getElementById(option).style.color = "#000000"
        document.getElementById(`content${option}`).style.display = "none";



        document.getElementById(id).style.fontWeight = 600;
        document.getElementById(id).style.color = "#7855FF"
        document.getElementById(`content${id}`).style.display = (id === "0" ? "block" : "flex");


        setOption(id)
    }
    return(
        <div className="bg-[#FCFBFF] py-12 text-black">
            <h1 id="about" className="text-7xl font-semibold text-center md:mb-12 mb-8 md:pt-12 pt-8">Howdy</h1>
            <div className="2xl:w-1/2 lg:w-3/5 w-11/12 min-h-[35rem] bg-[#FCFBFF] mx-auto aboutBox rounded-xl sm:p-8 p-6 flex flex-col">
                {/* Menu Items */}
                <div className="flex md:flex-row flex-col lg:w-4/5 w-11/12 mx-auto justify-between items-center xl:text-3xl sm:text-2xl text-xl select-none">
                    <div id="0" className="font-semibold text-[#7855FF] cursor-pointer" onClick={()=>{changeOption("0")}}>About Me</div>
                    <div id="1" className=" cursor-pointer" onClick={()=>{changeOption("1")}}>Technologies</div>
                    <div id="2" className=" cursor-pointer" onClick={()=>{changeOption("2")}}>Hiking Bucket List</div>
                </div>

                {/* About box */}
                <div id="content0"className="md:py-12 py-8 lg:px-16 md:px-8 2xl:text-2xl lg:text-lg text-base text-gray-700 font-light">
                    My name is Nam Truong and I am a third year student from the University of Texas
                    at Dallas studying computer science. I created this site to not only
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
                    <br />
                    <br />
                    When I&#39;m not coding or learning, I enjoy weight training, playing guitar and volleyball,
                    hiking, and creating latte art :)
                </div>
                {/* Technologies box */}
                <div id="content1" className="hidden md:py-12 py-8 lg:px-16 md:px-8 w-full flex flex-row flex-wrap justify-around">
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
                {/* Hiking Trails Box */}
                <div id="content2" className="hidden md:py-12 py-8 lg:px-16 md:px-8 flex flex-col grow justify-between">
                    <div className="2xl:text-2xl lg:text-lg text-base text-gray-700 font-light">
                        <ul className='list-disc list-inside'>
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
                    <div className="flex justify-center">
                        <Image src="/assets/RockIllustration.png" alt="rock" width={150} height={150}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About