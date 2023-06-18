import React, { useEffect } from 'react'
import { Platform, StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'

import Routes from './src/routes'
import dark from './src/themes/dark'

import { ThemeProvider } from 'styled-components/native'


export default function App() {

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide()
    }
  }, [])

  return (
    <ThemeProvider theme={dark}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor='transparent'
          translucent
        />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  )
}