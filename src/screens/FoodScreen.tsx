import React from 'react'

// component. import
import FoodPage from '../components/Common/FoodPage'

// navigation import 
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type FoodItemType = NativeStackScreenProps<RootStackParamList, 'FoodScreen'>
const FoodScreen = ({route}: FoodItemType) => {
    return (
        <FoodPage route ={route}/>
    )
}

export default FoodScreen