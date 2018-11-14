import React from 'react'
import system from 'system-components'
import Wrapper from './Wrapper'
import ContactLinks from './ContactLinks'

const UIFooter = system({
  is: 'footer',
  borderTop: '1px solid',
  borderColor: 'grayLight',
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
      <FooterGreeting>&copy;{new Date().getFullYear()} Happy {HumanReadableDay()}!</FooterGreeting>
      <ContactLinks />
    </Wrapper>
  </UIFooter>
)

export default Footer