const Experience = () => {
    return (
        <div className="bg-[#E8E3FD] text-black py-32 2xl:px-56 xl:px-44 lg:px-32 md:px-16 px-6 overflow-hidden relative">
            <h1 className="text-7xl font-semibold md:mb-12 mb-8 relative z-10 2xl:w-1/2 2xl:mx-auto">Experience</h1>
            {/* State Farm */}
            <section className="2xl:w-1/2 lg:w-11/12 w-full text-gray-700 md:text-xl text-lg relative z-10 2xl:mx-auto">
                <div className="flex justify-between items-end">
                    <h1 className="text-2xl font-bold text-black">State Farm</h1>
                    <p className="">May 2022 - Aug 2022</p>
                </div>
                <div className="my-2 sm:text-xl text-lg">
                    Software Engineering Intern, Research and Development Team
                </div>
                <ul className='list-disc list-outside font-light'>
                    <li>
                        Designed and constructed an internal State Farm GitLab web scraper to extract repositories/issues pertaining to Research & Development
                    </li>
                    <li>
                        Enhanced researching productivity of the Research & Development Team on new tools and software
                    </li>
                    <li>
                        Deployed scraper process within AWS Lambda, SQS, and S3 and implemented AWS infrastructure using Terraform
                    </li>
                    <li>
                        Improved efficiency of scraping 4000+ repositories by 80% by integrating the GitLab API and AWS SQS queues
                    </li>
                </ul>
            </section>


            {/* Square */}
            <div className="absolute w-[20rem] h-[20rem] rounded-xl top-0 left-0 -translate-y-1/2 -translate-x-1/4 rotate-[30deg] bg-[#C6B8FF] lg:opacity-[0.25] opacity-[0.2] z-0"></div>
            <div className="absolute w-[15rem] h-[15rem] rounded-xl top-1/2 md:-translate-y-1/4 translate-y-1/4 right-12 -rotate-[20deg]  bg-[#C6B8FF] lg:opacity-[0.25] opacity-[0.2] z-0"></div>
        </div>
    );
}

export default Experience;