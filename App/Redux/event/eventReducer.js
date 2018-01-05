import Immutable from 'immutable'

const {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAILURE,

  ADD_EVENT_REQUEST,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAILURE,

  ADD_LIKE_REQUEST,
  ADD_LIKE_SUCCESS,
  ADD_LIKE_FAILURE,

  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,

  GET_LIKES_REQUEST,
  GET_LIKES_SUCCESS,
  GET_LIKES_FAILURE,

  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
} = require('../../Lib/constants').default;

import InitialState from './eventInitialState.js'

const initialState = new InitialState();

export default function eventReducer (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENTS_REQUEST:
    case ADD_EVENT_REQUEST:
    case ADD_LIKE_REQUEST:
    case ADD_COMMENT_REQUEST:
    case GET_LIKES_REQUEST:
    case GET_COMMENTS_REQUEST: {
      let nextState = state
        .setIn(['isFetching'], true)
        .setIn(['error'], null);
      return nextState;
    }

    // payload is a list of events in JSON
    case GET_EVENTS_SUCCESS: {
      let eventsMap = {};
      payload.forEach(function (ev) {
        eventsMap[ev.info.id] = Immutable.Map(ev);
      })
      let nextState = state
        .setIn(['eventsMap'], eventsMap);
      return nextState;
    }

    // payload is an event in JSON.
    // TODO: Find a way to insert id as a key before every event so that the state is properly updated
    case ADD_EVENT_SUCCESS: {
      let nextEvent = Immutable.fromJS(payload);
      console.log('nextEvent: ', nextEvent.toJS());
      let nextState = state
        .setIn(['eventsMap', payload.info.id], nextEvent);
      return nextState;
    }

    // TODO: Rewrite below using mergeDeep
    // payload is a JSON with a user object and event object.
    case ADD_LIKE_SUCCESS: {
      let {username, event} = payload;
      let id = event.info.id;
      let prevLikesCount = event.info.likesCount;

      // the 0 should be the userid in the future
      let nextState = state
        .setIn(['eventsMap', id, 'info', 'likesList', 0], username)
        .setIn(['eventsMap', id, 'info', 'liked'], true)
        .setIn(['eventsMap', id, 'info', 'likesCount'], prevLikesCount + 1);
      return nextState;
    }

    case ADD_COMMENT_SUCCESS: {
      let {comment, event} = payload;
      let id = event.info.id;
      let comments = event.comments;
      comments.push(comment);
      console.log("comments: ", comments);
      let nextState = state
        .setIn(['eventsMap', id, 'comments'], Immutable.fromJS(comments));
      console.log('next state: ', nextState.toJS());
      return nextState;
    }
  }
  return state;
}
