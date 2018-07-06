// @flow
// Get our HomeScreen, SettingsScreen and WallpaperScreen.
import HomeScreen from './pages/HomeScreen'
import SettingsScreen from './pages/SettingsScreen'
import WallpaperScreen from './pages/WallpaperScreen'
// Get react-navigation and React.
// flow-disable-next-line
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import React, { Component } from 'react'

const App = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Wallpapers: { screen: WallpaperScreen },
  Settings: { screen: SettingsScreen }
})

class AppWrapper extends Component<void> {
  static navigationOptions = {
    title: 'Not Bad Wallpapers',
    headerStyle: { backgroundColor: '#004d40' },
    headerTitleStyle: { paddingTop: 10, color: '#e0e0e0' }
  }

  render () { return <App /> }
}

export default createStackNavigator({ Home: { screen: AppWrapper } })
