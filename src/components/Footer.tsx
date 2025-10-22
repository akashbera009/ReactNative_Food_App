import { View, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'

// utility import
import Images from '../utils/LocalImages'
import Colors from '../utils/ColorFile'
import { useSafeAreaInsets} from 'react-native-safe-area-context'
//navigation imports
import { RootStackParamList } from "../navigation/AppNavigation";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Footer = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const myFunc=()=>{

    }

        const inset = useSafeAreaInsets();
    return (
        
        <View style={[Styles.Footer, { flex: 1, bottom: inset.bottom }]}>
            <View style={Styles.FooterContainer}>
                <Pressable onPress={myFunc}>

                    <Image source={Images.Group_13} />
                </Pressable>
                <Pressable onPress={myFunc}>

                    <Image source={Images.Group_20} />
                </Pressable>
                <Pressable onPress={myFunc}>

                    <Image source={Images.Group_16} />
                </Pressable>
                <Pressable onPress={myFunc}>

                    <Image source={Images.Group_17} />
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
        // bottom: inset,
        left: 0,
        backgroundColor: Colors.white, 
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