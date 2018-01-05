import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, FlatList } from 'react-native'
import RoundedButton from '../Components/RoundedButton'

import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationActions } from 'react-navigation'

import PropTypes from 'prop-types';
import styles from './Styles/EventStyles.js'

export default class Event extends React.Component {
  static propTypes = {
    username: PropTypes.string,
    event: PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  // TODO: implement Redux for events

  comment() {
    this.setState({
      comments: [...this.state.comments, {
        author: this.props.auth.form.fields.username,
        text: 'HI'}],
    });
    console.log("comments: ", this.state.comments);
  }

  renderComment({item}) {
    console.log("comment: ", item);
    return (
      <View style={styles.commentContainer}>
        <Text style={styles.authorText}> {item.author} </Text>
        <Text style={styles.commentText}> {item.text} </Text>
      </View>);
  }

  // <List>
  //   <FlatList
  //     data={this.state.comments}
  //     renderItem={this.renderComment.bind(this)} />
  // </List>

  like() {
    const tempLikes = this.state.likes;
    const tempLikesList = this.state.likesList;
    if (!this.state.liked) {
      this.setState({
        liked: true,
        likes: tempLikes + 1,
        likesList: tempLikesList.push(this.props.auth.form.fields.username),
      });
    }
    console.log("likesList: ", this.state.likesList);
  }

  render() {
    const author = <Text style={styles.authorText}> {this.props.event.info.author} </Text>
    const likeButton = this.props.event.info.liked ?
    (<Icon style={{padding: 10}} name='heart' size={30} color='red' />) :
    (<Icon style={{padding: 10}} name='heart-o' size={30} onPress={this.props.onLikePress.bind(this, this.props.event)}/>)

    const tempComments = this.props.event.comments.slice(0, 3)
    const comments = (this.props.event.comments.length <= 3) ?
    ( <FlatList
        data={this.props.event.comments}
        renderItem={this.renderComment.bind(this)}
        keyExtractor={(item, index) => index} />) :
    ( <View>
        <FlatList
          data={tempComments}
          renderItem={this.renderComment.bind(this)}
          keyExtractor={(item, index) => index} />
        <TouchableOpacity onPress={this.props.onCommentPress} >
          <Text style={{ color: 'gray', fontSize: 20}}> View all {this.props.event.comments.length} comments </Text>
        </TouchableOpacity>
      </View> )

    return (
      <View style={styles.container}>
        {author}
        <Text style={styles.locationText}> {this.props.event.info.location} </Text>
        <View style={{
          backgroundColor: 'black',
          height: 500,
        }} />
        <View style={{flexDirection: 'row'}}>
          {likeButton}
          <Icon style={{padding: 10}} name='comment-o' size={30} onPress={this.props.onCommentPress.bind(this)}/>
        </View>
        <Text style={styles.commentText}> Likes: {this.props.event.info.likesCount} </Text>
        {comments}
      </View>

    )
  }
}
