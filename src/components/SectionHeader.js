import React from 'react'
import system from 'system-components'

const Header = system({
  is: 'div',
  mb: 3,
})

const Title = system({
  is: 'h3',
  color: 'offBlack',
  fontSize: 6,
  m: 0,
  pb: 3,
})

const BottomBorder = system({
  is: 'div',
  border: '2px solid',
  borderColor: 'grayLight',
},
{
  maxWidth: '4rem',
})

const SectionHeader = (props) => {
  return (
    <Header>
      <Title>{props.title}</Title>
      <BottomBorder />
    </Header>
  )
}

export default SectionHeader
