import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import RoundedButton from '../Components/RoundedButton.js'

import InputField from '../Components/InputField.js'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class RegisterScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.loginBackground} style={styles.backgroundImage} resizeMode='stretch'/>
        <TouchableOpacity onPress= {()=>this.props.navigation.goBack()} style={styles.backButton}>
          <Image source={Images.closeButton} />
        </TouchableOpacity>
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.loginTitleText}>
              Register
            </Text>
            <InputField keyboardType="email-address" placeholder="E-mail or Username" />
            <InputField secureTextEntry= {true} placeholder="Password" />
            <InputField secureTextEntry= {true} placeholder="Confirm Password" />
          </View>

          <RoundedButton text="Register"/>
        </ScrollView>
      </View>
    )
  }
}
