import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import RoundedButton from '../Components/RoundedButton.js'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import * as authActions from '../Redux/auth/authActions.js'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { TextInput } from 'react-native';
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...authActions}, dispatch),
  }
}

// TODO: Instead of using navigate to switch between login, register, and password, use states and
// redux to switch between the screens. Replace this with some universal login page.

class LaunchScreen extends Component {
  constructor(props) {
    super(props);
  }

  onUsernameChange (text) {
    this.props.actions.onUsernameChange(text);
  }

  onPasswordChange (text) {
    this.props.actions.onPasswordChange(text);
  }

  buttonPressHandler(login, username, password) {
    login(username, password);
  }

  render () {
    console.log('props: ', this.props)
    const onPress = this.buttonPressHandler.bind(
      null,
      this.props.actions.login,
      this.props.auth.form.fields.username,
      this.props.auth.form.fields.password
    );

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.loginBackground} style={styles.backgroundImage} resizeMode='stretch'/>
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.loginTitleText}>
              FEED
            </Text>
            <TextInput
              autoCapitalize="none"
              placeholder="Username or E-mail"
              keyboardType="email-address"
              onChangeText= {this.onUsernameChange.bind(this)}
              value={this.props.auth.form.fields.username}
              style={styles.input}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Password"
              onChangeText= {this.onPasswordChange.bind(this)}
              secureTextEntry={true}
              value={this.props.auth.form.fields.password}
              style={styles.input}
            />
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
          <RoundedButton onPress={onPress}
                         text="Login"/>
        </ScrollView>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
