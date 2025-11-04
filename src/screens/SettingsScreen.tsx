import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

// safeare import
import { SafeAreaView } from 'react-native-safe-area-context'

// utility import 
import Images from '../utils/LocalImages'
import { useThemeColors } from '../utils/ColorFile';

// navigatio import 
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DeliveryInfo_Details } from '../data/DeliveryInfo_Details';

export default function SettingsScreen() {
    const Colors = useThemeColors();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={[Styles.HomeScreen, { backgroundColor: Colors.white }]}>
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Image source={Images?.Back_Symbol} style={[Styles.BackIcon, { tintColor: Colors.Black }]} />
            </TouchableOpacity>
            <View style={Styles.DineInContainer}>
                <Text style={{ color: Colors.priceTextColour }}>Settings</Text>
                <Image source={Images?.Settings} style={Styles.DineImage} />
            </View>
            <View style={Styles.DetailsContainer}>
                <View style={Styles.detailsEntry}>
                    <Text style={{ color: Colors.priceTextColour }}>Name</Text>
                    <Text style={{ color: Colors.priceTextColour }}>{DeliveryInfo_Details?.customerName}</Text>
                </View>
                <View style={Styles.detailsEntry}>
                    <Text style={{ color: Colors.priceTextColour }}>Mobile Number</Text>
                    <Text style={{ color: Colors.priceTextColour }}>{DeliveryInfo_Details?.mobileNumber}</Text>
                </View>
                <View style={Styles.detailsEntry}>
                    <Text style={{ color: Colors.priceTextColour }}>Address</Text>
                    <Text style={{ color: Colors.priceTextColour }}>{DeliveryInfo_Details?.Address}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    HomeScreen: {
        height: '100%',
    },
    DineInContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    BackIcon: {
        height: 20,
        width: 20,
    },
    DineImage: {
        height: 100,
        width: 100
    },
    DetailsContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    detailsEntry: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        gap: 5
    }
})