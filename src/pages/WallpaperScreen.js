// @flow
// Get React and React Native.
import React from 'react'
// flow-disable-next-line
import { ScrollView } from 'react-native'
// Get icon from Expo.
import { Ionicons } from '@expo/vector-icons'
// Get WallpaperDisplay.
import WallpaperDisplay from '../components/WallpaperDisplay'

// Flow our props.
type Props = {
  navigation: {
    navigate: Function
  }
}
type iconFunc = {
  tintColor: string // eslint-disable-line
}

// Create our HomeScreen.
export default class WallpaperScreen extends React.Component<Props, void> {
  static navigationOptions = {
    drawerLabel: 'Wallpapers',
    tabBarIcon: ({ tintColor }: iconFunc) => (
      <Ionicons name='md-image' color={tintColor} size={24} />
    )
  }
  render () {
    return (
      <ScrollView contentContainerStyle={{
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <WallpaperDisplay imageURL='https://cdn.discordapp.com/attachments/415150079050252308/464802356446625812/unknown.png' onClick={() => {}} />
        <WallpaperDisplay imageURL='https://cdn.discordapp.com/attachments/415150079050252308/464802356446625812/unknown.png' onClick={() => {}} />
      </ScrollView>
    )
  }
}
