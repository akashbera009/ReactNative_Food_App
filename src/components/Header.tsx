import { View, Image, TouchableOpacity, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

// custom components import 
import HeaderSearchBar from './HeaderSearchBar'
import HeaderBadge from './HeaderBadge'

//util file 
import Images from '../utils/LocalImages'
import Colors from '../utils/ColorFile'
//const Colors = useColors() 

import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../navigation/AppNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../navigation/AppNavigation";

const Header = () => {
    const drawerNavigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
    const navigation1 = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <TouchableWithoutFeedback >
            <View style={Styles.HeaderSection}>
                <View style={Styles.HeaderTopbar}>
                    <Image source={Images.Group_86} height={21} width={14.25} />
                    <Image source={Images.Line_31} />
                    <TouchableOpacity onPress={() => drawerNavigation.toggleDrawer()}>
                        <Image source={Images.Menu_Icon} height={27.15} width={21} />
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
        backgroundColor: Colors.white,
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