import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

// safeare import
import { SafeAreaView } from 'react-native-safe-area-context'

// utility import 
import Images from '../utils/LocalImages'
import { useThemeColors } from '../utils/ColorFile';

// navigatio import 
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export default function ProScreen() {
    const Colors = useThemeColors();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={[Styles.HomeScreen, { backgroundColor: Colors.white }]} >
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Image source={Images?.Back_Symbol} style={[Styles.BackIcon, { tintColor: Colors.Black }]} />
            </TouchableOpacity>
            <View style={Styles.ProContainer}>
                <Text style={{ color: Colors.Black }}>Pro Screen</Text>
                <Image source={Images?.Pro} style={Styles.ProImage} />
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    HomeScreen: {
        height: '100%',
    },
    ScrollView: {
    },
    BackIcon: {
        height: 20,
        width: 20,
    },
    ProContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ProImage: {
        height: 200,
        width: 200
    }

})