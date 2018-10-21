import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Box from '../components/Box'

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

const IndexPage = () => (

  <Layout>
    <h2>Good {getWelcomeMessage()}, I'm Dan! I'm Chicago based product manager with a passion for design, development & user experience.</h2>

    <Link to="/writing/">Check out my writing!</Link>

    <Box color='#fff' bg='blue'>
      Tomato
    </Box>
  </Layout>
)

export default IndexPage
