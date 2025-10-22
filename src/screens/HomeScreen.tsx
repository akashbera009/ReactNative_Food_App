import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView , useSafeAreaInsets} from 'react-native-safe-area-context'
import React from 'react'

// custom component import  
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'

const HomeScreen = () => {
    const inset = useSafeAreaInsets();
  return (
    <SafeAreaView style={[Styles.HomeScreen] } >
      <Header />
      <ScrollView>
        <MainContent />
      </ScrollView>
      <Footer  />
    </SafeAreaView>
  )
}
const Styles = StyleSheet.create({
  HomeScreen: {
    height: '100%',
  },
})

export default HomeScreen