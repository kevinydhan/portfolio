import React, { FunctionComponent } from 'react'
import { Head, Background, BottomNavigation, TopNavigation } from '$components'
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
