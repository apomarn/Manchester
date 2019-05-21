import React from 'react'
import Featured from './featured'
import Matches from './matches'
import MeetPlayers from './meetPlayer'
import Promotion from './promotion/index'

const Home = () => {
  return (
    <div className='bck_blue'>
      <Featured />
      <Matches />
      <MeetPlayers />
      <Promotion />
    </div>
  )
}

export default Home
