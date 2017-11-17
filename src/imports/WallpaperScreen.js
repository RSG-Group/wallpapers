// @flow
// Get React and React Native.
import React from 'react'
// flow-disable-next-line
import { Text, View, Button } from 'react-native'

// Flow our props.
type Props = {
  navigation: {
    navigate: Function
  }
}

// Create our HomeScreen.
export default class WallpaperScreen extends React.Component<Props, void> {
  static navigationOptions = {
    drawerLabel: 'Wallpapers'
  }
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 18 }}>
          Not Bad Wallpapers is a project by RSG-Group, a GitHub team working on multiple projects. It brings together many wallpapers submitted by the community and downloads them to your phone. It{`'`}s awesome, really.
        </Text>
        <View style={{ height: 25 }} />
        <Button color='#39796b' onPress={() => navigate('Home')} title='Home' />
      </View>
    )
  }
}
