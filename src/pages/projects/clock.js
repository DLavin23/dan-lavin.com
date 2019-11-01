/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'
import { Box } from 'rebass'
import { Layout } from '../../components/'

const ClockWrapper = ({ ...props }) => (
  <Box
    {...props}
    sx={{
      border: '20px solid',
      borderColor: 'white',
      borderRadius: '50%',
      boxShadow: '0 0 0 4px rgba(0,0,0,0.1), inset 0 0 0 3px #EFEFEF, inset 0 0 10px black, 0 0 10px rgba(0,0,0,0.2)',
      height: '30rem',
      margin: '50px auto',
      padding: 4,
      position: 'relative',
      width: '30rem',
    }}
  >
  </Box>
)

const ClockFace = ({...props}) => (
  <Box
    {...props}
    sx={{
      height: '100%',
      position: 'relative',
      transform: 'translateY(-3px)',
      width: '100%',
    }}
  ></Box>
)

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
  }, []);

  function tick() {
    setDate(new Date());
  }

  return (
    <Layout>
      <Box py={[4,5]}>
        <ClockWrapper>
          <ClockFace>
            {date.toLocaleTimeString()} seconds have elapsed since mounting.
            {/* <HourHand /> */}
            {/* <MinuteHand /> */}
            {/* <SecondHand /> */}
          </ClockFace>
        </ClockWrapper>
      </Box>
    </Layout>
  );
};

export default Clock;
