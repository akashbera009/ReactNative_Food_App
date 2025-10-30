import { View, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'

// utility import
import Images from '../utils/LocalImages'
import { useThemeColors } from '../utils/ColorFile';

// safeArea imports 
import { useSafeAreaInsets } from 'react-native-safe-area-context'

//navigation imports
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Footer = () => {
    const Colors = useThemeColors()
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const inset = useSafeAreaInsets();
    return (
        <View style={[Styles.Footer, { flex: 1, bottom: inset.bottom, backgroundColor: Colors.white, }]}>
            <View style={Styles.FooterContainer}>
                <Pressable onPress={() => navigation.navigate('HomeScreen')}>
                    <Image source={Images.Group_13} style={{ tintColor: Colors.priceTextColour }} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('ProScreen')}>
                    <Image source={Images.Group_20} style={{ tintColor: Colors.priceTextColour }} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('ProScreen')}>

                    <Image source={Images.Group_16} style={{ tintColor: Colors.priceTextColour }} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('ProScreen')}>

                    <Image source={Images.Group_17} style={{ tintColor: Colors.priceTextColour }} />
                </Pressable>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    Footer: {
        width: '100%',
        height: 45,
        position: 'absolute',
        left: 0,
    },
    FooterContainer: {
        margin: 'auto',
        width: 400,
        height: 32,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 3,
    }
}
)
export default Footer