import { View, Text } from 'react-native'
import React from 'react'
import OTPPage from '../components/Authentication/OTPPage'

// navigation import 
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
//type creation 
type OTPScreenType = NativeStackScreenProps<RootStackParamList, 'OTPVerificationScreen'>;
const OTPVerificationScreen = ({route}:OTPScreenType) => {
  return (
    <OTPPage route={route}/>
  )
}

export default OTPVerificationScreen