import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../navigation/AppNavigation";

import Colors from '../../utils/ColorFile';
import { Email_Icon, Facebook_Icon, Google_Icon } from '../../utils/SVGFils';
import Fonts from '../../utils/FontsFile';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
const LoginPage = () => {
    const navigation1 = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const inset = useSafeAreaInsets();

    const [inputValue, setInputValue] = useState<string>('')
    const handleTextChange = (text: string) => {
        const numericValue = text.replace(/[^0-9]/g, '');
        setInputValue(numericValue);
    };
    const handleLogin = () => {
        if (inputValue.length < 10) {
            return;
        }
        navigation1.navigate('HomeScreen')
    }
    return (

        <LinearGradient
            useAngle={true}
            angle={100}
            angleCenter={{ x: 0.5, y: 0.5 }} colors={['#ae0000ff', 'rgba(207, 1, 84, 1)ff', 'rgba(232, 4, 95, 1)ff']}
            style={[Styles.linearGradient]}
        >
            <TouchableOpacity
                style={[Styles.SkipContainer, { top: inset.top }]}
                onPress={() => navigation1.navigate('HomeScreen')}
            >
                <Text style={Styles.SkipText} >Skip</Text>
            </TouchableOpacity>
            <View style={Styles.InputContainer}>
                <Text style={Styles.InputContainerText} >+91</Text>
                <TextInput
                    keyboardType='numeric'
                    value={inputValue}
                    onChangeText={handleTextChange}
                    style={Styles.NumberInput}
                    maxLength={10}
                />
            </View>
            <TouchableOpacity
                style={Styles.OTPContainer}
                onPress={handleLogin}
            >
                <Text style={Styles.OTPText} >Send OTP</Text>
            </TouchableOpacity>

            <View style={Styles.ORContainer}>
                <View style={Styles.CustomSideBorder} />
                <Text style={Styles.OrText}> OR </Text>
                <View style={Styles.CustomSideBorder} />
            </View>

            <View style={Styles.bottomContainer}>
                <View style={[Styles.LoginContainer, Styles.EmailContainer]}>
                    <Email_Icon style={Styles.LoginIcons} />
                    <Text style={Styles.LoginText}>Continue with Email</Text>
                </View>
                <View style={[Styles.LoginContainer, Styles.FacebookContainer]}>
                    <Facebook_Icon style={Styles.LoginIcons} />
                    <Text style={Styles.OtherLoginText}>Facebook</Text>
                </View>
                <View style={[Styles.LoginContainer, Styles.GoogleContainer]}>
                    <Google_Icon style={Styles.LoginIcons} />
                    <Text style={Styles.OtherLoginText}>Google</Text>
                </View>
            </View>
            <View style={[Styles.PrivecyPolicyContainer, { marginBottom: inset.bottom }]}>
                <Text style={Styles.FirstLine}> By continuing, you agree to our </Text>
                <View style={Styles.SecondLineContainer}>
                    <View>
                        <Text style={Styles.SecondtLine}>Terms of Service </Text>
                        <View style={Styles.CustomBorder} />
                    </View>
                    <View>
                        <Text style={Styles.SecondtLine}> Privacy Policy </Text>
                        <View style={Styles.CustomBorder} />
                    </View>
                    <View>
                        <Text style={Styles.SecondtLine}> Content Policy</Text>
                        <View style={Styles.CustomBorder} />
                    </View>
                </View>
            </View>
        </LinearGradient>

    )
}
const Styles = StyleSheet.create({
    linearGradient: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    SkipContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.SemiTransparent2,
        right: 15,
        borderRadius: 12,
        height: 30,
        position: 'absolute'
    },
    SkipText: {
        fontSize: 15,
        color: Colors.brightBorderColor,
        paddingHorizontal: 15
    },
    InputContainer: {
        height: 60,
        width: '90%',
        backgroundColor: Colors.white,
        borderRadius: 8,
        marginHorizontal: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100

    },
    InputContainerText: {
        fontSize: 27,
        margin: 10,
        marginLeft: 20,
        fontWeight: 400
    },
    NumberInput: {
        height: 60,
        width: '50%',
        fontSize: 27,
        fontWeight: 400,
        color: Colors.Black,
    },
    OTPContainer: {
        height: 60,
        width: '90%',
        marginVertical: 20,
        backgroundColor: Colors.Black,
        borderRadius: 8,
        marginHorizontal: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    OTPText: {
        color: Colors.white,
        fontSize: 22,
        fontFamily: Fonts.generalFont
    },
    ORContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor: '#8b9cf068',
        width:'90%',
        marginHorizontal: 'auto',
        marginVertical: 18, 
    },
    CustomSideBorder: {
        width: '40%',
        // borderTopColor: Colors.AddbuttonBgColor,
        borderTopColor: '#ffffff',
        borderTopWidth: 1
    },
    OrText: {
        marginHorizontal: 20, 
        fontSize: 15,
        fontWeight: 400,
        color: Colors.white,
        textAlign: 'center'
    },

    bottomContainer: {
        marginHorizontal: 'auto',
        width: '90%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row'
    },
    LoginContainer: {
        height: 60,
        backgroundColor: Colors.white,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    EmailContainer: {
        width: '100%',
        marginHorizontal: 'auto'
    },
    FacebookContainer: {
        width: '48%',
        marginRight: 'auto'
    },
    GoogleContainer: {
        width: '48%',
        marginLeft: 'auto',
    },
    LoginIcons: {
        marginHorizontal: 20
    },
    LoginText: {
        width: '60%',
        textAlign: 'center',
        fontFamily: Fonts.generalFont,
        fontSize: 19
    },
    OtherLoginText: {
        fontFamily: Fonts.generalFont,
        fontSize: 19
    },
    PrivecyPolicyContainer: {
        width: '90%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 'auto',
        marginVertical: 20,
    },
    FirstLine: {
        fontSize: 14,
        color: Colors.white,
        width: '100%',
        textAlign: 'center',
        fontFamily: Fonts.generalFont
    },
    SecondLineContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    SecondtLine: {
        fontSize: 14,
        color: Colors.white,
        margin: 3,
        fontFamily: Fonts.generalFont,
    },
    CustomBorder: {
        width: '90%',
        marginHorizontal: 'auto',
        borderTopColor: Colors.AddbuttonBgColor,
        borderTopWidth: 1
    }
})
export default LoginPage