import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, FlatList } from 'react-native'
import RoundedButton from '../Components/RoundedButton.js'
import HeaderBar from '../Components/HeaderBar'

import * as eventActions from '../Redux/event/eventActions.js'

import Immutable from 'immutable'

import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Event from '../Components/Event.js'

// Styles
import styles from './Styles/LaunchScreenStyles'

function mapStateToProps(state) {
  const eventsObj = state.event.eventsMap.toJS();
  const events = Object.keys(eventsObj).map(function (key) {
    return eventsObj[key];
  });

  return {
    // TODO: instead of username, provide a currentUser object instead
    username: state.auth.form.fields.username,
    events,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...eventActions}, dispatch),
  }
}

class FeedScreen extends Component {
  constructor(props) {
    console.log("props: ", props);
    super(props)
  }

  addEvent(ev) {
    this.props.actions.addEventSuccess(ev);
  }

  componentWillMount() {
    if (Object.keys(this.props.events).length === 0) {
      this.addEvent({
        info: {
          id: '1',
          author: 'Tyler',
          location: 'Yale',

          // defaults
          likesCount: 0,
          liked: false,
          likesList: [],
        },
        comments: [{
          author: 'Tyler',
          text: 'Wow!',
        }],
      });
    }
  }

  renderEvent({item}) {
    //console.log('info', item.info);
    const event = {
      info: item.info,
      comments: item.comments,
    }

    const onLikePress = (event) => {
      this.props.actions.addLikeSuccess({username: this.props.username, event});
    }

    const onAddComment = (comment, event) => {
      this.props.actions.addCommentSuccess({comment, event});
    }

    return (
      <Event  username= {this.props.username} event={event} onLikePress= {onLikePress}
              onCommentPress= {() => this.props.navigation.navigate('Comments', { username: this.props.username,
                                                                                  event: event,
                                                                                  navigation: this.props.navigation,
                                                                                  onAddComment})} />);
  }

  // TODO: define comment and like functions to pass down to Events



  render () {
    return (
      <View style={styles.feedContainer}>
        <HeaderBar title='FEED' navigation={this.props.navigation}/>
        <FlatList
          data={this.props.events}
          renderItem={this.renderEvent.bind(this)}
          keyExtractor={(item, index) => index} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen)
