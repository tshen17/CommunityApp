'use strict'

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

export function getEventsRequest() {
  return {
    type: GET_EVENTS_REQUEST,
  }
}

export function getEventsSuccess(json) {
  return {
    type: GET_EVENTS_SUCCESS,
    payload: json,
  }
}

export function getEventsFailure(error) {
  return {
    type: GET_EVENTS_SUCCESS,
    payload: error,
  }
}

export function addEventRequest() {
  return {
    type: ADD_EVENT_REQUEST,
  }
}

export function addEventSuccess(json) {
  return {
    type: ADD_EVENT_SUCCESS,
    payload: json,
  }
}

export function addEventFailure(error) {
  return {
    type: ADD_EVENT_FAILURE,
    payload: error,
  }
}

export function addLikeRequest() {
  return {
    type: ADD_LIKE_REQUEST,
  }
}

export function addLikeSuccess(json) {
  return {
    type: ADD_LIKE_SUCCESS,
    payload: json,
  }
}

export function addLikeFailure(error) {
  return {
    type: ADD_LIKE_FAILURE,
    payload: error,
  }
}

export function addCommentRequest() {
  return {
    type: ADD_COMMENT_REQUEST,
  }
}

export function addCommentSuccess(json) {
  return {
    type: ADD_COMMENT_SUCCESS,
    payload: json,
  }
}

export function addCommentFailure(error) {
  return {
    type: ADD_COMMENT_FAILURE,
    payload: error,
  }
}

export function getLikesRequest() {
  return {
    type: GET_LIKES_REQUEST,
  }
}

export function getLikesSuccess(json) {
  return {
    type: GET_LIKES_SUCCESS,
    payload: json,
  }
}

export function getLikesFailure(error) {
  return {
    type: GET_LIKES_FAILURE,
    payload: error,
  }
}

export function getCommentsRequest() {
  return {
    type: GET_COMMENTS_REQUEST,
  }
}

export function getCommentsSuccess(json) {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload: json,
  }
}

export function getCommentsFailure(error) {
  return {
    type: GET_COMMENTS_FAILURE,
    payload: error,
  }
}
