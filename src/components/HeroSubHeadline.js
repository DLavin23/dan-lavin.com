import React from 'react'
import system from 'system-components'

const SubHeadline = system({
  is: 'h3',
  color: 'offBlack',
  fontSize: 3,
})

const HeroHeadline = ({ children }) => {
  return (
    <SubHeadline>{children}</SubHeadline>
  )
}

export default HeroHeadline