import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

// data import 
import { Restaurant_Dish_Data } from '../../data/Restaurant_Dish'

// util file 
import Images from '../../utils/LocalImages'
import Colors from '../../utils/ColorFile'
import Fonts from '../../utils/FontsFile'

//const Colors = useColors() 

// nagiation import 
import { RootStackParamList } from "../../navigation/AppNavigation";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Max_Safety_SVG } from '../../utils/SVGFils'
import { Styles } from './DishContainer'

const RestaurantCard = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const openBottomSheet = (restaurantItem: Restaurant_Dish_Data_Type) => {
        navigation.push('OrderScreen', {
            DishItem: restaurantItem
        })
    }
    return (
        <View style={CommonStyles.RestauranScrollContainer} >
            <Text style={CommonStyles.NoOfRestaurantHeader} allowFontScaling={false}>
                {Restaurant_Dish_Data.length} restaurants around you
            </Text>
            {Restaurant_Dish_Data.map((item, idx) => (
                <TouchableOpacity
                    key={idx}
                    style={CommonStyles.RestaurantDishCard}
                    onPress={() => openBottomSheet(item)}
                    activeOpacity={.7}
                >
                    <Image source={item.image}
                        style={CommonStyles.RestaurantDishImage}
                    />
                    <View style={CommonStyles.CommonContainer}>

                        <View style={CommonStyles.UpperContainer}>
                            <View style={CommonStyles.UpperLeftContainer}>
                                <Text style={CommonStyles.DishName} allowFontScaling={false}>{item.dishName}</Text>
                                <Text style={CommonStyles.subTitle} allowFontScaling={false}>{item.subTitle}</Text>
                            </View>
                            <View style={CommonStyles.UpperRightContainer}>
                                <View style={CommonStyles.RatingsContainer}>
                                    <Text style={CommonStyles.RatingsText} allowFontScaling={false}>{item.ratings}</Text>
                                    <Image source={Images.StarIcon} style={CommonStyles.ratingStarImage} />
                                </View>
                                <Text style={CommonStyles.PriceText} allowFontScaling={false}>{item.price} for one</Text>
                            </View>
                        </View>

                        <View style={CommonStyles.LowerContainer}>
                            <Image source={Images.Green_leaf} />
                            <View style={CommonStyles.LowerLeftContainer}>
                                <Text style={CommonStyles.descriptionText} allowFontScaling={false}>{item.description1}</Text>
                                <Text style={CommonStyles.descriptionText} allowFontScaling={false}>{item.description2}</Text>
                            </View>

                            <View style={CommonStyles.LowerRightContainer}>
                                <Image source={Images.ZigZagArrow} />
                                <View style={CommonStyles.maxSafetyContainer}>
                                    <View style={CommonStyles.InnerMaxSafetyContainer}>
                                        <Text style={CommonStyles.maxSafetyText}>MAX SAFELTY</Text>
                                    </View>
                                    <Text  style={CommonStyles.deliveryText}>DELIVERY</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}

        </View>
    )
}
export const CommonStyles = StyleSheet.create({
    RestauranScrollContainer: {
        width: '100%',
    },
    NoOfRestaurantHeader: {
        fontSize: 20,
        fontWeight: 500,
        margin: 10,
        fontFamily: Fonts.generalFont,
        marginLeft: 10
    },
    RestaurantDishCard: {
        margin: 'auto',
        width: 385,
        height: 255,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginVertical: 10,
        boxShadow: `0px 5px 5px #0000004a`,
        display: 'flex',
        flexDirection: 'column',
    },
    RestaurantDishImage: {
        height: 170,
        width: '100%',
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        objectFit: 'cover'
    },
    CommonContainer: {
        height: 80,
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 5,
        marginTop: 5,
    },
    UpperContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        margin: 'auto',
    },
    UpperLeftContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 10
    },
    DishName: {
        fontSize: 15,
        fontFamily: Fonts.generalFont
    },
    subTitle: {
        fontSize: 10,
        fontFamily: Fonts.generalFont,
        color: Colors.RecomemdedTextColor,
        marginLeft: 5,
        fontWeight: 400
    },
    UpperRightContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    RatingsContainer: {
        backgroundColor: Colors.ragingsBackground,
        width: 44,
        height: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    RatingsText: {
        color: Colors.white,
        fontSize: 10,
        padding: 2,
    },
    ratingStarImage: {
        height: 8,
        width: 8
    },
    PriceText: {
        fontSize: 10,
        fontFamily: Fonts.generalFont,
    },
    LowerContainer: {
        margin: 'auto',
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 8,
    },
    LowerLeftContainer: {
        display: 'flex',
        marginLeft: -20,
    },
    descriptionText: {
        fontSize: 10,
        fontFamily: Fonts.generalFont,
        color: Colors.RecomemdedTextColor,
    },
    LowerRightContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    maxSeftyImage: {
        width: 80,
        height: 27
    },
    maxSafetyContainer: {
        backgroundColor: Colors.maxSafetyGreenBG,
        height: 18,
        width: 61,
        borderRadius: 2,
        marginHorizontal: 5
    },
    InnerMaxSafetyContainer: {
        backgroundColor: Colors.maxSafetyYellowBG,
        height: 8,
        width: 59,
        marginHorizontal: 'auto',
        marginTop: 1,
        borderRadius: 2
    },
    maxSafetyText:{
        fontSize: 7,
        marginHorizontal: 'auto',
        fontWeight: 300
    },
    deliveryText:{
        fontSize: 7,
        marginHorizontal: 'auto',
        color:Colors.white,
         fontWeight: 400
    }
})
export default RestaurantCard