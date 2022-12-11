import ProjectCard from "./projectCard";
import Link from "next/link";
//project images
import CookAlong from '../public/assets/projectImages/CookAlong.png'
import Blink from '../public/assets/projectImages/blink.png';
import HackUTDVIII from '../public/assets/projectImages/hackutdVIII.png';
import HackUTDVII from '../public/assets/projectImages/hackutdVII.png';
import HackPortal from '../public/assets/projectImages/HackPortal.png';
import HackUTDIX from '../public/assets/projectImages/hackutdIX.png';
import SimpliFarm from '../public/assets/projectImages/SimpliFarm.png';
import Spinboard from '../public/assets/projectImages/Spinboard.png';

const Projects = () => {
    return(
        <>
            {/* Featured Projects Section */}
            <div className="bg-[#FCFBFF] py-12 lg:px-4 px-12">
                <div id="projects"className="mx-auto lg:w-4/5 flex lg:flex-row flex-col">
                    {/* Title */}
                    <div className="lg:w-1/3 lg:my-0 my-4 ">
                        <h1 className=" lg:sticky lg:top-8 md:text-7xl text-6xl font-semibold sm:text-left text-center 2xl:ml-28 lg:ml-6 text-black">Projects</h1>
                        <div className="lg:sticky lg:top-28 sm:text-left text-center 2xl:ml-28 lg:ml-6 my-2 2xl:text-2xl text-xl text-gray-700 font-medium">A small collection of featured <p className="text-[#7855FF] inline">side-projects</p></div>
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
                            path="https://github.com/acmutd/hackportal-hackutd"
                            pic={HackUTDVIII}
                            title="HackUTD VIII"
                            description="Developed HackUTD VIII event site with a team of HackUTD technical officers for Fall HackUTD 2021"
                        />
                        <ProjectCard
                            path="https://github.com/acmutd/hackutd-vii-site"
                            pic={HackUTDVII}
                            title="HackUTD VII"
                            description="Developed HackUTD VII event site with a team of HackUTD technical officers for Spring HackUTD 2021"
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
            <div className="bg-[#1C1B20]">
                <div className="text-white text-center lg:text-5xl md:text-4xl text-3xl font-semibold pt-12">
                    <p className='inline'>
                        Check out the rest of my&nbsp;
                    </p>
                    <p className='projectsSub pb-2 inline'>
                        projects
                    </p>
                </div>
                {/* TODO: Make gradient */}
                <div className="text-white text-center md:text-2xl text-xl font-medium mt-4 pb-12">
                    View the timeline&nbsp;
                    <Link href="/projectTimeline"><div className="inline hover:underline text-[#7855FF]">here</div></Link>
                </div>
                <div className="text-white text-base lg:w-1/2 w-3/4 border-t-[1px] border-gray-200 mx-auto text-center p-2">© 2022 Nam Truong</div>

            </div>
        </>
    );
}

export default Projects;