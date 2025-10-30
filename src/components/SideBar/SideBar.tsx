import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React , {useContext} from 'react'

// utils import 
import Images from '../../utils/LocalImages'
import { useThemeColors } from '../../utils/ColorFile';

// safearea imports
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// navigation imports
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// context import
import { ThemeContext } from '../../context/ThemeContext';

export default function SideBar() { 
  const Colors = useThemeColors();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const inset = useSafeAreaInsets();

  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error("TodoContext must be used within a TodoProvider");
  }
  
  const { isDarkMode, setIsDarkMode } = context;
  return (
    <View style={{ flex:1 ,backgroundColor:Colors.greyForBorder}}>
      <View style={[Styles.menuOptionsContainer ,{paddingTop: inset.top + 20}]}>
        <TouchableOpacity style={Styles.SingleEntry}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={Images.Home_Icon} style={[Styles.EntryImage,{tintColor:Colors.Black}]} />
          <Text style={[Styles.MenuEntryText, {color:Colors.Black}]} >Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.SingleEntry}>
          <Image source={Images.Chat_Icon} style={[Styles.EntryImage,{tintColor:Colors.Black}]} />
          <Text style={[Styles.MenuEntryText, {color:Colors.Black}]} >Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.SingleEntry}>
          <Image source={Images.Settings_Icon} style={[Styles.EntryImage,{tintColor:Colors.Black}]} />
          <Text style={[Styles.MenuEntryText, {color:Colors.Black}]} >Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.SingleEntry}
          onPress={() => navigation.navigate('HelpScreen')}>
          <Image source={Images.Help_Icon} style={[Styles.EntryImage,{tintColor:Colors.Black}]} />
          <Text style={[Styles.MenuEntryText, {color:Colors.Black}]} >Help</Text>
        </TouchableOpacity>


        <View style={[Styles.BottomContainer, { bottom: inset.bottom }]}>
          <TouchableOpacity
            style={[Styles.LogoutContainer]}
             onPress={() => setIsDarkMode(isDarkMode === 'light' ? 'dark' : 'light')}
          >
            <Image source={Images.Mode_Icon} style={[Styles.LogoutIcon,{tintColor:Colors.Black}]} />
            <Text style={[Styles.LogOutText , {color:Colors.Black}]}>Mode Change</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('AuthScreen')}
            style={[Styles.LogoutContainer]}
          >
            <Image source={Images.logout_Icon} style={[Styles.LogoutIcon,{tintColor:Colors.Black}]} />
            <Text style={[Styles.LogOutText, {color:Colors.Black}]}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  profileImage: {
    height: 60,
    width: 60,
    marginHorizontal: 'auto'
  },
  menuOptionsContainer: {
    width: '100%',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    marginLeft: 10,
  },
  SingleEntry: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  EntryImage: {
    height: 20,
    width: 20,
    margin: 10
  },
  MenuEntryText: {
    fontSize: 16,
    fontWeight: 500
  },
  BottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    width: '100%',
  },
  LogoutContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  LogoutIcon: {
    height: 22,
    width: 22,
    margin: 10,
    marginLeft: 10
  },
  LogOutText: {
    fontSize: 18,
    fontWeight: 600
  }
})