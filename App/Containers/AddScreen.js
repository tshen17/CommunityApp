import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native'
import RoundedButton from '../Components/RoundedButton.js'
import HeaderBar from '../Components/HeaderBar'
import * as eventActions from '../Redux/event/eventActions.js'

import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Styles
import styles from './Styles/LaunchScreenStyles'

function mapStateToProps(state) {
  return {
    username: state.auth.form.fields.username,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...eventActions}, dispatch),
  }
}

class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      location: '',
      caption: '',
    }
  }

  onAddEvent() {
    const comments = this.state.caption === '' ? [] :
    [{
      author: this.props.username,
      text: this.state.caption
    }];

    const event = {
      info: {
        id: this.state.id,
        author: this.props.username,
        location: this.state.location,

        // defaults
        likesCount: 0,
        liked: false,
        likesList: [],
      },
      comments,
    };

    this.props.actions.addEventSuccess(event);
    this.props.navigation.navigate('FeedScreen');
  }

  render () {
    const disabled = this.state.id === '';

    return (
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <HeaderBar title='Add an Event!' navigation={this.props.navigation} />
        <ScrollView style={styles.container}>
          <TextInput
            autoCapitalize="none"
            placeholder="Id"
            onChangeText= {(text) => this.setState({id: text})}
            value={this.state.id}
            style={styles.input}
            multiline={true}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Location"
            onChangeText= {(text) => this.setState({location: text})}
            value={this.state.location}
            style={styles.input}
            multiline={true}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="Caption"
            onChangeText= {(text) => this.setState({caption: text})}
            value={this.state.caption}
            style={styles.input}
          />
          <RoundedButton text= 'POST' onPress={this.onAddEvent.bind(this)} disabled={disabled}/>
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

export default connect(mapStateToProps, mapDispatchToProps) (AddScreen)
