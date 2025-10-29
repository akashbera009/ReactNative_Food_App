import {
    StyleSheet,
    Text,
    ScrollView,
    View, Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Pressable
} from 'react-native'
import React, { useState } from 'react'

// navigation import 
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigation';
import { RouteProp } from '@react-navigation/native';

// utils import 
import Images from '../../utils/LocalImages';
import Colors from '../../utils/ColorFile';
import Fonts from '../../utils/FontsFile';
import { Continue_Option} from '../../utils/SVGFils';

// data imports
import { Extra_Addon_Data } from '../../data/Extra_Addon_Data';
import { DeliveryInfo_Details } from '../../data/DeliveryInfo_Details';

// safeArea imports
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type OrderScreenProps = {
    route: RouteProp<RootStackParamList, 'OrderScreen'>;
};

export default function OrderPage({ route }: OrderScreenProps) {
    const inset = useSafeAreaInsets();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { DishItem } = route.params;

    const [deliveryNav, setDeliveryNav] = useState<number>(0)
    const [searchTerm, setSearchTerm] = useState<string>('')

    const [vegActive, setVegActive] = useState<boolean>(true)
    const [eggActive, setEggActive] = useState<boolean>(true)

    return (
        <View style={[Styles.OrderPageContainer, { flex: 1, paddingTop: inset.top }]}>

            <TouchableOpacity onPress={() =>
                navigation.pop()
            }>
                <Image source={Images.Back_Symbol} style={Styles.BackButton} />
            </TouchableOpacity>

            {/* Side things */}
            <View style={[Styles.ratingContainer, { marginTop: inset.top }]}>
                <Text style={[Styles.RatingContainerText, Styles.RatingContainerTextCount]}>{DishItem.ratings} <Image source={Images.StarIcon} style={Styles.StarIcon} /></Text>
                <Text style={[Styles.RatingContainerText, Styles.RatingContainerTextText]}>DELIVERY</Text>
            </View>

            <View style={[Styles.photoContainer, { marginTop: inset.top }]}>
                <ImageBackground source={Images.Orderable_Image} resizeMode="cover" style={Styles.sideBgImage}>
                    <View style={Styles.opacity}>
                        <Text style={[Styles.RatingContainerText, Styles.RatingContainerTextCount]}>6</Text>
                        <Text style={[Styles.RatingContainerText, Styles.RatingContainerTextText]}>PHOTOS</Text>
                    </View>
                </ImageBackground >
            </View>


            <View style={Styles.UpperContainer}>
                <Text style={Styles.dishName}>{DishItem.dishName}</Text>
                <Text style={Styles.subtitle}>{DishItem.subTitle}</Text>
                <Text style={Styles.location}>{DishItem.location}</Text>
                <View style={Styles.maxSafetyContainer}>
                    <View style={Styles.InnerMaxSafetyContainer}>
                        <Text style={Styles.maxSafetyText}>MAX SAFELTY</Text>
                    </View>
                    <Text style={Styles.deliveryText}>DELIVERY</Text>
                </View>
            </View>

            {/* delivery details */}
            <View style={Styles.DeliveryDetailsContainre}>
                <View style={Styles.DeliveryNavbar}>
                    <TouchableOpacity onPress={() => setDeliveryNav(0)}  >
                        <Text style={deliveryNav === 0 ? Styles.ActiveText : Styles.NotActiveText}>
                            DELIVERY
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setDeliveryNav(1)}>
                        <Text style={deliveryNav === 1 ? Styles.ActiveText : Styles.NotActiveText}>
                            DINING
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setDeliveryNav(2)}>
                        <Text style={deliveryNav === 2 ? Styles.ActiveText : Styles.NotActiveText}>
                            REVIEWS
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.DeliveryModeTime}>
                    <View style={Styles.DeliveryModeTimeImageAndTextContainer}>
                        <Image source={Images.Bike_Facing_Icon} style={Styles.DeliveryModeTimeImage} />
                        <View style={Styles.DeliveryModeTimeTextContainer}>
                            <Text style={Styles.DeliveryModeTimeText}> MODE</Text>
                            <Text style={Styles.DeliveryModeTimeTextLower}> delivery</Text>
                        </View>
                    </View>
                    <View style={Styles.DeliveryModeTimeImageAndTextContainer}>
                        <Image source={Images.Clock_Timer_Icon} style={Styles.DeliveryModeTimeImage} />
                        <View style={Styles.DeliveryModeTimeTextContainer}>
                            <Text style={Styles.DeliveryModeTimeText}> TIME</Text>
                            <Text style={Styles.DeliveryModeTimeTextLower}>{DeliveryInfo_Details.Time} mins</Text>
                        </View>
                    </View>
                    <View style={Styles.DeliveryModeTimeImageAndTextContainer}>
                        <Image source={Images.Offer_Icon} style={Styles.DeliveryModeTimeImage} />
                        <View style={Styles.DeliveryModeTimeTextContainer}>
                            <View style={Styles.OfferUpperContainer}>
                                <Text style={Styles.DeliveryModeTimeText}>OFFERS</Text>
                                <Image source={Images.Vector_22} style={Styles.OfferViewMore} />
                            </View>
                            <Text style={Styles.DeliveryModeTimeTextLower}> view all (3)</Text>
                        </View>
                    </View>
                </View>

                {/* distance charge container */}
                <View style={Styles.DistanceCharge}>
                    <Image source={Images.Delivery_Bike_Icon} style={Styles.deliveryScooterImage} />
                    <Text style={Styles.ChargeText}>₹{DeliveryInfo_Details.Price} distance charge </Text>
                </View >

                {/* selection and searchbar  */}
                <View style={Styles.SelectionAndSearchBar}>
                    <View style={Styles.InnerSelectionAndSearchBar}>
                        <View style={Styles.VegAndEggContainer} >
                            <View style={Styles.VegSwitchTextContainer} >
                                <View style={Styles.VegSwitchContainer}>
                                    <TouchableOpacity
                                        style={Styles.VegSwitch}
                                        onPress={() => setVegActive(!vegActive)}
                                        activeOpacity={1}
                                    >
                                        <View style={[Styles.CursorBG, vegActive ? { alignItems: 'flex-end' } : { alignItems: 'flex-start' }]}>
                                            <View style={Styles.Cursor} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Text style={Styles.vegText}>Veg</Text>
                            </View>
                            <View style={Styles.VegSwitchTextContainer} >
                                <View style={Styles.VegSwitchContainer}>
                                    <TouchableOpacity
                                        style={Styles.VegSwitch}
                                        onPress={() => setEggActive(!eggActive)}
                                        activeOpacity={1}
                                    >
                                        <View style={[Styles.CursorBG, eggActive ? { alignItems: 'flex-end' } : { alignItems: 'flex-start' }]}>
                                            <View style={Styles.Cursor} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Text style={Styles.vegText}>Egg</Text>
                            </View>
                        </View>

                        {/* searchbar  */}
                        <View style={Styles.headerSearchBar} >
                            <Image source={Images.HeaderSearchIcon} style={Styles.HeaderSearchIcon} />
                            <TextInput
                                value={searchTerm}
                                onChangeText={setSearchTerm}
                                placeholder='Search'
                                placeholderTextColor={'#5351514a'}
                            />
                        </View>
                    </View>
                </View>
            </View>

            {/* Border  */}
            <View style={Styles.Border} />

            {/* addon suggestion  */}
            <View style={Styles.RecomenedAddonContainer} >
                <View style={Styles.RecomenedAddonContainerHeader}>
                    <Text style={Styles.Recomenedtext}>Recomeneded</Text>
                    <Image source={Images.Vector_22} style={Styles.Down_Arrow} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {Extra_Addon_Data.map((item, key) => (
                        <TouchableOpacity
                            key={key}
                            style={Styles.AddonEntryContainer}
                            onPress={() =>
                                navigation.push('ExtraItemAdd', {
                                    // ExtraItem: JSON.parse(JSON.stringify(item))
                                    ExtraItem: item
                                })
                            }
                            activeOpacity={.7}>
                            <View style={Styles.LeftContainer} >
                                <Image source={Images.Veg_Icon} style={Styles.Veg_Icon} />
                                <Text style={Styles.ExtraDishName}> {item.name}</Text>
                                <Text style={Styles.Price}> ₹{item.price}</Text>
                                <View style={Styles.RatingAndTags}>
                                    <View style={Styles.RatingContainer}>
                                        <View style={Styles.StarContainer}>
                                            <Image source={Images.Vector_15} style={Styles.Star} />
                                            <Image source={Images.Vector_15} style={Styles.Star} />
                                            <Image source={Images.Vector_15} style={Styles.Star} />
                                            <Image source={Images.Vector_15} style={Styles.Star} />
                                            <Image source={Images.Vector_16} style={Styles.HalfStar} />
                                            <Image source={Images.Vector_17} style={Styles.HalfStar} />
                                        </View>
                                        <Text style={Styles.ratingContainerText} >{item.ratingCount}</Text>
                                    </View>
                                    <View style={Styles.bestsellerTag}>
                                        <Text style={Styles.bestsellerTagText}> Must Try</Text>
                                    </View>
                                </View>
                                <Text style={Styles.DishDescription}> {item.description}
                                    <Text style={Styles.readMore}>...read more</Text>
                                </Text>
                            </View>
                            <View >
                                <Image source={item.Image} style={Styles.RecomemdedContainerImage} />
                                <Pressable style={Styles.AddButton}>
                                    <Text style={Styles.AddButtonText}>ADD</Text>
                                    <Text style={Styles.PlusButton}>+</Text>
                                </Pressable>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Offer section  */}
            <View style={[Styles.OfferAndCartContainer, { bottom: inset.bottom }]}>
                <View style={Styles.offerSection}>
                    <Text style={Styles.offerSectionText} >{DeliveryInfo_Details.OfferaPercent} % OFF up to ₹{DeliveryInfo_Details.OfferAmount}</Text>
                    <Text numberOfLines={2} style={Styles.offerSectionEndText} >Use code ZOMSAFETY on orders with items worth ₹159 or more</Text>
                </View>
                <View style={Styles.ViewCartContainer}>
                    <View style={Styles.LeftSideContainer} >
                        <Text style={[Styles.ViewCartText, Styles.LeftSideText]}>{1} ITEM</Text>
                        <Text style={[Styles.ViewCartText, Styles.LeftSideText]}>₹{120} plus axes</Text>
                    </View>
                    <TouchableOpacity
                        style={Styles.RightSideContainer}
                        onPress={() =>
                            navigation.push('CheckOutScreen')
                        }
                        activeOpacity={.7}
                    >
                        <Text style={[Styles.ViewCartText, Styles.RightSideText]}>View Cart</Text>
                        <Continue_Option style={Styles.contunue_icon} />
                    </TouchableOpacity>
                </View>
            </View>

        </View >
    )
}

const Styles = StyleSheet.create({
    OrderPageContainer: {
        height: '100%',
        width: '98%',
        marginHorizontal: 'auto',
        backgroundColor: Colors.white
    },

    BackButton: {
        height: 20,
        width: 20,
    },
    UpperContainer: {
        marginLeft: 10,
        marginTop: 10
    },
    dishName: {
        fontSize: 26,
        fontWeight: 600
    },
    subtitle: {
        fontSize: 12,
        color: Colors.RecomemdedTextColor,
    },
    location: {
        fontSize: 10,
        color: Colors.ActiveTabTextColor
    },
    maxSafetyContainer: {
        backgroundColor: Colors.maxSafetyGreenBG,
        height: 18,
        width: 47,
        borderRadius: 2,
        marginTop: 10
    },
    InnerMaxSafetyContainer: {
        backgroundColor: Colors.maxSafetyYellowBG,
        height: 8,
        width: 45,
        marginHorizontal: 'auto',
        marginTop: 1,
        borderRadius: 2
    },
    maxSafetyText: {
        fontSize: 5,
        marginHorizontal: 'auto',
        fontWeight: 300
    },
    deliveryText: {
        fontSize: 7,
        marginHorizontal: 'auto',
        color: Colors.white,
        fontWeight: 400
    },
    maxSeftyImage: {
        width: 47,
        height: 16,
        marginVertical: 10
    },
    ratingContainer: {
        width: 86,
        height: 43,
        backgroundColor: Colors.ratingCOntainerBGColor,
        borderRadius: 4,
        position: 'absolute',
        top: 24,
        right: -15,
        display: 'flex',
        justifyContent: 'center',
    },
    StarIcon: {
        height: 12,
        width: 12
    },
    RatingContainerText: {
        color: Colors.white,
        marginLeft: 10
    },
    RatingContainerTextCount: {
        fontSize: 12
    },
    RatingContainerTextText: {
        fontSize: 8
    },
    photoContainer: {
        width: 86,
        height: 44,
        position: 'absolute',
        top: 72,
        right: -15,
        backgroundColor: 'red',
        borderRadius: 4,
    },
    sideBgImage: {
        flex: 1,
    },
    opacity: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.7)',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
    },
    DeliveryDetailsContainre: {
        width: "95%",
        marginTop: 20,
        display: 'flex',
        marginHorizontal: 'auto',
        backgroundColor: Colors.white
    },
    DeliveryNavbar: {
        width: '98%',
        backgroundColor: Colors.DeliveryDetailsNavbarColor,
        height: 38,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    ActiveText: {
        color: Colors.white,
        backgroundColor: Colors.Black,
        padding: 10,
        paddingHorizontal: 24,
        borderRadius: 8
    },
    NotActiveText: {
        color: Colors.ActiveTabTextColor,
        padding: 10,
        paddingHorizontal: 24,
        borderRadius: 8,
    },

    DeliveryModeTime: {
        height: 30,
        width: '95%',
        marginVertical: 8,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5
    },
    DeliveryModeTimeImageAndTextContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    DeliveryModeTimeImage: {
        height: 22,
        width: 22,
    },
    DeliveryModeTimeTextContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    OfferUpperContainer: {
        display: 'flex',
        width: 45,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    DeliveryModeTimeText: {
        fontSize: 9,
        fontFamily: Fonts.generalFont,
        color: Colors.ActiveTabTextColor
    },
    DeliveryModeTimeTextLower: {
        fontSize: 9,
        fontFamily: Fonts.generalFont,
        fontWeight: 300
    },
    OfferViewMore: {
        height: 3,
        width: 6,
        transform: [{ scale: -1 }]
    },
    DistanceCharge: {
        height: 26,
        width: '92%',
        marginTop: 10,
        backgroundColor: Colors.DeliveryDetailsNavbarColor,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    deliveryScooterImage: {
        height: 20,
        width: 20,
        transform: [{ scaleX: -1 }],
        marginLeft: 20
    },
    ChargeText: {
        marginLeft: 10,
        fontSize: 11,
        fontFamily: Fonts.generalFont
    },
    SelectionAndSearchBar: {
        height: 100,
        width: '98%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    InnerSelectionAndSearchBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    VegAndEggContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 140,
        marginRight: 50
    },
    vegText: {
        fontSize: 8,
        color: Colors.RecomemdedTextColor
    },
    VegSwitchContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 35,
        marginHorizontal: 5,
        marginTop: 5,
    },
    VegSwitchTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    VegSwitch: {
        height: 20,
        width: 20
    },
    Cursor: {
        height: 19,
        width: 19,
        backgroundColor: Colors.white,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: Colors.CursorBorderColor,
    },
    CursorBG: {
        height: 14,
        width: 35,
        borderRadius: 2,
        backgroundColor: Colors.CursorBGColor,
        display: 'flex',
        justifyContent: 'center',
    },
    headerSearchBar: {
        width: 128,
        height: 43,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.greyForBorder,
        borderRadius: 8
    },
    HeaderSearchIcon: {
        marginHorizontal: 15,
        height: 14,
        width: 18
    },
    Border: {
        width: '100%',
        borderBottomColor: Colors.brightBorderColor,
        borderWidth: .3,
        marginVertical: 10,
    },
    RecomenedAddonContainer: {
        height: 320,
        gap: 8,
        backgroundColor: Colors.white
    },
    RecomenedAddonContainerHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        margin: 'auto',
    },
    Recomenedtext: {
        fontSize: 11,
        color: Colors.RecomemdedTextColor
    },
    Down_Arrow: {
        height: 5,
        width: 10
    },
    AddonEntryContainer: {
        height: 108,
        width: '95%',
        backgroundColor: Colors.white,
        marginVertical: 8,
        marginHorizontal: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ExtraDishName: {
        color: Colors.RecomemdedTextColor,
        fontSize: 14,
        fontFamily: Fonts.generalFont,
        marginTop: 2
    },
    LeftContainer: {

    },
    Veg_Icon: {
        height: 18,
        width: 18
    },
    Price: {
        color: Colors.RecomemdedTextColor,
        fontSize: 10,
        fontFamily: Fonts.generalFont
    },
    RatingAndTags: {
        width: 150,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    RatingContainer: {
        borderWidth: .5,
        borderRadius: 4,
        borderColor: Colors.ratingContainerTransparentBorderColor,
        backgroundColor: Colors.ratingContainerYellowBg,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    StarContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Star: {
        height: 9,
        width: 11,
    },
    HalfStar: {
        height: 9,
        width: 5.28,
    },
    ratingContainerText: {
        color: Colors.Black,
        fontSize: 8
    },
    bestsellerTag: {
        borderWidth: .5,
        borderRadius: 6,
        borderColor: Colors.bestSellerBorder,
        backgroundColor: Colors.bestSellerBG,
        alignSelf: 'flex-start',
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginTop: 4,
    },

    bestsellerTagText: {
        color: Colors.bestSellerBorder,
        fontSize: 10
    },
    DishDescription: {
        fontSize: 10,
        width: 221,
        color: Colors.priceTextColour,
    },
    readMore: {
        fontSize: 11,
        fontWeight: 500
    },
    RecomemdedContainerImage: {
        height: 98,
        width: 92,
        borderRadius: 8
    },
    AddButton: {
        backgroundColor: Colors.AddbuttonBgColor,
        height: 25,
        width: 70,
        borderRadius: 4,
        position: 'relative',
        top: '-12%',
        left: '12%',
        borderWidth: .2,
        borderColor: Colors.AddbuttonTextColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    AddButtonText: {
        color: Colors.AddbuttonTextColor,
        fontSize: 13
    },
    PlusButton: {
        position: 'absolute',
        color: Colors.AddbuttonTextColor,
        right: 5,
        top: 0
    },
    OfferAndCartContainer: {
        height: 100,
        width: '100%',
        position: 'absolute',
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    offerSection: {
        height: 50,
        width: '100%',
        backgroundColor: Colors.OfferSectionBGColor,
        borderTopColor: Colors.Black,
        borderWidth: .2,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    offerSectionText: {
        color: Colors.white,
        backgroundColor: Colors.offerTextBgColor,
        alignSelf: 'center',
        borderRadius: 4,
        fontFamily: Fonts.generalFont,
        fontSize: 13,
        paddingVertical: 8,
        paddingHorizontal: 4,
        fontWeight: 800,
        margin: 8
    },
    offerSectionEndText: {
        color: Colors.offerTextBgColor,
        fontSize: 10,
        width: '60%',
        fontFamily: Fonts.generalFont
    },
    ViewCartContainer: {
        marginTop: 10,
        backgroundColor: Colors.AddButtonBG,
        height: 40,
        width: '95%',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    RightSideContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 90,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginRight: 15,
    },
    ViewCartText: {
        color: Colors.white
    },
    LeftSideContainer: {
        marginLeft: 10,
        display: 'flex',
        justifyContent: 'space-between'
    },
    LeftSideText: {
        fontFamily: 'Segoe UI',
        fontSize: 10
    },
    RightSideText: {
        fontSize: 15,
        fontWeight: 600
    },
    contunue_icon: {
        height: 8,
        width: 4
    }
})