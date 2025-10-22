import { View } from 'react-native'
import React from 'react'

// navigation import 
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';

// custom component import 
import OrderPage from '../components/OrderSection/OrderPage';

//type creation 
type OrderScreen = NativeStackScreenProps<RootStackParamList, 'OrderScreen'>;

const OrderScreen = ({ route }: OrderScreen) => {
  return (
    <OrderPage route={route} />
  )
}

export default OrderScreen