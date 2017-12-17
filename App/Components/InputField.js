import React, { Component } from 'react';
import { TextInput } from 'react-native';

import styles from './Styles/InputFieldStyles.js';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  onChangeText = (text) => this.setState({text})



  render() {
    return (
      <TextInput
        //autocapitalize="none"
        placeholder={this.props.placeholder}
        onChangeText={this.onChangeText}
        value={this.state.text}
        style={styles.input}
      />
    )
  }
}
