import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { Colors } from "../shared/tokens";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import {useFonts} from 'expo-font'

SplashScreen.preventAutoHideAsync()

export default function RootLayout () {
    const insets = useSafeAreaInsets()
   const [loaded, error] = useFonts({
        FiraSans: require('../assets/fonts/FiraSans-Regular.ttf'),
        FiraSansSemibold: require('../assets/fonts/FiraSans-SemiBold.ttf')
    })

useEffect(()=> {
if(loaded) {
    SplashScreen.hideAsync()
} else if (error) {
    throw error;
}
},[loaded, error])

if(!loaded) {
    return null
}

    return (
        <SafeAreaProvider> 
        <StatusBar style="light"/>
<Stack
screenOptions={ {
    statusBarBackgroundColor: Colors.black,
    contentStyle: {
        backgroundColor: Colors.black,
        paddingTop: insets.top,
        paddingBottom: insets.bottom
    },
    // headerShown: false
}}
>
    <Stack.Screen name="login"/>
    <Stack.Screen name="restore" options={{
        presentation: 'card'
    }}/>
</Stack>
</SafeAreaProvider>
)
}