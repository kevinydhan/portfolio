import React from 'react'
import { Background, BottomNavigation, Head, TopNavigation } from '$components'
import { LandingSection, ProjectsSection } from '$sections'

const IndexPage = (): JSX.Element => (
  <>
    <Head />
    <TopNavigation />
    <main>
      <Background />
      <LandingSection />
      <ProjectsSection />
    </main>
    <BottomNavigation />
  </>
)

export default IndexPage
