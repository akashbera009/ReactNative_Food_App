import React from 'react';
import 'react-native-reanimated';

// navigation import  
import AppNavigation from './src/navigation/AppNavigation';


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
  return (
    <ThemeProvider >
      <AppNavigation />
   </ThemeProvider>
  );
};

export default App;
