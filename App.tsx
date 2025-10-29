import React from 'react';

// navigation import  
import AppNavigation from './src/navigation/AppNavigation';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
import 'react-native-reanimated';


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

import { ThemeProvider } from './src/context/ThemeContext'

const App = () => {
  // const inset = useSafeAreaInsets();

  return (

    <ThemeProvider >
      {/* // <View style={{ flex: 1, paddingBottom: inset.bottom }}> */}
      <AppNavigation />
      {/* // </View> */}

    </ThemeProvider>
  );
};

export default App;
