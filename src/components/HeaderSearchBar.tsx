import { View, TextInput, Image, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'


//utility import
import { useThemeColors } from '../utils/ColorFile';
import Images from '../utils/LocalImages'
import Fonts from '../utils/FontsFile';
import Strings from '../utils/Strings';

const HeaderSearchBar = () => {
  const Colors = useThemeColors()
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <View style={[Styles.headerSearchBar, { borderColor: Colors.greyForBorder, }]} >
      <Image source={Images.HeaderSearchIcon} style={Styles.HeaderSearchIcon} />
      <TextInput
        returnKeyType='search'
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder={Strings?.searchbarPlaceholder}
        allowFontScaling={false}
        placeholderTextColor={Colors.placeHolder}
        style={[Styles.SearchBar, { color: Colors.priceTextColour  }]}
      />
    </View>
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
  SearchBar: {
    fontFamily: Fonts.generalFont,
    width: '80%',
    paddingVertical: 8,

  },
  HeaderSearchIcon: {
    marginHorizontal: 15,
    height: 20,
    width: 24
  },

})
export default HeaderSearchBar