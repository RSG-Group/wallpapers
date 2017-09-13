// @flow
// Get our HomeScreen.
import HomeScreen from './imports/HomeScreen'

// Get our WallpaperScreen.
import WallpaperScreen from './imports/WallpaperScreen'

// Get react-navigation.
// flow-disable-next-line
import { TabNavigator, StackNavigator } from 'react-navigation'

// Get React.
import React, { Component } from 'react'

const App = TabNavigator({
  Home: { screen: HomeScreen },
  Wallpapers: { screen: WallpaperScreen }
}, {
  drawerWidth: 250,
  drawerPosition: 'left'
})

class AppWrapper extends Component {
  static navigationOptions = {
    title: 'Not Bad Wallpapers',
    headerStyle: {
      backgroundColor: 'teal'
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
