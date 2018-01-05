import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import RoundedButton from '../Components/RoundedButton.js'
import { TextInput } from 'react-native';
import * as authActions from '../Redux/auth/authActions.js'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

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

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
    }
  }

  onUsernameChange (text) {
    this.props.actions.onUsernameChange(text);
    this.setState({
      username: text,
    })
  }

  onPasswordChange (text) {
    this.props.actions.onPasswordChange(text);
    this.setState({
      password: text,
    })
  }

  onConfirmPasswordChange (text) {
    this.props.actions.onConfirmPasswordChange(text);
    this.setState({
      confirmPassword: text,
    })
  }

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
            <TextInput
              autoCapitalize="none"
              placeholder="Username or E-mail"
              keyboardType="email-address"
              onChangeText= {this.onUsernameChange.bind(this)}
              value={this.state.username}
              style={styles.input}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Password"
              onChangeText= {this.onPasswordChange.bind(this)}
              secureTextEntry={true}
              value={this.state.password}
              style={styles.input}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="Confirm Password"
              onChangeText= {this.onConfirmPasswordChange.bind(this)}
              secureTextEntry={true}
              value={this.state.confirmPassword}
              style={styles.input}
            />
          </View>

          <RoundedButton text="Register"/>
        </ScrollView>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (RegisterScreen)
