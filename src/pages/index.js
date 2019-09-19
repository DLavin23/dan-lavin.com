/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, useColorMode } from 'theme-ui'
import { Box, Flex, Text } from 'rebass'
import ContactLinks from '../components/contact-links'
import Layout from '../components/layout'

// move to seperate file
const currentDate = new Date()
const currentHour = currentDate.getHours()

const getWelcomeMessage = () => {
  if (currentHour >= 0 && currentHour < 12) {
    return (
      <Box
        alignItems="center"
        display="flex"
      >
        <Box as="span">Good Morning, I'm Dan!</Box>
      </Box>
    )

  }
  if (currentHour >= 12 && currentHour < 17) {
    return (
      <Box
        as="div"
        alignItems="center"
        display="flex"
      >
        <Box as="span">Good Afternoon, I'm Dan!</Box>
      </Box>
    )
  } else {
    return (
      <Box
        as="div"
        alignItems="center"
        display="flex"
      >
        <Box as="span">Good Evening, I'm Dan!</Box>
      </Box>
    )
  }
}

export default () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Layout>
      <Box py={[4,5]} color="">
        <Flex flexDirection={['column', 'row', 'row']}>
          <Box width={['100%','85%', '65%']}>
            <Text
              as="h4"
              fontSize={[3,4,5]}
              fontWeight="400"
              lineHeight="1.25"
              mb={3}
            >
              {getWelcomeMessage()}
            </Text>
            <Text
              as="h2"
              fontSize={[6,7,7]}
              fontWeight="800"
              lineHeight="1.25"
              mb={3}
            >
              I'm a product leader with a passion for design, development &amp; user experience.
            </Text>
            <Text as="p" color="primary" fontSize={[3,4]} mb={4} >
              Currently, I lead product at <a href="https://www.hatchloyalty.com/" target="_blank" rel="noopener noreferrer">Hatch</a> where our team is focused on building a technology platform designed to help businesses create stronger, more personal relationships with their customers.
            </Text>
            <Box mb={4}>
              <Link to="/about">
                Learn More!
              </Link>
            </Box>
            <ContactLinks />

            <button
              onClick={e => {
                setColorMode(colorMode === 'default' ? 'dark' : 'default')
              }}>
              Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
            </button>
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}
