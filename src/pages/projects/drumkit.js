import React, { useState, useEffect } from 'react'
import { Box, Flex, Text } from 'rebass'
import { Layout } from '../../components/'
import Boom from '../../assets/audio/boom.wav'
import Clap from '../../assets/audio/clap.wav'
import HiHat from '../../assets/audio/hihat.wav'
import Kick from '../../assets/audio/kick.wav'
import OpenHat from '../../assets/audio/openhat.wav'
import Ride from '../../assets/audio/ride.wav'
import Snare from '../../assets/audio/snare.wav'
import Tom from '../../assets/audio/tom.wav'
import Tink from '../../assets/audio/tink.wav'

const Keys = [
  {
    key: 'A',
    keyCode: 65,
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

const playSound = (k) => {
  const audio = document.querySelector(`audio[data-key="${k}"]`)
  audio.currentTime = 0
  audio.play()
}

export default () => {
  const renderKeys = Keys.map(key => {
    const [pressed, setKeyPressed] = useKeyPress(key.key.toLowerCase())

    const onClickHandler = () => {
      const lowerCaseKey = key.key.toLowerCase()
      setKeyPressed(true)
      playSound(lowerCaseKey)
      setTimeout(function(){
        setKeyPressed(false)
      }, 100)
    }

    return(
      <Box
        key={key.keyCode}
        onClick={onClickHandler}
        sx={{
          bg:  pressed ? 'red' : 'white',
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

  const renderAudio = Sounds.map(sound => {
    return(
      <audio key={sound.keyCode} data-key={sound.keyValue} src={sound.src}></audio>
    )
  })

  return(
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

function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
        playSound(key)
      }
    }

    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    }

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey])

  return [keyPressed, setKeyPressed];
}
