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
import { Extra_Addon_Data } from '../../data/Extra_Addon_Data';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DeliveryInfo_Details } from '../../data/DeliveryInfo_Details';

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

                <Image source={Images.Max_Safety} style={Styles.maxSeftyImage} />

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
                            <Text style={Styles.DeliveryModeTimeText}> delivery</Text>
                        </View>
                    </View>
                    <View style={Styles.DeliveryModeTimeImageAndTextContainer}>
                        <Image source={Images.Clock_Timer_Icon} style={Styles.DeliveryModeTimeImage} />
                        <View style={Styles.DeliveryModeTimeTextContainer}>
                            <Text style={Styles.DeliveryModeTimeText}> TIME</Text>
                            <Text style={Styles.DeliveryModeTimeText}>{DeliveryInfo_Details.Time} mins</Text>
                        </View>
                    </View>
                    <View style={Styles.DeliveryModeTimeImageAndTextContainer}>
                        <Image source={Images.Offer_Icon} style={Styles.DeliveryModeTimeImage} />
                        <View style={Styles.DeliveryModeTimeTextContainer}>
                            <Text style={Styles.DeliveryModeTimeText}>OFFERS</Text>
                            <Text style={Styles.DeliveryModeTimeText}> view all</Text>
                        </View>
                    </View>
                </View>

                <View style={Styles.DistanceCharge}>
                    <Image source={Images.Delivery_Bike_Icon} style={Styles.deliveryScooterImage} />
                    <Text style={Styles.ChargeText}>₹{DeliveryInfo_Details.Price} distance charge </Text>
                </View >

                <View style={Styles.SelectionAndSearchBar}>
                    <View style={Styles.VegAndEggContainer} >
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
                                    ExtraItem: JSON.parse(JSON.stringify(item))
                                })
                            }>
                            <View >
                                <Image source={Images.Veg_Icon} style={Styles.Veg_Icon} />
                                <Text> {item.name}</Text>
                                <Text> {item.price}</Text>
                                <View style={Styles.RatingAndTags}>
                                    <Text> {item.rating}</Text>
                                    <View style={Styles.bestsellerTag}>
                                        <Text style={Styles.bestsellerTagText}> Must Try</Text>
                                    </View>
                                </View>
                                <Text style={Styles.DishDescription}> {item.description}</Text>
                            </View>
                            <View >
                                <Image source={item.Image} style={Styles.RecomemdedContainerImage} />
                                <Pressable style={Styles.AddButton}>
                                    <Text style={Styles.AddButtonText}>ADD</Text>
                                    <Text>+</Text>
                                </Pressable>
                            </View>

                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Offer section  */}
            <View style={[Styles.offerSection, { bottom: inset.bottom }]}>
                <Text style={Styles.offerSectionText} >{DeliveryInfo_Details.OfferaPercent} % OFF up to ₹{DeliveryInfo_Details.OfferAmount}</Text>
                <Text numberOfLines={2} style={Styles.offerSectionEndText} >Use code ZOMSAFETY on orders with items worth ₹159 or more</Text>
            </View>

        </View >
    )
}

const Styles = StyleSheet.create({
    OrderPageContainer: {
        height: '100%',
        width: '98%',
        marginHorizontal: 'auto'
    },

    BackButton: {
        height: 20,
        width: 20,
    },
    UpperContainer: {
        marginLeft: 10,
        marginTop: 20
    },
    dishName: {
        fontSize: 26,
        fontWeight: 600
    },
    subtitle: {
        fontSize: 12,
    },
    location: {
        fontSize: 10
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
        top: 12,
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
        top: 63,
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
        // height: 200,
        marginTop: 20,
        display: 'flex',
        marginHorizontal: 'auto'
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
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
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
    DeliveryModeTimeText: {
        fontSize: 9,
        fontFamily: 'Segoe UI'
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
        fontFamily: 'Segoe UI'
    },
    SelectionAndSearchBar: {
        height: 100,
        width: '100%',
        // backgroundColor: "#d37d7dff",
        // margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'center'
    },
    VegAndEggContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // width: 200
    },
    vegText:{
        fontSize: 8,
        color:Colors.RecomemdedTextColor
    },
    VegSwitchContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 35,
        marginHorizontal: 5
    },
    VegSwitch: {
        height: 20,
        width: 20
    },
    Cursor: {
        height: 19,
        width: 19,
        backgroundColor: Colors.white,
        // backgroundColor: '#000000',
        borderRadius: 1,
        borderWidth: 2,
        borderColor: Colors.CursorBGColor,

    },
    CursorBG: {
        height: 14,
        width: 35,
        backgroundColor: Colors.CursorBGColor,
        display: 'flex',
        justifyContent: 'center',
        // alignItems:'flex-end'
    },
    headerSearchBar: {
        margin: 'auto',
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
    RecomenedAddonContainer: {
        height: 400,
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
        width: '98%',
        backgroundColor: Colors.white,
        marginVertical: 8,
        marginHorizontal: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Veg_Icon: {
        height: 18,
        width: 18
    },
    RatingAndTags: {
        width: 150,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bestsellerTag: {
        borderWidth: .5,
        borderRadius: 4,
        borderColor: '#E41515',
        backgroundColor: '#ffa9a995',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginTop: 4,
    },

    bestsellerTagText: {
        color: '#E41515',
        fontSize: 8
    },
    DishDescription: {
        fontSize: 11,
        width: 221,
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
    offerSection: {
        height: 50,
        width: '100%',
        backgroundColor: '#F8F4F4',
        borderTopColor: '#000000',
        borderWidth: .2,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0
    },
    offerSectionText: {
        color: Colors.white,
        backgroundColor: Colors.offerTextBgColor,
        alignSelf: 'center',
        borderRadius: 4,
        fontFamily: 'Segoe UI',
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
        fontFamily: 'Segoe UI'
    }
})