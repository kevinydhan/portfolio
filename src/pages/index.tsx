import React, { FunctionComponent } from 'react'
import { Background, BottomNavigation, Head, TopNavigation } from '$components'
import { LandingSection, ProjectsSection } from '$sections'

const IndexPage: FunctionComponent = () => (
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
