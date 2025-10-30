import { View, TextInput, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'


//utility import
import { useThemeColors } from '../utils/ColorFile';
import Images from '../utils/LocalImages'

const HeaderSearchBar = () => {
  const Colors = useThemeColors()
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <TouchableWithoutFeedback accessible={true} >
      <View style={[Styles.headerSearchBar, { borderColor: Colors.greyForBorder, }]} >
        <Image source={Images.HeaderSearchIcon} style={Styles.HeaderSearchIcon} />
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder='Restaurant name, cuisine, or a dish...'
          allowFontScaling={false}
          placeholderTextColor={Colors.priceTextColour}
          style={{ color: Colors.priceTextColour }}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
const Styles = StyleSheet.create({
  headerSearchBar: {
    margin: 'auto',
    width: 367.46,
    height: 43,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8
  },
  HeaderSearchIcon: {
    marginHorizontal: 15,
    height: 20,
    width: 24
  },

})
export default HeaderSearchBar