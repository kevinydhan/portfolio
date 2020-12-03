import React from 'react'
import { Background, BottomNavigation, TopNavigation } from '$components'
import { LandingSection, ProjectsSection } from '$sections'

const IndexPage = (): JSX.Element => (
  <>
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
