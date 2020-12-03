import React, { FunctionComponent } from 'react'
import {
  Background,
  BottomNavigation,
  Footer,
  Head,
  TopNavigation,
} from '$components'
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
    <Footer />
  </>
)

export default IndexPage
