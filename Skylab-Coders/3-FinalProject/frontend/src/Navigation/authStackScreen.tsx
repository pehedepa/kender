import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CreateAcc from '../pages/CreateAcc'
import Login from '../pages/Login'

const LoginSpaceStack = createStackNavigator()

export default function LoginSpace () {
  return (
        <LoginSpaceStack.Navigator
          initialRouteName='LoginStack'
          screenOptions={{
            headerShown: false
          }}
        >
          <LoginSpaceStack.Screen name='Login' component={Login} />
          <LoginSpaceStack.Screen name='CreateAcc' component={CreateAcc} />
        </LoginSpaceStack.Navigator>
  )
}
