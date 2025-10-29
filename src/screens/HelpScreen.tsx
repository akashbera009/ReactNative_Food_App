import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import Images from '../utils/LocalImages';
const HelpScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const inset = useSafeAreaInsets();
    return (
        <View style={{ marginTop: inset.top }}>
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Image source={Images.Back_Symbol} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
            <Text>HelpScreen</Text>
        </View>
    )
}

export default HelpScreen