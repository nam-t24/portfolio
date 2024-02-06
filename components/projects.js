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
        <div className="bg-[#FBF9FF] relative lg:pb-44 md:pb-40 sm:pb-32 pb-28 2xl:pt-16 lg:pt-10">
            {/* Featured Projects Section */}
            <div className="2xl:py-16 py-12 lg:px-4 px-12">
                <div id="projects"className="mx-auto lg:w-4/5 flex lg:flex-row flex-col">
                    {/* Title */}
                    <div className="lg:w-1/3 lg:my-0 my-4">
                        <div className="lg:sticky lg:top-8 lg:pb-48">
                            <h1 className="  md:text-7xl text-6xl font-semibold lg:text-left text-center 2xl:ml-28 lg:ml-6 text-black">Projects</h1>
                            <div className=" lg:text-left text-center 2xl:ml-28 lg:ml-6 my-2 2xl:text-2xl text-xl text-gray-700 font-medium">A small collection of featured <p className="text-[#7855FF] inline">side-projects</p></div>
                        </div>
                    </div>
                    {/* Projects */}
                    <div className="lg:w-2/3 flex flex-wrap justify-around">
                        <ProjectCard
                            path="https://github.com/acmutd/hackportal"
                            pic={HackPortal}
                            title="HackPortal"
                            description="Hackathon event management platform aimed at assisting hackathon organizers nationwide"
                        />
                        <ProjectCard
                            path="https://github.com/acmutd/hackutd-x-site"
                            pic={HackUTDX}
                            title="HackUTD X"
                            description="HackUTD X event site for Fall HackUTD 2023"
                        />
                        <ProjectCard
                            path="https://github.com/raghavpillai/SimpliFarm"
                            pic={SimpliFarm}
                            title="SimpliFarm - HackTX"
                            description="Machine learning application to determine optimal water and fertilization usage for farmers"
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
                            description="HackUTD IX event site for Fall HackUTD 2022"
                        />
                        <ProjectCard
                            path="https://github.com/acm-projects/CookAlong"
                            pic={CookAlong}
                            title="CookAlong"
                            description="Digital sous chef web application for ACM Projects Fall 2020. First place project winner"
                        />
                    </div>

                </div>

            </div>

            {/* Extra Projects Section */}
            <div className="bg-[#1C1B20] 2xl:w-3/5 lg:w-3/5 md:w-4/5 w-11/12 mx-auto rounded-xl md:mt-24 mt-16 relative z-10 sm:py-12 py-6 md:px-4 px-2">
                <div className="text-white text-center sm:text-4xl text-2xl font-semibold  relative z-10">
                    <p className='inline'>
                        Check out the rest of my&nbsp;
                    </p>
                    <p className='projectsSub pb-2 inline'>
                        projects
                    </p>
                </div>
                <div className="text-white text-center sm:text-2xl text-lg font-medium mt-4  relative z-10">
                    View the timeline&nbsp;
                    <Link href="/projectTimeline"><div className="inline hover:underline text-[#7855FF]">here</div></Link>
                </div>
                <div className="z-0 border-2 border-[#1C1B20] absolute w-full h-full top-0 left-0 rounded-xl rotate-[4deg]"></div>
            </div>

        </div>
    );
}

export default Projects;