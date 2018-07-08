// @flow
// Get React and React Native.
import React from 'react'
// flow-disable-next-line
import { Image, View, Button, TouchableHighlight, Modal, Dimensions } from 'react-native'
// Get icon from Expo.
import { Ionicons } from '@expo/vector-icons'

// Types.
type Props = { imageURL: string, onClick: Function }
type State = { modelOpen: boolean, height: number }

export default class WallpaperDisplay extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { modelOpen: false, height: 0 }
    Image.getSize(this.props.imageURL, (width: number, height: number) => {
      this.setState({ height: height * (Dimensions.get('window').width / width) })
    })
  }

  render () {
    return (
      <View>
        <Modal
          presentationStyle='fullScreen' visible={this.state.modelOpen}
          onRequestClose={() => this.setState({ modelOpen: !this.state.modelOpen })}
          animationType='slide' transparent={false}
        >
          <View style={{ backgroundColor: 'black', height: '100%' }}>
            <TouchableHighlight onPress={() => this.setState({ modelOpen: false })}>
              <Ionicons name='md-close' size={32} color='white' style={{ margin: 20 }} />
            </TouchableHighlight>
            <View style={{ height: 200 }} />
            <Image source={{ uri: this.props.imageURL }} style={{ width: '100%', height: this.state.height }} />
          </View>
        </Modal>
        <View style={{ width: 160 }}>
          <TouchableHighlight onPress={() => this.setState({ modelOpen: !this.state.modelOpen })}>
            <Image source={{ uri: this.props.imageURL }} style={{ height: 200, width: 160 }} />
          </TouchableHighlight>
          <View style={{ height: 5 }} />
          <Button
            onPress={this.props.onClick}
            title='Download'
            accessibilityLabel='Download the above wallpaper'
            color='black'
          />
        </View>
      </View>
    )
  }
}
