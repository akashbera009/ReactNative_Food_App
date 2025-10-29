import { StyleSheet, Text, View, Animated, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'

// util files
import Colors from '../../utils/ColorFile'
import Images from '../../utils/LocalImages';
import {
    Check_List_Selected,
    Continue_Option,
    G_Pay,
    Green_Leaf_Icon,
    Group_83,
    Loaction_SVG,
    Offer_Icon,
    Polygon_2,
    Polygon_4,
    Timing_SVG,
    Vector_11,
} from '../../utils/SVGFils';

// navigation 
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigation';

// data import 
import { DeliveryInfo_Details, Tip_Data } from '../../data/DeliveryInfo_Details';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CheckOut() {
    const slide = useRef(new Animated.Value(800)).current;
    const fade = useRef(new Animated.Value(0)).current;
    const [tickMark, setTickMark] = useState(false)
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const slideUp = () => {
        Animated.parallel([
            Animated.timing(slide, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(fade, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            })
        ]).start();
    };

    const slideDown = () => {
        Animated.parallel([
            Animated.timing(slide, {
                toValue: 800,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(fade, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            })
        ]).start();
    };


    const closeModal = () => {
        slideDown();
        setTimeout(() => {
            navigation.pop();
        }, 400);
    };

    useEffect(() => {
        slideUp();
    }, []);
    const inset = useSafeAreaInsets()
    return (
        <Animated.View style={[Styles.backDrop, { opacity: fade }]}>
            <Animated.View style={[Styles.bottomSheet, { transform: [{ translateY: slide }] }]}>
                <View style={Styles.OuterContainer}>
                    <TouchableOpacity onPress={closeModal} style={Styles.closeButton}>
                        <Image source={Images.Vector_27} style={Styles.closeBtnImage} />
                    </TouchableOpacity>

                    <View style={Styles.InnerContainer}>
                        <ScrollView style={{ maxHeight: 700 }} showsVerticalScrollIndicator={false} >
                            <View style={Styles.DeliveryDeatilsWrapper}>
                                <View style={Styles.DeliveryDeatilsEntry}>
                                    <Loaction_SVG />
                                    <Text style={Styles.DeliveryDetailsText}>{DeliveryInfo_Details.Address}</Text>
                                    <Vector_11 style={{ marginLeft: 'auto' }} />
                                </View>
                                <View style={Styles.DeliveryDeatilsEntry}>
                                    <Timing_SVG />
                                    <Text style={Styles.DeliveryDetailsText}>Delivery in {DeliveryInfo_Details.Timing}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={Styles.CookingInstructionContainer}>
                                <Text style={Styles.CookingInstruction}>Add cooking instructions (optional)</Text>
                                <View style={Styles.CustomUnderlineBlack} />
                            </TouchableOpacity>
                            <View style={Styles.OfferSection}>
                                <View style={Styles.InnerOfferSection}>
                                    <Text style={Styles.OfferHeaderText}>Offers</Text>
                                    <View style={Styles.OfferDescription}>
                                        <View style={Styles.OfferDescriptionAndIcon}>
                                            <Offer_Icon />
                                            <View style={Styles.OfferDescriptionOnly}>
                                                <Text style={Styles.SelectPromoText}>Select a promo code </Text>
                                                <Text style={Styles.PromoCodeText}>Save 59.70 with code ZOMATOSAFETY </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity>
                                            <Text style={Styles.ViewOffers}>View Offers</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={Styles.TipContainer}>
                                <View style={Styles.InnerOfferSection}>
                                    <Text style={Styles.TipHeaderText}>Please tip your valet</Text>
                                    <Text style={Styles.PromoCodeText}>Support your valet and make their day! 100% of your tip will be transferred to your valet</Text>
                                    <View style={Styles.TipBoxContainer}>
                                        {Tip_Data.map((item, idx) => (
                                            <View key={idx} style={Styles.TipBox}>
                                                <View style={Styles.TipBoxInnerContainer} >
                                                    <Image source={item.image} style={item.isMostTipped ? Styles.TipBoxImageSmall : Styles.TipBoxImage} />
                                                    {typeof (item.price) === 'string' ?
                                                        <Text style={Styles.TipBoxAmount}>{item.price}</Text>
                                                        :
                                                        <Text style={Styles.TipBoxAmount}>₹{item.price}</Text>
                                                    }
                                                </View>
                                                {item.isMostTipped && (
                                                    <Text style={Styles.isMostTippedText}>MOST TIPPED</Text>
                                                )}
                                            </View>
                                        ))
                                        }
                                    </View>
                                </View>
                            </View>
                            <View style={Styles.TotalContainer}>
                                <View style={Styles.TotalInnerContainer}>

                                    <View style={Styles.TotalContainerEntry}>
                                        <Text style={Styles.SmallText} >Item Total</Text>
                                        <Text style={Styles.SmallText}>₹{DeliveryInfo_Details.TotalPrice.toFixed(2)}</Text>
                                    </View>
                                    <View style={Styles.TotalContainerEntry}>
                                        <View>
                                            <Text style={Styles.SmallText}>Delivery Charge</Text>
                                            <View style={Styles.CustomUnderlineBlack} />
                                        </View>
                                        <Text style={Styles.SmallText} >₹{DeliveryInfo_Details.DeliveryCharge}</Text>
                                    </View>
                                    <View style={Styles.TotalContainerEntry}>
                                        <Text style={Styles.SmallText}>Taxes</Text>
                                        <Text style={Styles.SmallText} >₹{DeliveryInfo_Details.Taxed.toFixed(2)}</Text>
                                    </View>
                                    <View style={Styles.TotalContainerEntry} >
                                        <View>
                                            <Text style={Styles.SmallText}>Donate ₹3 to Feeding India Foundation</Text>
                                            <View style={Styles.CustomUnderlineBlack} />
                                        </View>
                                        <TouchableOpacity style={Styles.DonateButton}>
                                            <Text style={Styles.DonateButtonText}>Add</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={Styles.BottomTotalText}>
                                    <Text style={Styles.GrandTotal}>Grand Total</Text>
                                    <Text style={Styles.GrandTotal} >₹{DeliveryInfo_Details.Grand_Total.toFixed(2)}</Text>
                                </View>
                            </View>
                            <View style={Styles.CovidParentContainer}>
                                <View style={Styles.OrderTickContainer}>
                                    <TouchableOpacity
                                        onPress={() => setTickMark(!tickMark)}
                                        style={Styles.TickBox} >
                                        {tickMark && (
                                            <View style={Styles.TickBoxBG}>
                                                <Check_List_Selected />
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                    <Text style={Styles.CovidHeader}>This order is related to a COVID-19 emergency</Text>
                                </View>
                                <View style={Styles.CovidDescription}>
                                    <Text style={Styles.SmallText}>This order will be prepared and delivered on priority. It will be a contactless delivery. #RestaurantsAgainstCOVID</Text>
                                    <Text style={Styles.SmallText}> Treat this as an ambulance and please don’t misuse it.</Text>
                                </View>
                            </View>
                            <View style={Styles.LowerDeliveryInstructionCOntainer}>
                                <View style={Styles.DeliveryInstructionFirst}>
                                    <View style={Styles.headerPlusButtonContainer}>
                                        <Text style={Styles.TipHeaderText}>Delivery instructions</Text>
                                        <TouchableOpacity >
                                            <Text style={Styles.redButtonText}>Change</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={Styles.OrderHandMe}>
                                        <Group_83 style={Styles.OfferSVG} />
                                        <View>
                                            <Text style={[Styles.SmallText, { marginBottom: 5 }]}>Hand me the Order</Text>
                                            <View style={Styles.UnderlineWrapper}>
                                                <Text style={Styles.UnderDotterText}>Add Voice Direction</Text>
                                                <View style={Styles.CustomUnderline} />
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View style={Styles.CommonBorder} />

                                <View style={Styles.DeliveryInstructionFirst}>
                                    <View style={Styles.headerPlusButtonContainer}>
                                        <Text style={Styles.TipHeaderText} >Your details</Text>
                                        <TouchableOpacity >
                                            <Text style={Styles.redButtonText}>Change</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={Styles.CaptionText}>Divya Sigatapu, 9109109109</Text>
                                </View>

                                <View style={Styles.CommonBorder} />

                                <View style={Styles.DeliveryInstructionFirst}>
                                    <View style={Styles.headerPlusButtonContainer}>

                                        <Text style={Styles.TipHeaderText} >Order for someone else</Text>
                                        <TouchableOpacity >
                                            <Text style={Styles.redButtonText}>Add</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={Styles.SmallText} >Send personalized message and e-card</Text>
                                </View>
                                <View style={Styles.CommonBorder} />

                            </View>
                            <View style={Styles.Environmentwrapper}>
                                <Green_Leaf_Icon />
                                <View style={Styles.RightEnvContainer}>
                                    <Text style={Styles.ClimateHeader}>Climate conscious delivery</Text>
                                    <View style={Styles.LowerEnvContainer}>
                                        <Text style={[Styles.SmallText, Styles.FundText]}>We fund environmental projects to offset the carbon footprint of our deliveries.</Text>
                                        <View style={Styles.KnowMoreWrapper}>
                                            <Text style={[Styles.redButtonText, { fontWeight: 600 }]} >Know more </Text>
                                            <Polygon_2 />
                                        </View>
                                        <Text style={[Styles.redButtonText, Styles.ClimateDescriptionText]} >Orders once placed cannot be cancelled and are non-refundable.</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>

                    {/* bottom payment container */}
                    <View style={[Styles.LowerButtonContainer, { marginBottom: inset.bottom, bottom: inset.bottom }]}>
                        <View style={Styles.PayBoxLeft}>
                            <View style={Styles.IconAndPayContainer}>
                                <G_Pay style={Styles.Gpay} />
                                <Text style={Styles.SmallText}> PAY USING</Text>
                                <Polygon_4 />
                            </View>
                            <Text style={Styles.GooglePay}> Google Pay</Text>
                        </View>
                        <View style={Styles.placeOrderButton}>
                            <View style={Styles.amountBox}>
                                <Text style={Styles.TotalPriceButtonText}>₹{(DeliveryInfo_Details.TotalPrice + DeliveryInfo_Details.DeliveryCharge + DeliveryInfo_Details.Taxed).toFixed(2)}</Text>
                                <Text style={Styles.TotalPriceButtonTextDown}>TOTAL</Text>
                            </View>
                            <TouchableOpacity style={Styles.PlaceOrderTextBox}>
                                <Text style={Styles.PlaceOrderText}>Place Order</Text>
                                <Continue_Option style={Styles.contunue_icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Animated.View>
        </Animated.View>
    )
}

const Styles = StyleSheet.create({
    backDrop: {
        backgroundColor: Colors.SemiTransparent,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    bottomSheet: {
        width: '100%',
        height: 800,
    },
    OuterContainer: {

    },
    InnerContainer: {
        height: '100%',
        backgroundColor: Colors.white,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position: 'relative',
    },
    DeliveryDeatilsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: 50,
        width: '95%',
        marginHorizontal: 'auto',
        marginTop: 20,
    },
    DeliveryDeatilsEntry: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        margin: 5
    },
    DeliveryDetailsText: {
        fontSize: 11
    },
    closeButton: {
        marginVertical: 8,
        marginHorizontal: 'auto',
        alignSelf: 'center',
        height: 40,
        width: 40,
        borderRadius: '50%',
        backgroundColor: Colors.Black,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeBtnImage: {
        height: 20,
        width: 20,
        padding: 5
    },
    OfferSection: {
        height: 80,
        width: '100%',
        backgroundColor: Colors.white,
        borderTopColor: Colors.brightBorderColor,
        borderBottomColor: Colors.brightBorderColor,
        borderWidth: 3,
        borderRightWidth: 0,
        borderLeftWidth: 0,
    },
    InnerOfferSection: {
        marginTop: 10,
        width: '90%',
        marginHorizontal: 'auto',
    },
    OfferHeaderText: {
        fontSize: 16,
        fontFamily: 'Segoe UI',
        fontWeight: 600
    },
    OfferDescription: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    OfferDescriptionAndIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10
    },
    OfferDescriptionOnly: {
        marginLeft: 5
    },
    SelectPromoText: {
        fontSize: 12
    },
    PromoCodeText: {
        fontWeight: 400,
        color: Colors.priceTextColour,
        fontSize: 10
    },
    ViewOffers: {
        color: Colors.AddbuttonTextColor,
        fontSize: 12
    },
    TipContainer: {
        height: 120,
        borderBottomColor: Colors.brightBorderColor,
        borderBottomWidth: 1
    },
    TipHeaderText: {
        fontSize: 18,
        fontFamily: 'Segoe UI',
        fontWeight: 600
    },
    TipBoxContainer: {
        // marginHorizontal: 10,
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 10,
    },
    TipBox: {
        borderRadius: 4,
        paddingHorizontal: 14,
        paddingVertical: 8,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: Colors.RecomemdedTextColor,
    },
    TipBoxInnerContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    TipBoxImage: {
        height: 22,
        width: 22
    },
    TipBoxImageSmall: {
        height: 16,
        width: 16
    },
    TipBoxAmount: {
        fontSize: 12,
        marginLeft: 2
    },
    isMostTippedText: {
        fontSize: 8,
        color: Colors.AddbuttonTextColor
    },

    TotalContainer: {
        height: 160,
        width: '100%',
        backgroundColor: Colors.ratingContainerYellowBg,
        borderTopColor: Colors.brightBorderColor,
        borderBottomColor: Colors.brightBorderColor,
        borderLeftColor: Colors.Transparent,
        borderRightColor: Colors.Transparent,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 3,
        borderBottomWidth: 3,
        display: 'flex',
        flexDirection: 'column'
    },
    TotalInnerContainer: {
        width: '90%',
        marginHorizontal: 'auto',
        // backgroundColor:'#f8ddddff'
    },
    TotalContainerEntry: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginVertical: 2
    },
    DonateButton: {
        marginRight: 'auto',
        marginLeft: 10,
        marginTop: 5
    },
    DonateButtonText: {
        color: Colors.AddbuttonTextColor,
    },
    BottomTotalText: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        marginHorizontal: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    GrandTotal: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: 600
    },
    CovidParentContainer: {
        height: 100,
        width: '100%',
        marginHorizontal: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: Colors.greyForBorder,
        backgroundColor: Colors.white
    },
    OrderTickContainer: {
        marginTop: 10,
        width: '95%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    TickBox: {
        height: 18,
        width: 18,
        borderWidth: 1,
        borderColor: Colors.Black,
        borderRadius: 2,
    },
    TickBoxBG: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.ratingCOntainerBGColor,
        borderRadius: 2
    },
    CovidHeader: {
        marginLeft: 10,
        fontSize: 14,
        fontFamily: 'Segoe UI'
    },
    CovidDescription: {
        width: '82%',
        marginLeft: 5,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginBottom: 20,

    },
    SmallText: {
        marginTop: 5,
        fontSize: 12,
        color: Colors.priceTextColour,
    },
    CaptionText: {
        marginTop: 5,
        marginLeft: 2,
        fontSize: 12,
        color: Colors.Black
    },
    LowerDeliveryInstructionCOntainer: {
        width: '100%',
        marginHorizontal: 'auto'
    },
    CommonBorder: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.greyForBorder,
    },
    UnderlineWrapper: {
    },
    UnderDotterText: {
        fontSize: 12,
        color: Colors.AddbuttonTextColor,
    },
    CustomUnderline: {
        borderStyle: 'dashed',
        borderWidth: .5,
        borderColor: Colors.AddbuttonTextColor,
        marginTop: 2,
        width: '100%'
    },
    CookingInstructionContainer: {
        alignSelf: 'center',
        marginVertical: 10
    },
    CookingInstruction: {
        color: Colors.ActiveTabTextColor,
        fontSize: 12,
        textAlign: 'center'
    },
    CustomUnderlineBlack: {
        borderStyle: 'dashed',
        borderWidth: .5,
        borderColor: Colors.Black,
        marginTop: 2,
    },
    DeliveryInstructionFirst: {
        width: '90%',
        marginHorizontal: 'auto',
        backgroundColor: Colors.white,
        marginVertical: 10
    },
    headerPlusButtonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    OrderHandMe: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10
    },
    OfferSVG: {
        marginHorizontal: 10,
    },
    FundText: {
        width: '70%',
    },
    KnowMoreWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    redButtonText: {
        fontSize: 12,
        color: Colors.AddbuttonTextColor
    },
    Environmentwrapper: {
        width: '90%',
        margin: 'auto',
        marginBottom: 50,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: Colors.white
    },
    LeafAndHeader: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    ClimateHeader: {
        marginLeft: 10,
        fontSize: 16,
        color: Colors.Black,
        fontFamily: 'Segoe UI',
    },
    RightEnvContainer: {
    },
    LowerEnvContainer: {
        marginLeft: 10,
        width: '95%'
    },
    ClimateDescriptionText: {
        width: '80%',
        height: 'auto',
        marginBottom: 10
    },
    LowerButtonContainer: {
        height: 70,
        width: '100%',
        marginHorizontal: 'auto',
        backgroundColor: Colors.white,
        position: 'absolute',
        left: 0,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    PayBoxLeft: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',

    },
    IconAndPayContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    Gpay: {
        borderWidth: 1,
        borderColor: Colors.Black,
        borderRadius: 3,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    GooglePay: {
        fontSize: 14,
        fontFamily: 'Segoe UI',
        fontWeight: 600

    },
    placeOrderButton: {
        height: 60,
        width: 250,
        borderRadius: 4,
        backgroundColor: Colors.AddButtonBG,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    amountBox: {
        display: 'flex',
        justifyContent: 'space-around',
        // alignItems: 'center',
        flexDirection: 'column',
    },
    TotalPriceButtonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 600
    },
    TotalPriceButtonTextDown: {
        color: Colors.white,
        fontSize: 12
    },
    PlaceOrderTextBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    PlaceOrderText: {
        fontSize: 20,
        color: Colors.white,
        fontWeight: 500
    },
    contunue_icon: {
        marginLeft: 5,
        marginTop: 5,
        height: 5,
        width: 10
    }

})