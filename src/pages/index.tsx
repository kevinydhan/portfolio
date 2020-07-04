import React from 'react'
import { TopNav, LandingSection, ProjectCard } from '../components'
import { useProjectDataQuery } from '../utils'
import '../styles/global.scss'
import sharedStyles from '../styles/modules/index.module.scss'

const IndexPage = (): JSX.Element => {
    const projects = useProjectDataQuery()

    return (
        <>
            <div
                className={`${sharedStyles.grid} ${sharedStyles.backgroundGrid}`}
            >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <TopNav />
            <main className={sharedStyles.grid}>
                <LandingSection />
                <section id="projects" className={sharedStyles.gridChild}>
                    <h2 className={sharedStyles.projectSectionHeading}>
                        Latest Works
                    </h2>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.imgDetails.originalName}
                            {...project}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}

export default IndexPage
