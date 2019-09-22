/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Styled } from 'theme-ui'
import { Box, Button, Heading, Text } from 'rebass'
import { ContactLinks, Layout } from '../components'

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
  return (
    <Layout>
      <Box py={5} width={['100%','85%', '65%']}>
        <Heading
          as="h4"
          fontSize={[3,4,5]}
          fontWeight="400"
          lineHeight="1.25"
          mb={3}
        >
          {getWelcomeMessage()}
        </Heading>
        <Heading
          as="h2"
          fontSize={[6,7,7]}
          fontWeight="800"
          lineHeight="1.25"
          mb={3}
        >
          I'm a product leader with a passion for design, development &amp; user experience.
        </Heading>
        <Text as="p" color="text" fontSize={[3,4]} mb={4} fontFamily="body">
          Currently, I lead product at <Styled.a href="https://www.hatchloyalty.com/" target="_blank" rel="noopener noreferrer">Hatch</Styled.a> where our team is focused on building a technology platform designed to help businesses create stronger, more personal relationships with their customers.
        </Text>

        <Link to="/about">
          <Button
            fontSize={1}
            fontWeight='bold'
            fontFamily='Open Sans'
          >
            Learn More!
          </Button>
        </Link>

        <Box py={4}>
          <ContactLinks />
        </Box>
      </Box>
    </Layout>
  )
}
