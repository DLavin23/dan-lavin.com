import React from 'react'
import system from 'system-components'

const UISection = system({
  is: 'section',
})

const Section = ({ children }) => {
  return (
    <UISection>
      {children}
    </UISection>
  )
}

export default Section
