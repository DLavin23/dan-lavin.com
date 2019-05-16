import React from 'react'
import system from 'system-components'
import Box from '../components/box'
import Wrapper from '../components/wrapper'

const UIFooter = system({
  is: 'footer',
  bg: 'offWhite',
  py: 3,
  width: '100%',
})

const FooterGreeting = system({
  is: 'span',
})

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function HumanReadableDay() {
  return days[new Date().getDay()]
}

const Footer = () => (
  <UIFooter>
    <Wrapper>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <FooterGreeting>&copy;{new Date().getFullYear()} Happy {HumanReadableDay()}!</FooterGreeting>
        {/* <ContactLinks /> */}
      </Box>
    </Wrapper>
  </UIFooter>
)

export default Footer