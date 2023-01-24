const ExtraProjectCard = (props) => {
    return(
        <div className="extraProjectBackground rounded-lg lg:w-[24rem] w-[20rem] lg:h-[18rem] h-[16rem] lg:my-4 md:my-3 my-2 lg:mr-8 mr-2 lg:p-6 p-4 flex flex-col justify-between border-2 border-transparent hover:border-violet-500 extraProjectCard">
            <div>
                <h1 className="flex items-center text-2xl font-bold text-[#7F62CF]">
                    {props.title}
                </h1>
                <div className="text-gray-700 2xl:text-lg lg:text-base text-sm mt-4">
                    {props.description}

                </div>
            </div>
            <div className="">
                <a href={props.link} target="_blank" rel="noreferrer" className="text-2xl text-black">
                    <i className="fab fa-github projectIcon"></i>

                </a>
            </div>
        </div>
    );

}

export default ExtraProjectCard;