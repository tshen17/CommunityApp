import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import styles from './Styles/EventStyles.js'
//import { Container, Header, Left, Body, Right, Button, Title } from 'native-base'

export default class HeaderBar extends Component {
  render() {
    let defaultLeftButton = (
    <Icon name= 'chevron-left' size= {20} onPress= {() => this.props.navigation.goBack(null)} />);

    let title = <Text style={styles.feedTitleText}> {this.props.title} </Text>;

    let defaultRightButton = null;

    return (
      <View style={{
        backgroundColor: '#f9f9f9',
        borderColor: 'black',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: 'black',
      }}>
        <View style= {{
          zIndex: 2,
          position: 'absolute',
          top: 25,
          left: 15,
        }}>
          { this.props.leftButton === 'back' ? defaultLeftButton : null}
        </View>
        {title}
        {defaultRightButton}
      </View>
    )
  }
}
