import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/assets/N_Black.png'
import ExtraProjectCard from "../../components/extraProjectCard";

const ProjectTimeline = () => {
    return(
      <>
        <div className="min-h-screen bg-[#D6DBDC] relative overflow-hidden">
            {/* Header */}
            <div className="h-[5rem] flex items-center py-3 2xl:px-32 lg:px-20 md:px-16 sm:px-8 px-4 relative z-10">
                <Link href="/">
                    <Image src={Logo} alt="Logo" width={40} height="auto"></Image>
                </Link>
            </div>
            {/* Projects */}
            <div className=" md:w-11/12 w-full mx-auto my-8 text-white relative z-10 px-4">
                <h1 className="text-3xl font-medium text-neutral-900 border-b-2 w-[15rem] border-neutral-900 mb-4">2022</h1>
                <section className="flex flex-wrap">
                    <ExtraProjectCard
                        title="HackPortal"
                        description = "A streamlined hackathon event management platform aimed at assisting hackathon organizers and hackers nationwide. Features hacker registration, log-in, qr code check-in, and hackathon information."
                        link = "https://github.com/acmutd/hackportal"
                    />
                    <ExtraProjectCard
                        title="Spinboard - JP Morgan"
                        description = "Classroom monitoring app for neurodivergent students engineered at JP Morgan's Code for Good hackathon."
                        link = "https://github.com/"
                    />
                    <ExtraProjectCard
                        title="SimpliFarm - HackTX"
                        description = "Machine learning application that calculates optimal water and fertilization usage for farmers. Utilizes Firebase and Weather & Google APIs to store user data and obtain data."
                        link = "https://github.com/raghavpillai/SimpliFarm/"
                    />
                    <ExtraProjectCard
                        title="HackUTD IX Website"
                        description = "Event website for the 9th iteration of HackUTD, utilizing parts of HackPortal. Reached 1000+ applicants."
                        link = "https://github.com/acmutd/hackutd-ix-site"
                    />
                    <ExtraProjectCard
                        title="HackUTD VIII Website"
                        description = "Event website for the 8th iteration of HackUTD, utilizing parts of HackPortal. Reached 800+ hackathon users and 1000+ applicants."
                        link = "https://github.com/acmutd/hackutd-viii-site"
                    />
                </section>
                <h1 className="text-3xl font-medium text-neutral-900 border-b-2 w-[15rem] border-neutral-900 my-4 md:mt-12">2021</h1>
                <section className="flex flex-wrap">
                    <ExtraProjectCard
                        title="Mind Reader Game - Comp Arch"
                        description = "Simple number guessing game built using MIPS for CS2340 Computer Architecture"
                        link = "https://github.com/nartmobile/MindReaderGame"
                    />
                    <ExtraProjectCard
                        title="Blink - HackDFW"
                        description = "Real-time video conference platform that mimics an in-person engaging classroom environment. Uses integrated activites such as instant teacher dm, quizzes, and question checkups."
                        link = "https://github.com/zzeneric/Blink"
                    />
                    <ExtraProjectCard
                        title="App Academy Projects"
                        description = "Projects done for AppAcademy Open, an online full-stack bootcamp. Contains projects using Ruby, Ruby on Rails, SQL, PostgreSQL, SQLite, and more."
                        link = "https://github.com/nam-t24/AppAcademy"
                    />
                    <ExtraProjectCard
                        title="Chess"
                        description = "Chess game built using Ruby. Features game saving through YAML, move assist, and cursor input through keyboard."
                        link = "https://github.com/nam-t24/Chess"
                    />
                    <ExtraProjectCard
                        title="Minesweeper"
                        description = "Minesweeper game built using Ruby. Features game saving through YAML."
                        link = "https://github.com/nam-t24/Minesweeper"
                    />
                    <ExtraProjectCard
                        title="Minos' Quest - TamuHack"
                        description = "Real-time multiplayer tile based labrynth game using Processing."
                        link = "https://github.com/KevinCai319/TAMUHacks2021"
                    />
                    <ExtraProjectCard
                        title="HackUTD VII Website"
                        description = "Event website for the 7th iteration of HackUTD. Used plain html, css, js."
                        link = "https://github.com/acmutd/hackutd-vii-site"
                    />
                </section>
                <h1 className="text-3xl font-medium text-neutral-900 border-b-2 w-[15rem] border-neutral-900 my-4 md:mt-12">2020</h1>
                <section className="flex flex-wrap">
                    <ExtraProjectCard
                        title="Typer"
                        description = "Site to test typing speed using quotes API generator to generate text. Features light and pastel theme options. Used plain html, css, js."
                        link = "https://github.com/nam-t24/Typer"
                    />
                    <ExtraProjectCard
                        title="CookAlong - ACM Projects"
                        description = "Digital sous chef web application that allows users to search for recipes and to be guided through desired recipe hands free using text-speech and speech-text functionalities. Won first place."
                        link = "https://github.com/acm-projects/CookAlong"
                    />
                    <ExtraProjectCard
                        title="First Personal Site"
                        description = "Very first site I've created. Purpose was to learn about web development and React."
                        link = "https://github.com/nam-t24/namtruong"
                    />
                    <ExtraProjectCard
                        title="Tobor's Treasure Troph"
                        description = "3D puzzle and adventure game created through Unity for HackUTD GameJam 2020."
                        link = "https://github.com/KendalUTD/GamerJamProject"
                    />

                </section>
            </div>

            {/* Footer */}
            <div className="text-neutral-900  w-full relative z-10">
                <div className=" border-t-[1px] border-neutral-900 mx-auto text-center p-2 lg:w-1/2 w-3/4">© 2022 Nam Truong</div>
            </div>
        </div>
        {/* Blurs */}
        {/* Top left */}
        <div className="fixed w-[23rem] h-[23rem] rounded-full -translate-y-[5rem] -translate-x-[5rem] md:left-[3rem] left-[1rem] md:top-[7rem] top-[2rem] bg-gradient-radial from-white blur-2xl opacity-90"></div>
        <div className="fixed w-[20rem] h-[20rem] rounded-full md:left-[3rem] left-[1rem] md:top-[7rem] top-[2rem] bg-gradient-radial from-[#2b7bcc] blur-2xl opacity-50"></div>
        {/* Bottom right */}
        <div className="fixed md:w-[37rem] w-[27rem] md:h-[37rem] h-[27rem] rounded-full right-[2rem] bottom-[2rem] translate-y-[30%] translate-x-[20%] bg-gradient-radial from-white blur-2xl opacity-90"></div>
        <div className="fixed md:w-[34rem] w-[25rem] md:h-[34rem] h-[25rem] rounded-full right-[2rem] bottom-[2rem] translate-y-[40%] translate-x-[40%] bg-gradient-radial from-[#A080F9] blur-2xl opacity-40"></div>
      
        {/* Middle */}
        <div className="md:block hidden fixed w-[25rem] h-[25rem] rounded-full xl:right-[20%] lg:right-[10%] -right-16 -top-[2rem] -translate-y-1/2 bg-gradient-radial from-[#FF90C2] blur-2xl opacity-40 "></div>
      </>
    );
}

export default ProjectTimeline;