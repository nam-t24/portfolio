"use client";
import SmallSection from "../../components/projectTimelineSmall"
import LargeSection from "../../components/projectTimelineLarge"
import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('../../components/projectTimelineLarge'), {
  ssr: false,
})

export const metadata = {
  title: 'Nam Truong | Projects',
  description: 'A timeline of software engineering projects created by Nam Truong',
}

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