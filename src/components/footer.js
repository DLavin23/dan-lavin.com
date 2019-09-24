import React from 'react'
import { Box, Flex } from 'rebass'
import Container from './container'
import ContactLinks from '../components/contact-links'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function HumanReadableDay() {
  return days[new Date().getDay()]
}

const Footer = () => (
  <Box as="footer">
    <Container>
      <Flex
        alignItems={['flex-start', 'center']}
        flexDirection={['column', 'row']}
        justifyContent="space-between"
        py={3}
      >
        <div>
          &copy;{new Date().getFullYear()} Happy {HumanReadableDay()}!
        </div>
        <ContactLinks />
      </Flex>
    </Container>
  </Box>
)

export default Footer