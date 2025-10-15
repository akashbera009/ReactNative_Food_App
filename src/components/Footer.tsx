import { View, Image, StyleSheet } from 'react-native'
import React from 'react' 

// utility import
import Images from '../utils/LocalImages'
import Colors from '../utils/ColorFile'

const Footer = () => {
    return (
        <View style={Styles.Footer}>
            <View style={Styles.FooterContainer}>
                <Image source={Images.Group_13} />
                <Image source={Images.Group_20} />
                <Image source={Images.Group_16} />
                <Image source={Images.Group_17} />
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
        Footer: {
        width: '100%',
        height: 40,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: Colors.white,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    FooterContainer: {
        margin: 'auto',
        width: 307.38,
        height: 26.95,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
}   
)
export default Footer