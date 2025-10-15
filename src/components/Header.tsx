import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

// custom components import 
import HeaderSearchBar from './HeaderSearchBar'
import HeaderBadge from './HeaderBadge'

//util file for images 
import Images from '../utils/LocalImages'
import Colors from '../utils/ColorFile'

const Header = () => {
    return (
        <View style={Styles.HeaderSection}>
            <View style={Styles.HeaderTopbar}>
                <Image source={Images.Group_86} height={21} width={14.25} />
                <Image source={Images.Line_31} />
                <TouchableOpacity>
                    <Image source={Images.Menu_Icon} height={27.15} width={21} />
                </TouchableOpacity>
            </View>
            <HeaderSearchBar />
            <HeaderBadge />
        </View>
    )
}
const Styles = StyleSheet.create({
    HeaderSection: {
        height: 200,
        backgroundColor: Colors.white,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    HeaderTopbar: {
        width: '100%',
        height: 32,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
        gap: 10
    },
})
export default Header