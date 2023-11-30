"use client";
import SmallSection from "../../components/projectTimelineSmall"
import LargeSection from "../../components/projectTimelineLarge"
import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('../../components/projectTimelineLarge'), {
  ssr: false,
})

const ProjectTimeline = () => {
    return(
        <>
        {/* md+ */}
        <LargeSection/>
        {/* sm- */}
        <SmallSection/>
        </>
    );
}

export default ProjectTimeline;