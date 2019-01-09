import system from 'system-components'

const Hero = system({
  is: 'div',
  py: [4,5],
},
  'display',
  'color',
  'space',
)

export default Hero