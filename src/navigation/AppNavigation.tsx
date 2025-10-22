import React from 'react'

// navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens 
import HomeScreen from '../screens/HomeScreen'
import OrderScreen from '../screens/OrderScreen'
import ExtraItemAddScreen from '../screens/ExtraItemAddScreen';

// import navigation
import { NavigationContainer } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';

export type RootStackParamList = {
    HomeScreen: undefined;
    OrderScreen: { DishItem: Restaurant_Dish_Data_Type };
    ExtraItemAdd: { ExtraItem: Extra_Addon_Data_Type };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
    return ( 
            <NavigationContainer>
                <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }} >
                    <Stack.Screen
                        name='HomeScreen'
                        component={HomeScreen}
                    />
                    <Stack.Screen
                        name='OrderScreen'
                        component={OrderScreen}  
                    />
                    <Stack.Screen
                       name='ExtraItemAdd'
                       component={ExtraItemAddScreen}
                        options={{
                            presentation: 'transparentModal',
                        }}  
                    />
                </Stack.Navigator>
            </NavigationContainer>
    )
}
