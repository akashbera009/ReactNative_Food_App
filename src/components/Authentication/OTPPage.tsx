import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// navigation import 
import { RootStackParamList } from '../../navigation/AppNavigation';
import { RouteProp } from '@react-navigation/native';

type OTPScreenProps = {
    route: RouteProp<RootStackParamList, 'OTPVerificationScreen'>;
};


export default function OTPPage({ route }: OTPScreenProps) {
  return (
    <View>
      <Text>We have sent a verification code to </Text>
      <Text>{route.params.mobilenumber} </Text>
    </View>
  )
}

const styles = StyleSheet.create({})