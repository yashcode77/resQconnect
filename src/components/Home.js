import React from 'react'
import MapboxMap from '../components/map'
import Alerts from './Alerts'
import MapComponent from './maps/MapComponent'

const Home = () => {
  return (
    <>
      <div>
        {/* <h1 className='text-4xl'>Home</h1> */}
        {/* <div className='h-96 w-96'>
          <MapComponent />
        </div> */}
      </div>
      <div className='' id='mapbox'>
        <MapboxMap />
      </div>
      {/* <Alerts /> */}
    </>

  )
}

export default Home
