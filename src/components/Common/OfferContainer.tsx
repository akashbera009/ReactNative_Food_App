import { View, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

//util file 
import Images from '../../utils/LocalImages'

const OfferContainer = () => {
    return (
        <ScrollView  horizontal showsHorizontalScrollIndicator= {false}>
            <View style={Styles.OfferContainer}>
                <Image source={Images?.Offer} />
                <Image source={Images?.Discounts} />
                <Image source={Images?.Offer} />
            </View>
        </ScrollView>
    )
}
const Styles = StyleSheet.create({
    OfferContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        gap: 10,
        paddingHorizontal: 10 ,
        marginVertical: 8
    }
})

export default OfferContainer

