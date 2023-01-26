const AboutSection = () => {
    return (
        <>
        <div className=" w-full mx-auto flex relative mt-36">
            <div className="w-4/5 z-10">
                <h1 className="text-4xl font-semibold mb-6">About</h1>
                <p className="font-light text-xl">
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
                </p>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[35rem] h-[130%] bg-[#F5F2FD] z-0 rounded-2xl"></div>
        </div>
        <div className="w-full mx-auto flex relative mt-36 bg-blue-200">
            <h1 className="text-4xl font-semibold mb-6">Interests</h1>
            
        </div>
        </>
    );
}

export default AboutSection;