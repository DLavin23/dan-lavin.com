import system from 'system-components'

const Hero = system({
  is: 'div',
  my: [2,4],
  py: [2,4],
},
  'display',
  'color',
  'space',
)

export default Hero