import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, FlatList, TextInput } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderBar from '../Components/HeaderBar'

import PropTypes from 'prop-types';
import styles from './Styles/EventStyles.js'

export default class Comments extends Component {
  static propTypes = {
    username: PropTypes.string,
  }

  constructor(props) {
    super(props);

    // TODO: make current comment value a part of redux state so you can eliminate local state
    this.state = {
      comments: this.props.event.comments,
      commentText: '',
    }
  }

  renderComment({item}) {
    return (
      <View style={styles.commentContainer}>
        <Text style={styles.authorText}> {item.author} </Text>
        <Text style={styles.commentText}> {item.text} </Text>
      </View>);
  }

  onAddComment() {
    const comment = {
      author: this.props.username,
      text: this.state.commentText,
    };
    this.setState({
      commentText: '',
      comments: [...this.state.comments, comment],
    });
    this.props.onAddComment(comment, this.props.event);
  }

  render() {
    let nextComment = {
      author: this.props.username,
      text: this.state.commentText,
    };

    let postButton = this.state.commentText === '' ?
    (<TouchableOpacity onPress={this.onAddComment.bind(this)}
                      disabled={true}
                      styleDisabled={{opacity: 0.5}}>
      <Text style={styles.postButton}> POST </Text>
    </TouchableOpacity>) :
    (<TouchableOpacity onPress={this.onAddComment.bind(this)}
                      disabled={false}
                      styleDisabled={{opacity: 1}}>
      <Text style={styles.postButton}> POST </Text>
    </TouchableOpacity>);

    return (
      <View style={styles.feedContainer}>
        <HeaderBar title='Comments' leftButton='back' navigation={this.props.navigation} />
        <FlatList
          data={this.state.comments}
          renderItem={this.renderComment.bind(this)}
          keyExtractor={(item, index) => index} />
        <View style={{borderTopWidth: 0.5, flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            autoCapitalize="none"
            placeholder="Add a comment..."
            onChangeText= {(text) => this.setState({commentText: text})}
            value={this.state.commentText}
            style={styles.commentInput}
            multiline={true}
          />
          {postButton}
        </View>
      </View>
    )
  }
}
