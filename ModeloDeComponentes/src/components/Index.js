import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Login from './Login';
import Home from './Home';
import Sobre from './Sobre';
import Profile from './Profile';

const MainNav = createBottomTabNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Sobre: {
    screen: Sobre,
    navigationOptions: {
      headerTitle: 'Sobre',
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Profile',
    },
  },
  // contentOptions: {
  //   activeTintColor: '#8e44ad',
  //   labelStyle: {
  //     fontSize: 16,
  //   },
  // },
});

export default createAppContainer(MainNav);
