import { View, Text,TextInput } from 'react-native'
import React from 'react'
import Home  from "../src/components/Index";
// const originalTextRender = Text.render;
// const originalTextInputRender = TextInput.render;
// Text.render = function (...args) {
//   const origin = originalTextRender.apply(this, args);

//   return React.cloneElement(origin, {
//     allowFontScaling: false,
//   });
// };
// TextInput.render = function (...args) {
//   const origin = originalTextInputRender.apply(this, args);

//   return React.cloneElement(origin, {
//     allowFontScaling: false,
//   });
// };
const App = () => {
  return (
    <View>
      <Home/>
    </View>
  )
}

export default App