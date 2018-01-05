import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  centered: {
    alignItems: 'center'
  },
  buttons: {
    flexDirection: 'row',
    paddingBottom: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: Fonts.type.base,
  },
  input: {
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 25,
    opacity: 0.6,
    paddingLeft: 25,
    borderWidth: 1,
    height: 50,
    marginTop: 15,
    fontSize: 18,
    fontFamily: Fonts.type.base,
  }
})
