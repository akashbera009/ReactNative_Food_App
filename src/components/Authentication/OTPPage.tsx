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
import { Back_Option } from '../../utils/SVGFils';
import { useThemeColors } from '../../utils/ColorFile';
import Images from '../../utils/LocalImages';
import Fonts from '../../utils/FontsFile';

export default function OTPPage({ route }: OTPScreenProps) {
  const Colors = useThemeColors();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const inset = useSafeAreaInsets();
  const [inputValue, setInputValue] = useState<string[]>([])

  const inputRef1 = useRef<TextInput | null>(null);
  const inputRef2 = useRef<TextInput | null>(null);
  const inputRef3 = useRef<TextInput | null>(null);
  const inputRef4 = useRef<TextInput | null>(null);
  const inputRef5 = useRef<TextInput | null>(null);
  const inputRef6 = useRef<TextInput | null>(null);

      const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

  const [goodToLogin,setGoodToLogin] = useState(false)
  const handleLogin = () => {
    if (inputValue.length < 6) {
      return;
    }
    navigation.navigate('HomeScreen')
  }

  useEffect(() => {
    if(inputValue.length >= 6 )
      setGoodToLogin(true)
    else
    setGoodToLogin(false)
    // handleLogin()
  }, [inputValue])

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef1.current?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleAddOTP = (text: string) => {
    const updatedArray = [...inputValue, text]
    setInputValue(updatedArray)

  }
  const handleRemoveOTP = () => {
    const updatedArray = inputValue.filter((ele, idx )=> idx != inputValue.length -1 )
    setInputValue(updatedArray)
  }

  return (
      <ImageBackground source={Images.otp}  resizeMode={'contain'} style={{ height: screenHeight,width:screenWidth, backgroundColor:Colors.white }} >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false} >
        <View
        >
          <TouchableOpacity
            style={[Styles.BackOption, {}]}
            onPress={() => navigation.pop()}>
            <Back_Option />
          </TouchableOpacity>
          <Text style={Styles.BackOptionText}>We have sent a verification code to </Text>
          <Text style={Styles.PhoneNumber}>+91-{route.params.mobilenumber} </Text>
          <Image source={Images.otp} style={Styles.OTPImage} />
        </View>
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        keyboardVerticalOffset={20}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[Styles.LowerContainer, { bottom: inset.bottom }]}>

        <View style={Styles.VeryfyContainerWrapper}>
          <View style={Styles.OTPInputContainer}>
            <View style={[Styles.SingleOtp, { borderColor: Colors.greyForBorder, }]}>
              <TextInput
                ref={inputRef1}
                keyboardType='numeric'
                maxLength={1}
                style={Styles.OtpInputText}
                onChangeText={(text) => {
                  if (text.length >= 1) {
                    inputRef2.current?.focus()
                    handleAddOTP(text)
                  }
                  else {
                    inputRef1.current?.focus()
                    handleRemoveOTP()
                  }
                }}
              />
            </View>
            <View style={[Styles.SingleOtp, { borderColor: Colors.greyForBorder, }]}>
              <TextInput
                ref={inputRef2}
                keyboardType='numeric'
                maxLength={1}
                style={Styles.OtpInputText}
                onChangeText={(text) => {
                  if (text.length >= 1) {
                    inputRef3.current?.focus()
                    handleAddOTP(text)
                  }
                  else {
                    inputRef1.current?.focus()
                    handleRemoveOTP()
                  }
                }}
              />
            </View>
            <View style={[Styles.SingleOtp, { borderColor: Colors.greyForBorder, }]}>
              <TextInput
                ref={inputRef3}
                keyboardType='numeric'
                maxLength={1}
                style={Styles.OtpInputText}
                onChangeText={(text) => {
                  if (text.length >= 1) {
                    inputRef4.current?.focus()
                    handleAddOTP(text)
                  }
                  else {
                    inputRef2.current?.focus()
                    handleRemoveOTP()
                  }
                }}
              />
            </View>
            <View style={[Styles.SingleOtp, { borderColor: Colors.greyForBorder, }]}>
              <TextInput
                ref={inputRef4}
                keyboardType='numeric'
                maxLength={1}
                style={Styles.OtpInputText}
                onChangeText={(text) => {
                  if (text.length >= 1) {
                    inputRef5.current?.focus()
                    handleAddOTP(text)
                  }
                  else {
                    inputRef3.current?.focus()
                    handleRemoveOTP()
                  }
                }}
              />
            </View>
            <View style={[Styles.SingleOtp, { borderColor: Colors.greyForBorder, }]}>
              <TextInput
                ref={inputRef5}
                keyboardType='numeric'
                maxLength={1}
                style={Styles.OtpInputText}
                onChangeText={(text) => {

                  if (text.length >= 1) {
                    inputRef6.current?.focus()
                    handleAddOTP(text)
                  }
                  else {
                    inputRef4.current?.focus()
                    handleRemoveOTP()
                  }
                }}
              />
            </View>
            <View style={[Styles.SingleOtp, { borderColor: Colors.greyForBorder, }]}>
              <TextInput
                ref={inputRef6}
                keyboardType='numeric'
                maxLength={1}
                style={Styles.OtpInputText}
                onChangeText={(text) => {
                  if (text.length >= 1) {
                    inputRef6.current?.focus()
                    handleAddOTP(text)
                  }
                  else {
                    inputRef5.current?.focus()
                    handleRemoveOTP()
                  }
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={[Styles.VeryfyContainer, (goodToLogin == true) ? {  backgroundColor: Colors.AddButtonBG}: { backgroundColor: Colors.skipContainerBG , }]}
            onPress={() => handleLogin()}
          >
            <Text style={[Styles.VerifyText, { color: Colors.white, }]} >Verify</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const Styles = StyleSheet.create({
  BackOption: {
    marginLeft: 5,
    position: 'absolute',
    left: 5,
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