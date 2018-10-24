import React from 'react'
import system from 'system-components'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { Button } from '../components/Button'

// move to seperate file
const getWelcomeMessage = () => {
  const currentDate = new Date()
  const currentHour = currentDate.getHours()
  if (currentHour >= 0 && currentHour < 12) {
    return 'Morning'
  }
  if (currentHour >= 12 && currentHour < 17) {
    return 'Afternoon'
  } else {
    return 'Evening'
  }
}

const HeroHeader = system({
  is: 'h2',
  p: 4,
})


const IndexPage = () => (

  <Layout>
    <HeroHeader>Good {getWelcomeMessage()}, I'm Dan! I'm Chicago based product manager with a passion for design, development & user experience.</HeroHeader>

    <Link to="/writing/">Check out my writing!</Link>
    <Button>Primary</Button>
  </Layout>
)

export default IndexPage
