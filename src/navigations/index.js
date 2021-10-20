import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import   {GlobalContext}  from '../context/Provider';
const AppNavContainer = ()=>{

  const {authState:{isLoggedIn},} = useContext(GlobalContext) 

  console.log('state >>', isLoggedIn,'hehe')

    return(
      <NavigationContainer>

        {isLoggedIn? <DrawNavigator/> : <AuthNavigator/>}
        
        
        </NavigationContainer>

    )
}

export default AppNavContainer