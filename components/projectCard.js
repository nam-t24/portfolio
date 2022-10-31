import Image from "next/image";


const ProjectCard = (props) => {
    const imageStyle={
        width: '100%',
        height: 'auto'
    }
    
    return (
        <a href={props.path} target="_blank" rel="noreferrer">
            <div className="project bg-[#FCFBFF] flex flex-col rounded-lg overflow-hidden w-80 min-h-[25rem] lg:my-4 my-2 lg:mx-6 mx-2 projectCardShadow text-black">
                <Image src={props.pic} alt="ProjectPic" style={imageStyle} priority={true}></Image>
                <div className="p-3">
                    <h1 className="text-2xl my-3 font-bold">{props.title}</h1>
                    <div className="text-xl font-light">{props.description}</div>
                </div>
            </div>

        </a>
    );

}

export default ProjectCard;