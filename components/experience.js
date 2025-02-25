const Experience = () => {
    return (
      <div className="2xl:bg-[url('../public/assets/experienceBG_lg.svg')] lg:bg-[url('../public/assets/experienceBG.svg')] bg-[url('../public/assets/experienceBG_sm.svg')] bg-cover md:py-24 py-20 2xl:px-56 xl:px-44 lg:px-32 md:px-16 px-8 overflow-hidden relative">
        <h1 className="md:text-7xl text-6xl font-semibold md:mb-12 mb-8 relative z-10 2xl:w-3/5 2xl:mx-auto text-[#392686]">
          Experience
        </h1>
        {/* JP Morgan */}
        <section className="2xl:w-3/5 lg:w-11/12 w-full text-gray-700 2xl:text-2xl md:text-xl text-base relative z-10 2xl:mx-auto md:mb-12 mb-10">
          <div className="flex justify-between items-end">
            <h1 className="text-2xl font-bold text-[#392686]">JPMorganChase</h1>
            <p className="">Aug 2024 - Present</p>
          </div>
          <div className="my-2 sm:text-xl text-base 2xl:text-2xl">
            Software Engineer, Fullfillment and Archive Services
          </div>
          <ul className="list-disc list-outside font-light">
            <li>
              Working on document upload services and experience for the firm
            </li>
          </ul>
        </section>
        {/* JP Morgan */}
        <section className="2xl:w-3/5 lg:w-11/12 w-full text-gray-700 2xl:text-2xl md:text-xl text-base relative z-10 2xl:mx-auto md:mb-12 mb-10">
          <div className="flex justify-between items-end">
            <h1 className="text-2xl font-bold text-[#392686]">JPMorganChase</h1>
            <p className="">June 2023 - Aug 2023</p>
          </div>
          <div className="my-2 sm:text-xl text-base 2xl:text-2xl">
            Software Engineering Intern, Cyber Security & Tech Controls Team
          </div>
          <ul className="list-disc list-outside font-light">
            <li>
              Conceptualized and implemented an AWS Neptune graph database to
              store 1 million+ datapoints
            </li>
            <li>
              Created AWS Lambda functions to connect to Neptune database within
              the VPC
            </li>
            <li>
              Achieved 90%+ unit test code coverage using JUnit and Mockito
            </li>
          </ul>
        </section>
        {/* State Farm */}
        <section className="2xl:w-3/5 lg:w-11/12 w-full text-gray-700 2xl:text-2xl md:text-xl text-base relative z-10 2xl:mx-auto">
          <div className="flex justify-between items-end">
            <h1 className="text-2xl font-bold text-[#392686]">State Farm</h1>
            <p className="">May 2022 - Aug 2022</p>
          </div>
          <div className="my-2 sm:text-xl text-base 2xl:text-2xl">
            Software Engineering Intern, Research and Development Team
          </div>
          <ul className="list-disc list-outside font-light">
            <li>
              Designed and constructed an internal State Farm GitLab web scraper
              to extract repositories/issues pertaining to Research &
              Development
            </li>
            <li>
              Enhanced researching productivity of the Research & Development
              Team on new tools and software
            </li>
            <li>
              Deployed scraper process within AWS Lambda, SQS, and S3 and
              implemented AWS infrastructure using Terraform
            </li>
            <li>
              Improved efficiency of scraping 4000+ repositories by 80% by
              integrating the GitLab API and AWS SQS queues
            </li>
          </ul>
        </section>
      </div>
    );
}

export default Experience;