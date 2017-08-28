// @flow
// Get our HomeScreen.
import HomeScreen from './imports/HomeScreen'

// Get our WallpaperScreen.
import WallpaperScreen from './imports/WallpaperScreen'

// Get react-navigation.
// flow-disable-next-line
import { DrawerNavigator } from 'react-navigation'

export default DrawerNavigator({
  Home: { screen: HomeScreen },
  Wallpapers: { screen: WallpaperScreen }
}, {
  drawerWidth: 250,
  drawerPosition: 'left'
})
