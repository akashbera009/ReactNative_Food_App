import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ColorsLight = {
  white: '#ffffff',
  conatsntWhite : '#ffffffff',
  greyForBorder: '#c4c4c494',
  brightBorderColor: '#E5E5E5',
  ragingsBackground: '#2B7D0F',
  ratingCOntainerBGColor: '#4AB425',
  boxShadowColor: '#00000067',
  priceTextColour: '#817070',
  LighterGreyForBorder: '#aaa6a621',
  DeliveryDetailsNavbarColor: '#8c7b7b44',
  Black: '#000000',
  Transparent: 'rgba(0,0,0,0.1)',
  SemiTransparent: 'rgba(0,0,0,0.7)',
  SemiTransparent2: 'rgba(0, 0, 0, 0.38))',
  ActiveTabTextColor: '#8C7B7B',
  offerTextBgColor: '#1A30F3',
  RecomemdedTextColor: '#3C3636',
  AddbuttonBgColor: '#FFECEC',
  AddbuttonTextColor: '#F60F0F',
  CursorBorderColor: '#A4A0A0',
  CursorBGColor: '#C4C4C4',
  ratingContainerYellowBg: '#fff48f48',
  ratingContainerTransparentBorderColor: '#ebee3c12',
  ratingContainerYellowBorderColor: '#EAEE3C',
  bestSellerBorder: '#E41515',
  bestSellerBG: '#ffa9a995',
  AddButtonBG: '#CB202D',
  maxSafetyGreenBG: '#196B44',
  maxSafetyYellowBG: '#EDD925',
  OfferSectionBGColor: '#F8F4F4',
};

const ColorsDark = {
  white: '#1B1212',
  conatsntWhite : '#ffffffff',
  greyForBorder: '#3a3a3a',
  brightBorderColor: '#656565ff',
  ragingsBackground: '#2B7D0F',
  ratingCOntainerBGColor: '#4AB425',
  boxShadowColor: '#ffffff22',
  priceTextColour: '#d1cfcf',
  LighterGreyForBorder: '#555555',
  DeliveryDetailsNavbarColor: '#5a5959ff',
  Black: '#ffffff',
  Transparent: 'rgba(255,255,255,0.1)',
  SemiTransparent: 'rgba(77, 76, 76, 0.7)',
  SemiTransparent2: 'rgba(206, 203, 203, 0.38))',
  ActiveTabTextColor: '#C4BFBF',
  offerTextBgColor: '#3D4DF3',
  RecomemdedTextColor: '#E2E2E2',
  AddbuttonBgColor: '#4A1A1A',
  AddbuttonTextColor: '#FF6B6B',
  CursorBorderColor: '#BFBFBF',
  CursorBGColor: '#8C8C8C',
  ratingContainerYellowBg: '#fff48f33',
  ratingContainerTransparentBorderColor: '#ebee3c22',
  ratingContainerYellowBorderColor: '#EAEE3C',
  bestSellerBorder: '#FF4C4C',
  bestSellerBG: '#552121',
  AddButtonBG: '#E74C3C',
  maxSafetyGreenBG: '#196B44',
  maxSafetyYellowBG: '#F1C40F',
  OfferSectionBGColor: '#1E1E1E',
};

export const useThemeColors = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeColors must be used within a ThemeProvider");
  }

  const { isDarkMode } = context;
  return isDarkMode === 'dark' ? ColorsDark : ColorsLight;
};

export { ColorsLight, ColorsDark };
