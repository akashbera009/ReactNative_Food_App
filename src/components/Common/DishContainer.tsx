import { View, Text , Image , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

//data import 
import { Dish_Data } from '../../data/Dish_Data'

//util file 
import Images from '../../utils/LocalImages'
import Colors from '../../utils/ColorFile'
import Fonts from '../../utils/FontsFile'
//const Colors = useColors() 

const DishContainer = () => {
  return (
    <View style = {Styles.DishContinerOuter}>
      <Text style = {Styles.DishContainerHeaderText} allowFontScaling= {false}>Eat what makes you happy</Text>

        <View style = {Styles.DishContainer}>
            {Dish_Data.map((item , idx)=>(
                <View key ={idx} style ={Styles.DishCard}>
                    <Image source={item.image} style= {Styles.DishImage}/>
                    <Text style = {Styles.DishSectionDishName} allowFontScaling= {false}> {item.name}</Text>
                </View>
            ))}
        </View>
        <TouchableOpacity style ={Styles.SeeMoreButton} activeOpacity={.5}>
          <Text style = {Styles.SeeMoreText} allowFontScaling= {false}>See more </Text>
          <Image source={Images.Vector_10}/>
        </TouchableOpacity>
    </View>
    
  )
}
export const Styles = StyleSheet.create({
    DishContinerOuter: {
        backgroundColor: Colors.white,
    },
    DishContainerHeaderText: {
        fontSize: 20,
        fontWeight: 500,
        margin: 10,
        fontFamily: Fonts.generalFont,
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
      fontFamily:Fonts.generalFont,
      fontSize: 12,
      padding: 8
    },
    SeeMoreButton:{
      margin: 'auto',
      width: '95%',
      borderWidth: 1,
      borderColor: Colors.greyForBorder,
      borderRadius:8,
      padding: 8,
      display: 'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    SeeMoreText:{
      fontSize: 9,
      fontFamily: Fonts.generalFont
    }

})
export default DishContainer