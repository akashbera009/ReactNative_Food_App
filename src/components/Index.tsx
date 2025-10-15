import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

//Components Inport
import Header from './Header'
import MainContent from "./MainContent";
import Footer from './Footer'
//Custom Imports

export default function Index() {
  return (
    <SafeAreaView style={Styles.HomeScreen} >
      <Header />
      <MainContent />
      <Footer />
    </SafeAreaView >
  )
}
const Styles = StyleSheet.create({
  HomeScreen: {
    height: '97.5%',
  },
})
