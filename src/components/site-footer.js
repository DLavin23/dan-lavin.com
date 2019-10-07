import React from 'react'
import { Container, Footer } from 'theme-ui'
import { Flex } from 'rebass'
import { ContactLinks } from '.'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function HumanReadableDay() {
  return days[new Date().getDay()]
}

const SiteFooter = () => (
  <Footer>
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
  </Footer>
)

export default SiteFooter