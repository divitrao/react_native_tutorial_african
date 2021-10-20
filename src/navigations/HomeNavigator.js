import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { CONTACT, CONTACT_DETAIL, CREATE_CONTACT, SETTINGS } from '../constants/routename';
import contact from '../screens/Contact';
import contactDetail from '../screens/ContactDetail'
import createContact from '../screens/CreateContact'
import settings from '../screens/Settings'
const HomeNavigator = ()=>{
    const Stack = createStackNavigator()

    return(

        <Stack.Navigator>
            <Stack.Screen name={CONTACT} component={contact} />
            <Stack.Screen name={CONTACT_DETAIL} component={contactDetail} />
            <Stack.Screen name={CREATE_CONTACT} component={createContact} />
            <Stack.Screen name={SETTINGS} component={settings} />
        </Stack.Navigator>
        
    )
}

export default HomeNavigator