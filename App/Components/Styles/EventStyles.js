import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    width: Metrics.width,
    backgroundColor: '#f9f9f9',
    borderColor: 'black',
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    flexDirection: 'column',
  },
  authorText: {
    fontSize: 22,
    fontFamily: Fonts.type.bold,
  },
  locationText: {
    fontSize: 22,
    fontFamily: Fonts.type.base,
  },
  commentContainer: {
    paddingTop: 5,
    flexDirection: 'row',
    width: Metrics.width,
  },
  commentText: {
    fontSize: 22,
    fontFamily: Fonts.type.base,
    flex: 1,
  },
  commentInput: {
    width: 300,
    paddingLeft: 20,
    paddingVertical: 10,
    fontSize: 22,
    fontFamily: Fonts.type.base,
  },
  postButton: {
    color: '#55acee',
    fontSize: 22,
    fontFamily: Fonts.type.bold,
  }
})
