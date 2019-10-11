import Boom from '../../../assets/audio/boom.wav'
import Clap from '../../../assets/audio/clap.wav'
import HiHat from '../../../assets/audio/hihat.wav'
import Kick from '../../../assets/audio/kick.wav'
import OpenHat from '../../../assets/audio/openhat.wav'
import Ride from '../../../assets/audio/ride.wav'
import Snare from '../../../assets/audio/snare.wav'
import Tom from '../../../assets/audio/tom.wav'
import Tink from '../../../assets/audio/tink.wav'

const Sounds = [
  {
    keyValue: 'a',
    keyCode: 65,
    src: Clap
  },
  {
    keyValue: 's',
    keyCode: 83,
    src: HiHat
  },
  {
    keyValue: 'd',
    keyCode: 68,
    src: Kick
  },
  {
    keyValue: 'f',
    keyCode: 70,
    src: OpenHat
  },
  {
    keyValue: 'g',
    keyCode: 71,
    src: Boom
  },
  {
    keyValue: 'h',
    keyCode: 72,
    src: Ride
  },
  {
    keyValue: 'j',
    keyCode: 74,
    src: Snare
  },
  {
    keyValue: 'k',
    keyCode: 75,
    src: Tom
  },
  {
    keyValue: 'l',
    keyCode: 76,
    src: Tink
  }
]

export default Sounds