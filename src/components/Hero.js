import system from 'system-components'

const Hero = system({
  is: 'div',
  py: [2,4],
},
  'display',
  'color',
  'space',
)

export default Hero