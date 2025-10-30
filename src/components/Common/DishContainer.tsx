import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

//data import 
import { Dish_Data } from '../../data/Dish_Data'

//util file 
import { useThemeColors } from '../../utils/ColorFile';
import Fonts from '../../utils/FontsFile'

// navigation
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const DishContainer = () => {
  const Colors = useThemeColors();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={[Styles.DishContinerOuter, { backgroundColor: Colors.white }]}>
      <Text style={[Styles.DishContainerHeaderText , { color: Colors.priceTextColour }]} allowFontScaling={false}>Eat what makes you happy</Text>

      <View style={Styles.DishContainer}>
        {Dish_Data.map((item, idx) => (
          <TouchableOpacity
            onPress={() => navigation.push('FoodScreen', { FoodItem: item })}
            key={idx}
            style={Styles.DishCard}>
            <Image source={item.image} style={Styles.DishImage} />
            <Text style={[Styles.DishSectionDishName ,{color:Colors.RecomemdedTextColor}]} allowFontScaling={false}> {item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>

  )
}
export const Styles = StyleSheet.create({
  DishContinerOuter: {
  },
  DishContainerHeaderText: {
    fontSize: 20,
    fontWeight: 500,
    margin: 10,
    fontFamily: Fonts.thinBold,
    marginLeft: 15
  },
  DishContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    flexWrap: 'wrap',
    paddingVertical: 8
  },
  DishCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  DishImage: {

  },
  DishSectionDishName: {
    fontFamily: Fonts.generalFont,
    fontSize: 12,
    padding: 8
  },
  SeeMoreButton: {
    margin: 'auto',
    width: '95%',
    borderWidth: 1,
    // borderColor: Colors.greyForBorder,
    borderRadius: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SeeMoreText: {
    fontSize: 9,
    fontFamily: Fonts.generalFont
  }

})
export default DishContainer