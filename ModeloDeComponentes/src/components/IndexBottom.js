import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation-tabs';

import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

const myTabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Profile: Profile,
    Settings: Settings,
  },
  {
    tabBarOptions: {
      activeTintColor: '#34495e',
      inactiveTintColor: '#bdc3c7',
      style: {
        backgroundColor: '#ecf0f1',
      },
      showLabel: true,
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = FontAwesome5;
        let iconName;

        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Profile') {
          iconName = 'user-alt';
        } else if (routeName === 'Settings') {
          iconName = 'cog';
        }

        return <IconComponent name={iconName} size={24} color={tintColor} />;
      },
    }),
  },
);

export default createAppContainer(myTabNavigator);
