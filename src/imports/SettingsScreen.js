// @flow
// Get React and React Native.
import React from 'react'
// flow-disable-next-line
import { Switch, View, AsyncStorage, Text } from 'react-native'
// Get icon from Expo.
import { Ionicons } from '@expo/vector-icons'

// Flow state.
type State = {
  value: boolean
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
      value: true
    }
    // flow-disable-next-line
    this.onValueChange = this.onValueChange.bind(this)
  }

  onValueChange () {
    this.setState({ value: !this.state.value })
    AsyncStorage.setItem('@Settings:value', this.state.value)
  }

  render () {
    return (
      <View style={{ margin: 10 }}>
        <Switch onValueChange={this.onValueChange} value={this.state.value} />
        <Text>{this.state.value}</Text>
      </View>
    )
  }
}
