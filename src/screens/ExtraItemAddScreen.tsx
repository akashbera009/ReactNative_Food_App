import { View, Text } from 'react-native'
import React from 'react'

// navigation import 
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';

// componnet import 
import AddonBottomSheet from '../components/OrderSection/AddonBottomSheet';

//type creation 
type ExtraItemAddScreenProps = NativeStackScreenProps<RootStackParamList, 'ExtraItemAdd'>;

const ExtraItemAddScreen = ({ route }: ExtraItemAddScreenProps) => {
  return (
    <View> 
        <AddonBottomSheet route={route} /> 
    </View>
  )
}

export default ExtraItemAddScreen