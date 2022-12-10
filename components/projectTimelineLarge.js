import Link from "next/link";
import Image from "next/image";
import Logo from '../public/assets/N_white.png'
import ExtraProjectCard from "../components/extraProjectCard";
import { useEffect, useState } from "react";

const ProjectTimelineLarge = () => {
    const [year, setYear] = useState("2022");

    useEffect(()=>{
        let blueSquare = document.getElementById("blueSquare");
        if(blueSquare === undefined){
            return;
        }
        let blueDegree = 0
        const rotateBlue = setInterval(() => {
            blueSquare.style.transform = `rotate(${blueDegree}deg)`;

            if(blueDegree < -15){
                blueSquare.style.transform = "rotate(-15deg)";
                clearInterval(rotateBlue);
            }

            blueDegree -= 0.25;
        }, 15)

        let purpleSquare = document.getElementById("purpleSquare");
        if(purpleSquare === undefined){
            return;
        }
        let purpleDegree = 0
        const rotatePurple = setInterval(() => {
            purpleSquare.style.transform = `rotate(${purpleDegree}deg)`;

            if(purpleDegree > 15){
                purpleSquare.style.transform = "rotate(15deg)";
                clearInterval(rotatePurple);
            }

            purpleDegree += 0.25;
        }, 15)

    }, [])

    const changeYear = (newYear) => {
        let currMenu = document.getElementById(year);
        let currContent = document.getElementById(`${year}content`);
        let newMenu = document.getElementById(newYear);
        let newContent = document.getElementById(`${newYear}content`);

        if(currMenu === undefined || currContent === undefined || newMenu === undefined || newContent === undefined){
            return;
        }

        // Menu
        currMenu.style.borderBottomWidth = "0px";
        // Content
        currContent.style.display = "none"
        currContent.style.opacity = 0;
        
        
        // Menu
        newMenu.style.borderBottomWidth = "2px";
        // Content
        newContent.style.display = "flex"
        setYear(newYear);
        
        let currOpacity=0
        const fadeIn = setInterval(() => {
            newContent.style.opacity = currOpacity;
            
            if (currOpacity > 1){
                newContent.style.opacity = 1;
                clearInterval(fadeIn);
            }
            currOpacity+=0.05
            
        }, 35)
    }


    return(
        <>
        {/* Big Screen (md+)*/}
        <div className="min-h-screen bg-[#242424] px-4 relative overflow-hidden md:flex md:flex-col hidden justify-between">
            <div className="lg:px-20 md:px-8 relative z-10">
                {/* Header */}
                <div className="h-[5rem] flex items-center py-3 relative z-10">
                    <Link href="/">
                        <Image src={Logo} alt="Logo" width={40} height="auto"></Image>
                    </Link>
                </div>
                {/* Year Menu */}
                <div className="flex text-white my-8 text-3xl border-white">
                    <div id="2022" className="mr-20 border-b-2 w-[7rem] cursor-pointer" onClick = {()=>{changeYear("2022")}}>2022</div>
                     <div id="2021"className="mr-20 w-[7rem] cursor-pointer" onClick = {()=>{changeYear("2021")}}>2021</div>
                      <div id ="2020" className="w-[7rem] cursor-pointer" onClick = {()=>{changeYear("2020")}}>2020</div>
                </div>

                {/* 2022 Projects */}
                <div id="2022content" className="flex flex-wrap text-white">
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
                </div>

                {/* 2021 Projects */}
                <div id="2021content" className="hidden flex-wrap text-white opacity-0">
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
                </div>

                {/* 2020 Projects */}
                <div id="2020content" className="hidden flex-wrap text-white opacity-0">
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
                </div>
            </div>

            {/* Abstract Shapes */}
            <div id="blueSquare" className="md:w-[32rem] md:h-[32rem] w-[25rem] h-[25rem] absolute top-36 -left-24 bg-[#1DA9FF] rounded-xl z-0 opacity-[0.7]"></div>
            {/* <div className="md:w-[25rem] md:h-[25rem] w-[15rem] h-[15rem] absolute top-[40%] right-24 rotate-[12deg] bg-[#7F62CF] rounded-xl z-0 opacity-[0.9]"></div> */}
            {/* <div className="2xl:hidden md:w-[20rem] md:h-[20rem] w-[12rem] h-[12rem] absolute top-[70%] left-[20%] rotate-[35deg] bg-[#1DA9FF] rounded-xl z-0 opacity-[0.6]"></div> */}
            <div id="purpleSquare" className="2xl:w-[20rem] 2xl:h-[20rem] w-[15rem] h-[15rem] absolute bottom-20 2xl:right-36 right-20 bg-[#7F62CF] rounded-xl z-0 opacity-[1] rotate-[15deg]"></div>
            
            {/* Footer */}
            <div className=" text-white w-full relative z-10 mt-16">
                <div className=" border-t-[1px] border-gray-200 mx-auto text-center p-2 lg:w-1/2 w-3/4">© 2022 Nam Truong</div>
            </div>


        </div>
        </>
    );
}

export default ProjectTimelineLarge;