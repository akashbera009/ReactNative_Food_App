import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'

// styling import 
import LinearGradient from 'react-native-linear-gradient';

// nanvigation import
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//util files 
import { useThemeColors } from '../../utils/ColorFile';
import Fonts from '../../utils/FontsFile';
import { Email_Icon, Facebook_Icon, Google_Icon } from '../../utils/SVGFils';

// safearea imports 
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginPage = () => {
    const navigation1 = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const inset = useSafeAreaInsets();
    const Colors = useThemeColors();

    const [inputValue, setInputValue] = useState<string>('')
    const handleTextChange = (text: string) => {
        const numericValue = text.replace(/[^0-9]/g, '');
        setInputValue(numericValue);
    };
    const handleLogin = () => {
        if (inputValue.length < 10) {
            return;
        }
        navigation1.navigate('OTPVerificationScreen', { mobilenumber: inputValue })
    }
    return (

        <LinearGradient
            useAngle={true}
            angle={100}
            angleCenter={{ x: 0.5, y: 0.5 }} colors={['#ae0000ff', 'rgba(207, 1, 84, 1)ff', 'rgba(232, 4, 95, 1)ff']}
            style={[Styles.linearGradient]}
        >
            <TouchableOpacity
                style={[Styles.SkipContainer, { top: inset.top, backgroundColor: Colors.skipContainerBG }]}
                onPress={() => navigation1.navigate('HomeScreen')}
            >
                <Text style={[Styles.SkipText, { color: Colors.skipContainerTxt }]} >Skip</Text>
            </TouchableOpacity>

            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}>
                <View>
                    <View style={[Styles.InputContainer, { backgroundColor: Colors.conatsntWhite }]}>
                        <Text style={Styles.InputContainerText} >+91</Text>
                        <TextInput
                            keyboardType='numeric'
                            value={inputValue}
                            onChangeText={handleTextChange}
                            style={[Styles.NumberInput, { color: Colors.conatsntBlack, }]}
                            maxLength={10}
                        />
                    </View>
                    <TouchableOpacity
                        style={[Styles.OTPContainer, { backgroundColor: Colors.conatsntBlack, }]}
                        onPress={handleLogin}
                    >
                        <Text style={[Styles.OTPText, { color: Colors.conatsntWhite, }]} >Send OTP</Text>
                    </TouchableOpacity>

                    <View style={Styles.ORContainer}>
                        <View style={[Styles.CustomSideBorder, { borderTopColor: Colors.conatsntWhite }]} />
                        <Text style={[Styles.OrText, { color: Colors.conatsntWhite, }]}> OR </Text>
                        <View style={[Styles.CustomSideBorder, { borderTopColor: Colors.conatsntWhite }]} />
                    </View>

                    <View style={Styles.bottomContainer}>
                        <View style={[Styles.LoginContainer, Styles.EmailContainer, { backgroundColor: Colors.conatsntWhite }]}>
                            <Email_Icon style={Styles.LoginIcons} />
                            <Text style={Styles.LoginText}>Continue with Email</Text>
                        </View>
                        <View style={[Styles.LoginContainer, Styles.FacebookContainer, { backgroundColor: Colors.conatsntWhite }]}>
                            <Facebook_Icon style={Styles.LoginIcons} />
                            <Text style={[Styles.OtherLoginText, { color: Colors.conatsntBlack }]}>Facebook</Text>
                        </View>
                        <View style={[Styles.LoginContainer, Styles.GoogleContainer, { backgroundColor: Colors.conatsntWhite }]}>
                            <Google_Icon style={Styles.LoginIcons} />
                            <Text style={[Styles.OtherLoginText, { color: Colors.conatsntBlack }]}>Google</Text>
                        </View>
                    </View>
                    <View style={[Styles.PrivecyPolicyContainer, { marginBottom: inset.bottom }]}>
                        <Text style={[Styles.FirstLine, { color: Colors.conatsntWhite, }]}> By continuing, you agree to our </Text>
                        <View style={Styles.SecondLineContainer}>
                            <View>
                                <Text style={[Styles.SecondtLine, { color: Colors.conatsntWhite, }]}>Terms of Service </Text>
                                <View style={[Styles.CustomBorder, { borderTopColor: Colors.conatsntWhite, }]} />
                            </View>
                            <View>
                                <Text style={[Styles.SecondtLine, { color: Colors.conatsntWhite, }]}> Privacy Policy </Text>
                                <View style={[Styles.CustomBorder, { borderTopColor: Colors.conatsntWhite, }]} />
                            </View>
                            <View>
                                <Text style={[Styles.SecondtLine, { color: Colors.conatsntWhite, }]}> Content Policy</Text>
                                <View style={[Styles.CustomBorder, { borderTopColor: Colors.conatsntWhite, }]} />
                            </View>
                        </View>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        </LinearGradient>

    )
}
const Styles = StyleSheet.create({
    linearGradient: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    SkipContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        right: 15,
        borderRadius: 12,
        height: 30,
        position: 'absolute'
    },
    SkipText: {
        fontSize: 15,
        paddingHorizontal: 15
    },
    InputContainer: {
        height: 60,
        width: '90%',
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
    },
    OTPContainer: {
        height: 60,
        width: '90%',
        marginVertical: 20,
        borderRadius: 8,
        marginHorizontal: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    OTPText: {
        fontSize: 22,
        fontFamily: Fonts.generalFont
    },
    ORContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginHorizontal: 'auto',
        marginVertical: 18,
    },
    CustomSideBorder: {
        width: '40%',
        borderTopColor: '#ffffff',
        borderTopWidth: 1
    },
    OrText: {
        marginHorizontal: 20,
        fontSize: 15,
        fontWeight: 400,
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
        margin: 3,
        fontFamily: Fonts.generalFont,
    },
    CustomBorder: {
        width: '90%',
        marginHorizontal: 'auto',
        borderTopWidth: 1
    }
})
export default LoginPage