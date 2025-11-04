import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    ImageBackground
} from 'react-native'
import React, { useState, useRef, useEffect } from 'react'

// navigation import 
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// safearea import 
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// util import
import { useThemeColors } from '../../utils/ColorFile';
import Images from '../../utils/LocalImages';
import Fonts from '../../utils/FontsFile';
import Strings from '../../utils/Strings';

export default function NewOtp({ route }: OTPScreenProps) {
    const Colors = useThemeColors();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const inset = useSafeAreaInsets();
    const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

    const [inputValue, setInputValue] = useState<string[]>(new Array(6).fill(''))
    const inputRef = useRef<Array<TextInput | null>>([])

    const [goodToLogin, setGoodToLogin] = useState(false)
    useEffect(()=>{
        if(!inputValue.includes('') )
          setGoodToLogin(true)
        else 
            setGoodToLogin(false)
    },[inputValue])

    const handleLogin = () => {
        if (inputValue.length < 6) {
            return;
        }
        navigation.navigate('HomeScreen')
    }

    return (
        // <ImageBackground source={Images.otp}  resizeMode={'contain'} style={{ height: screenHeight,width:screenWidth, backgroundColor:Colors.white }} >
        <SafeAreaView style={{ height: screenHeight,width:screenWidth, backgroundColor:Colors.white }} >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false} >
                <View
                >
                    <TouchableOpacity
                        style={[Styles.BackOption, {}]}
                        onPress={() => navigation.pop()}>
                        <Image source={Images.Back_Option} style={[Styles.BackOptionImage, {tintColor: Colors.Black}]}/>
                    </TouchableOpacity>
                    <Text style={[Styles.BackOptionText ,{color:Colors.Black}]}>{Strings?.OtpSentText}</Text>
                    <Text style={[Styles.PhoneNumber , ,{color:Colors.Black}]}>+91-{route.params?.mobilenumber} </Text>
                    <Image source={Images.otp} style={Styles.OTPImage} />
                </View>
            </TouchableWithoutFeedback>
            <KeyboardAvoidingView
                keyboardVerticalOffset={20}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={[Styles.LowerContainer, { bottom: inset.bottom }]}>
                <View style={Styles.VeryfyContainerWrapper}>
                    <View style={Styles.OTPInputContainer}>

                        {inputValue.map((item, idx) => (
                            <View key={idx} style={[Styles.SingleOtp, (inputValue[idx] != '')? { borderColor: Colors.maxSafetyGreenBG, }:{ borderColor: Colors.greyForBorder, } ]}>
                                <TextInput
                                    ref={element => { inputRef.current[idx] = element }}
                                    keyboardType='numeric'
                                    maxLength={1}
                                    autoFocus={idx == 0 }
                                    style={[Styles.OtpInputText ,{color:Colors.priceTextColour}]}
                                    onChangeText={(text) => {
                                        let newArray = [...inputValue];
                                        newArray[idx] = text;
                                        setInputValue(newArray)
                                        if (text && idx < inputValue.length - 1 ) {
                                            let c = idx + 1 ; 
                                            inputRef.current[c]?.focus()
                                        }
                                    }}
                                    onKeyPress={(event) => {
                                        if (event.nativeEvent.key == 'Backspace' && !inputValue[idx]  && idx > 0 ) {
                                            inputRef.current[idx-1 ]?.focus()
                                        }
                                    }}
                                />
                            </View>

                        ))}
                    </View>
                    <TouchableOpacity
                        style={[Styles.VeryfyContainer, (goodToLogin === true) ? { backgroundColor: Colors.AddButtonBG,  } : { backgroundColor: Colors.verifyBgColor }, ]}
                        onPress={() => handleLogin()}
                    >
                        <Text style={[Styles.VerifyText, { color: Colors.conatsntWhite, }]} >{Strings?.VerifyText}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    BackOption: {
        marginLeft: 5,
        position: 'absolute',
        left: 5,
    },
    BackOptionImage:{
        height: 35 , 
        width: 35 ,
    },
    BackOptionText: {
        // marginHorizontal: 'auto',
        alignSelf: 'center',
        fontSize: 16,
        marginTop: 10,
        fontFamily: Fonts.generalFont
    },
    PhoneNumber: {
        fontSize: 16,
        marginHorizontal: 'auto',
        marginTop: 10
    },
    OTPImage: {
        height: 200,
        width: 200,
        marginHorizontal: 'auto',
        marginTop: 50
    },
    VeryfyContainerWrapper: {
        width: '100%',
    },
    OTPInputContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
        marginVertical: 40,
    },
    SingleOtp: {
        height: 50,
        width: 50,
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        fontFamily: Fonts.generalFont
    },
    OtpInputText: {
        fontSize: 24,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    VeryfyContainer: {
        marginHorizontal: 'auto',
        height: 50,
        width: '90%',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    VerifyText: {
        fontSize: 20,
        fontWeight: 600,
        fontFamily: Fonts.generalFont
    },
    LowerContainer: {
        position: 'absolute',
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
})