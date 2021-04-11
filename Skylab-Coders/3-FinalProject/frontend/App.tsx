import 'react-native-gesture-handler'
import React from 'react'
import { LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import store from './src/redux/stores/configureStore'
import UserSpace from './src/Navigation/secondLifeScreen'
import LoginSpace from './src/Navigation/authStackScreen'

const Stack = createStackNavigator()

export default function App () {
  const [fontsLoaded] = useFonts({
    MontserratExtraLight: require('./src/assets/fonts/Montserrat-ExtraLight.ttf'),
    MontserratLight: require('./src/assets/fonts/Montserrat-Light.ttf'),
    MontserratThin: require('./src/assets/fonts/Montserrat-Thin.ttf'),
    MontserratMedium: require('./src/assets/fonts/Montserrat-Medium.ttf'),
    MontserratRegular: require('./src/assets/fonts/Montserrat-Regular.ttf'),
    OpenSansBold: require('./src/assets/fonts/OpenSans-Bold.ttf'),
    OpenSansExtraBold: require('./src/assets/fonts/OpenSans-ExtraBold.ttf'),
    OpenSansLight: require('./src/assets/fonts/OpenSans-Light.ttf'),
    OpenSansRegular: require('./src/assets/fonts/OpenSans-Regular.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  LogBox.ignoreAllLogs()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='LandingScreen'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='Login' component={LoginSpace} />
          <Stack.Screen name='App' component={UserSpace} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
