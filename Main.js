import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/Welcomescreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';


const MainNavigator = createBottomTabNavigator({
    welcome : WelcomeScreen,
    auth : AuthScreen,
    main: {
      screen : createBottomTabNavigator({
        map : MapScreen,
        deck: DeckScreen,
        review: {
          screen : createStackNavigator({
            review : ReviewScreen,
            settings: SettingsScreen

          })
        }

      })
    }
  });


 
  const Main = createAppContainer(MainNavigator);

  export default Main;