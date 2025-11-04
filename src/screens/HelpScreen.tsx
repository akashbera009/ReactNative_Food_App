import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

// safearea imports
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// navigation imports
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// utility imports 
import Images from '../utils/LocalImages';
import { useThemeColors } from '../utils/ColorFile';

const HelpScreen = () => {
    const Colors = useThemeColors();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const inset = useSafeAreaInsets();
    return (
        <View style={[Styles.HomeScreen, { backgroundColor: Colors.white }]}>
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Image source={Images.Back_Symbol} style={[Styles.BackIcon, { tintColor: Colors.Black, top: inset.top }]} />
            </TouchableOpacity>
            <View style={Styles.HelpContainer}>
                <Text style={{ color: Colors.Black }}>Help Screen</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    HomeScreen: {
        height: '100%'
    },
    BackIcon: {
        height: 20,
        width: 20,
    },
    HelpContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    HelpImage: {
        height: 200,
        width: 200
    }
})
export default HelpScreen