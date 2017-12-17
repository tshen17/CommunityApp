import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
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
