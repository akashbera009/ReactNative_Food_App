import { StyleSheet, Text, View, Animated, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'

// util files
import { useThemeColors } from '../../utils/ColorFile';
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

// data import 
import { DeliveryInfo_Details, Tip_Data } from '../../data/DeliveryInfo_Details';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Fonts from '../../utils/FontsFile';
import Strings from '../../utils/Strings';

export default function CheckOut() {
    const Colors = useThemeColors();
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
        <Animated.View style={[Styles.backDrop, { opacity: fade, backgroundColor: Colors.SemiTransparent, }]}>
            <Animated.View style={[Styles.bottomSheet, { transform: [{ translateY: slide }] }]}>
                <View style={Styles.OuterContainer}>
                    <TouchableOpacity onPress={closeModal} style={[Styles.closeButton, { backgroundColor: Colors.Black, }]}>
                        <Image source={Images?.Vector_27} style={[Styles.closeBtnImage, { tintColor: Colors.white }]} />
                    </TouchableOpacity>

                    <View style={[Styles.InnerContainer, { backgroundColor: Colors.white, }]}>
                        <ScrollView style={{ maxHeight: 700 }} showsVerticalScrollIndicator={false} >
                            <View style={Styles.DeliveryDeatilsWrapper}>
                                <View style={Styles.DeliveryDeatilsEntry}>
                                    <Loaction_SVG />
                                    <Text style={[Styles.DeliveryDetailsText, { color: Colors.Black }]}>{DeliveryInfo_Details?.Address}</Text>
                                    <Vector_11 style={{ marginLeft: 'auto' }} />
                                </View>
                                <View style={Styles.DeliveryDeatilsEntry}>
                                    <Timing_SVG />
                                    <Text style={[Styles.DeliveryDetailsText, { color: Colors.Black }]}>{Strings?.deliveryInText} {DeliveryInfo_Details?.Timing}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={Styles.CookingInstructionContainer}>
                                <Text style={[Styles.CookingInstruction, { color: Colors.ActiveTabTextColor, }]}>{Strings?.AddInstructionText}</Text>
                                <View style={[Styles.CustomUnderlineBlack, { borderColor: Colors.Black, }]} />
                            </TouchableOpacity>
                            <View style={[Styles.OfferSection, { backgroundColor: Colors.white, borderTopColor: Colors.brightBorderColor, borderBottomColor: Colors.brightBorderColor, }]}>
                                <View style={Styles.InnerOfferSection}>
                                    <Text style={[Styles.OfferHeaderText, { color: Colors.Black }]}>{Strings?.Offers}</Text>
                                    <View style={Styles.OfferDescription}>
                                        <View style={Styles.OfferDescriptionAndIcon}>
                                            <Offer_Icon />
                                            <View style={Styles.OfferDescriptionOnly}>
                                                <Text style={[Styles.SelectPromoText, { color: Colors.Black }]}>{Strings?.SelectPromo}</Text>
                                                <Text style={[Styles.PromoCodeText, { color: Colors.priceTextColour, }]}>{Strings?.promoCode}</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity>
                                            <Text style={[Styles.ViewOffers, { color: Colors.AddbuttonTextColor, }]}>{Strings.viewOffer}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={[Styles.TipContainer, { borderBottomColor: Colors.brightBorderColor, }]}>
                                <View style={Styles.InnerOfferSection}>
                                    <Text style={[Styles.TipHeaderText, { color: Colors.Black }]}>{Strings?.tipValet}</Text>
                                    <Text style={[Styles.PromoCodeText, { color: Colors.priceTextColour, }]}>{Strings?.tipValetText}</Text>
                                    <View style={Styles.TipBoxContainer}>
                                        {Tip_Data.map((item, idx) => (
                                            <View key={idx} style={[Styles.TipBox, { borderColor: Colors.RecomemdedTextColor, }]}>
                                                <View style={Styles.TipBoxInnerContainer} >
                                                    <Image source={item?.image} style={item?.isMostTipped ? Styles.TipBoxImageSmall : Styles.TipBoxImage} />
                                                    {typeof (item?.price) === 'string' ?
                                                        <Text style={[Styles.TipBoxAmount, { color: Colors.Black }]}>{item?.price}</Text>
                                                        :
                                                        <Text style={[Styles.TipBoxAmount, { color: Colors.Black }]}>₹{item?.price}</Text>
                                                    }
                                                </View>
                                                {item?.isMostTipped && (
                                                    <Text style={[Styles.isMostTippedText, { color: Colors.AddbuttonTextColor }]}>{Strings?.mostTipped}</Text>
                                                )}
                                            </View>
                                        ))
                                        }
                                    </View>
                                </View>
                            </View>
                            <View style={[Styles.TotalContainer, { backgroundColor: Colors.ratingContainerYellowBg, borderTopColor: Colors.brightBorderColor, borderBottomColor: Colors.brightBorderColor, borderLeftColor: Colors.Transparent, borderRightColor: Colors.Transparent, }]}>
                                <View style={Styles.TotalInnerContainer}>
                                    <View style={Styles.TotalContainerEntry}>
                                        <Text style={[Styles.SmallText, { color: Colors.priceTextColour, }]} >{Strings?.ItemTotal   }</Text>
                                        <Text style={[Styles.SmallText, { color: Colors.priceTextColour, }]}>₹{DeliveryInfo_Details?.TotalPrice.toFixed(2)}</Text>
                                    </View>
                                    <View style={Styles.TotalContainerEntry}>
                                        <View>
                                            <Text style={[Styles.SmallText, { color: Colors.priceTextColour, }]}>{Strings?.deliveryCharge}</Text>
                                            <View style={[Styles.CustomUnderlineBlack, { borderColor: Colors.Black, }]} />
                                        </View>
                                        <Text style={[Styles.SmallText, { color: Colors.priceTextColour, }]} >₹{DeliveryInfo_Details?.DeliveryCharge}</Text>
                                    </View>
                                    <View style={Styles.TotalContainerEntry}>
                                        <Text style={[Styles.SmallText, { color: Colors.priceTextColour, }]}>{Strings?.taxes}</Text>
                                        <Text style={[Styles.SmallText, { color: Colors.priceTextColour, }]} >₹{DeliveryInfo_Details?.Taxed.toFixed(2)}</Text>
                                    </View>
                                    <View style={Styles.TotalContainerEntry} >
                                        <View>
                                            <Text style={[Styles.SmallText, { color: Colors.priceTextColour, }]}>{Strings?.donateText}</Text>
                                            <View style={[Styles.CustomUnderlineBlack, { borderColor: Colors.Black, }]} />
                                        </View>
                                        <TouchableOpacity style={Styles.DonateButton}>
                                            <Text style={[Styles.DonateButtonText, { color: Colors.AddbuttonTextColor, }]}>{Strings?.addText }</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={Styles.BottomTotalText}>
                                    <Text style={[Styles.GrandTotal, { color: Colors.Black }]}>{Strings?.grandTotal}</Text>
                                    <Text style={[Styles.GrandTotal, { color: Colors.Black }]} >₹{DeliveryInfo_Details?.Grand_Total.toFixed(2)}</Text>
                                </View>
                            </View>
                            <View style={[Styles.CovidParentContainer, { borderBottomColor: Colors.greyForBorder, backgroundColor: Colors.white }]}>
                                <View style={Styles.OrderTickContainer}>
                                    <TouchableOpacity
                                        onPress={() => setTickMark(!tickMark)}
                                        style={[Styles.TickBox, { borderColor: Colors.Black, }]} >
                                        {tickMark && (
                                            <View style={[Styles.TickBoxBG, { backgroundColor: Colors.ratingCOntainerBGColor, }]}>
                                                <Check_List_Selected />
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                    <Text style={[Styles.CovidHeader, { color: Colors.Black }]}>{Strings?.emergencyTextHeader}</Text>
                                </View>
                                <View style={Styles.CovidDescription}>
                                    <Text style={[Styles.SmallText , { color: Colors.priceTextColour,fontFamily:Fonts.accentFont }]}>{Strings?.covidText}</Text>
                                    <Text style={[Styles.SmallText, { color: Colors.priceTextColour, }]}> {Strings?.TreatText}</Text>
                                </View>
                            </View>
                            <View style={Styles.LowerDeliveryInstructionCOntainer}>
                                <View style={[Styles.DeliveryInstructionFirst, { backgroundColor: Colors.white, }]}>
                                    <View style={Styles.headerPlusButtonContainer}>
                                        <Text style={[Styles.TipHeaderText, { color: Colors.Black }]}>{Strings?.DeliveryInstruction}</Text>
                                        <TouchableOpacity >
                                            <Text style={[Styles.redButtonText, { color: Colors.AddbuttonTextColor }]}>{Strings?.changeText}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={Styles.OrderHandMe}>
                                        <Group_83 style={Styles.OfferSVG} />
                                        <View>
                                            <Text style={[Styles.SmallText, { marginBottom: 5, color: Colors.priceTextColour, }]}>{Strings?.handMeText}</Text>
                                            <View style={Styles.UnderlineWrapper}>
                                                <Text style={[Styles.UnderDotterText, { color: Colors.AddbuttonTextColor, }]}>{Strings?.voiceDirection }</Text>
                                                <View style={[Styles.CustomUnderline, { borderColor: Colors.AddbuttonTextColor, }]} />
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View style={[Styles.CommonBorder, { borderBottomColor: Colors.greyForBorder, }]} />

                                <View style={[Styles.DeliveryInstructionFirst, { backgroundColor: Colors.white, }]}>
                                    <View style={Styles.headerPlusButtonContainer}>
                                        <Text style={[Styles.TipHeaderText, { color: Colors.Black }]} >{Strings?.yourDetails}</Text>
                                        <TouchableOpacity >
                                            <Text style={[Styles.redButtonText, { color: Colors.AddbuttonTextColor }]}>{Strings?.changeText}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[Styles.CaptionText, { color: Colors.Black }]}>{DeliveryInfo_Details.customerName} {DeliveryInfo_Details.mobileNumber}</Text>
                                </View>

                                <View style={[Styles.CommonBorder, { borderBottomColor: Colors.greyForBorder, }]} />

                                <View style={[Styles.DeliveryInstructionFirst, { backgroundColor: Colors.white, }]}>
                                    <View style={Styles.headerPlusButtonContainer}>

                                        <Text style={[Styles.TipHeaderText, { color: Colors.Black }]} >{Strings?.forSomeOne}</Text>
                                        <TouchableOpacity >
                                            <Text style={[Styles.redButtonText, { color: Colors.AddbuttonTextColor }]}>{Strings?.addText}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={[Styles.SmallText, { color: Colors.priceTextColour, }]} >{Strings?.personalizedMessage}</Text>
                                </View>
                                <View style={[Styles.CommonBorder, { borderBottomColor: Colors.greyForBorder, }]} />

                            </View>
                            <View style={[Styles.Environmentwrapper, { backgroundColor: Colors.white }]}>
                                <Green_Leaf_Icon />
                                <View style={Styles.RightEnvContainer}>
                                    <Text style={[Styles.ClimateHeader, { color: Colors.Black, }]}>{Strings?.ClimateDelivery}</Text>
                                    <View style={Styles.LowerEnvContainer}>
                                        <Text style={[Styles.SmallText, Styles.FundText, { color: Colors.priceTextColour, }]}>{Strings?.climateDescription}</Text>
                                        <View style={Styles.KnowMoreWrapper}>
                                            <Text style={[Styles.redButtonText, { fontWeight: 600, color: Colors.AddbuttonTextColor }]} >{Strings?.knowMore} </Text>
                                            <Polygon_2 />
                                        </View>
                                        <Text style={[Styles.redButtonText, Styles.ClimateDescriptionText, { color: Colors.AddbuttonTextColor }]} >{Strings?.nonReturnableText}</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>

                    {/* bottom payment container */}
                    <View style={[Styles.LowerButtonContainer, { marginBottom: inset.bottom, bottom: inset.bottom + 10, backgroundColor: Colors.white, }]}>
                        <View style={Styles.PayBoxLeft}>
                            <View style={Styles.IconAndPayContainer}>
                                <G_Pay style={[Styles.Gpay, { borderColor: Colors.Black, }]} />
                                <Text style={[Styles.SmallText, { color: Colors.priceTextColour, }]}> {Strings?.payUsing}</Text>
                                <Polygon_4 />
                            </View>
                            <Text style={[Styles.GooglePay, { color: Colors.Black }]}> {Strings?.googlePay}</Text>
                        </View>
                        <View style={[Styles.placeOrderButton, { backgroundColor: Colors.AddButtonBG, }]}>
                            <View style={Styles.amountBox}>
                                <Text style={[Styles.TotalPriceButtonText, { color: Colors.conatsntWhite, }]}>₹{(DeliveryInfo_Details?.TotalPrice + DeliveryInfo_Details?.DeliveryCharge + DeliveryInfo_Details?.Taxed).toFixed(2)}</Text>
                                <Text style={[Styles.TotalPriceButtonTextDown, { color: Colors.conatsntWhite, }]}>{Strings?.totalText}</Text>
                            </View>
                            <TouchableOpacity style={Styles.PlaceOrderTextBox}>
                                <Text style={[Styles.PlaceOrderText, { color: Colors.conatsntWhite, }]}>{Strings?.placeOrder}</Text>
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
        borderTopRightRadius: 20,
        overflow: 'hidden',
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
        fontSize: 11,
        fontFamily:Fonts.accentFont
    },
    closeButton: {
        marginVertical: 8,
        marginHorizontal: 'auto',
        alignSelf: 'center',
        height: 40,
        width: 40,
        borderRadius: '50%',
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
        height: 100,
        width: '100%',
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
        fontFamily: Fonts.generalFont,
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
        fontSize: 10
    },
    ViewOffers: {
        fontSize: 12
    },
    TipContainer: {
        height: 140,
        borderBottomWidth: 1
    },
    TipHeaderText: {
        fontSize: 18,
        fontFamily: Fonts.generalFont,
        fontWeight: 600
    },
    TipBoxContainer: { 
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
    },

    TotalContainer: {
        height: 160,
        width: '100%',
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
        borderRadius: 2,
    },
    TickBoxBG: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        fontSize: 12,
        fontFamily:Fonts.generalFont,
        marginTop: 5
    },
    CaptionText: {
        marginTop: 5,
        marginLeft: 2,
        fontSize: 12,
    },
    LowerDeliveryInstructionCOntainer: {
        width: '100%',
        marginHorizontal: 'auto'
    },
    CommonBorder: {
        borderBottomWidth: 2,
    },
    UnderlineWrapper: {
    },
    UnderDotterText: {
        fontSize: 12,
    },
    CustomUnderline: {
        borderStyle: 'dashed',
        borderWidth: .5,
        marginTop: 2,
        width: '100%'
    },
    CookingInstructionContainer: {
        alignSelf: 'center',
        marginVertical: 10
    },
    CookingInstruction: {
        fontSize: 12,
        textAlign: 'center'
    },
    CustomUnderlineBlack: {
        borderStyle: 'dashed',
        borderWidth: .5,
        marginTop: 2,
    },
    DeliveryInstructionFirst: {
        width: '90%',
        marginHorizontal: 'auto',
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
    },
    Environmentwrapper: {
        width: '90%',
        margin: 'auto',
        marginBottom: 100,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    LeafAndHeader: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    ClimateHeader: {
        marginLeft: 10,
        fontSize: 16,
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
        // marginBottom: 10
    },
    LowerButtonContainer: {
        height: 70,
        width: '100%',
        marginHorizontal: 'auto',
        position: 'absolute',
        left: 0,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
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
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    amountBox: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    TotalPriceButtonText: {
        fontSize: 18,
        fontWeight: 600,
        fontFamily: Fonts.thinSpecial
    },
    TotalPriceButtonTextDown: {
        fontSize: 12,
        fontFamily: Fonts.thinSemi
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
        fontWeight: 500,
        fontFamily: Fonts.generalFont
    },
    contunue_icon: {
        marginLeft: 5,
        marginTop: 5,
        height: 5,
        width: 10
    }

})