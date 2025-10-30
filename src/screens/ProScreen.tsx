import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'

// safeare import
import { SafeAreaView } from 'react-native-safe-area-context'

// utility import 
import Images from '../utils/LocalImages'
import { useThemeColors } from '../utils/ColorFile';

// navigatio import 
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


// component import 
import Footer from '../components/Footer'

export default function ProScreen() {
    const Colors = useThemeColors();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={[styles.HomeScreen, { backgroundColor: Colors.white }]} >
            <ScrollView style={styles.ScrollView}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Image source={Images.Back_Symbol} style={{ height: 20, width: 20, tintColor: Colors.Black }} />
                </TouchableOpacity>
                <Text style={{ color: Colors.Black }}>ProScreen</Text>

            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    HomeScreen: {
        height: '100%',
    },
    ScrollView: {
    },

})