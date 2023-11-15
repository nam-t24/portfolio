import SmallSection from "../../components/projectTimelineSmall"
import LargeSection from "../../components/projectTimelineLarge"
import dynamic from 'next/dynamic'
import Head from 'next/head'

const DynamicHeader = dynamic(() => import('../../components/projectTimelineLarge'), {
  ssr: false,
})

const ProjectTimeline = () => {
    return(
        <>
        <Head>
          <title>Nam Truong | Projects</title>
          <meta name="description" content="A timeline of software engineering projects created by Nam Truong" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" property="og:description" content="A timeline of software engineering projects created by Nam Truong" />
        </Head>
        {/* md+ */}
        <LargeSection/>
        {/* sm- */}
        <SmallSection/>
        </>
    );
}

export default ProjectTimeline;