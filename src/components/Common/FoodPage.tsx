import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

// utils import 
import Images from '../../utils/LocalImages';
import Strings from '../../utils/Strings';
import { useThemeColors } from '../../utils/ColorFile';

// import navigaton  
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//safearea view 
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function FoodPage({ route }: FoodPageProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const inset = useSafeAreaInsets();
  const { FoodItem } = route.params
  const Colors = useThemeColors();
  return (
    <SafeAreaView style={{ height: '100%', backgroundColor: Colors.white }}>
      <TouchableOpacity
        onPress={() => navigation.pop()}>
        <Image source={Images?.Back_Symbol} style={{ height: 20, width: 20, tintColor: Colors.Black }} />
      </TouchableOpacity>
      <Text style={[Styles.HeaderText, { color: Colors.Black }]}>FoodPage</Text>
      <View style={Styles.FoodContainer}>
        <Image source={FoodItem?.image} style={Styles.FoodImage} />
        <Text style={[Styles.FoodText, { color: Colors.Black }]}>{FoodItem?.name}</Text>
      </View>

      <View style={[Styles.BottomButtonContainer, { bottom: inset.bottom }]}>
        <TouchableOpacity onPress={() => navigation.navigate('CheckOutScreen')}
          style={[Styles.buttonContainer, { backgroundColor: Colors.AddbuttonTextColor, }]}>
          <Text style={[Styles.buttonContainerText, { color: Colors.conatsntWhite, }]}>{Strings?.FoodPageOrderText}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  HeaderText: {
    fontSize: 24,
    marginHorizontal: 'auto'
  },
  FoodContainer: {
    width: '90%',
    marginHorizontal: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  FoodImage: {
    height: 80,
    width: 80
  },
  FoodText: {
    fontSize: 18
  },
  BottomButtonContainer: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: 60,
    marginHorizontal: 'auto',
  },
  buttonContainer: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 60,
    borderRadius: 8
  },
  buttonContainerText: {
    fontSize: 20,
    fontWeight: 600,

  }
})