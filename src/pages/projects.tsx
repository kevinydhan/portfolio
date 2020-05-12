import React from 'react'
import {
    Head,
    ProjectCard,
    OtherProjectCard,
    Footer,
    BackgroundCurves,
} from '../components'
import { useProjectDataQuery } from '../utils'
import DefaultLayout from '../layouts/DefaultLayout'
import styles from '../theme/pages/projects.module.scss'

const ProjectsPage = (): JSX.Element => {
    const { featured, other } = useProjectDataQuery()

    return (
        <>
            <Head title="Projects | Kevin Han" />
            <BackgroundCurves />
            <DefaultLayout additionalClassNames={styles.main}>
                <h1 className={styles.heading}>Featured Projects</h1>
                {featured.map((project) => (
                    <ProjectCard featured key={project.title} {...project} />
                ))}
                <h1 className={styles.heading}>Other Projects</h1>
                <div className={styles.otherProjectContainer}>
                    {other.map((project) => (
                        <OtherProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </DefaultLayout>
            <Footer />
        </>
    )
}

export default ProjectsPage
