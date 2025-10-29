import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

// utility import 
import Images from '../utils/LocalImages'
import Colors from '../utils/ColorFile'
import Fonts from '../utils/FontsFile'

const HeaderBadge = () => {

    return (
        <ScrollView style={Styles.BadgeBoxContainer} horizontal showsHorizontalScrollIndicator={false}>
            <View style={Styles.BadgeBox}>
                <View style={Styles.BadgeBoxInner}>
                    <Text style={Styles.BadgeText} allowFontScaling= {false}>Max </Text>
                    <Text style={Styles.BadgeText} allowFontScaling= {false}>Safety</Text>
                </View>
            </View>
            <View style={Styles.BadgeBox}>
                <Image source={Images.Group_16} style={Styles.ProSvgIcon} />
                <Text style={Styles.BadgeText} allowFontScaling= {false}>PRO</Text>

            </View>
            <View style={Styles.BadgeBox}>
                <Text style={Styles.BadgeText} allowFontScaling= {false}>Cuisines</Text>
                <Image source={Images.Vector_4} />
            </View>
            <View style={Styles.BadgeBox}>
                <View style={Styles.RatingContainer}>
                    <Image source={Images.BlackStar} style={Styles.BlackRatingsStar} />
                    <Text style={Styles.BadgeText} allowFontScaling= {false}>Rating</Text>
                </View>
            </View>
            <View style={Styles.BadgeBox}>
                <Image source={Images.Group_12} height={20} width={20} />
                <Text style={Styles.BadgeText} allowFontScaling= {false}>Popular</Text>
            </View>
        </ScrollView>
    )
}
const Styles = StyleSheet.create({


    BadgeBoxContainer: {
        display: 'flex',
        flexDirection: 'row',
        maxHeight: 50, 
        marginLeft: 5
    },
    BadgeBox: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 30,
        width: 'auto',
        borderWidth: 1,
        borderColor: Colors.brightBorderColor,
        backgroundColor: Colors.white,
        borderRadius: 8,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 5,
        margin: 8
    },
    ProSvgIcon: {
        height: 18,
        width: 18
    },
    RatingContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    },
    BlackRatingsStar: {
        height: 8,
        width: 8,
    },
    BadgeBoxInner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: 8,
    },
    BadgeText: {
        fontSize: 12,
        fontFamily: Fonts.generalFont,
        lineHeight: 11,
        fontWeight: 400
    },

})
export default HeaderBadge