import React from 'react'
import Alert from './Alert'

function Alerts() {
  return (
    <div className='bg-blue-200 w-32 text-center h-52'>
      <button className='bg-blue-900 p-3 text-white border-r-4'>Add new alert</button>
      <Alert />
    </div>
  )
}

export default Alerts
