import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    height: 45,
    width: 0.6 * Metrics.screenWidth,
    borderRadius: 10,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.fire,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})
