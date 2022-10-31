import Link from "next/link";
import Image from "next/image";
import Logo from '../public/assets/N_white.png'
import ExtraProjectCard from "../components/extraProjectCard";

const ProjectTimeline = () => {
    return(
        <>
        <div className="min-h-screen bg-[#111013] px-4 pb-16">
            {/* Header */}
            <div className="h-[5rem] flex items-center py-3 lg:px-20 md:px-16 sm:px-8 px-4">
                <Link href="/">
                    <Image src={Logo} alt="Logo" width={40} height="auto"></Image>
                </Link>
            </div>
            {/* Projects */}
            <div className=" md:w-11/12 w-full mx-auto my-8 text-white">
                <h1 className="text-2xl text-gray-300 border-b-2 w-[15rem] border-gray-300 mb-4">2022</h1>
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
                <h1 className="text-2xl text-gray-300 border-b-2 w-[15rem] border-gray-300 mb-4">2021</h1>
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
                <h1 className="text-2xl text-gray-300 border-b-2 w-[15rem] border-gray-300 mb-4">2020</h1>
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

        </div>
        {/* Footer */}
        <div className="bg-[#111013] text-white fixed bottom-0 left-1/2 w-full -translate-x-1/2">
            <div className=" border-t-[1px] border-gray-200 mx-auto text-center p-2 lg:w-1/2 w-3/4">© 2022 Nam Truong</div>
        </div>
        </>
    );
}

export default ProjectTimeline;