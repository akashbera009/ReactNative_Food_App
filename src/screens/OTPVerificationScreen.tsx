import React from 'react'

// component import 
import OTPPage from '../components/Authentication/OTPPage'

const OTPVerificationScreen = ({route}:OTPScreenType) => {
  return (
    <OTPPage route={route}/>
  )
}

export default OTPVerificationScreen