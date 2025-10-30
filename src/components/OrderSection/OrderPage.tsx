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
import { RouteProp } from '@react-navigation/native';

// utils import 
import Images from '../../utils/LocalImages';
import Fonts from '../../utils/FontsFile';
import { Continue_Option } from '../../utils/SVGFils';
import { useThemeColors } from '../../utils/ColorFile';

// data imports
import { Extra_Addon_Data } from '../../data/Extra_Addon_Data';
import { DeliveryInfo_Details } from '../../data/DeliveryInfo_Details';

// safeArea imports
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function OrderPage({ route }: OrderScreenProps) {
    const Colors = useThemeColors();
    const inset = useSafeAreaInsets();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { DishItem } = route.params;

    const [deliveryNav, setDeliveryNav] = useState<number>(0)
    const [searchTerm, setSearchTerm] = useState<string>('')

    const [vegActive, setVegActive] = useState<boolean>(true)
    const [eggActive, setEggActive] = useState<boolean>(true)

    return (
        <View style={[Styles.OrderPageContainer, { flex: 1, paddingTop: inset.top, backgroundColor: Colors.white, width: '100%' }]}>

            <TouchableOpacity onPress={() =>
                navigation.pop()
            }>
                <Image source={Images.Back_Symbol} style={[Styles.BackButton, { tintColor: Colors.priceTextColour }]} />
            </TouchableOpacity>

            {/* Side things */}
            <View style={[Styles.ratingContainer, { marginTop: inset.top, backgroundColor: Colors.ratingCOntainerBGColor, }]}>
                <Text style={[Styles.RatingContainerText, { color: Colors.conatsntWhite, }, Styles.RatingContainerTextCount]}>{DishItem.ratings} <Image source={Images.StarIcon} style={Styles.StarIcon} /></Text>
                <Text style={[Styles.RatingContainerText, { color: Colors.conatsntWhite, }, Styles.RatingContainerTextText]}>DELIVERY</Text>
            </View>

            <View style={[Styles.photoContainer, { marginTop: inset.top, borderRadius: 4 }]}>
                <ImageBackground source={Images.Orderable_Image} resizeMode="cover" style={Styles.sideBgImage}>
                    <View style={Styles.opacity}>
                        <Text style={[Styles.RatingContainerText, { color: Colors.conatsntWhite, }, Styles.RatingContainerTextCount]}>6</Text>
                        <Text style={[Styles.RatingContainerText, { color: Colors.conatsntWhite, }, Styles.RatingContainerTextText]}>PHOTOS</Text>
                    </View>
                </ImageBackground >
            </View>


            <View style={Styles.UpperContainer}>
                <Text style={[Styles.dishName, { color: Colors.priceTextColour }]}>{DishItem.dishName}</Text>
                <Text style={[Styles.subtitle, { color: Colors.RecomemdedTextColor, }]}>{DishItem.subTitle}</Text>
                <Text style={[Styles.location, { color: Colors.ActiveTabTextColor }]}>{DishItem.location}</Text>
                <View style={[Styles.maxSafetyContainer, { backgroundColor: Colors.maxSafetyGreenBG, }]}>
                    <View style={[Styles.InnerMaxSafetyContainer, { backgroundColor: Colors.maxSafetyYellowBG, }]}>
                        <Text style={Styles.maxSafetyText}>MAX SAFELTY</Text>
                    </View>
                    <Text style={[Styles.deliveryText, { color: Colors.white, }]}>DELIVERY</Text>
                </View>
            </View>

            {/* delivery details */}
            <View style={[Styles.DeliveryDetailsContainre, { backgroundColor: Colors.white }]}>
                <View style={[Styles.DeliveryNavbar, { backgroundColor: Colors.DeliveryDetailsNavbarColor, }]}>
                    <TouchableOpacity onPress={() => setDeliveryNav(0)}  >
                        <Text style={deliveryNav === 0 ? [Styles.ActiveText, { color: Colors.white, backgroundColor: Colors.Black, }] : [Styles.NotActiveText, { color: Colors.ActiveTabTextColor, }]}>
                            DELIVERY
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setDeliveryNav(1)}>
                        <Text style={deliveryNav === 1 ? [Styles.ActiveText, { color: Colors.white, backgroundColor: Colors.Black, }] : [Styles.NotActiveText, { color: Colors.ActiveTabTextColor, }]}>
                            DINING
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setDeliveryNav(2)}>
                        <Text style={deliveryNav === 2 ? [Styles.ActiveText, { color: Colors.white, backgroundColor: Colors.Black, }] : [Styles.NotActiveText, { color: Colors.ActiveTabTextColor, }]}>
                            REVIEWS
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.DeliveryModeTime}>
                    <View style={Styles.DeliveryModeTimeImageAndTextContainer}>
                        <Image source={Images.Bike_Facing_Icon} style={[Styles.DeliveryModeTimeImage, { tintColor: Colors.Black }]} />
                        <View style={Styles.DeliveryModeTimeTextContainer}>
                            <Text style={[Styles.DeliveryModeTimeText, { color: Colors.ActiveTabTextColor }]}> MODE</Text>
                            <Text style={[Styles.DeliveryModeTimeTextLower, { color: Colors.Black }]}> delivery</Text>
                        </View>
                    </View>
                    <View style={Styles.DeliveryModeTimeImageAndTextContainer}>
                        <Image source={Images.Clock_Timer_Icon} style={[Styles.DeliveryModeTimeImage, { tintColor: Colors.Black }]} />
                        <View style={Styles.DeliveryModeTimeTextContainer}>
                            <Text style={[Styles.DeliveryModeTimeText, { color: Colors.ActiveTabTextColor }]}> TIME</Text>
                            <Text style={[Styles.DeliveryModeTimeTextLower, { color: Colors.Black }]}>{DeliveryInfo_Details.Time} mins</Text>
                        </View>
                    </View>
                    <View style={Styles.DeliveryModeTimeImageAndTextContainer}>
                        <Image source={Images.Offer_Icon} style={Styles.DeliveryModeTimeImage} />
                        <View style={Styles.DeliveryModeTimeTextContainer}>
                            <View style={Styles.OfferUpperContainer}>
                                <Text style={[Styles.DeliveryModeTimeText, { color: Colors.ActiveTabTextColor }]}>OFFERS</Text>
                                <Image source={Images.Vector_22} style={[Styles.OfferViewMore, { tintColor: Colors.priceTextColour }]} />
                            </View>
                            <Text style={[Styles.DeliveryModeTimeTextLower, { color: Colors.Black }]}> view all (3)</Text>
                        </View>
                    </View>
                </View>

                {/* distance charge container */}
                <View style={[Styles.DistanceCharge, { backgroundColor: Colors.DeliveryDetailsNavbarColor, }]}>
                    <Image source={Images.Delivery_Bike_Icon} style={[Styles.deliveryScooterImage, { tintColor: Colors.priceTextColour }]} />
                    <Text style={[Styles.ChargeText, { color: Colors.priceTextColour }]}>₹{DeliveryInfo_Details.Price} distance charge </Text>
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
                                        <View style={[Styles.CursorBG, { backgroundColor: Colors.CursorBGColor }, vegActive ? { alignItems: 'flex-end' } : { alignItems: 'flex-start' }]}>
                                            <View style={[Styles.Cursor, { backgroundColor: Colors.white, borderColor: Colors.CursorBorderColor }]} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Text style={[Styles.vegText, { color: Colors.RecomemdedTextColor }]}>Veg</Text>
                            </View>
                            <View style={Styles.VegSwitchTextContainer} >
                                <View style={Styles.VegSwitchContainer}>
                                    <TouchableOpacity
                                        style={Styles.VegSwitch}
                                        onPress={() => setEggActive(!eggActive)}
                                        activeOpacity={1}
                                    >
                                        <View style={[Styles.CursorBG, { backgroundColor: Colors.CursorBGColor }, eggActive ? { alignItems: 'flex-end' } : { alignItems: 'flex-start' }]}>
                                            <View style={[Styles.Cursor, { backgroundColor: Colors.white, borderColor: Colors.CursorBorderColor }]} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Text style={[Styles.vegText, { color: Colors.RecomemdedTextColor }]}>Egg</Text>
                            </View>
                        </View>

                        {/* searchbar  */}
                        <View style={[Styles.headerSearchBar, { borderColor: Colors.greyForBorder, }]} >
                            <Image source={Images.HeaderSearchIcon} style={Styles.HeaderSearchIcon} />
                            <TextInput
                                value={searchTerm}
                                onChangeText={setSearchTerm}
                                placeholder='Search'
                                placeholderTextColor={Colors.priceTextColour}
                                style={{ color: Colors.priceTextColour }}
                            />
                        </View>
                    </View>
                </View>
            </View>

            {/* Border  */}
            <View style={[Styles.Border, { borderBottomColor: Colors.brightBorderColor, }]} />

            {/* addon suggestion  */}
            <View style={[Styles.RecomenedAddonContainer, { backgroundColor: Colors.white }]} >
                <View style={Styles.RecomenedAddonContainerHeader}>
                    <Text style={[Styles.Recomenedtext, { color: Colors.RecomemdedTextColor }]}>Recomeneded</Text>
                    <Image source={Images.Vector_22} style={Styles.Down_Arrow} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {Extra_Addon_Data.map((item, key) => (
                        <TouchableOpacity
                            key={key}
                            style={[Styles.AddonEntryContainer, { backgroundColor: Colors.white, }]}
                            onPress={() =>
                                navigation.push('ExtraItemAdd', {
                                    // ExtraItem: JSON.parse(JSON.stringify(item))
                                    ExtraItem: item
                                })
                            }
                            activeOpacity={.7}>
                            <View style={Styles.LeftContainer} >
                                <Image source={Images.Veg_Icon} style={Styles.Veg_Icon} />
                                <Text style={[Styles.ExtraDishName, { color: Colors.RecomemdedTextColor, }]}> {item.name}</Text>
                                <Text style={[Styles.Price, { color: Colors.RecomemdedTextColor, }]}> ₹{item.price}</Text>
                                <View style={Styles.RatingAndTags}>
                                    <View style={[Styles.RatingContainer, { borderColor: Colors.ratingContainerTransparentBorderColor, backgroundColor: Colors.ratingContainerYellowBg, }]}>
                                        <View style={Styles.StarContainer}>
                                            <Image source={Images.Vector_15} style={Styles.Star} />
                                            <Image source={Images.Vector_15} style={Styles.Star} />
                                            <Image source={Images.Vector_15} style={Styles.Star} />
                                            <Image source={Images.Vector_15} style={Styles.Star} />
                                            <Image source={Images.Vector_16} style={Styles.HalfStar} />
                                            <Image source={Images.Vector_17} style={Styles.HalfStar} />
                                        </View>
                                        <Text style={[Styles.ratingContainerText, { color: Colors.Black }]} >{item.ratingCount}</Text>
                                    </View>
                                    <View style={[Styles.bestsellerTag, { borderColor: Colors.bestSellerBorder, backgroundColor: Colors.bestSellerBG, }]}>
                                        <Text style={[Styles.bestsellerTagText, { color: Colors.bestSellerBorder, }]}> Must Try</Text>
                                    </View>
                                </View>
                                <Text style={[Styles.DishDescription, { color: Colors.priceTextColour, }]}> {item.description}
                                    <Text style={Styles.readMore}>...read more</Text>
                                </Text>
                            </View>
                            <View >
                                <Image source={item.Image} style={Styles.RecomemdedContainerImage} />
                                <Pressable style={[Styles.AddButton, { backgroundColor: Colors.AddbuttonBgColor, borderColor: Colors.AddbuttonTextColor, }]}>
                                    <Text style={[Styles.AddButtonText, { color: Colors.AddbuttonTextColor, }]}>ADD</Text>
                                    <Text style={[Styles.PlusButton, { color: Colors.AddbuttonTextColor, }]}>+</Text>
                                </Pressable>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Offer section  */}
            <View style={[Styles.OfferAndCartContainer, { bottom: inset.bottom + 10 }]}>
                <View style={[Styles.offerSection, { backgroundColor: Colors.OfferSectionBGColor, borderTopColor: Colors.Black, borderBottomColor: Colors.Black }]}>
                    <Text style={[Styles.offerSectionText, { color: Colors.conatsntWhite, backgroundColor: Colors.offerTextBgColor, }]} >{DeliveryInfo_Details.OfferaPercent} % OFF up to ₹{DeliveryInfo_Details.OfferAmount}</Text>
                    <Text numberOfLines={2} style={[Styles.offerSectionEndText, { color: Colors.offerTextBgColor, }]} >Use code ZOMSAFETY on orders with items worth ₹159 or more</Text>
                </View>
                <View style={[Styles.ViewCartContainer, { backgroundColor: Colors.AddButtonBG, }]}>
                    <View style={Styles.LeftSideContainer} >
                        <Text style={[Styles.ViewCartText, { color: Colors.conatsntWhite }, Styles.LeftSideText]}>{1} ITEM</Text>
                        <Text style={[Styles.ViewCartText, { color: Colors.conatsntWhite }, Styles.LeftSideText]}>₹{120} plus axes</Text>
                    </View>
                    <TouchableOpacity
                        style={Styles.RightSideContainer}
                        onPress={() =>
                            navigation.push('CheckOutScreen')
                        }
                        activeOpacity={.7}
                    >
                        <Text style={[Styles.ViewCartText, { color: Colors.conatsntWhite }, Styles.RightSideText]}>View Cart</Text>
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
    },
    location: {
        fontSize: 10,
    },
    maxSafetyContainer: {
        height: 18,
        width: 47,
        borderRadius: 2,
        marginTop: 10
    },
    InnerMaxSafetyContainer: {
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
    },
    DeliveryNavbar: {
        width: '98%',
        height: 38,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    ActiveText: {
        padding: 10,
        paddingHorizontal: 24,
        borderRadius: 8
    },
    NotActiveText: {
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
        borderRadius: 2,
        borderWidth: 2,
    },
    CursorBG: {
        height: 14,
        width: 35,
        borderRadius: 2,
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
        borderRadius: 8
    },
    HeaderSearchIcon: {
        marginHorizontal: 15,
        height: 14,
        width: 18
    },
    Border: {
        width: '100%',
        borderWidth: .3,
        marginVertical: 10,
    },
    RecomenedAddonContainer: {
        height: 320,
        gap: 8,
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
    },
    Down_Arrow: {
        height: 5,
        width: 10
    },
    AddonEntryContainer: {
        height: 108,
        width: '95%',
        marginVertical: 8,
        marginHorizontal: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ExtraDishName: {
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
        fontSize: 8
    },
    bestsellerTag: {
        borderWidth: .5,
        borderRadius: 6,
        alignSelf: 'flex-start',
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginTop: 4,
    },

    bestsellerTagText: {
        fontSize: 10
    },
    DishDescription: {
        fontSize: 10,
        width: 221,
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
        height: 25,
        width: 70,
        borderRadius: 4,
        position: 'relative',
        top: '-12%',
        left: '12%',
        borderWidth: .2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    AddButtonText: {
        fontSize: 13
    },
    PlusButton: {
        position: 'absolute',
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
        borderWidth: .2,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    offerSectionText: {
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
        fontSize: 10,
        width: '60%',
        fontFamily: Fonts.generalFont
    },
    ViewCartContainer: {
        marginTop: 10,
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


