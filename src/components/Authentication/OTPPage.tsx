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
  Keyboard
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

export default function OTPPage({ route }: OTPScreenProps) {
  const Colors = useThemeColors();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const inset = useSafeAreaInsets();
  const [inputValue, setInputValue] = useState<string>('')
  const handleLogin = () => {
    if (inputValue.length < 6) {
      return;
    }
    console.log('doing')
    navigation.navigate('HomeScreen')
  }

  const inputRef = useRef<TextInput>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaView style={{ height: '100%' }} >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false} >
        <View>
          <TouchableOpacity
            style={[Styles.BackOption, { top: inset.top }]}
            onPress={() => navigation.pop()}>
            <Back_Option />
          </TouchableOpacity>
          <Text style={Styles.BackOptionText}>We have sent a verification code to </Text>
          <Text style={Styles.PhoneNumber}>+91-{route.params.mobilenumber} </Text>
          <Image source={Images.otp} style={Styles.OTPImage} />
        </View>
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        keyboardVerticalOffset={40}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[Styles.LowerContainer, { bottom: inset.bottom }]}>
        <View style={Styles.VeryfyContainerWrapper}>
          <View style={Styles.OTPInputContainer}>
            <View style={[Styles.SingleOtp, { borderColor: Colors.greyForBorder, }]}>
              <TextInput
                ref={inputRef}
                keyboardType='numeric'
                maxLength={1}
                style={Styles.OtpInputText}
              />
            </View>
            <View style={Styles.SingleOtp}>
              <TextInput
                keyboardType='numeric'
                maxLength={1}
                style={Styles.OtpInputText}
              />
            </View>
            <View style={Styles.SingleOtp}>
              <TextInput
                keyboardType='numeric'
                maxLength={1}
                style={Styles.OtpInputText}
              />
            </View>
            <View style={Styles.SingleOtp}>
              <TextInput
                keyboardType='numeric'
                maxLength={1}
                style={Styles.OtpInputText}
              />
            </View>
            <View style={Styles.SingleOtp}>
              <TextInput
                keyboardType='numeric'
                maxLength={1}
                style={Styles.OtpInputText}
              />
            </View>
            <View style={Styles.SingleOtp}>
              <TextInput
                keyboardType='numeric'
                maxLength={1}
                style={Styles.OtpInputText}
              />
            </View>
          </View>
          <TouchableOpacity
            style={[Styles.VeryfyContainer, { backgroundColor: Colors.AddButtonBG, }]}
            onPress={handleLogin}
          >
            <Text style={[Styles.VerifyText, { color: Colors.white, }]} >Verify</Text>
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
    marginTop: -60,
  },
  BackOptionText: {
    marginHorizontal: 'auto',
    fontSize: 16,
    marginTop: 10
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
    height: 35,
    width: 35,
    borderWidth: 2,
    // borderColor: Colors.greyForBorder,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    // backgroundColor: '#ebc0c0ff'
  },
  OtpInputText: {
    fontSize: 20,
    height: '100%',
    width: '100%',
    textAlign: 'center'
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
    fontWeight: 600
  },
  LowerContainer: {
    position: 'absolute',
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})