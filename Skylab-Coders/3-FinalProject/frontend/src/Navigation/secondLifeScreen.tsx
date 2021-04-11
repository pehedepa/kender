import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../pages/Dashboard'
import CreateAd from '../pages/CreateAd'
import Detail from '../pages/Detail'
import Profile from '../pages/Profile'

const UserSpaceStack = createStackNavigator()

export default function UserSpace () {
  return (
        <UserSpaceStack.Navigator
          initialRouteName='App'
          screenOptions={{
            headerShown: false
          }}
        >
            <UserSpaceStack.Screen name='Dashboard' component={Dashboard} />
            <UserSpaceStack.Screen name='CreateAd' component={CreateAd} />
            <UserSpaceStack.Screen name='Detail' component={Detail} />
            <UserSpaceStack.Screen name='Profile' component={Profile} />
        </UserSpaceStack.Navigator>
  )
}
