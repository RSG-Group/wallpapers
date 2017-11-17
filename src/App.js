// @flow
// Get our HomeScreen, SettingsScreen and WallpaperScreen.
import HomeScreen from './imports/HomeScreen'
import SettingsScreen from './imports/SettingsScreen'
import WallpaperScreen from './imports/WallpaperScreen'
// Get react-navigation and React.
// flow-disable-next-line
import { TabNavigator, StackNavigator } from 'react-navigation'
import React, { Component } from 'react'

const App = TabNavigator({
  Home: { screen: HomeScreen },
  Wallpapers: { screen: WallpaperScreen },
  Settings: { screen: SettingsScreen }
}, {
  tabBarPosition: 'top',
  tabBarOptions: {
    style: {
      backgroundColor: '#1de9b6'
    },
    labelStyle: {
      color: '#424242'
    }
  }
})

class AppWrapper extends Component<void> {
  static navigationOptions = {
    title: 'Not Bad Wallpapers',
    headerStyle: {
      backgroundColor: '#004d40'
    },
    headerTitleStyle: {
      paddingTop: 10,
      color: '#e0e0e0'
    }
  }

  render () {
    return <App />
  }
}

export default StackNavigator({
  Home: {
    screen: AppWrapper
  }
})
