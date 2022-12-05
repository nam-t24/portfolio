import Link from "next/link";
import Image from "next/image";
import Logo from '../public/assets/N_white.png'
import ExtraProjectCard from "../components/extraProjectCard";
import SmallSection from "../components/projectTimelineSmall"
import LargeSection from "../components/projectTimelineLarge"

const ProjectTimeline = () => {
    return(
        <>
        <LargeSection/>
        <SmallSection/>
        </>
    );
}

export default ProjectTimeline;