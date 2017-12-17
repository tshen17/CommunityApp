import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import ForgotPwdScreen from '../Containers/ForgotPwdScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  RegisterScreen: {screen: RegisterScreen },
  ForgotPwdScreen: {screen: ForgotPwdScreen },
  }, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  })

export default PrimaryNav
