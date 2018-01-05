import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import RoundedButton from '../Components/RoundedButton.js'

import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class NotificationsScreen extends Component {
  render () {
    return (
      <View style={styles.feedContainer}>
        <View style={{
          backgroundColor: '#f5f5f5',
          borderColor: 'black',
          paddingBottom: 5,
          borderBottomWidth: 0.5,
        }}>
          <Text style={styles.feedTitleText}>
            NOTIFICATIONS
          </Text>
        </View>
        <ScrollView style={styles.container}>
          <View style={{
            backgroundColor: 'white',
            height: 200,
            borderColor: 'black',
            paddingBottom: 5,
            borderWidth: 0.5,
          }} />
          <View style={{
            backgroundColor: 'white',
            height: 200,
            borderColor: 'black',
            paddingBottom: 5,
            borderWidth: 0.5,
          }}/>
          <View style={{
            backgroundColor: 'white',
            height: 200,
            borderColor: 'black',
            paddingBottom: 5,
            borderWidth: 0.5,
          }} />
          <View style={{
            backgroundColor: 'white',
            height: 200,
            borderColor: 'black',
            paddingBottom: 5,
            borderWidth: 0.5,
          }} />
        </ScrollView>
        <View style={{
          height: 50,
          alignItems: 'center',
          backgroundColor: '#4d4d4d',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Icon name="home" size={35} color='white' onPress={() => this.props.navigation.navigate('FeedScreen')}/>
        <Icon name="search" size={35} color='white' onPress={() => this.props.navigation.navigate('ExploreScreen')}/>
        <Icon name="plus" size={35} color='white' onPress={() => this.props.navigation.navigate('AddScreen')}/>
        <Icon name="comment" size={35} color='white' onPress={() => this.props.navigation.navigate('NotificationsScreen')}/>
        <Icon name="user" size={35} color='white' onPress={() => this.props.navigation.navigate('ProfileScreen')}/>
        </View>
      </View>
    )
  }
}
