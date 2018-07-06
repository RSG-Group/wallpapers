// @flow
// Get React and React Native.
import React from 'react'
// flow-disable-next-line
import { Switch, View, AsyncStorage, Text } from 'react-native'
// Get icon from Expo.
import { Ionicons } from '@expo/vector-icons'

// Flow state.
type State = {
  darkTheme: boolean
}
type iconFunc = {
  tintColor: string // eslint-disable-line
}

// Create our SettingsScreen.
export default class SettingsScreen extends React.Component<void, State> {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }: iconFunc) => (
      <Ionicons name='md-settings' color={tintColor} size={24} />
    )
  }
  constructor () {
    super()

    this.state = {
      darkTheme: true
    }
  }

  onValueChange () {
    this.setState({ darkTheme: !this.state.darkTheme })
    AsyncStorage.setItem('@Settings:darkTheme', this.state.darkTheme.toString())
  }

  render () {
    return (
      <View style={{ margin: 10, display: 'flex', flexDirection: 'row' }}>
        <Text style={{
          fontSize: 16
        }}>Enable Dark Theme</Text>
        <Switch onValueChange={this.onValueChange} value={this.state.darkTheme} style={{
          flex: 1
        }} />
      </View>
    )
  }
}
