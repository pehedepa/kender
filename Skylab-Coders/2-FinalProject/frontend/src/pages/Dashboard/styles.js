import { StyleSheet } from 'react-native'
import { ThemeVars } from '../../styles/theme.styles'

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  title: {
    color: ThemeVars.DARK_COLOR,
    fontFamily: ThemeVars.FONT_FAMILY_MEDIUM,
    fontSize: 14,
    marginVertical: 10,
    paddingLeft: 14
  }
})

export default styles
