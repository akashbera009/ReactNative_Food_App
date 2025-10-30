import React from 'react'

// navigation import 
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// componnet import 
import AddonBottomSheet from '../components/OrderSection/AddonBottomSheet';

//type creation 
type ExtraItemAddScreenProps = NativeStackScreenProps<RootStackParamList, 'ExtraItemAdd'>;

const ExtraItemAddScreen = ({ route }: ExtraItemAddScreenProps) => {
  return (
    <AddonBottomSheet route={route} />
  )
}

export default ExtraItemAddScreen