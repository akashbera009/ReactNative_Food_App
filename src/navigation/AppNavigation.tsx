import React from 'react'

// navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// screens 
import SideBarScreen from '../screens/SideBarScreen';
import HomeScreen from '../screens/HomeScreen'
import OrderScreen from '../screens/OrderScreen'
import ExtraItemAddScreen from '../screens/ExtraItemAddScreen';
import HelpScreen from '../screens/HelpScreen';
import ProScreen from '../screens/ProScreen';
import CheckOutScreen from '../screens/CheckOutScreen';
import AuthScreen from '../screens/AuthScreen';

// import { SafeAreaView } from 'react-native-safe-area-context';

export type RootStackParamList = {
    AuthScreen: undefined; 
    OTPVerificationScreen:{ mobilenumber :string}; 
    HomeScreen: undefined;
    OrderScreen: { DishItem: Restaurant_Dish_Data_Type };
    ExtraItemAdd: { ExtraItem: Extra_Addon_Data_Type };
    CheckOutScreen: undefined
    HelpScreen: undefined;
    ProScreen: undefined;
};
export type RootDrawerParamList = {
    Main: undefined;
    Help: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator()

function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }} >
            <Stack.Screen
                name='AuthScreen'
                component={AuthScreen}
            />
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
            <Stack.Screen
                name='CheckOutScreen'
                component={CheckOutScreen}
                options={{
                    presentation: 'transparentModal',
                }}
            />
            <Stack.Screen
                name='HelpScreen'
                component={HelpScreen}
            />
            <Stack.Screen
                name='ProScreen'
                component={ProScreen}
            />
        </Stack.Navigator>
    )
}
export default function AppNavigation() {
    return (
        <GestureHandlerRootView>
                <NavigationContainer>
                    <Drawer.Navigator
                        screenOptions={{ headerShown: false, drawerPosition: 'right', }}
                        drawerContent={(props) => <SideBarScreen{...props} />}>
                        <Drawer.Screen name='Main' component={StackNavigator} />
                        <Drawer.Screen name='Help' component={HelpScreen} />
                    </Drawer.Navigator>
                </NavigationContainer>
        </GestureHandlerRootView>
    )
}