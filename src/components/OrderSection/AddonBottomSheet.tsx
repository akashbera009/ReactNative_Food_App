import { View, Text, StyleSheet, Animated, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

// import navigaton  
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// import utils 
import { useThemeColors } from '../../utils/ColorFile';
import Images from '../../utils/LocalImages';
import Fonts from '../../utils/FontsFile';
import { Check_List_Selected } from '../../utils/SVGFils';

// safearea import
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AddonBottomSheet = ({ route }: AddonBottomSheetProps ) => {
  const Colors = useThemeColors();
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
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  console.log(selectedItems)
  const toggleSelection = (idx: number) => {
    if (selectedItems.includes(idx)) {
      setSelectedItems(selectedItems.filter(item => item !== idx));
    } else {
      setSelectedItems([...selectedItems, idx]);
    }
  };
  return (
    <View style={[Styles.backDrop, { backgroundColor: Colors.SemiTransparent, }]}>
      <Animated.View style={[Styles.bottomSheet, { transform: [{ translateY: slide }] }]}>
        <View style={Styles.OuterContainer}>
          <TouchableOpacity onPress={closeModal} style={[Styles.closeButton, { backgroundColor: Colors.Black, }]}>
            <Image source={Images.Vector_27} style={[Styles.closeBtnImage, { tintColor: Colors.white }]} />
          </TouchableOpacity>

          <View style={[Styles.InnerContainer, { backgroundColor: Colors.white, }]}>
            <Image source={ExtraItem.Image} style={Styles.OrderableImage} />
            <View style={Styles.DishContainer}>

              <Text style={[Styles.DishName, { color: Colors.Black }]}>{ExtraItem.name}</Text>

              <View style={Styles.ratingAndBestSellerContainer}>
                <View style={[Styles.RatingContainer, { borderColor: Colors.ratingContainerTransparentBorderColor, backgroundColor: Colors.ratingContainerYellowBg, }]}>
                  <View style={Styles.StarContainer}>
                    <Image source={Images.Vector_15} style={Styles.Star} />
                    <Image source={Images.Vector_15} style={Styles.Star} />
                    <Image source={Images.Vector_15} style={Styles.Star} />
                    <Image source={Images.Vector_15} style={Styles.Star} />
                    <Image source={Images.Vector_16} style={Styles.HalfStar} />
                    <Image source={Images.Vector_17} style={Styles.HalfStar} />
                  </View>
                  <Text style={[Styles.ratingContainerText, { color: Colors.Black, }]} >{ExtraItem.ratingCount}</Text>
                </View>
                <View style={[Styles.bestsellerTag, { borderColor: Colors.bestSellerBorder, backgroundColor: Colors.bestSellerBG, }]}>
                  <Text style={[Styles.bestsellerTagText, { color: Colors.bestSellerBorder, }]} >Bestseller</Text>
                </View>

              </View>
              <Text style={[Styles.DishDescription, { color: Colors.priceTextColour }]}>{ExtraItem.description} ...read more</Text>

              {/* Border  */}
              <View style={[Styles.Border, { borderBottomColor: Colors.LighterGreyForBorder, }]} />

              <Text style={[Styles.addonHeaderText, { color: Colors.Black }]}>Add On</Text>
              <Text style={[Styles.addonDescriptionText, { color: Colors.priceTextColour, }]} >You can choose upto 4 options</Text>

              {/* extra addon section */}
              <View style={Styles.ExtraItemList}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  {ExtraItem.addon.map((extraItem:Addon_Type , idx:number) => (
                    <View key={idx} style={Styles.ExtraItemListEntry}>
                      <View style={Styles.checkBoxAndPrice}>
                        <Image source={Images.Veg_Icon} />
                        <Text style={[Styles.ExtraItemName, { color: Colors.priceTextColour, }]}>{extraItem.extraItemName}</Text>
                      </View>
                      <View style={Styles.checkBoxAndPrice}>
                        <Text style={[Styles.priceText, { color: Colors.priceTextColour, }]}>₹{extraItem.price}</Text>

                        <TouchableOpacity
                          onPress={() => toggleSelection(idx)}
                          style={[Styles.TickBox, { borderColor: Colors.Black, }]} >
                          {selectedItems.includes(idx) && (
                            <View style={[Styles.TickBoxBG, { backgroundColor: Colors.ratingCOntainerBGColor, }]}>
                              <Check_List_Selected />
                            </View>
                          )}
                        </TouchableOpacity>

                      </View>
                    </View>
                  ))}
                </ScrollView>
              </View>

              <Text style={[Styles.ChooseProtienText, { color: Colors.Black }]}>Choose Your Protien </Text>
              <Text style={[Styles.ChooseProtienSubText, { color: Colors.priceTextColour, }]} >You can choose upto 3 options</Text>

              <View style={Styles.ChooseProtienList} >
                <ScrollView  >
                  <View style={Styles.ExtraItemListEntry}>
                    <View style={Styles.checkBoxAndPrice}>
                      <Image source={Images.Veg_Icon} />
                      <Text style={[Styles.ExtraItemName, { color: Colors.priceTextColour, }]}>BBQ Protien</Text>
                    </View>
                    <View style={Styles.checkBoxAndPrice}>
                      <Text style={[Styles.priceText, { color: Colors.priceTextColour }]}>₹40</Text>
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
              <View style={[Styles.AddonButtonContainer, { bottom: inset.bottom - 10, backgroundColor: Colors.white, }]}>
                <View style={[Styles.CounterContainer, { borderColor: Colors.AddbuttonTextColor, backgroundColor: Colors.AddbuttonBgColor, }]}>
                  <TouchableOpacity onPress={decreaseCounter} style={{ padding: 12 }}>
                    <Image source={Images.Minus_Symbol} />
                  </TouchableOpacity>
                  <Text style={[Styles.counterText, { color: Colors.Black }]}>{counter}</Text>
                  <TouchableOpacity onPress={increaseCounter} style={{ padding: 10 }}>
                    <Image source={Images.Plus_Symbol} />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={[Styles.AddonButton, { backgroundColor: Colors.AddButtonBG, }]}>
                  <Text style={[Styles.AddonButtonText, { color: Colors.conatsntWhite, }]}>Add ₹{ExtraItem.price * counter}</Text>
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
    borderTopLeftRadius: 20,
    position: 'relative',
  },

  closeButton: {
    marginVertical: 8,
    marginHorizontal: 'auto',
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
    marginTop: 5,
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
    fontSize: 8
  },
  bestsellerTag: {
    borderWidth: .5,
    borderRadius: 4, 
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 4,
  },

  bestsellerTagText: { 
    fontSize: 10
  },

  DishDescription: {
    marginTop: 8,
    fontSize: 11,
    width: 221, 
  },
  Border: {
    width: '100%', 
    borderWidth: .5,
    marginVertical: 10
  },
  addonHeaderText: {
    fontSize: 14,
    fontFamily: Fonts.generalFont,
  },
  addonDescriptionText: {
    fontSize: 11, 
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
    maxHeight: 210,
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
    fontSize: 12
  },
  tickMarkImage: {
  },
  TickBox: {
    height: 16,
    width: 16,
    borderWidth: 1, 
    borderRadius: 2,
    marginHorizontal: 5
  },
  TickBoxBG: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 2
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
    fontFamily: Fonts.generalFont,
  },

  AddonButtonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  AddonButton: {
    width: 270,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  AddonButtonText: {
    fontSize: 20,
    fontWeight: 600,
    fontFamily: Fonts.generalFont
  },
  CounterContainer: {
    height: 40,
    width: 87,
    borderWidth: 1,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  }
})
export default AddonBottomSheet