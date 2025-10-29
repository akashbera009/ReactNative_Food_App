import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../utils/LocalImages'
import Colors from '../utils/ColorFile'

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ProScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={[styles.HomeScreen]} >
            <Header />
            <ScrollView style={styles.ScrollView}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Image source={Images.Back_Symbol} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
                <Text>ProScreen</Text>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    HomeScreen: {
        height: '100%',
        backgroundColor: Colors.white
    },
    ScrollView: {
        // height: '80%'
    },

})