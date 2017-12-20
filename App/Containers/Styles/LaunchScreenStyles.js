import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

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
  },
})
