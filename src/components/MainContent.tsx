import { View, Text, ScrollView } from 'react-native'
import React from 'react'//comments are missing
import RestaurantCard from './Common/RestaurantCard'
import DishContainer from './Common/DishContainer'
import OfferContainer from './Common/OfferContainer'

const MainContent = () => {
  return (
    <ScrollView >
        <OfferContainer/>
        <DishContainer/>
        <RestaurantCard/>
    </ScrollView>
  )
}

export default MainContent