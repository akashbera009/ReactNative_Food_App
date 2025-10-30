import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

// data import 
import { Restaurant_Dish_Data } from '../../data/Restaurant_Dish'

// util file 
import Images from '../../utils/LocalImages'
import { useThemeColors } from '../../utils/ColorFile';
import Fonts from '../../utils/FontsFile'

// nagiation import 
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const RestaurantCard = () => {
    const Colors = useThemeColors();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const openBottomSheet = (restaurantItem: Restaurant_Dish_Data_Type) => {
        navigation.push('OrderScreen', {
            DishItem: restaurantItem
        })
    }
    return (
        <View style={CommonStyles.RestauranScrollContainer} >
            <Text style={[CommonStyles.NoOfRestaurantHeader, { color: Colors.priceTextColour }]} allowFontScaling={false}>
                {Restaurant_Dish_Data.length} restaurants around you
            </Text>
            {Restaurant_Dish_Data.map((item, idx) => (
                <TouchableOpacity
                    key={idx}
                    style={[CommonStyles.RestaurantDishCard, { backgroundColor: Colors.white, shadowColor: Colors.RecomemdedTextColor }]}
                    onPress={() => openBottomSheet(item)}
                    activeOpacity={.7}
                >
                    <Image source={item.image}
                        style={CommonStyles.RestaurantDishImage}
                    />
                    <View style={CommonStyles.CommonContainer}>

                        <View style={CommonStyles.UpperContainer}>
                            <View style={CommonStyles.UpperLeftContainer}>
                                <Text style={[CommonStyles.DishName, { color: Colors.priceTextColour }]} allowFontScaling={false}>{item.dishName}</Text>
                                <Text style={[CommonStyles.subTitle, { color: Colors.RecomemdedTextColor, }]} allowFontScaling={false}>{item.subTitle}</Text>
                            </View>
                            <View style={CommonStyles.UpperRightContainer}>
                                <View style={[CommonStyles.RatingsContainer, { backgroundColor: Colors.ragingsBackground, }]}>
                                    <Text style={[CommonStyles.RatingsText, { color: Colors.conatsntWhite, }]} allowFontScaling={false}>{item.ratings}</Text>
                                    <Image source={Images.StarIcon} style={CommonStyles.ratingStarImage} />
                                </View>
                                <Text style={[CommonStyles.PriceText, { color: Colors.Black }]} allowFontScaling={false}>{item.price} for one</Text>
                            </View>
                        </View>

                        <View style={CommonStyles.LowerContainer}>
                            <Image source={Images.Green_leaf} />
                            <View style={CommonStyles.LowerLeftContainer}>
                                <Text style={[CommonStyles.descriptionText, { color: Colors.RecomemdedTextColor, }]} allowFontScaling={false}>{item.description1}</Text>
                                <Text style={[CommonStyles.descriptionText, { color: Colors.RecomemdedTextColor, }]} allowFontScaling={false}>{item.description2}</Text>
                            </View>

                            <View style={CommonStyles.LowerRightContainer}>
                                <Image source={Images.ZigZagArrow} />
                                <View style={[CommonStyles.maxSafetyContainer, { backgroundColor: Colors.maxSafetyGreenBG, }]}>
                                    <View style={[CommonStyles.InnerMaxSafetyContainer, { backgroundColor: Colors.maxSafetyYellowBG, }]}>
                                        <Text style={CommonStyles.maxSafetyText}>MAX SAFELTY</Text>
                                    </View>
                                    <Text style={[CommonStyles.deliveryText, { color: Colors.conatsntWhite, }]}>DELIVERY</Text>
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
        borderRadius: 10,
        marginVertical: 10,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
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
        width: 44,
        height: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    RatingsText: {
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
        height: 18,
        width: 61,
        borderRadius: 2,
        marginHorizontal: 5
    },
    InnerMaxSafetyContainer: {
        height: 8,
        width: 59,
        marginHorizontal: 'auto',
        marginTop: 1,
        borderRadius: 2
    },
    maxSafetyText: {
        fontSize: 7,
        marginHorizontal: 'auto',
        fontWeight: 300
    },
    deliveryText: {
        fontSize: 7,
        marginHorizontal: 'auto',
        fontWeight: 400
    }
})
export default RestaurantCard