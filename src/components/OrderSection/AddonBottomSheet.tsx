import { View, Text, StyleSheet, Animated, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

// import navigaton  
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigation';
import { RouteProp } from '@react-navigation/native';

// import utils 
import Colors from '../../utils/ColorFile';
import Images from '../../utils/LocalImages';
import Fonts from '../../utils/FontsFile';
//const Colors = useColors() 

import { useSafeAreaInsets } from 'react-native-safe-area-context';

type AddonBottomSheetProps = {
  route: RouteProp<RootStackParamList, 'ExtraItemAdd'>;
};


const AddonBottomSheet = ({ route }: AddonBottomSheetProps) => {
  const slide = useRef(new Animated.Value(800)).current;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { ExtraItem } = route.params;
  const [counter, setCounter] = useState(1);
  const decreaseCounter = () => {
    if (counter > 1)
      setCounter(counter - 1)
  }
  const increaseCounter = () => {
    if (counter < 10)
      setCounter(counter + 1)
  }
  const slideUp = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slide, {
      toValue: 800,
      duration: 300,
      useNativeDriver: true,
    }).start();
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
  const inset = useSafeAreaInsets();
  return (
    <View style={Styles.backDrop}>
      <Animated.View style={[Styles.bottomSheet, { transform: [{ translateY: slide }] }]}>
        <View style={Styles.OuterContainer}>
          <TouchableOpacity onPress={closeModal} style={Styles.closeButton}>
            <Image source={Images.Vector_27} style={Styles.closeBtnImage} />
          </TouchableOpacity>

          <View style={Styles.InnerContainer}>
            <Image source={ExtraItem.Image} style={Styles.OrderableImage} />
            <View style={Styles.DishContainer}>

              <Text style={Styles.DishName}>{ExtraItem.name}</Text>

              <View style={Styles.ratingAndBestSellerContainer}>
                <View style={Styles.RatingContainer}>
                  <View style={Styles.StarContainer}>
                    <Image source={Images.Vector_15} style={Styles.Star} />
                    <Image source={Images.Vector_15} style={Styles.Star} />
                    <Image source={Images.Vector_15} style={Styles.Star} />
                    <Image source={Images.Vector_15} style={Styles.Star} />
                    <Image source={Images.Vector_16} style={Styles.HalfStar} />
                    <Image source={Images.Vector_17} style={Styles.HalfStar} />
                  </View>
                  <Text style={Styles.ratingContainerText} >{ExtraItem.ratingCount}</Text>
                </View>
                <View style={Styles.bestsellerTag}><Text style={Styles.bestsellerTagText} >Bestseller</Text></View>

              </View>
              <Text style={Styles.DishDescription}>{ExtraItem.description} ...read more</Text>

              {/* Border  */}
              <View style={Styles.Border} />

              <Text style={Styles.addonHeaderText}>Add On</Text>
              <Text style={Styles.addonDescriptionText} >You can choose upto 4 options</Text>

              {/* extra addon section */}
              <View style={Styles.ExtraItemList}>
                <ScrollView  >
                  {ExtraItem.addon.map((extraItem, idx) => (
                    <View key={idx} style={Styles.ExtraItemListEntry}>
                      <View style={Styles.checkBoxAndPrice}>
                        <Image source={Images.Veg_Icon} />
                        <Text style={Styles.ExtraItemName}>{extraItem.extraItemName}</Text>
                      </View>
                      <View style={Styles.checkBoxAndPrice}>
                        <Text style={Styles.priceText}>₹{extraItem.price}</Text>
                        <TouchableOpacity style={Styles.checkBox} onPress={() => console.log('hi')}>
                          <View>
                            <Image source={Images.Check_List_Selected} style={Styles.tickMarkImage} />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </ScrollView>
              </View>

              <Text style={Styles.ChooseProtienText}>Choose Your Protien </Text>
              <Text style={Styles.ChooseProtienSubText} >You can choose upto 3 options</Text>
              <View style={Styles.ChooseProtienList} >
                <ScrollView  >
                  <View style={Styles.ExtraItemListEntry}>
                    <View style={Styles.checkBoxAndPrice}>
                      <Image source={Images.Veg_Icon} />
                      <Text style={Styles.ExtraItemName}>BBQ Protien</Text>
                    </View>
                    <View style={Styles.checkBoxAndPrice}>
                      <Text style={Styles.priceText}>₹40</Text>
                      <TouchableOpacity style={Styles.checkBox} onPress={() => console.log('hi')}>
                        <View>
                          <Image source={Images.Check_List_Selected} style={Styles.tickMarkImage} />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </View>

              {/* bottom button container  */}
              <View style={[Styles.AddonButtonContainer, { bottom: inset.bottom - 20 }]}>
                <View style={Styles.CounterContainer}>
                  <TouchableOpacity onPress={decreaseCounter} style={{ padding: 12 }}>
                    <Image source={Images.Minus_Symbol} />
                  </TouchableOpacity>
                  <Text style={Styles.counterText}>{counter}</Text>
                  <TouchableOpacity onPress={increaseCounter} style={{ padding: 10 }}>
                    <Image source={Images.Plus_Symbol} />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={Styles.AddonButton}>
                  <Text style={Styles.AddonButtonText}>Add ₹{ExtraItem.price}</Text>
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </View>
      </Animated.View>
    </View>
  );
};
export const Styles = StyleSheet.create({
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

  closeButton: {
    marginVertical: 8,
    marginHorizontal: 'auto',
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
  OrderableImage: {
    height: 256,
    width: '100%',
    borderRadius: 19,
  },
  DishContainer: {
    width: '95%',
    marginHorizontal: 'auto',
  },
  DishName: {
    marginTop: 5 , 
    fontSize: 16,
    fontFamily: Fonts.generalFont
  },
  ratingAndBestSellerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between'
  },
  RatingContainer: {
    borderWidth: .5,
    borderRadius: 4,
    borderColor: Colors.ratingContainerTransparentBorderColor,
    backgroundColor: Colors.ratingContainerYellowBg,
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
    color: Colors.Black,
    fontSize: 8
  },
  bestsellerTag: {
    borderWidth: .5,
    borderRadius: 4,
    borderColor: Colors.bestSellerBorder,
    backgroundColor: Colors.bestSellerBG,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 4,
  },

  bestsellerTagText: {
    color: Colors.bestSellerBorder,
    fontSize: 10
  },

  DishDescription: {
    marginTop: 8,
    fontSize: 11,
    width: 221,
    color: Colors.priceTextColour
  },
  Border: {
    width: '100%',
    borderBottomColor: Colors.LighterGreyForBorder,
    borderWidth: .5,
    marginVertical: 10
  },
  addonHeaderText: {
    fontSize: 14,
    fontFamily: Fonts.generalFont,
  },
  addonDescriptionText: {
    fontSize: 11,
    color: Colors.priceTextColour,
    fontFamily: Fonts.generalFont,
  },
  ExtraItemList: {
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    alignItems: 'center',
    marginHorizontal: 'auto',
    gap: 10,
    minHeight: 110,
    maxHeight: 310,
    marginTop: 5,
  },

  ExtraItemListEntry: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10, 
  },
  checkBoxAndPrice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ExtraItemName: {
    fontSize: 12,
    color: Colors.priceTextColour,
    marginHorizontal: 4
  },
  checkBox: {
    height: 16,
    width: 16,
    borderRadius: 2,
    padding: 2,
    marginHorizontal: 5,
    borderColor: 'black',
    borderWidth: .2,
  },
  priceText: {
    color: Colors.priceTextColour,
    fontSize: 12
  },
  tickMarkImage: {
  },
  counterText: {
    fontSize: 20,
  },
  ChooseProtienList: {
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    alignItems: 'center',
    marginHorizontal: 'auto',
    gap: 10,
    minHeight: 80,
    maxHeight: 310,
    marginTop: 5,
  },
  ChooseProtienText: {
    fontSize: 14,
    fontFamily: Fonts.generalFont,
  },
  ChooseProtienSubText: {
    fontSize: 11,
    color: Colors.priceTextColour,
    fontFamily: Fonts.generalFont,
  },

  AddonButtonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingVertical: 10,
  },
  AddonButton: {
    width: 270,
    height: 40,
    backgroundColor: Colors.AddButtonBG,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  AddonButtonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: 600,
    fontFamily: Fonts.generalFont
  },
  CounterContainer: {
    height: 40,
    width: 87,
    borderColor: Colors.AddbuttonTextColor,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: Colors.AddbuttonBgColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  }
})
export default AddonBottomSheet