import React from 'react'

// component import 
// import OTPPage from '../components/Authentication/OTPPage'
import NewOtp from '../components/Authentication/NewOtp'

const OTPVerificationScreen = ({route}:OTPScreenType) => {
  return (
    <NewOtp route={route}/>
  )
}

export default OTPVerificationScreen