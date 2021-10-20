import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { View, Text } from 'react-native';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATORS } from '../constants/routename';


const DrawNavigator = ()=>{
    const Drawer = createDrawerNavigator()

    return(
        <Drawer.Navigator>
            <Drawer.Screen name={HOME_NAVIGATORS} component={HomeNavigator} />
        </Drawer.Navigator>
        
    )
}

export default DrawNavigator