import React from 'react';
import {Platform} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../components/userManagement/view/Login';
import {createBrowserApp} from '@react-navigation/web';

const isWeb = Platform.OS === 'web';

export default function Router(){
    return (
      <AppContainer />
    );
}

const AppNavigator = createStackNavigator({
    Login: {
      screen: Login
    }
  });

  const AppContainer = isWeb ? createBrowserApp(AppNavigator) : createAppContainer(AppNavigator);
