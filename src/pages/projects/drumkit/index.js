import React, { useState, useEffect } from 'react'
import { Box, Flex, Text } from 'rebass'
import { Layout } from '../../../components/'
import Keys from './keys'
import Sounds from './sounds'

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
