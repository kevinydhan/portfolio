import React from 'react'
import {
    Head,
    Layout,
    ProjectCard,
    Footer,
    BackgroundCurves,
} from '../components'
import { useProjectDataQuery } from '../utils'
import styles from '../theme/pages/projects.module.scss'

const ProjectsPage = (): JSX.Element => {
    const projects = useProjectDataQuery()

    return (
        <>
            <Head title="Projects | Kevin Han" />

            <Layout additionalClassNames={styles.main}>
                <BackgroundCurves />
                <h1 className={styles.heading}>Projects</h1>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </Layout>
            <Footer />
        </>
    )
}

export default ProjectsPage
