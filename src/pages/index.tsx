import React from 'react'
import { Background, BottomNavigation, TopNavigation } from '$components'
import { LandingSection } from '$sections'

const IndexPage = (): JSX.Element => (
  <>
    <TopNavigation />
    <main>
      <Background />
      <LandingSection />
    </main>
    <BottomNavigation />
  </>
)

export default IndexPage
