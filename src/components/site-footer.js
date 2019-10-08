import React from 'react'
import { Container, Footer } from 'theme-ui'
import { Box, Flex } from 'rebass'
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
        mt={4}
        py={3}
        sx={{
          borderTop: '2px solid',
          borderColor: 'hr'
        }}
      >
        <Box>
          &copy;{new Date().getFullYear()} Happy {HumanReadableDay()}!
        </Box>
        <ContactLinks />
      </Flex>
    </Container>
  </Footer>
)

export default SiteFooter