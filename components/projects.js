import ProjectCard from "./projectCard";
import Link from "next/link";
//project images
import CookAlong from '../public/assets/projectImages/CookAlong.jpg'
import Blink from '../public/assets/projectImages/blink.jpg';
import HackPortal from '../public/assets/projectImages/HackPortal.jpg';
import HackUTDIX from '../public/assets/projectImages/hackutdIX.jpg';
import SimpliFarm from '../public/assets/projectImages/SimpliFarm.jpg';
import Spinboard from '../public/assets/projectImages/Spinboard.jpg';
import HackUTDX from '../public/assets/projectImages/hackutdX.jpg'

const Projects = () => {
    return(
        <div className="bg-[#FCFBFF] relative lg:pb-44 md:pb-40 sm:pb-32 pb-28">
            {/* Featured Projects Section */}
            <div className=" py-12 lg:px-4 px-12 ">
                <div id="projects"className="mx-auto lg:w-4/5 flex lg:flex-row flex-col">
                    {/* Title */}
                    <div className="lg:w-1/3 lg:my-0 my-4">
                        <div className="lg:sticky lg:top-8 lg:pb-48">
                            <h1 className="  md:text-7xl text-6xl font-semibold sm:text-left text-center 2xl:ml-28 lg:ml-6 text-black">Projects</h1>
                            <div className=" sm:text-left text-center 2xl:ml-28 lg:ml-6 my-2 2xl:text-2xl text-xl text-gray-700 font-medium">A small collection of featured <p className="text-[#7855FF] inline">side-projects</p></div>
                        </div>
                    </div>
                    {/* Projects */}
                    <div className="lg:w-2/3 flex flex-wrap justify-around">
                        <ProjectCard
                            path="https://github.com/acmutd/hackportal"
                            pic={HackPortal}
                            title="HackPortal"
                            description="Hackathon event management platform aimed at assisting hackathon organizers and hackers nationwide"
                        />
                        <ProjectCard
                            path="https://github.com/acmutd/hackutd-x-site"
                            pic={HackUTDX}
                            title="HackUTD X"
                            description="Developed HackUTD X event site with a team of HackUTD technical officers for Fall HackUTD 2023"
                        />
                        <ProjectCard
                            path="https://github.com/raghavpillai/SimpliFarm"
                            pic={SimpliFarm}
                            title="SimpliFarm - HackTX"
                            description="Constructed a machine learning application to determine optimal water and fertilization usage for farmers"
                        />
                        <ProjectCard
                            path="https://github.com/"
                            pic={Spinboard}
                            title="Spinboard"
                            description="Classroom monitoring app for neurodivergent students engineered at JP Morgan's Code for Good hackathon"
                        />
                        <ProjectCard
                            path="https://github.com/acmutd/hackutd-ix-site"
                            pic={HackUTDIX}
                            title="HackUTD IX"
                            description="Developed HackUTD IX event site with a team of HackUTD technical officers for Fall HackUTD 2022"
                        />
                        <ProjectCard
                            path="https://github.com/acm-projects/CookAlong"
                            pic={CookAlong}
                            title="CookAlong"
                            description="Digital sous chef web application for ACM Projects Fall 2020. First place project winner"
                        />
                        <ProjectCard
                            path="https://github.com/zzeneric/Blink"
                            pic={Blink}
                            title="Blink"
                            description="Real-time video conference platform that mimics an engaging classroom environment using integrated activities for HackDFW 2021"
                        />
                    </div>

                </div>

            </div>

            {/* Extra Projects Section */}
            <div className="bg-[#1C1B20] 2xl:w-3/5 lg:w-4/5 w-11/12 mx-auto rounded-xl lg:mt-44 md:mt-40 sm:mt-32 mt-28 relative z-10">
                <div className="text-white text-center lg:text-5xl md:text-4xl text-3xl font-semibold lg:pt-16 sm:pt-12 pt-6 relative z-10">
                    <p className='inline'>
                        Check out the rest of my&nbsp;
                    </p>
                    <p className='projectsSub pb-2 inline'>
                        projects
                    </p>
                </div>
                <div className="text-white text-center md:text-3xl text-xl font-medium mt-4 lg:pb-16 sm:pb-12 pb-6 relative z-10">
                    View the timeline&nbsp;
                    <Link href="/projectTimeline"><div className="inline hover:underline text-[#7855FF]">here</div></Link>
                </div>
                {/* <div className="text-white text-base lg:w-1/2 w-3/4 border-t-[1px] border-gray-200 mx-auto text-center p-2">© 2022 Nam Truong</div> */}
                <div className="z-0 border-2 border-[#1C1B20] absolute w-full h-full top-0 left-0 rounded-xl rotate-[4deg]"></div>
            </div>
            {/* Footer */}
            {/* <div className="text-base text-black lg:w-1/2 w-3/4 border-t-[1px] border-gray-500 mx-auto text-center p-2 z-10 relative">© 2022 Nam Truong</div>
            <div className="w-full h-36 absolute bottom-0 z-0 bg-gradient-to-t from-[#7855FF] opacity-20"></div> */}
        </div>
    );
}

export default Projects;