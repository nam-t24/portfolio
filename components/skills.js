const Skills = () => {
    return(
        <div className="bg-[#F5F2FD] px-8 2xl:py-24 sm:py-20 py-16 text-slate-700">
            <div className="text-center text-neutral-800 2xl:text-6xl text-5xl font-semibold 2xl:mb-16 sm:mb-12 mb-10">Skills</div>
            <div className="flex justify-center">
                <div className="flex flex-col items-start">
                    <div>
                    <p className="w-32 text-neutral-800 2xl:text-2xl text-xl font-semibold mb-2">Languages</p>
                    <ul className="2xl:text-lg text-base">
                        <li>Java</li>
                        <li>Python</li>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>Ruby</li>
                        <li>C++</li>
                        <li>HTML/CSS</li>
                        <li>SQL</li>
                        <li>Terraform</li>
                    </ul>
                    </div>
                </div>
                <div className="2xl:mx-36 lg:mx-28 sm:mx-16 mx-5 flex flex-col items-center relative">
                    <div className="2xl:px-36 lg:px-28 sm:px-16 px-6">
                    <p className="text-neutral-800 2xl:text-2xl text-xl font-semibold mb-2">Frameworks</p>
                    <ul className="2xl:text-lg text-base">
                        <li>React</li>
                        <li>Next.JS</li>
                        <li>Spring Boot</li>
                        <li>Ruby on Rails</li>
                        <li>Tailwind</li>
                    </ul>
                    </div>
                    <div className="w-full h-3/4 border-x-[1px] border-gray-400 absolute top-1/2 -translate-y-1/2"></div>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                    <p className="w-32 text-neutral-800 2xl:text-2xl text-xl font-semibold mb-2">Tools</p>
                    <ul className="2xl:text-lg text-base">
                        <li>Git</li>
                        <li>AWS</li>
                        <li>Firebase</li>
                        <li>Supabase</li>
                    </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Skills