
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
                        I have been involved in the{" "}
                        <a href="https://www.acmutd.co/index.html" className="underline" target="-blank">
                        Association for Computing Machinery
                        </a>
                        , having participated in its{" "}
                        <a href="https://www.acmutd.co/projects" className="underline" target="-blank">
                        projects
                        </a>{" "}
                        division and became a technical officer at{" "}
                        <a href="https://www.hackutd.co/" className="underline" target="-blank">
                        HackUTD.
                        </a>{" "}
                        During university summers, I taught computer science bootcamps and interned as a software engineer at State Farm and J.P. Morgan Chase & Co.

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
                            <br/>
                            My favorite movies include Fantastic Mr. Fox, Eternal Sunshine of a Spotless Mind, and Dune.
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
            <div className="md:flex text-slate-700 2xl:mt-36 xl:mt-30 md:mt-20 sm:mt-16 mt-10 2xl:w-4/5 min-[1900px]:w-3/5 2xl:mx-auto mx-auto 2xl:mb-16 md:mb-12 mb-8">
                <div className="text-neutral-800 2xl:text-5xl text-4xl font-semibold 2xl:w-[18rem] w-[15rem] md:mb-0 mb-4">Skills</div>
                <div className="flex">
                <div className="2xl:w-[20rem] md:w-[14rem] w-[10rem]">
                    <p className="text-neutral-800 2xl:text-2xl text-xl font-semibold mb-2">Languages</p>
                    <ul className="2xl:text-lg text-base">
                        <li>Java</li>
                        <li>Python</li>
                        <li>Typescript</li>
                        <li>Ruby</li>
                        <li>C++</li>
                        <li>HTML/CSS</li>
                        <li>SQL</li>
                        <li>Terraform</li>
                    </ul>
                </div>
                <div className="2xl:w-[20rem] md:w-[14rem] w-[10rem]">
                    <p className="text-neutral-800 2xl:text-2xl text-xl font-semibold mb-2">Tools</p>
                    <ul className="2xl:text-lg text-base">
                        <li>Git</li>
                        <li>AWS</li>
                        <li>Firebase</li>
                        <li>Supabase</li>
                    </ul>
                </div>
                <div className="2xl:w-[20rem] md:w-[14rem]">
                    <p className="text-neutral-800 2xl:text-2xl text-xl font-semibold mb-2">Frameworks</p>
                    <ul className="2xl:text-lg text-base">
                        <li>React</li>
                        <li>Next.JS</li>
                        <li>Spring Boot</li>
                        <li>Ruby on Rails</li>
                        <li>Tailwind</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
}

export default About