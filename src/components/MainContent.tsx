import { ScrollView , StyleSheet } from 'react-native'
import React from 'react'

//Custom Componenets import 
import RestaurantCard from './Common/RestaurantCard'
import DishContainer from './Common/DishContainer'
import OfferContainer from './Common/OfferContainer' 

const MainContent = () => {
  return (
    <ScrollView style ={Styles.MainContainer}>
        <OfferContainer/>
        <DishContainer/>
        <RestaurantCard/>  
    </ScrollView>
  )
}
const Styles = StyleSheet.create({
  MainContainer:{
    marginBottom: 30
  }
})
export default MainContent