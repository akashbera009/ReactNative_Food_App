import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'


// safeare import
import { SafeAreaView } from 'react-native-safe-area-context'

// utility import 
import Images from '../utils/LocalImages'
import { useThemeColors } from '../utils/ColorFile';

// navigatio import 
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function DineInScreen() {
    const Colors = useThemeColors();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={[Styles.HomeScreen, { backgroundColor: Colors.white }]}>
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Image source={Images.Back_Symbol} style={{ height: 20, width: 20, tintColor: Colors.Black }} />
            </TouchableOpacity>
            <View style={Styles.DineInContainer}>
                <Text>DineInScreen</Text>
                <Image source={Images.DIneIn} style={Styles.DineImage} />
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
        HomeScreen: {
        height: '100%',
    },
    DineInContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    DineImage: {
        height: 200,
        width: 200
    }
})