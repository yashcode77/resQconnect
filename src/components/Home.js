import React from 'react'
import MapboxMap from '../components/map'
import Alerts from './alerts/Alerts'

const Home = () => {
  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
      <div className=' h-96 w-96' id='mapbox'>
        <MapboxMap />
      </div>
    </>

  )
}

export default Home
