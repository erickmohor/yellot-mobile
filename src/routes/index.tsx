import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ChartLine, House } from 'phosphor-react-native'

import dark from '../themes/dark'
import { Home } from '../screens/Home'
import { Statistics } from '../screens/Statistics'


export default function Routes() {
  const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: dark.COLORS.PURPLE_500,
        tabBarInactiveTintColor: dark.COLORS.DARK_GRAY_200,
        tabBarStyle: {
          height: 50,
          position: 'absolute',
          bottom: 20,
          borderRadius: 90,
          backgroundColor: dark.COLORS.YELLOW_300,
          marginHorizontal: 25,
          paddingBottom: 2,
        },
        tabBarLabelStyle: {
          fontFamily: dark.FONT_FAMILY.REGULAR,
        }
      }}>

      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Início',
          tabBarIcon: ({ size, color }) => <House size={size} color={color} />
        }}
      />

      <Screen
        name="Statistics"
        component={Statistics}
        options={{
          title: 'Estatísticas',
          tabBarIcon: ({ size, color }) => <ChartLine size={size} color={color} />
        }}
      />
      
    </Navigator>
  )
}
