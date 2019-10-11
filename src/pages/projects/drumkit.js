import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { Layout } from '../../components'
import Boom from '../../assets/audio/boom.wav'
import Clap from '../../assets/audio/clap.wav'
import HiHat from '../../assets/audio/hihat.wav'
import Kick from '../../assets/audio/kick.wav'
import OpenHat from '../../assets/audio/openhat.wav'
import Ride from '../../assets/audio/ride.wav'
import Snare from '../../assets/audio/snare.wav'
import Tom from '../../assets/audio/tom.wav'
import Tink from '../../assets/audio/tink.wav'

const playSound = (event) => {
  console.log(event)
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  if(!audio) {return null}

  audio.currentTime = 0
  audio.play()
}

class DrumKit extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', playSound);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", playSound);
  }

  render() {
    const keys = [
      {
        key: 'A',
        keyCode: 67,
        sound: 'clap',
      },
      {
        key: 'S',
        keyCode: 83,
        sound: 'hihat',
      },
      {
        key: 'D',
        keyCode: 68,
        sound: 'kick',
      },
      {
        key: 'F',
        keyCode: 70,
        sound: 'openhat',
      },
      {
        key: 'G',
        keyCode: 71,
        sound: 'boom',
      },
      {
        key: 'H',
        keyCode: 72,
        sound: 'ride',
      },
      {
        key: 'J',
        keyCode: 74,
        sound: 'snare',
      },
      {
        key: 'K',
        keyCode: 75,
        sound: 'tom',
      },
      {
        key: 'L',
        keyCode: 76,
        sound: 'tink',
      }
    ]

    const sounds = [
      {
        keyCode: 65,
        src: Clap
      },
      {
        keyCode: 83,
        src: HiHat
      },
      {
        keyCode: 68,
        src: Kick
      },
      {
        keyCode: 70,
        src: OpenHat
      },
      {
        keyCode: 71,
        src: Boom
      },
      {
        keyCode: 72,
        src: Ride
      },
      {
        keyCode: 74,
        src: Snare
      },
      {
        keyCode: 75,
        src: Tom
      },
      {
        keyCode: 76,
        src: Tink
      }
    ]

    const renderKeys = keys.map(key => {
      return(
        <Box
          key={key.keyCode}
          data-key={key.keyCode}
          sx={{
            bg: 'white',
            border: '1px solid',
            borderColor: 'gray300',
            borderRadius: 8,
            boxShadow: 'base',
            cursor: 'pointer',
            flex: '1 0 auto',
            mx: 2,
            my: 2,
            px: 4,
            py: 3,
            textAlign: 'center',
          }}
        >
          <Text>{key.key}</Text>
          <Text>{key.sound}</Text>
        </Box>
      )
    })

    const renderAudio = sounds.map(sound => {
      return(
        <audio key={sound.keyCode} data-key={sound.keyCode} src={sound.src}></audio>
      )
    })

    return (
      <Layout>
        <Box py={[4,5]}>
          <Flex
            alignItems='center'
            flexWrap='wrap'
            width='100%'
          >
            {renderKeys}
          </Flex>
        </Box>

        {renderAudio}
      </Layout>
    )
  }
}

export default DrumKit
