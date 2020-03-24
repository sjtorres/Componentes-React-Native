import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Home from './HomeDrawer';
import Profile from './Profile';
import Settings from './Settings';

const myDrawer = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Profile: {
      screen: Profile,
    },
    Settings: {
      screen: Settings,
    },
  },
  {
    contentOptions: {
      activeTintColor: '#8e44ad',
      labelStyle: {
        fontSize: 16,
      },
    },
  },
);

export default createAppContainer(myDrawer);
