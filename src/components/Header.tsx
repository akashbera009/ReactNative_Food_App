import { View, Image, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

// custom components import 
import HeaderSearchBar from './HeaderSearchBar'
import HeaderBadge from './HeaderBadge'

//util file 
import Images from '../utils/LocalImages'
import { useThemeColors } from '../utils/ColorFile';

// navigation imports
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const Header = () => {
    const Colors = useThemeColors()
    const drawerNavigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
    return (
        <TouchableWithoutFeedback >
            <View style={[Styles.HeaderSection, { backgroundColor: Colors.white, }]}>
                <View style={Styles.HeaderTopbar}>
                    <Image source={Images.Group_86} height={21} width={14.25} style={{ tintColor: Colors.Black }} />
                    <Image source={Images.Line_31} style={{ tintColor: Colors.Black }} />
                    <TouchableOpacity onPress={() => drawerNavigation.toggleDrawer()}>
                        <Image source={Images.Menu_Icon} height={27.15} width={21} style={{ tintColor: Colors.Black }} />
                    </TouchableOpacity>
                </View>
                <HeaderSearchBar />
                <HeaderBadge />
            </View>
        </TouchableWithoutFeedback>
    )
}
const Styles = StyleSheet.create({
    HeaderSection: {
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: '2px 2px 5px #00000022'
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