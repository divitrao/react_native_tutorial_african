import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { LOGIN, REGISTER } from '../constants/routename';
import login from '../screens/Login'
import register from '../screens/Register'

const AuthNavigator = ()=>{
    const Stack = createStackNavigator()

    return(

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={LOGIN} component={login} />
            <Stack.Screen name={REGISTER} component={register} />
        </Stack.Navigator>
        
    )
}

export default AuthNavigator