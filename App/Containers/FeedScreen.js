import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import RoundedButton from '../Components/RoundedButton.js'

import InputField from '../Components/InputField.js'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.feedBackground} style={styles.backgroundImage} resizeMode='stretch'/>
        <TouchableOpacity onPress= {()=>this.props.navigation.goBack()} style={styles.backButton}>
          <Image source={Images.closeButton} />
        </TouchableOpacity>
        <ScrollView style={styles.container}>
          <View>
            <Text style={styles.feedTitleText}>
              FEED
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
