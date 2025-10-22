import React from 'react';
import { Text, TextInput, View } from 'react-native';

// navigation import  
import AppNavigation from './src/navigation/AppNavigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Optional: Disable font scaling globally (uncomment if needed)
/*
const originalTextRender = Text.render;
const originalTextInputRender = TextInput.render;

Text.render = function (...args) {
  const origin = originalTextRender.apply(this, args);
  return React.cloneElement(origin, {
    allowFontScaling: false,
  });
};

TextInput.render = function (...args)  {
  const origin = originalTextInputRender.apply(this, args);
  return React.cloneElement(origin, {
    allowFontScaling: false,
  });
};
*/

const App = () => {
  // const inset = useSafeAreaInsets();

  return (
    // <View style={{ flex: 1, paddingBottom: inset.bottom }}>
      <AppNavigation />
    // </View>
  );
};

export default App;
