import { View, TextInput , Image , StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/ColorFile'

const HeaderSearchBar = () => {
    const[searchTerm , setSearchTerm] = useState('')
  return (
    <View style= {Styles.headerSearchBar} >
      <Image source= {require('../asstes/images/HeaderSearchIcon.png')} height={28} width={21.37} style={Styles.HeaderSearchIcon}/>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder='Restaurant name, cuisine, or a dish...'

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
        borderColor: Colors.greyForBorder,
        borderRadius: 8
    },
    HeaderSearchIcon: {
        marginHorizontal: 15
    },

})
export default HeaderSearchBar