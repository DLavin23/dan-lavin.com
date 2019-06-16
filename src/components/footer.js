import React from 'react'
import system from '@rebass/components'
import { Flex } from 'rebass'
import ContactLinks from '../components/contact-links'
import Wrapper from '../components/wrapper'

const UIFooter = system(
  {
    as: 'footer',
    // bg: '',
    py: 3,
    width: '100%',
  },
  'color',
  'space',
  'width'
)

const FooterGreeting = system(
  {
    as: 'span',
    display: 'block',
    mb: [2, 0],
  },
  'display',
  'space'
)

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function HumanReadableDay() {
  return days[new Date().getDay()]
}

const Footer = () => (
  <UIFooter>
    <Wrapper>
      <Flex
        alignItems={['flex-start', 'center']}
        flexDirection={['column', 'row']}
        justifyContent="space-between"
      >
        <FooterGreeting>
          &copy;{new Date().getFullYear()} Happy {HumanReadableDay()}!
        </FooterGreeting>
        <ContactLinks />
      </Flex>
    </Wrapper>
  </UIFooter>
)

export default Footer