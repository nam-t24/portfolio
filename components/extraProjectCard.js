const ExtraProjectCard = (props) => {
    return(
        <div className="border-t-4 border-l-[1px] border-b-[1px] border-r-[1px] border-gray-300 border-t-[#7F62CF] lg:w-[24rem] w-[20rem] lg:h-[20rem] h-[18rem] lg:my-6 md:my-4 my-2 lg:mr-8 mr-2">
            <div className="h-1/4 bg-[#1B1525] flex items-center text-2xl font-bold px-4 text-[#7F62CF]">
                {props.title}
            </div>
            <div className="h-1/2 p-4 font-light text-gray-200 lg:text-base text-sm">
                {props.description}

            </div>
            <a href={props.link} target="_blank" rel="noreferrer" className="h-1/4 text-gray-200 border-t-[1px] border-gray-300 flex justify-between items-center px-4 hover:bg-[#7F62CF]">
                <div>View project code</div>
                <i className="fa-solid fa-arrow-right"></i>

            </a>
        </div>
    );

}

export default ExtraProjectCard;