import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './Login';
import Home from './Home';
import Sobre from './Sobre';

const MainNav = createStackNavigator({
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
});

export default createAppContainer(MainNav);
