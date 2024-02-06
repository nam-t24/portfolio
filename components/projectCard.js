import Image from "next/image";

const ProjectCard = (props) => {
    return (
        <a href={props.path} target="_blank" rel="noreferrer">
            <div className="project bg-[#FDFDFF] flex flex-col rounded-lg overflow-hidden w-80 h-[20rem] lg:my-4 my-2 lg:mx-6 mx-2 projectCardShadow">
                
                {/* Image Container */}
                <div className="w-full h-[10rem] relative">
                <Image src={props.pic} alt="ProjectPic" fill priority={true}></Image>
                </div>
                <div className="px-3 py-4">
                    <h1 className="text-lg font-semibold text-neutral-800">{props.title}</h1>
                    <div className="text-slate-700 mt-2">{props.description}</div>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;