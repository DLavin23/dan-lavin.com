import React from 'react'
import system from '@rebass/components'

const Header = system(
  {
    as: 'div',
    mb: 3,
  },
  'space'
)

const Title = system(
  {
    as: 'h3',
    color: 'offBlack',
    fontSize: 6,
    m: 0,
    pb: 3,
  },
  'color',
  'fontSize',
  'space',
)

const BottomBorder = system(
  {
    as: 'div',
    border: '2px solid',
    borderColor: 'grayLight',
  },
  {
    maxWidth: '4rem',
  },
  'border',
  'borderColor',
)

const SectionHeader = (props) => {
  return (
    <Header>
      <Title>{props.title}</Title>
      <BottomBorder />
    </Header>
  )
}

export default SectionHeader
