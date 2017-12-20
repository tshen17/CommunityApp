import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import RoundedButton from '../Components/RoundedButton.js'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import InputField from '../Components/InputField.js'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.loginBackground} style={styles.backgroundImage} resizeMode='stretch'/>
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.loginTitleText}>
              FEED
            </Text>
            <InputField placeholder="E-mail or Username" />
            <InputField placeholder="Password" />
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('RegisterScreen')}>
              <Text style={styles.buttonText}> Sign Up </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ForgotPwdScreen')}>
              <Text style={styles.buttonText}> Forgot Password? </Text>
            </TouchableOpacity>
          </View>


          <RoundedButton onPress={() => this.props.navigation.navigate('FeedScreen')}
                         text="Login"/>
        </ScrollView>
      </View>
    )
  }
}
